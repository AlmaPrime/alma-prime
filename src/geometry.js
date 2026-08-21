import * as THREE from 'three';

/*
=========================================================
Настройки планеты
=========================================================
*/

export const PLANET_RADIUS = 1.002;


/*
=========================================================
Перевод широты/долготы в координаты сферы
lat  -90...90
lon -180...180
=========================================================
*/

export function latLonToVector3(lat, lon, radius = PLANET_RADIUS) {

    const phi = THREE.MathUtils.degToRad(90 - lat);
    const theta = THREE.MathUtils.degToRad(lon + 180);

    return new THREE.Vector3(
        -(radius * Math.sin(phi) * Math.cos(theta)),
         radius * Math.cos(phi),
         radius * Math.sin(phi) * Math.sin(theta)
    );
}


/*
=========================================================
Создание контура субсектора
points = [
    {lat:..., lon:...},
    ...
]
=========================================================
*/

export function createBorder(points) {

    const vertices = [];

    for (const point of points) {

        vertices.push(
            latLonToVector3(point.lat, point.lon)
        );

    }

    const geometry = new THREE.BufferGeometry().setFromPoints(vertices);

    const material = new THREE.LineBasicMaterial({

        color: 0xffffff,

        transparent: true,

        opacity: 1

    });

    const border = new THREE.LineLoop(
        geometry,
        material
    );

    border.renderOrder = 100;

    return border;

}