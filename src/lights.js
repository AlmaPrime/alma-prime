import * as THREE from 'three';

export function createLights(scene){
  scene.add(new THREE.AmbientLight(0xffffff,0.45));
  const sun=new THREE.DirectionalLight(0xffffff,2.5);
  sun.position.set(5,5,5);
  scene.add(sun);
}
