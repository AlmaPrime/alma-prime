import * as THREE from 'three';
import planetTexture from './assets/planet.png';

export function createPlanet() {

    const geometry = new THREE.SphereGeometry(1, 64, 64);

    const texture = new THREE.TextureLoader().load(planetTexture);

    texture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.MeshStandardMaterial({
        map: texture
    });

    const planet = new THREE.Mesh(geometry, material);

    return planet;
}