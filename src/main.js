import './style.css';
import * as THREE from 'three';

import { createPlanet } from './planet.js';
import { createMap } from './map.js';
import { createSpace } from './space.js';
import { createLights } from './lights.js';
import { createControls } from './controls.js';
import { createRaycaster } from './raycaster.js';

import { createUI } from "./ui.js";
import { createCrusadeUI } from "./crusadeUI.js";

import { createMusicButton } from "./music.js";


// --------------------------------------------------
// Scene
// --------------------------------------------------

const scene = new THREE.Scene();

scene.background =
    new THREE.Color(0x000000);


// --------------------------------------------------
// Camera
// --------------------------------------------------

const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth /
        window.innerHeight,
        0.1,
        1000
    );

camera.position.set(
    0,
    0,
    3
);


// --------------------------------------------------
// Renderer
// --------------------------------------------------

const renderer =
    new THREE.WebGLRenderer({

        antialias: true

    });


renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.innerHTML = '';

document.body.appendChild(
    renderer.domElement
);


// --------------------------------------------------
// UI
// --------------------------------------------------

createUI();

createCrusadeUI();


// --------------------------------------------------
// Environment
// --------------------------------------------------

createSpace(scene);

createLights(scene);


// --------------------------------------------------
// Planet
// --------------------------------------------------

const planet =
    createPlanet();

const map =
    createMap();

planet.add(
    map
);

scene.add(
    planet
);

createMusicButton();

// --------------------------------------------------
// Controls
// --------------------------------------------------

const controls =
    createControls(
        camera,
        renderer
    );


// --------------------------------------------------
// Raycaster
// --------------------------------------------------

const raycaster =
    createRaycaster(
        camera,
        renderer,
        map
    );


// --------------------------------------------------
// АВТОМАТИЧЕСКОЕ ВРАЩЕНИЕ
// --------------------------------------------------

let autoRotation =
    true;


// --------------------------------------------------
// ЛЕВЫЙ КЛИК — ПАУЗА / ПРОДОЛЖЕНИЕ
// --------------------------------------------------

renderer.domElement.addEventListener(
    "click",
    (event) => {

        // Только левая кнопка мыши
        if (event.button !== 0) {
            return;
        }

        autoRotation =
            !autoRotation;

    }
);


// --------------------------------------------------
// Resize
// --------------------------------------------------

window.addEventListener(
    'resize',
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();


        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);


// --------------------------------------------------
// Animation
// --------------------------------------------------

function animate() {

    requestAnimationFrame(
        animate
    );


    // ------------------------------------------------
    // Автоматическое вращение планеты
    // ------------------------------------------------

    if (autoRotation) {

        planet.rotation.y +=
            0.0025;

    }


    controls.update();

    raycaster.update();


    renderer.render(
        scene,
        camera
    );

}


animate();