// ============================================================
// ПОДРОБНАЯ ИНФОРМАЦИЯ О СУБСЕКТОРЕ
// ============================================================

export function showSubsectorInfo(subsector) {

    // ========================================================
    // ЕСЛИ ОКНО УЖЕ ОТКРЫТО — УДАЛЯЕМ ЕГО
    // ========================================================

    const oldWindow =
        document.getElementById(
            "subsector-info-window"
        );

    if (oldWindow) {

        oldWindow.remove();

    }


    // ========================================================
    // ОСНОВНОЕ ОКНО
    // ========================================================

    const infoWindow =
        document.createElement("div");

    infoWindow.id =
        "subsector-info-window";

    infoWindow.style.position =
        "fixed";

    infoWindow.style.top =
        "50%";

    infoWindow.style.left =
        "50%";

    infoWindow.style.transform =
        "translate(-50%, -50%)";

    infoWindow.style.width =
        "min(600px, 90vw)";

    infoWindow.style.maxHeight =
        "85vh";

    infoWindow.style.overflowY =
        "auto";

    infoWindow.style.background =
        "rgba(12, 12, 18, 0.97)";

    infoWindow.style.border =
        "1px solid rgba(216, 194, 122, 0.55)";

    infoWindow.style.borderRadius =
        "6px";

    infoWindow.style.padding =
        "25px";

    infoWindow.style.boxSizing =
        "border-box";

    infoWindow.style.zIndex =
        "1000";

    infoWindow.style.color =
        "#ffffff";

    infoWindow.style.fontFamily =
        "Arial, sans-serif";


    // ========================================================
    // КНОПКА ЗАКРЫТИЯ
    // ========================================================

    const closeButton =
        document.createElement("button");

    closeButton.innerHTML =
        "✕";

    closeButton.style.position =
        "absolute";

    closeButton.style.top =
        "12px";

    closeButton.style.right =
        "15px";

    closeButton.style.background =
        "transparent";

    closeButton.style.border =
        "none";

    closeButton.style.color =
        "#d8c27a";

    closeButton.style.fontSize =
        "22px";

    closeButton.style.cursor =
        "pointer";

    closeButton.addEventListener(
        "click",
        () => {

            infoWindow.remove();

        }
    );

    infoWindow.appendChild(
        closeButton
    );


    // ========================================================
    // НАЗВАНИЕ УЛЬЯ
    // ========================================================

    const hiveName =
        document.createElement("div");

    hiveName.innerHTML =
        subsector.district;

    hiveName.style.textAlign =
        "center";

    hiveName.style.fontSize =
        "14px";

    hiveName.style.letterSpacing =
        "2px";

    hiveName.style.color =
        "rgba(255,255,255,0.55)";

    hiveName.style.marginBottom =
        "8px";

    infoWindow.appendChild(
        hiveName
    );


    // ========================================================
    // НАЗВАНИЕ СУБСЕКТОРА
    // ========================================================

    const subsectorName =
        document.createElement("div");

    subsectorName.innerHTML =
        subsector.subsector;

    subsectorName.style.textAlign =
        "center";

    subsectorName.style.fontSize =
        "30px";

    subsectorName.style.fontWeight =
        "bold";

    subsectorName.style.letterSpacing =
        "2px";

    subsectorName.style.color =
        "#d8c27a";

    subsectorName.style.marginBottom =
        "20px";

    infoWindow.appendChild(
        subsectorName
    );


    // ========================================================
    // КАРТИНКА СУБСЕКТОРА
    // ========================================================

    if (subsector.image) {

        const image =
            document.createElement("img");

        image.src =
            subsector.image;

        image.style.width =
            "100%";

        image.style.maxHeight =
            "280px";

        image.style.objectFit =
            "cover";

        image.style.borderRadius =
            "4px";

        image.style.marginBottom =
            "20px";

        infoWindow.appendChild(
            image
        );

    }


    // ========================================================
    // ФУНКЦИЯ СОЗДАНИЯ ЗАГОЛОВКА
    // ========================================================

    function createSectionTitle(title) {

        const sectionTitle =
            document.createElement("div");

        sectionTitle.innerHTML =
            title;

        sectionTitle.style.fontSize =
            "11px";

        sectionTitle.style.fontWeight =
            "bold";

        sectionTitle.style.letterSpacing =
            "1.5px";

        sectionTitle.style.color =
            "#d8c27a";

        sectionTitle.style.marginTop =
            "20px";

        sectionTitle.style.marginBottom =
            "8px";

        return sectionTitle;

    }


    // ========================================================
    // ФУНКЦИЯ СОЗДАНИЯ ТЕКСТА
    // ========================================================

    function createText(text) {

        const textBlock =
            document.createElement("div");

        textBlock.innerHTML =
            text || "Нет данных.";

        textBlock.style.fontSize =
            "14px";

        textBlock.style.lineHeight =
            "1.6";

        textBlock.style.color =
            "rgba(255,255,255,0.75)";

        return textBlock;

    }


    // ========================================================
    // КОНТРОЛЬ
    // ========================================================

    infoWindow.appendChild(
        createSectionTitle(
            "КОНТРОЛЬ"
        )
    );

    infoWindow.appendChild(
        createText(
            subsector.owner
        )
    );


    // ========================================================
    // МОЩЬ АЛЬЯНСОВ
    // ========================================================

    infoWindow.appendChild(
        createSectionTitle(
            "МОЩЬ АЛЬЯНСОВ"
        )
    );

    const powerBlock =
        document.createElement("div");

    if (subsector.power) {

        for (
            const alliance in subsector.power
        ) {

            const powerRow =
                document.createElement("div");

            powerRow.style.display =
                "flex";

            powerRow.style.justifyContent =
                "space-between";

            powerRow.style.padding =
                "4px 0";

            const allianceName =
                document.createElement("span");

            allianceName.innerHTML =
                alliance;

            const alliancePower =
                document.createElement("span");

            alliancePower.innerHTML =
                subsector.power[alliance];

            alliancePower.style.color =
                "#d8c27a";

            powerRow.appendChild(
                allianceName
            );

            powerRow.appendChild(
                alliancePower
            );

            powerBlock.appendChild(
                powerRow
            );

        }

    }

    else {

        powerBlock.innerHTML =
            "Нет данных.";

    }

    infoWindow.appendChild(
        powerBlock
    );

console.log("ДАННЫЕ СУБСЕКТОРА:", subsector);
console.log("DESCRIPTION:", subsector.description);
    // ========================================================
    // ОПИСАНИЕ
    // ========================================================

    infoWindow.appendChild(
        createSectionTitle(
            "ОПИСАНИЕ"
        )
    );

    infoWindow.appendChild(
        createText(
            subsector.description
        )
    );


    // ========================================================
    // СВОЙСТВО СУБСЕКТОРА
    // ========================================================

    infoWindow.appendChild(
        createSectionTitle(
            "СВОЙСТВО СУБСЕКТОРА"
        )
    );

    infoWindow.appendChild(
        createText(
            subsector.type
        )
    );


    // ========================================================
    // СВОЙСТВО ЛАНДШАФТА
    // ========================================================

    infoWindow.appendChild(
        createSectionTitle(
            "СВОЙСТВО ЛАНДШАФТА"
        )
    );

    infoWindow.appendChild(
        createText(
            subsector.landscape
        )
    );


    // ========================================================
    // ДОБАВЛЯЕМ ОКНО НА СТРАНИЦУ
    // ========================================================

    document.body.appendChild(
        infoWindow
    );

}