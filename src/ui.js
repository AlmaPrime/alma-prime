import { factions } from "./factions.js";

// ============================================================
// ЭЛЕМЕНТЫ UI
// ============================================================

let panel;

let districtField;
let subsectorField;
let typeField;
let ownerField;

let factionMedallion;
let factionIcon;

let landscapeField;
let powerField;


// ============================================================
// ЦВЕТА ФРАКЦИЙ
// ============================================================

const FACTION_ACCENTS = {

    Imperium: {
        color: "#d8c27a",
        glow: "rgba(216,194,122,0.35)"
    },

    Chaos: {
        color: "#ff3030",
        glow: "rgba(255,30,30,0.40)"
    },

    Tyranids: {
        color: "#b45cff",
        glow: "rgba(180,60,255,0.40)"
    },

    Marauders: {
        color: "#29b6f6",
        glow: "rgba(41,182,246,0.40)"
    }

};


// ============================================================
// СОЗДАНИЕ UI
// ============================================================

export function createUI() {

    // ========================================================
    // ОСНОВНАЯ ПАНЕЛЬ
    // ========================================================

    panel =
        document.createElement("div");


    panel.style.position =
        "absolute";

    panel.style.top =
        "40px";

    panel.style.right =
        "40px";

    panel.style.width =
        "300px";

    panel.style.padding =
        "18px 18px 16px 18px";

    panel.style.boxSizing =
        "border-box";

    panel.style.background =
        "rgba(10,10,10,0.84)";

    panel.style.border =
        "1px solid rgba(180,180,180,0.5)";

    panel.style.borderRadius =
        "6px";

    panel.style.color =
        "#ffffff";

    panel.style.fontFamily =
        "Segoe UI";

    panel.style.fontSize =
        "15px";

    panel.style.lineHeight =
        "1.6";

    panel.style.pointerEvents =
        "none";

    panel.style.display =
        "none";


    // ========================================================
    // РАЙОН
    // ========================================================

    districtField =
        document.createElement("div");


    districtField.style.fontSize =
        "22px";

    districtField.style.fontWeight =
        "bold";

    districtField.style.color =
        "#d8c27a";

    districtField.style.marginBottom =
        "16px";


    panel.appendChild(
        districtField
    );


    // ========================================================
    // СУБСЕКТОР
    // ========================================================

    subsectorField =
        document.createElement("div");


    subsectorField.style.marginBottom =
        "10px";


    panel.appendChild(
        subsectorField
    );


    // ========================================================
    // ТИП
    // ========================================================

    typeField =
        document.createElement("div");


    typeField.style.marginBottom =
        "10px";

        typeField.style.whiteSpace =
    "pre-line";


    panel.appendChild(
        typeField
    );


    // ========================================================
    // КОНТРОЛЬ
    // ========================================================

    ownerField =
        document.createElement("div");


    ownerField.style.marginBottom =
        "6px";


    panel.appendChild(
        ownerField
    );


    // ========================================================
    // ФРАКЦИОННЫЙ МЕДАЛЬОН
    // ========================================================

    factionMedallion =
        document.createElement("div");


    factionMedallion.style.width =
        "120px";

    factionMedallion.style.height =
        "120px";

    factionMedallion.style.margin =
        "8px auto 14px auto";

    factionMedallion.style.boxSizing =
        "border-box";

    factionMedallion.style.border =
        "2px solid #ffffff";

    factionMedallion.style.borderRadius =
        "50%";

    factionMedallion.style.display =
        "flex";

    factionMedallion.style.alignItems =
        "center";

    factionMedallion.style.justifyContent =
        "center";

    factionMedallion.style.background =
        "rgba(30,30,30,0.9)";

    factionMedallion.style.boxShadow =
        "0 0 18px rgba(255,255,255,0.25)";

    factionMedallion.style.transition =
        "all 0.15s ease";


    // ========================================================
    // ИЗОБРАЖЕНИЕ СИМВОЛА
    // ========================================================

    factionIcon =
        document.createElement("img");


    factionIcon.style.width =
        "90px";

    factionIcon.style.height =
        "90px";

    factionIcon.style.objectFit =
        "contain";

    factionIcon.style.display =
        "block";


    // --------------------------------------------------------
    // Делаем символ светлым
    // --------------------------------------------------------

    factionIcon.style.filter =
        "brightness(0) invert(1)";


    factionMedallion.appendChild(
        factionIcon
    );


    panel.appendChild(
        factionMedallion
    );


    // ========================================================
    // ЛАНДШАФТ
    // ========================================================

    landscapeField =
        document.createElement("div");


    landscapeField.style.marginTop =
        "2px";

    landscapeField.style.paddingTop =
        "10px";

    landscapeField.style.borderTop =
        "1px solid rgba(180,180,180,0.25)";


    panel.appendChild(
        landscapeField
    );


    // ========================================================
    // МОЩЬ
    // ========================================================

    powerField =
        document.createElement("div");


    powerField.style.marginTop =
        "12px";

    powerField.style.paddingTop =
        "10px";

    powerField.style.borderTop =
        "1px solid rgba(180,180,180,0.25)";

    powerField.style.lineHeight =
        "1.8";


    panel.appendChild(
        powerField
    );


    // ========================================================
    // ДОБАВЛЯЕМ ПАНЕЛЬ
    // ========================================================

    document.body.appendChild(
        panel
    );

}


// ============================================================
// ПОКАЗАТЬ ИНФОРМАЦИЮ О СУБСЕКТОРЕ
// ============================================================

export function showSubsector(data) {

    // ========================================================
    // РАЙОН
    // ========================================================

    districtField.innerHTML =
        data.district;


    // ========================================================
    // СУБСЕКТОР
    // ========================================================

    subsectorField.innerHTML =
        "<b>Субсектор:</b> " +
        data.subsector;


    // ========================================================
    // ТИП
    // ========================================================

    typeField.innerHTML =
        "<b>Тип:</b> " +
        data.type;


    // ========================================================
    // ФРАКЦИЯ
    // ========================================================

    const faction =
        factions[data.owner];


    const accent =
        FACTION_ACCENTS[data.owner];


    // --------------------------------------------------------
    // Если фракция существует
    // --------------------------------------------------------

    if (faction) {

        // ----------------------------------------------------
        // Русское название
        // ----------------------------------------------------

        ownerField.innerHTML =
            "<b>Контроль:</b> " +
            faction.name;


        // ----------------------------------------------------
        // Картинка
        // ----------------------------------------------------

        factionIcon.src =
            faction.icon;

        factionIcon.alt =
            faction.name;


        factionIcon.style.display =
            "block";


        factionMedallion.style.display =
            "flex";


        // ----------------------------------------------------
        // Цвет медальона
        // ----------------------------------------------------

        if (accent) {

            factionMedallion.style.border =
                "2px solid " +
                accent.color;


            factionMedallion.style.background =
                "radial-gradient(circle, " +
                accent.glow +
                " 0%, rgba(10,10,10,0.95) 70%)";


            factionMedallion.style.boxShadow =
                "0 0 18px " +
                accent.glow +
                ", inset 0 0 20px " +
                accent.glow;

        }

    }


    // --------------------------------------------------------
    // Неизвестная фракция
    // --------------------------------------------------------

    else {

        ownerField.innerHTML =
            "<b>Контроль:</b> " +
            data.owner;


        factionMedallion.style.display =
            "none";

    }


    // ========================================================
    // ЛАНДШАФТ
    // ========================================================

    landscapeField.innerHTML =
    "<b>Ландшафт:</b><br><br>" +
    (
        data.landscape ||
        "Нет особенностей"
    );


// Сохраняем переносы строк \n
landscapeField.style.whiteSpace =
    "pre-line";
    


    // ========================================================
    // МОЩЬ
    // ========================================================

    powerField.innerHTML = "";


    const powerTitle =
        document.createElement("div");


    powerTitle.innerHTML =
        "<b>Мощь:</b>";


    powerTitle.style.marginBottom =
        "3px";


    powerField.appendChild(
        powerTitle
    );


    // --------------------------------------------------------
    // Если данные Мощи существуют
    // --------------------------------------------------------

    if (
        data.power
    ) {

        addPowerRow(
            "Империум",
            data.power.Imperium,
            FACTION_ACCENTS.Imperium.color
        );


        addPowerRow(
            "Хаос",
            data.power.Chaos,
            FACTION_ACCENTS.Chaos.color
        );


        addPowerRow(
            "Тираниды",
            data.power.Tyranids,
            FACTION_ACCENTS.Tyranids.color
        );


        addPowerRow(
            "Мародеры",
            data.power.Marauders,
            FACTION_ACCENTS.Marauders.color
        );

    }


    // ========================================================
    // ПОКАЗЫВАЕМ ПАНЕЛЬ
    // ========================================================

    panel.style.display =
        "block";

}


// ============================================================
// СТРОКА МОЩИ
// ============================================================

function addPowerRow(
    name,
    value,
    color
) {

    const row =
        document.createElement("div");


    row.style.display =
        "flex";

    row.style.justifyContent =
        "space-between";

    row.style.alignItems =
        "center";


    const nameField =
        document.createElement("span");


    nameField.innerHTML =
        name;


    const valueField =
        document.createElement("span");


    valueField.innerHTML =
        value ?? 0;


    valueField.style.color =
        color;

    valueField.style.fontWeight =
        "bold";

    valueField.style.fontSize =
        "17px";


    row.appendChild(
        nameField
    );


    row.appendChild(
        valueField
    );


    powerField.appendChild(
        row
    );

}


// ============================================================
// СКРЫТЬ ИНФОРМАЦИЮ
// ============================================================

export function hideSubsector() {

    panel.style.display =
        "none";

}