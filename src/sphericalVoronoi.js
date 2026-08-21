import * as THREE from "three";


// ============================================================
// СФЕРИЧЕСКИЙ VORONOI
// ============================================================
//
// Для каждой центральной точки строится сферическая ячейка:
//
// "Все точки поверхности сферы, которые ближе к этому
//  центру, чем к любому другому центру."
//
// На выходе:
//
// {
//     Koktem: {
//         id: "Koktem",
//         center: Vector3,
//         vertices: [Vector3, ...]
//     },
//     ...
// }
//
// ============================================================


export function createSphericalVoronoi(centers) {

    const points = [];

    const result = {};


    // ========================================================
    // 1. Преобразуем центры в единичные Vector3
    // ========================================================

    for (const id in centers) {

        const data = centers[id];

        const phi =
            THREE.MathUtils.degToRad(90 - data.lat);

        const theta =
            THREE.MathUtils.degToRad(data.lon + 180);


        const vector = new THREE.Vector3(

            -Math.sin(phi) * Math.cos(theta),

            Math.cos(phi),

            Math.sin(phi) * Math.sin(theta)

        );


        vector.normalize();


        points.push({

            id: id,

            vector: vector

        });

    }


    // ========================================================
    // 2. Создаём Voronoi-я ячейку для каждой точки
    // ========================================================

    for (const current of points) {

        const center = current.vector;

        const vertices = [];


        // ----------------------------------------------------
        // Проверяем каждую пару соседних центров.
        //
        // Пересечение двух биссекторных плоскостей даёт
        // потенциальную вершину Voronoi.
        // ----------------------------------------------------

        for (let i = 0; i < points.length; i++) {

            const first = points[i];

            if (first === current) {
                continue;
            }


            for (let j = i + 1; j < points.length; j++) {

                const second = points[j];

                if (second === current) {
                    continue;
                }


                // ------------------------------------------------
                // Нормали биссекторных плоскостей
                // ------------------------------------------------

                const planeA =
                    center.clone().sub(first.vector);


                const planeB =
                    center.clone().sub(second.vector);


                // ------------------------------------------------
                // Направление линии пересечения
                // ------------------------------------------------

                const intersection =
                    new THREE.Vector3()
                        .crossVectors(
                            planeA,
                            planeB
                        );


                const lengthSq =
                    intersection.lengthSq();


                if (lengthSq < 0.00000001) {
                    continue;
                }


                intersection.normalize();


                // На сфере существуют две противоположные
                // точки пересечения.

                const candidates = [

                    intersection.clone(),

                    intersection.clone().negate()

                ];


                for (const candidate of candidates) {

                    // ------------------------------------------------
                    // Проверяем принадлежность ячейке.
                    //
                    // Чем больше dot product,
                    // тем меньше угловое расстояние.
                    // ------------------------------------------------

                    const centerScore =
                        center.dot(candidate);


                    let valid = true;


                    for (const other of points) {

                        if (other === current) {
                            continue;
                        }


                        const otherScore =
                            other.vector.dot(candidate);


                        if (
                            otherScore >
                            centerScore + 0.000001
                        ) {

                            valid = false;

                            break;

                        }

                    }


                    if (!valid) {
                        continue;
                    }


                    // ------------------------------------------------
                    // Удаляем дубликаты.
                    // ------------------------------------------------

                    let duplicate = false;


                    for (const existing of vertices) {

                        if (
                            existing.distanceToSquared(candidate) <
                            0.000001
                        ) {

                            duplicate = true;

                            break;

                        }

                    }


                    if (!duplicate) {

                        vertices.push(
                            candidate.clone()
                        );

                    }

                }

            }

        }


        // ====================================================
        // 3. Сортировка вершин вокруг центра
        // ====================================================

        if (vertices.length >= 3) {

            const reference =
                Math.abs(center.y) < 0.9

                    ? new THREE.Vector3(0, 1, 0)

                    : new THREE.Vector3(1, 0, 0);


            const tangentX =
                new THREE.Vector3()
                    .crossVectors(
                        reference,
                        center
                    )
                    .normalize();


            const tangentY =
                new THREE.Vector3()
                    .crossVectors(
                        center,
                        tangentX
                    )
                    .normalize();


            vertices.sort((a, b) => {

                const ax =
                    a.dot(tangentX);

                const ay =
                    a.dot(tangentY);


                const bx =
                    b.dot(tangentX);

                const by =
                    b.dot(tangentY);


                const angleA =
                    Math.atan2(
                        ay,
                        ax
                    );


                const angleB =
                    Math.atan2(
                        by,
                        bx
                    );


                return angleA - angleB;

            });

        }


        // ====================================================
        // 4. Сохраняем ячейку
        // ====================================================

        result[current.id] = {

            id: current.id,

            center: center.clone(),

            vertices: vertices

        };

    }


    return result;

}