import * as THREE from "three";
import { showSubsector, hideSubsector } from "./ui.js";
import { showSubsectorInfo } from "./subsectorInfo.js";

export function createRaycaster(camera, renderer, map) {

    const raycaster = new THREE.Raycaster();
    raycaster.params.Line.threshold = 0.01;

    const mouse = new THREE.Vector2();

    let hoveredBorder = null;

    function onMouseMove(event) {

        const rect = renderer.domElement.getBoundingClientRect();

        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    }

    renderer.domElement.addEventListener("mousemove", onMouseMove);

    // ============================================================
// КЛИК ПО СУБСЕКТОРУ — ПОДРОБНАЯ ИНФОРМАЦИЯ
// ============================================================

function onClick(event) {

    const rect =
        renderer.domElement.getBoundingClientRect();

    mouse.x =
        ((event.clientX - rect.left) / rect.width) *
        2 - 1;

    mouse.y =
        -((event.clientY - rect.top) / rect.height) *
        2 + 1;


    raycaster.setFromCamera(
        mouse,
        camera
    );

    const intersects =
        raycaster.intersectObject(
            map,
            true
        );


    if (intersects.length === 0) {

        return;

    }


    const object =
        intersects[0].object;

    let data =
        null;


    // ========================================================
    // КЛИК ПО ОБЛАСТИ СУБСЕКТОРА
    // ========================================================

    if (object.name === "HitArea") {

        data =
            object.parent.userData;

    }


    // ========================================================
    // КЛИК ПО КОНТУРУ СУБСЕКТОРА
    // ========================================================

    else if (object.name === "Border") {

        data =
            object.parent.userData;

    }


    if (!data) {

        return;

    }


    // ========================================================
    // ОТКРЫВАЕМ ПОДРОБНУЮ ИНФОРМАЦИЮ
    // ========================================================

    showSubsectorInfo(
        data
    );

}


renderer.domElement.addEventListener(
    "click",
    onClick
);

    function update() {

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(map, true);

        // Если курсор ни над чем
        if (intersects.length === 0) {

            if (hoveredBorder) {

                hoveredBorder.material.color.set(0x39ff14);
                hoveredBorder = null;

            }

            hideSubsector();
            return;

        }

        const object = intersects[0].object;

        let border = null;
        let data = null;

        if (object.name === "HitArea") {

            const subsector = object.parent;

            border = subsector.getObjectByName("Border");
            data = subsector.userData;

        }
        else if (object.name === "Border") {

            border = object;
            data = object.parent.userData;

        }

        if (!border) return;

        // Если навели на другой сектор
        if (hoveredBorder && hoveredBorder !== border) {

            hoveredBorder.material.color.set(0x39ff14);

        }

        hoveredBorder = border;

        hoveredBorder.material.color.set(0xffff00);

        showSubsector(data);

    }

    return {

        update

    };

}