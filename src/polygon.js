import * as THREE from "three";
import { latLonToVector3 } from "./geometry.js";

export function createPickMesh(points) {

    // Центр полигона
    const center = new THREE.Vector3();

    const vertices3D = [];

    for (const point of points) {

        const vertex = latLonToVector3(point.lat, point.lon);

        vertices3D.push(vertex);

        center.add(vertex);

    }

    center.divideScalar(vertices3D.length);

    // Строим Shape в локальной плоскости
    const shape = new THREE.Shape();

    const localPoints = [];

    const up = center.clone().normalize();

    const right = new THREE.Vector3(0, 1, 0);

    // Если почти совпали — берём другую ось
    if (Math.abs(up.dot(right)) > 0.95) {

        right.set(1, 0, 0);

    }

    right.cross(up).normalize();

    const forward = up.clone().cross(right).normalize();

    vertices3D.forEach((vertex, index) => {

        const relative = vertex.clone().sub(center);

        const x = relative.dot(right);
        const y = relative.dot(forward);

        localPoints.push(new THREE.Vector2(x, y));

        if (index === 0)
            shape.moveTo(x, y);
        else
            shape.lineTo(x, y);

    });

    shape.closePath();

    const geometry = new THREE.ShapeGeometry(shape);

    const material = new THREE.MeshBasicMaterial({

        color: 0xffffff,

        transparent: true,

        opacity: 0,

        side: THREE.DoubleSide,

        depthWrite: false

    });

    const mesh = new THREE.Mesh(geometry, material);

    // Возвращаем обратно на сферу

    mesh.position.copy(center);

    mesh.lookAt(center.clone().multiplyScalar(2));

    mesh.rotateX(Math.PI);

    mesh.name = "PickMesh";

    return mesh;

}