import * as THREE from "three";

import { subsectorCenters } from "./subsectorCenters.js";
import { createSphericalVoronoi } from "./sphericalVoronoi.js";
import { campaignData } from "./campaignData.js";
import { createEdgeRegistry } from "./edgeRegistry.js";
import { createFill } from "./fill.js";


// ============================================================
// НАСТРОЙКИ
// ============================================================

const HIT_CENTER_RADIUS = 1.013;


// ============================================================
// СОЗДАНИЕ ИГРОВОЙ КАРТЫ
// ============================================================

export function createMap() {

    const map = new THREE.Group();

    map.name = "CampaignMap";


    // ========================================================
    // Сферическая Voronoi-сетка
    // ========================================================

    const cells =
        createSphericalVoronoi(
            subsectorCenters
        );


    // ========================================================
    // ЕДИНЫЙ РЕЕСТР ОБЩИХ РЁБЕР
    // ========================================================

    const edgeRegistry =
        createEdgeRegistry();


    // ========================================================
    // СОЗДАЁМ ВСЕ СУБСЕКТОРЫ
    // ========================================================

    for (const id in cells) {

        const cell =
            cells[id];


        const data =
            campaignData[id];


        // ----------------------------------------------------
        // Группа субсектора
        // ----------------------------------------------------

        const subsector =
            new THREE.Group();


        subsector.name =
            id;


        // ----------------------------------------------------
        // Данные субсектора
        // ----------------------------------------------------

        subsector.userData = {

    id: id,

    district:
        data.district,

    subsector:
        data.subsector,

    type:
        data.type,

    owner:
        data.owner,

    landscape:
        data.landscape,

        power:
        data.power

};;


        // ====================================================
        // КОНТУР
        // ====================================================

        const border =
            createBorderFromRegistry(
                cell.vertices,
                edgeRegistry
            );


        border.name =
            "Border";


        subsector.add(
            border
        );


        // ====================================================
        // ЗАЛИВКА ФРАКЦИИ
        // ====================================================

        const fill =
            createFill(
                cell.center,
                cell.vertices,
                edgeRegistry,
                data.owner
            );


        // ----------------------------------------------------
        // Imperium возвращает null,
        // поэтому Mesh добавляем только если он существует.
        // ----------------------------------------------------

        if (fill) {

            subsector.add(
                fill
            );

        }


        // ====================================================
        // ОБЛАСТЬ НАВЕДЕНИЯ
        // ====================================================

        const hitArea =
            createHitArea(
                cell.center,
                cell.vertices,
                edgeRegistry
            );


        hitArea.name =
            "HitArea";


        subsector.add(
            hitArea
        );


        // ====================================================
        // Добавляем субсектор
        // ====================================================

        map.add(
            subsector
        );

    }


    // ========================================================
    // Контроль количества общих рёбер
    // ========================================================

    console.log(
        "Уникальных общих рёбер:",
        edgeRegistry.getEdgeCount()
    );


    return map;

}


// ============================================================
// СОЗДАНИЕ ВИДИМОГО КОНТУРА
// ============================================================

function createBorderFromRegistry(
    vertices,
    edgeRegistry
) {

    const points = [];


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

            points.push(
                edgePoints[j]
            );

        }

    }


    // ========================================================
    // Геометрия
    // ========================================================

    const geometry =
        new THREE.BufferGeometry()
            .setFromPoints(
                points
            );


    // ========================================================
    // Материал
    // ========================================================

    const material =
        new THREE.LineBasicMaterial({

            color: 0x39ff14,

            transparent: true,

            opacity: 1

        });


    const border =
        new THREE.LineLoop(
            geometry,
            material
        );


    border.renderOrder =
        100;


    return border;

}


// ============================================================
// HIT AREA
// ============================================================

function createHitArea(
    center,
    vertices,
    edgeRegistry
) {

    const positions = [];


    // ========================================================
    // Центр
    // ========================================================

    const centerPoint =
        center.clone()
            .normalize()
            .multiplyScalar(
                HIT_CENTER_RADIUS
            );


    // ========================================================
    // Получаем искривлённую границу
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
    // Создаём треугольники
    // ========================================================

    for (
        let i = 0;
        i < boundaryPoints.length;
        i++
    ) {

        const current =
            boundaryPoints[i];


        const next =
            boundaryPoints[
                (i + 1) %
                boundaryPoints.length
            ];


        positions.push(

            // Центр

            centerPoint.x,
            centerPoint.y,
            centerPoint.z,

            // Текущая точка

            current.x,
            current.y,
            current.z,

            // Следующая точка

            next.x,
            next.y,
            next.z

        );

    }


    // ========================================================
    // Геометрия
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
    // Невидимый материал
    // ========================================================

    const material =
        new THREE.MeshBasicMaterial({

            transparent: true,

            opacity: 0,

            depthWrite: false,

            side: THREE.DoubleSide

        });


    const mesh =
        new THREE.Mesh(
            geometry,
            material
        );


    mesh.name =
        "HitArea";


    mesh.renderOrder =
        90;


    return mesh;

}