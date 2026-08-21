import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

export function createControls(camera,renderer){
  const c=new OrbitControls(camera,renderer.domElement);
  c.enableDamping=true;
  c.enablePan=false;
  return c;
}
