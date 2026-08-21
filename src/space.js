import * as THREE from 'three'
import galaxyTexture from './assets/galaxy.png'

export function createSpace(scene) {

    const texture = new THREE.TextureLoader().load(galaxyTexture)

    const geometry = new THREE.SphereGeometry(200, 64, 64)

    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide
    })

    const space = new THREE.Mesh(geometry, material)

    scene.add(space)
}