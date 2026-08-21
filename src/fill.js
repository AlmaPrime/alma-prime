import * as THREE from "three";
import earcut from "earcut";


// ============================================================
// НАСТРОЙКИ ЗАЛИВКИ
// ============================================================

const FILL_OPACITY = 0.25;

// Радиус заливки.
// Планета примерно 1.002.
// Контур находится немного выше поверхности.

const FILL_RADIUS = 1.013;

// Количество сферических подразделений.
// 1 = крупные треугольники
// 2 = 4 треугольника
// 3 = 16
// 4 = 64
//
// Начинаем с 3.

const SUBDIVISIONS = 3;


// ============================================================
// ЦВЕТА ФРАКЦИЙ
// ============================================================

export const FACTION_COLORS = {

    // Империум — без заливки

    Imperium: null,

    // Хаос — красный

    Chaos: 0xff0000,

    // Тираниды — фиолетовый

    Tyranids: 0x9b30ff,

    // Мародеры — голубой

    Marauders: 0x29b6f6

};


// ============================================================
// СОЗДАНИЕ ЗАЛИВКИ СУБСЕКТОРА
// ============================================================

export function createFill(
    center,
    vertices,
    edgeRegistry,
    owner
) {

    // ========================================================
    // IMPERIUM
    // ========================================================

    if (owner === "Imperium") {

        return null;

    }


    // ========================================================
    // ОПРЕДЕЛЯЕМ ЦВЕТ
    // ========================================================

    const color =
        FACTION_COLORS[owner];


    if (color === undefined) {

        console.warn(
            `Неизвестная фракция: ${owner}`
        );

        return null;

    }


    // ========================================================
    // СОБИРАЕМ ГРАНИЦУ ИЗ EDGE REGISTRY
    // ========================================================

    const boundaryPoints = [];


    for (
        let i = 0;
        i < vertices.length;
        i++
    ) {

        const start =
            vertices[i];


        const end =
            vertices[
                (i + 1) % vertices.length
            ];


        const edgePoints =
            edgeRegistry.getEdge(
                start,
                end
            );


        // Последнюю точку не добавляем,
        // потому что она является началом следующего ребра.

        for (
            let j = 0;
            j < edgePoints.length - 1;
            j++
        ) {

            boundaryPoints.push(
                edgePoints[j].clone()
            );

        }

    }


    // ========================================================
    // ПРОВЕРКА
    // ========================================================

    if (boundaryPoints.length < 3) {

        console.warn(
            `Недостаточно точек для заливки: ${owner}`
        );

        return null;

    }


    // ========================================================
    // ЦЕНТР СУБСЕКТОРА
    // ========================================================

    const normal =
        center.clone()
            .normalize();


    const centerPoint =
        normal.clone()
            .multiplyScalar(
                FILL_RADIUS
            );


    // ========================================================
    // СОЗДАЁМ ЛОКАЛЬНУЮ КАСАТЕЛЬНУЮ ПЛОСКОСТЬ
    // ========================================================

    let reference =
        new THREE.Vector3(
            0,
            1,
            0
        );


    // Если нормаль почти совпала с Y,
    // используем X как вспомогательную ось.

    if (
        Math.abs(
            normal.dot(reference)
        ) > 0.9
    ) {

        reference =
            new THREE.Vector3(
                1,
                0,
                0
            );

    }


    // Ось X касательной плоскости

    const axisX =
        new THREE.Vector3()
            .crossVectors(
                reference,
                normal
            )
            .normalize();


    // Ось Y касательной плоскости

    const axisY =
        new THREE.Vector3()
            .crossVectors(
                normal,
                axisX
            )
            .normalize();


    // ========================================================
    // ПРОЕКЦИЯ ГРАНИЦЫ В 2D
    // ========================================================

    const vertices2D = [];


    for (
        const point of boundaryPoints
    ) {

        const relative =
            point.clone()
                .sub(centerPoint);


        const x =
            relative.dot(
                axisX
            );


        const y =
            relative.dot(
                axisY
            );


        vertices2D.push(
            x,
            y
        );

    }


    // ========================================================
    // EAR CUT
    // ========================================================
    //
    // Earcut получает весь полигон целиком
    // и разбивает его на корректные треугольники.
    //
    // ========================================================

    const indices =
        earcut(
            vertices2D
        );


    if (
        !indices ||
        indices.length < 3
    ) {

        console.warn(
            `Earcut не смог создать заливку для ${owner}`
        );

        return null;

    }


    // ========================================================
    // СОЗДАЁМ ГЕОМЕТРИЮ
    // ========================================================

    const positions = [];


    // ========================================================
    // ОБРАБАТЫВАЕМ КАЖДЫЙ ТРЕУГОЛЬНИК EAR CUT
    // ========================================================

    for (
        let i = 0;
        i < indices.length;
        i += 3
    ) {

        const ia =
            indices[i];


        const ib =
            indices[i + 1];


        const ic =
            indices[i + 2];


        // ----------------------------------------------------
        // Берём три точки границы
        // ----------------------------------------------------

        const a =
            boundaryPoints[ia]
                .clone()
                .normalize();


        const b =
            boundaryPoints[ib]
                .clone()
                .normalize();


        const c =
            boundaryPoints[ic]
                .clone()
                .normalize();


        // ----------------------------------------------------
        // Разбиваем треугольник на маленькие сферические
        // треугольники.
        // ----------------------------------------------------

        subdivideSphericalTriangle(
            positions,
            a,
            b,
            c,
            SUBDIVISIONS,
            FILL_RADIUS
        );

    }


    // ========================================================
    // BUFFER GEOMETRY
    // ========================================================

    const geometry =
        new THREE.BufferGeometry();


    geometry.setAttribute(

        "position",

        new THREE.Float32BufferAttribute(
            positions,
            3
        )

    );


    geometry.computeVertexNormals();


    // ========================================================
    // МАТЕРИАЛ
    // ========================================================

    const material =
        new THREE.MeshBasicMaterial({

            color: color,

            transparent: true,

            opacity: FILL_OPACITY,

            depthWrite: false,

            side: THREE.DoubleSide

        });


    // ========================================================
    // MESH
    // ========================================================

    const fill =
    new THREE.Mesh(
        geometry,
        material
    );

fill.name =
    "Fill";

// ========================================================
// ВАЖНО:
// Заливка НЕ должна участвовать в raycasting.
//
// Иначе луч мыши попадает сначала в Fill,
// а не в HitArea субсектора.
//
// Поэтому Fill визуально существует,
// но для мыши является "прозрачным".
// ========================================================

fill.raycast = () => {};


// Контур и HitArea обрабатываются поверх заливки.

fill.renderOrder =
    50;


return fill;;

}


// ============================================================
// СФЕРИЧЕСКОЕ ПОДРАЗДЕЛЕНИЕ
// ============================================================
//
// Каждый большой треугольник разбиваем на 4.
//
// Было:
//
//          A
//         / \
//        /   \
//       /     \
//      B───────C
//
// Становится:
//
//          A
//         / \
//        /___\
//       /\   /\
//      /__\_/__\
//
// После каждого подразделения новые точки
// проецируются обратно на сферу.
//
// ============================================================

function subdivideSphericalTriangle(
    positions,
    a,
    b,
    c,
    subdivisions,
    radius
) {

    // ========================================================
    // Базовый случай
    // ========================================================

    if (
        subdivisions <= 0
    ) {

        addTriangle(
            positions,
            a,
            b,
            c,
            radius
        );

        return;

    }


    // ========================================================
    // Находим середины трёх сторон
    // ========================================================

    const ab =
        sphericalMidpoint(
            a,
            b
        );


    const bc =
        sphericalMidpoint(
            b,
            c
        );


    const ca =
        sphericalMidpoint(
            c,
            a
        );


    // ========================================================
    // Рекурсивно разбиваем 4 маленьких треугольника
    // ========================================================

    subdivideSphericalTriangle(
        positions,
        a,
        ab,
        ca,
        subdivisions - 1,
        radius
    );


    subdivideSphericalTriangle(
        positions,
        ab,
        b,
        bc,
        subdivisions - 1,
        radius
    );


    subdivideSphericalTriangle(
        positions,
        ca,
        bc,
        c,
        subdivisions - 1,
        radius
    );


    subdivideSphericalTriangle(
        positions,
        ab,
        bc,
        ca,
        subdivisions - 1,
        radius
    );

}


// ============================================================
// СЕРЕДИНА ДВУХ ТОЧЕК НА СФЕРЕ
// ============================================================

function sphericalMidpoint(
    a,
    b
) {

    return a.clone()
        .add(b)
        .normalize();

}


// ============================================================
// ДОБАВЛЕНИЕ ОДНОГО ТРЕУГОЛЬНИКА
// ============================================================

function addTriangle(
    positions,
    a,
    b,
    c,
    radius
) {

    positions.push(

        a.x * radius,
        a.y * radius,
        a.z * radius,

        b.x * radius,
        b.y * radius,
        b.z * radius,

        c.x * radius,
        c.y * radius,
        c.z * radius

    );

}