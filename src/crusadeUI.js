import {
    crusadeScore,
    crusadePlayers
} from "./crusadeData.js";

import { achievements } from "./achievements.js";

import { crusadeHistory } from "./crusadeHistory.js"


// ============================================================
// ОСНОВНАЯ ПАНЕЛЬ
// ============================================================

let panel;


// ============================================================
// ВСПЛЫВАЮЩЕЕ ОКНО ИГРОКА
// ============================================================

let playerModal;


// ============================================================
// СОЗДАНИЕ UI КРУСЕЙДА
// ============================================================

export function createCrusadeUI() {

    // ========================================================
    // ОСНОВНАЯ ПАНЕЛЬ
    // ========================================================

    panel = document.createElement("div");

    panel.style.position =
        "absolute";

    panel.style.top =
        "40px";

    panel.style.left =
        "40px";

    panel.style.width =
        "330px";

    panel.style.maxHeight =
        "calc(100vh - 80px)";

    panel.style.overflowY =
        "auto";

    panel.style.boxSizing =
        "border-box";

    panel.style.padding =
        "18px";

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
        "14px";

    panel.style.lineHeight =
        "1.5";

    // Чтобы панель прокручивалась,
    // но сама страница не прокручивалась.
    panel.style.zIndex =
        "1000";


    // ========================================================
    // ЗАГОЛОВОК
    // ========================================================

    const title =
        document.createElement("div");

    title.innerHTML =
        "ALMA PRIME";

    title.style.fontSize =
        "22px";

    title.style.fontWeight =
        "bold";

    title.style.color =
        "#d8c27a";

    title.style.textAlign =
        "center";

    title.style.marginBottom =
        "2px";

    panel.appendChild(
        title
    );


    const subtitle =
        document.createElement("div");

    subtitle.innerHTML =
        "СТАТУС КРУСЕЙДА";

    subtitle.style.fontSize =
        "11px";

    subtitle.style.letterSpacing =
        "2px";

    subtitle.style.color =
        "rgba(255,255,255,0.55)";

    subtitle.style.textAlign =
        "center";

    subtitle.style.marginBottom =
        "18px";

    panel.appendChild(
        subtitle
    );


    // ========================================================
    // СЧЁТ
    // ========================================================

    addSectionTitle(
        "СЧЁТ"
    );


    const scoreContainer =
        document.createElement("div");

    scoreContainer.style.marginBottom =
        "18px";


    addScoreRow(
        scoreContainer,
        "Империум",
        crusadeScore.Imperium,
        "#d8c27a"
    );


    addScoreRow(
        scoreContainer,
        "Хаос",
        crusadeScore.Chaos,
        "#ff3030"
    );


    addScoreRow(
        scoreContainer,
        "Тираниды",
        crusadeScore.Tyranids,
        "#b45cff"
    );


    addScoreRow(
        scoreContainer,
        "Мародеры",
        crusadeScore.Marauders,
        "#29b6f6"
    );


    panel.appendChild(
        scoreContainer
    );

    // ========================================================
// ИСТОРИЯ КРУСЕЙДА
// ========================================================

const historyButton =
    document.createElement("button");

historyButton.innerHTML =
    "ИСТОРИЯ КРУСЕЙДА";

historyButton.style.width =
    "100%";

historyButton.style.padding =
    "11px";

historyButton.style.marginBottom =
    "18px";

historyButton.style.background =
    "rgba(216,194,122,0.08)";

historyButton.style.border =
    "1px solid rgba(216,194,122,0.55)";

historyButton.style.borderRadius =
    "5px";

historyButton.style.color =
    "#d8c27a";

historyButton.style.fontSize =
    "12px";

historyButton.style.fontWeight =
    "bold";

historyButton.style.letterSpacing =
    "1.5px";

historyButton.style.cursor =
    "pointer";

historyButton.addEventListener(
    "click",
    () => {

        showCrusadeHistory();

    }
);

panel.appendChild(
    historyButton
);

    
    // ========================================================
    // РАЗДЕЛИТЕЛЬ
    // ========================================================

    addDivider();


    // ========================================================
    // УЧАСТНИКИ
    // ========================================================

    addSectionTitle(
    `УЧАСТНИКИ (${crusadePlayers.length})`
);


    for (
        const player of crusadePlayers
    ) {

        addPlayer(
            player
        );

    }


    // ========================================================
    // ДОБАВЛЯЕМ ПАНЕЛЬ
    // ========================================================

    document.body.appendChild(
        panel
    );


    // ========================================================
    // СОЗДАЁМ МОДАЛЬНОЕ ОКНО
    // ========================================================

    createPlayerModal();

}


// ============================================================
// ЗАГОЛОВОК РАЗДЕЛА
// ============================================================

function addSectionTitle(
    text
) {

    const title =
        document.createElement("div");

    title.innerHTML =
        text;

    title.style.fontSize =
        "12px";

    title.style.fontWeight =
        "bold";

    title.style.letterSpacing =
        "1.5px";

    title.style.color =
        "rgba(255,255,255,0.65)";

    title.style.marginBottom =
        "10px";

    panel.appendChild(
        title
    );

}


// ============================================================
// СТРОКА СЧЁТА
// ============================================================

function addScoreRow(
    container,
    name,
    score,
    accent
) {

    const row =
        document.createElement("div");

    row.style.display =
        "flex";

    row.style.justifyContent =
        "space-between";

    row.style.alignItems =
        "center";

    row.style.padding =
        "5px 8px";

    row.style.marginBottom =
        "3px";

    row.style.borderLeft =
        "3px solid " +
        accent;

    row.style.background =
        "rgba(255,255,255,0.035)";


    const nameField =
        document.createElement("span");

    nameField.innerHTML =
        name;


    const scoreField =
        document.createElement("span");

    scoreField.innerHTML =
        score;

    scoreField.style.fontWeight =
        "bold";

    scoreField.style.fontSize =
        "16px";

    scoreField.style.color =
        accent;


    row.appendChild(
        nameField
    );

    row.appendChild(
        scoreField
    );


    container.appendChild(
        row
    );

}


// ============================================================
// ИГРОК
// ============================================================

function addPlayer(
    player
) {

    const playerBlock =
        document.createElement("div");


    playerBlock.style.display =
        "flex";

    playerBlock.style.alignItems =
        "center";

    playerBlock.style.padding =
        "9px";

    playerBlock.style.marginBottom =
        "7px";

    playerBlock.style.background =
        "rgba(255,255,255,0.035)";

    playerBlock.style.border =
        "1px solid rgba(255,255,255,0.08)";

    playerBlock.style.borderRadius =
        "5px";

    playerBlock.style.cursor =
        "pointer";

    playerBlock.style.transition =
        "background 0.15s, border-color 0.15s";


    // ========================================================
    // АВАТАР
    // ========================================================

    if (
        player.avatar
    ) {

        const avatar =
            document.createElement("img");

        avatar.src =
            player.avatar;

        avatar.alt =
            player.name;

        avatar.style.width =
            "48px";

        avatar.style.height =
            "48px";

        avatar.style.objectFit =
            "cover";

        avatar.style.borderRadius =
            "50%";

        avatar.style.marginRight =
            "10px";

        avatar.style.border =
            "1px solid rgba(216,194,122,0.6)";

        avatar.style.flexShrink =
            "0";


        playerBlock.appendChild(
            avatar
        );

    }


    // ========================================================
    // ИНФОРМАЦИЯ ОБ ИГРОКЕ
    // ========================================================

    const playerInfo =
        document.createElement("div");


    const playerName =
    document.createElement("div");

const stars =
    "★".repeat(
        Math.max(
            0,
            Math.min(5, Number(player.rankStars) || 0)
        )
    );

playerName.innerHTML =
    player.name +
    (stars ? " " + stars : "");

playerName.style.fontSize =
    "16px";

playerName.style.fontWeight =
    "bold";


    const playerFaction =
        document.createElement("div");

    playerFaction.innerHTML =
        player.faction +
        " / " +
        player.subfaction;

    playerFaction.style.fontSize =
        "12px";

    playerFaction.style.color =
        "rgba(255,255,255,0.6)";


    playerInfo.appendChild(
        playerName
    );

    playerInfo.appendChild(
        playerFaction
    );


    playerBlock.appendChild(
        playerInfo
    );


    // ========================================================
    // СТРЕЛКА
    // ========================================================

    const arrow =
        document.createElement("div");

    arrow.innerHTML =
        "›";

    arrow.style.marginLeft =
        "auto";

    arrow.style.fontSize =
        "24px";

    arrow.style.color =
        "rgba(255,255,255,0.45)";


    playerBlock.appendChild(
        arrow
    );


    // ========================================================
    // HOVER
    // ========================================================

    playerBlock.addEventListener(
        "mouseenter",
        () => {

            playerBlock.style.background =
                "rgba(216,194,122,0.10)";

            playerBlock.style.borderColor =
                "rgba(216,194,122,0.35)";

        }
    );


    playerBlock.addEventListener(
        "mouseleave",
        () => {

            playerBlock.style.background =
                "rgba(255,255,255,0.035)";

            playerBlock.style.borderColor =
                "rgba(255,255,255,0.08)";

        }
    );


    // ========================================================
    // КЛИК
    // ========================================================

    playerBlock.addEventListener(
        "click",
        () => {

            showPlayerModal(
                player
            );

        }
    );


    panel.appendChild(
        playerBlock
    );

}


// ============================================================
// СОЗДАНИЕ МОДАЛЬНОГО ОКНА
// ============================================================

function createPlayerModal() {

    // ========================================================
    // Затемнение
    // ========================================================

    playerModal =
        document.createElement("div");

    playerModal.style.position =
        "fixed";

    playerModal.style.left =
        "0";

    playerModal.style.top =
        "0";

    playerModal.style.width =
        "100vw";

    playerModal.style.height =
        "100vh";

    playerModal.style.background =
        "rgba(0,0,0,0.65)";

    playerModal.style.display =
        "none";

    playerModal.style.alignItems =
        "center";

    playerModal.style.justifyContent =
        "center";

    playerModal.style.zIndex =
        "5000";

    playerModal.style.backdropFilter =
        "blur(2px)";


    // ========================================================
    // Само окно
    // ========================================================

    const window =
        document.createElement("div");

    window.id =
        "CrusadePlayerWindow";

    window.style.width =
        "560px";

    window.style.maxWidth =
        "calc(100vw - 40px)";

    window.style.maxHeight =
        "calc(100vh - 60px)";

    window.style.boxSizing =
        "border-box";

    window.style.background =
        "rgba(10,10,10,0.96)";

    window.style.border =
        "1px solid rgba(216,194,122,0.45)";

    window.style.borderRadius =
        "7px";

    window.style.color =
        "#ffffff";

    window.style.fontFamily =
        "Segoe UI";

    window.style.overflow =
        "hidden";

    window.style.boxShadow =
        "0 15px 60px rgba(0,0,0,0.7)";


    // ========================================================
    // Шапка окна
    // ========================================================

    const header =
        document.createElement("div");

    header.style.display =
        "flex";

    header.style.alignItems =
        "center";

    header.style.padding =
        "16px 18px";

    header.style.borderBottom =
        "1px solid rgba(255,255,255,0.12)";


    // ========================================================
    // Контейнер шапки
    // ========================================================

    const headerInfo =
        document.createElement("div");

    headerInfo.id =
        "CrusadePlayerHeaderInfo";

    headerInfo.style.flex =
        "1";


    header.appendChild(
        headerInfo
    );


    // ========================================================
    // Кнопка закрытия
    // ========================================================

    const closeButton =
        document.createElement("button");

    closeButton.innerHTML =
        "×";

    closeButton.style.width =
        "34px";

    closeButton.style.height =
        "34px";

    closeButton.style.border =
        "none";

    closeButton.style.background =
        "transparent";

    closeButton.style.color =
        "rgba(255,255,255,0.7)";

    closeButton.style.fontSize =
        "28px";

    closeButton.style.cursor =
        "pointer";

    closeButton.style.lineHeight =
        "30px";


    closeButton.addEventListener(
        "mouseenter",
        () => {

            closeButton.style.color =
                "#ffffff";

        }
    );


    closeButton.addEventListener(
        "mouseleave",
        () => {

            closeButton.style.color =
                "rgba(255,255,255,0.7)";

        }
    );


    closeButton.addEventListener(
        "click",
        () => {

            hidePlayerModal();

        }
    );


    header.appendChild(
        closeButton
    );


    window.appendChild(
        header
    );


    // ========================================================
    // Содержимое
    // ========================================================

    const content =
        document.createElement("div");

    content.id =
        "CrusadePlayerContent";

    content.style.padding =
        "18px";

    content.style.overflowY =
        "auto";

    content.style.maxHeight =
        "calc(100vh - 155px)";

    content.style.boxSizing =
        "border-box";


    window.appendChild(
        content
    );


    // ========================================================
    // Собираем окно
    // ========================================================

    playerModal.appendChild(
        window
    );


    document.body.appendChild(
        playerModal
    );


    // ========================================================
    // Клик по затемнению закрывает окно
    // ========================================================

    playerModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                playerModal
            ) {

                hidePlayerModal();

            }

        }
    );


    // ========================================================
    // ESC закрывает окно
    // ========================================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                hidePlayerModal();

            }

        }
    );

}

// ============================================================
// РАНГ ИГРОКА
// ============================================================

function getPlayerRank(stars) {

    const ranks = [
        "Неофит",
        "Крещённый битвой",
        "Чемпион",
        "Ветеран",
        "Герой",
        "Вармастер"
    ];

    const safeStars = Math.max(
        0,
        Math.min(5, Number(stars) || 0)
    );

    return {
        stars: safeStars,
        name: ranks[safeStars]
    };
}


// ============================================================
// ПОКАЗАТЬ ИНФОРМАЦИЮ ИГРОКА
// ============================================================

function showPlayerModal(
    player
) {

    const headerInfo =
        document.getElementById(
            "CrusadePlayerHeaderInfo"
        );


    const content =
        document.getElementById(
            "CrusadePlayerContent"
        );


    // ========================================================
    // ШАПКА
    // ========================================================

    headerInfo.innerHTML =
        "";


   const playerTitle =
    document.createElement("div");

playerTitle.style.display =
    "flex";

playerTitle.style.alignItems =
    "center";

playerTitle.style.gap =
    "12px";


// ========================================================
// ИМЯ
// ========================================================

const playerName =
    document.createElement("span");

playerName.innerHTML =
    player.name;

playerName.style.fontSize =
    "21px";

playerName.style.fontWeight =
    "bold";

playerName.style.color =
    "#d8c27a";


// ========================================================
// РАНГ
// ========================================================

const rank =
    getPlayerRank(player.rankStars);

const rankDisplay =
    document.createElement("span");

rankDisplay.innerHTML =
    "★".repeat(rank.stars) +
    (rank.stars > 0 ? " " : "") +
    rank.name;

rankDisplay.style.fontSize =
    "13px";

rankDisplay.style.fontWeight =
    "normal";

rankDisplay.style.color =
    "#d8c27a";

rankDisplay.style.whiteSpace =
    "nowrap";


playerTitle.appendChild(
    playerName
);

playerTitle.appendChild(
    rankDisplay
);


    const faction =
        document.createElement("div");

    faction.innerHTML =
        player.faction +
        " / " +
        player.subfaction;

    faction.style.fontSize =
        "13px";

    faction.style.color =
        "rgba(255,255,255,0.6)";


    headerInfo.appendChild(
        playerTitle
    );

    headerInfo.appendChild(
        faction
    );


    // ========================================================
    // СОДЕРЖИМОЕ
    // ========================================================

    content.innerHTML =
        "";

        // ========================================================
// АЧИВКИ
// ========================================================

if (
    player.achievements &&
    player.achievements.length > 0
) {

    const achievementsTitle =
        document.createElement("div");

    achievementsTitle.innerHTML =
        "АЧИВКИ";

    achievementsTitle.style.fontSize =
        "11px";

    achievementsTitle.style.fontWeight =
        "bold";

    achievementsTitle.style.letterSpacing =
        "1.5px";

    achievementsTitle.style.color =
        "rgba(255,255,255,0.5)";

    achievementsTitle.style.marginBottom =
        "10px";

    content.appendChild(
        achievementsTitle
    );


    const achievementsContainer =
        document.createElement("div");

    achievementsContainer.style.marginBottom =
        "18px";


    for (
        const achievementId of player.achievements
    ) {

        const achievement =
            achievements[achievementId];

        // Если ID ачивки не найден
        // в справочнике — пропускаем её.

        if (!achievement) {
            continue;
        }


        const achievementRow =
            document.createElement("div");

        achievementRow.style.display =
            "flex";

        achievementRow.style.alignItems =
            "center";

        achievementRow.style.padding =
            "7px 8px";

        achievementRow.style.marginBottom =
            "5px";

        achievementRow.style.background =
            "rgba(255,255,255,0.035)";

        achievementRow.style.border =
            "1px solid rgba(255,255,255,0.08)";

        achievementRow.style.borderRadius =
            "5px";


        // ====================================================
        // ИКОНКА
        // ====================================================

        const icon =
            document.createElement("img");

        icon.src =
            achievement.icon;

        icon.alt =
            achievement.name;

        icon.style.width =
            "60px";

        icon.style.height =
            "60px";

        icon.style.objectFit =
            "contain";

        icon.style.marginRight =
            "14px";

        icon.style.flexShrink =
            "0";


        // ====================================================
        // НАЗВАНИЕ
        // ====================================================

        const name =
            document.createElement("div");

        name.innerHTML =
            achievement.name;

        name.style.fontSize =
            "13px";

        name.style.fontWeight =
            "bold";

        name.style.color =
            "#ffffff";


        achievementRow.appendChild(
            icon
        );

        achievementRow.appendChild(
            name
        );


        achievementsContainer.appendChild(
            achievementRow
        );

    }


    content.appendChild(
        achievementsContainer
    );

}

    if (
        !player.characters ||
        player.characters.length === 0
    ) {

        const empty =
            document.createElement("div");

        empty.innerHTML =
            "У игрока пока нет зарегистрированных персонажей.";

        empty.style.color =
            "rgba(255,255,255,0.55)";

        content.appendChild(
            empty
        );

    } else {

        const title =
            document.createElement("div");

        title.innerHTML =
            "ПЕРСОНАЖИ";

        title.style.fontSize =
            "11px";

        title.style.fontWeight =
            "bold";

        title.style.letterSpacing =
            "1.5px";

        title.style.color =
            "rgba(255,255,255,0.5)";

        title.style.marginBottom =
            "12px";


        content.appendChild(
            title
        );


        for (
            const character of player.characters
        ) {

            addCharacterToModal(
                content,
                character
            );

        }

    }


    // ========================================================
    // ПОКАЗЫВАЕМ
    // ========================================================

    playerModal.style.display =
        "flex";

}


// ============================================================
// ПЕРСОНАЖ В МОДАЛЬНОМ ОКНЕ
// ============================================================

function addCharacterToModal(
    container,
    character
) {

    const characterBlock =
        document.createElement("div");

    characterBlock.style.padding =
        "14px";

    characterBlock.style.marginBottom =
        "12px";

    characterBlock.style.background =
        "rgba(255,255,255,0.035)";

    characterBlock.style.border =
        "1px solid rgba(255,255,255,0.09)";

    characterBlock.style.borderRadius =
        "5px";


    // ========================================================
    // ИМЯ
    // ========================================================

    const name =
        document.createElement("div");

    name.innerHTML =
        character.name;

    name.style.fontSize =
        "17px";

    name.style.fontWeight =
        "bold";

    name.style.color =
        "#ffffff";


    characterBlock.appendChild(
        name
    );


    // ========================================================
    // DATASLATE
    // ========================================================

    const dataslate =
        document.createElement("div");

    dataslate.innerHTML =
        character.dataslate;

    dataslate.style.fontSize =
        "12px";

    dataslate.style.fontStyle =
        "italic";

    dataslate.style.color =
        "rgba(255,255,255,0.55)";

    dataslate.style.marginTop =
        "2px";


    characterBlock.appendChild(
        dataslate
    );


    // ========================================================
    // XP
    // ========================================================

    const experience =
        document.createElement("div");

    experience.innerHTML =
        "<b>XP:</b> " +
        character.experience;

    experience.style.fontSize =
        "13px";

    experience.style.color =
        "#d8c27a";

    experience.style.marginTop =
        "7px";


    characterBlock.appendChild(
        experience
    );


    // ========================================================
    // BATTLE TRAITS
    // ========================================================

    if (
        character.battleTraits &&
        character.battleTraits.length > 0
    ) {

        const traitsTitle =
            document.createElement("div");

        traitsTitle.innerHTML =
            "BATTLE-TRAITS";

        traitsTitle.style.fontSize =
            "10px";

        traitsTitle.style.fontWeight =
            "bold";

        traitsTitle.style.letterSpacing =
            "1px";

        traitsTitle.style.color =
            "rgba(255,255,255,0.45)";

        traitsTitle.style.marginTop =
            "12px";

        traitsTitle.style.marginBottom =
            "7px";


        characterBlock.appendChild(
            traitsTitle
        );


        for (
            const trait of character.battleTraits
        ) {

            const traitBlock =
                document.createElement("div");

            traitBlock.style.marginBottom =
                "10px";


            const traitName =
                document.createElement("div");

            traitName.innerHTML =
                trait.name;

            traitName.style.fontWeight =
                "bold";

            traitName.style.fontSize =
                "12px";

            traitName.style.color =
                "#d8c27a";


            const traitDescription =
                document.createElement("div");

            traitDescription.innerHTML =
                trait.description;

            traitDescription.style.fontSize =
                "12px";

            traitDescription.style.lineHeight =
                "1.5";

            traitDescription.style.color =
                "rgba(255,255,255,0.65)";


            traitBlock.appendChild(
                traitName
            );

            traitBlock.appendChild(
                traitDescription
            );


            characterBlock.appendChild(
                traitBlock
            );

        }

    }


    container.appendChild(
        characterBlock
    );

}


// ============================================================
// ЗАКРЫТЬ ОКНО
// ============================================================

function hidePlayerModal() {

    if (
        playerModal
    ) {

        playerModal.style.display =
            "none";

    }

}


// ============================================================
// РАЗДЕЛИТЕЛЬ
// ============================================================

function addDivider() {

    const divider =
        document.createElement("div");

    divider.style.height =
        "1px";

    divider.style.background =
        "rgba(180,180,180,0.2)";

    divider.style.margin =
        "14px 0";

    panel.appendChild(
        divider
    );

}

// ============================================================
// ИСТОРИЯ КРУСЕЙДА
// ============================================================

function showCrusadeHistory() {

    // ========================================================
    // ЗАТЕМНЕНИЕ ФОНА
    // ========================================================

    const overlay =
        document.createElement("div");

    overlay.style.position =
        "fixed";

    overlay.style.top =
        "0";

    overlay.style.left =
        "0";

    overlay.style.width =
        "100%";

    overlay.style.height =
        "100%";

    overlay.style.background =
        "rgba(0,0,0,0.72)";

    overlay.style.zIndex =
        "10000";

    overlay.style.display =
        "flex";

    overlay.style.justifyContent =
        "center";

    overlay.style.alignItems =
        "center";


    // ========================================================
    // ОКНО ИСТОРИИ
    // ========================================================

    const historyWindow =
        document.createElement("div");

    historyWindow.style.width =
        "620px";

    historyWindow.style.maxWidth =
        "90vw";

    historyWindow.style.maxHeight =
        "80vh";

    historyWindow.style.background =
        "rgba(12,13,16,0.98)";

    historyWindow.style.border =
        "1px solid rgba(216,194,122,0.45)";

    historyWindow.style.borderRadius =
        "6px";

    historyWindow.style.boxShadow =
        "0 0 40px rgba(0,0,0,0.8)";

    historyWindow.style.display =
        "flex";

    historyWindow.style.flexDirection =
        "column";

    historyWindow.style.overflow =
        "hidden";


    // ========================================================
    // ШАПКА
    // ========================================================

    const header =
        document.createElement("div");

    header.style.display =
        "flex";

    header.style.justifyContent =
        "space-between";

    header.style.alignItems =
        "center";

    header.style.padding =
        "18px 22px";

    header.style.borderBottom =
        "1px solid rgba(255,255,255,0.08)";


    // ========================================================
    // ЗАГОЛОВОК
    // ========================================================

    const title =
        document.createElement("div");

    title.innerHTML =
        "ИСТОРИЯ КРУСЕЙДА";

    title.style.fontSize =
        "18px";

    title.style.fontWeight =
        "bold";

    title.style.letterSpacing =
        "2px";

    title.style.color =
        "#d8c27a";


    // ========================================================
    // КНОПКА ЗАКРЫТИЯ
    // ========================================================

    const closeButton =
        document.createElement("button");

    closeButton.innerHTML =
        "✕";

    closeButton.style.background =
        "transparent";

    closeButton.style.border =
        "none";

    closeButton.style.color =
        "rgba(255,255,255,0.6)";

    closeButton.style.fontSize =
        "20px";

    closeButton.style.cursor =
        "pointer";

    closeButton.style.padding =
        "0 4px";

    closeButton.addEventListener(
        "click",
        () => {

            overlay.remove();

        }
    );


    header.appendChild(
        title
    );

    header.appendChild(
        closeButton
    );


    // ========================================================
    // СОДЕРЖИМОЕ
    // ========================================================

    const content =
        document.createElement("div");

    content.style.padding =
        "24px";

    content.style.overflowY =
        "auto";


    // ========================================================
    // ТЕКУЩАЯ ФАЗА
    // ========================================================

    const phase =
        document.createElement("div");

    phase.style.textAlign =
        "center";

    phase.style.padding =
        "18px";

    phase.style.marginBottom =
        "25px";

    phase.style.background =
        "rgba(216,194,122,0.05)";

    phase.style.border =
        "1px solid rgba(216,194,122,0.2)";

    phase.style.borderRadius =
        "4px";


    const phaseLabel =
        document.createElement("div");

    phaseLabel.innerHTML =
        "ТЕКУЩАЯ ФАЗА";

    phaseLabel.style.fontSize =
        "11px";

    phaseLabel.style.fontWeight =
        "bold";

    phaseLabel.style.letterSpacing =
        "2px";

    phaseLabel.style.color =
        "rgba(255,255,255,0.45)";

    phaseLabel.style.marginBottom =
        "8px";


    const phaseName =
        document.createElement("div");

    phaseName.innerHTML =
    `МАССИРОВАННОЕ ВТОРЖЕНИЕ`;

    phaseName.style.fontSize =
        "26px";

    phaseName.style.fontWeight =
        "bold";

    phaseName.style.color =
        "#d8c27a";


    phase.appendChild(
        phaseLabel
    );

    phase.appendChild(
        phaseName
    );

    

   

    const phaseTitle =
    document.createElement("div");

phaseTitle.innerHTML =
    crusadeHistory.currentPhase.name;

phaseTitle.style.fontSize =
    "13px";

phaseTitle.style.fontWeight =
    "bold";

phaseTitle.style.letterSpacing =
    "1px";

phaseTitle.style.color =
    "rgba(255,255,255,0.65)";

phaseTitle.style.marginTop =
    "6px";

    phase.appendChild(
    phaseTitle
);

    // ========================================================
    // ЗАГЛУШКА СОБЫТИЙ
    // ========================================================

    const eventsTitle =
        document.createElement("div");

    eventsTitle.innerHTML =
        "ХРОНИКА СОБЫТИЙ";

    eventsTitle.style.fontSize =
        "11px";

    eventsTitle.style.fontWeight =
        "bold";

    eventsTitle.style.letterSpacing =
        "1.5px";

    eventsTitle.style.color =
        "rgba(255,255,255,0.5)";

    eventsTitle.style.marginBottom =
        "14px";


    


    content.appendChild(
        phase
    );

    content.appendChild(
        eventsTitle
    );

    // ========================================================
// СОБЫТИЯ КРУСЕЙДА
// ========================================================

for (
    const event of crusadeHistory.events
) {

    const eventCard =
        document.createElement("div");

    eventCard.style.padding =
        "16px";

    eventCard.style.marginBottom =
        "10px";

    eventCard.style.background =
        "rgba(255,255,255,0.025)";

    eventCard.style.border =
        "1px solid rgba(255,255,255,0.08)";

    eventCard.style.borderRadius =
        "4px";


    // ====================================================
    // ТИП СОБЫТИЯ
    // ====================================================

    const eventType =
        document.createElement("div");

    eventType.innerHTML =
        event.type.toUpperCase();

    eventType.style.fontSize =
        "10px";

    eventType.style.fontWeight =
        "bold";

    eventType.style.letterSpacing =
        "1.5px";

    eventType.style.color =
        "#d8c27a";

    eventType.style.marginBottom =
        "7px";


    // ====================================================
    // НАЗВАНИЕ СОБЫТИЯ
    // ====================================================

    const eventTitle =
        document.createElement("div");

    eventTitle.innerHTML =
        event.title;

    eventTitle.style.fontSize =
        "16px";

    eventTitle.style.fontWeight =
        "bold";

    eventTitle.style.color =
        "#ffffff";

    eventTitle.style.marginBottom =
        "8px";


    // ====================================================
    // ОПИСАНИЕ СОБЫТИЯ
    // ====================================================

    const eventDescription =
        document.createElement("div");

    eventDescription.innerHTML =
        event.description;

    eventDescription.style.fontSize =
        "13px";

    eventDescription.style.lineHeight =
        "1.5";

    eventDescription.style.color =
        "rgba(255,255,255,0.6)";


    // ====================================================
    // СОБИРАЕМ КАРТОЧКУ СОБЫТИЯ
    // ====================================================

    eventCard.appendChild(
        eventType
    );

    eventCard.appendChild(
        eventTitle
    );

    eventCard.appendChild(
        eventDescription
    );

    content.appendChild(
        eventCard
    );

}


    // ========================================================
    // СОБИРАЕМ ОКНО
    // ========================================================

    historyWindow.appendChild(
        header
    );

    historyWindow.appendChild(
        content
    );

    overlay.appendChild(
        historyWindow
    );

    document.body.appendChild(
        overlay
    );


    // ========================================================
    // ЗАКРЫТИЕ ПО КЛИКУ НА ФОН
    // ========================================================

    overlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target === overlay
            ) {

                overlay.remove();

            }

        }
    );

}