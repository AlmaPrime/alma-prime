// ============================================================
// МУЗЫКА ALMA PRIME
// ============================================================

import coronation from "./assets/audio/coronation.mp3";
import imperial from "./assets/audio/imperial.mp3";
import machine from "./assets/audio/machine.mp3";
import nemesis from "./assets/audio/nemesis.mp3";
import starwars from "./assets/audio/starwars.mp3";
import doom from "./assets/audio/doom.mp3";


// ============================================================
// ПЛЕЙЛИСТ
// ============================================================

const playlist = [

    coronation,
    imperial,
    machine,
    nemesis,
    doom,
    starwars

];


// ============================================================
// СОЗДАЁМ АУДИО
// ============================================================

const audio =
    new Audio();

audio.volume =
    0.35;

let musicEnabled =
    false;

let currentTrack =
    -1;


// ============================================================
// СЛУЧАЙНЫЙ ТРЕК
// ============================================================

function playRandomTrack() {

    let nextTrack;


    // Не даём следующему треку совпасть
    // с предыдущим
    do {

        nextTrack =
            Math.floor(
                Math.random() *
                playlist.length
            );

    } while (
        playlist.length > 1 &&
        nextTrack === currentTrack
    );


    currentTrack =
        nextTrack;

    audio.src =
        playlist[currentTrack];

    audio.play();

}


// ============================================================
// СЛЕДУЮЩИЙ ТРЕК ПОСЛЕ ОКОНЧАНИЯ
// ============================================================

audio.addEventListener(
    "ended",
    () => {

        if (musicEnabled) {

            playRandomTrack();

        }

    }
);


// ============================================================
// СОЗДАНИЕ КНОПКИ
// ============================================================

export function createMusicButton() {

    const musicButton =
        document.createElement("button");

    musicButton.innerHTML =
        "♫ MUSIC: OFF";

    musicButton.style.position =
        "fixed";

    musicButton.style.right =
        "25px";

    musicButton.style.bottom =
        "25px";

    musicButton.style.zIndex =
        "100";

    musicButton.style.padding =
        "10px 16px";

    musicButton.style.background =
        "rgba(10,10,15,0.85)";

    musicButton.style.border =
        "1px solid rgba(216,194,122,0.55)";

    musicButton.style.borderRadius =
        "4px";

    musicButton.style.color =
        "#d8c27a";

    musicButton.style.fontSize =
        "11px";

    musicButton.style.fontWeight =
        "bold";

    musicButton.style.letterSpacing =
        "1px";

    musicButton.style.cursor =
        "pointer";


    // ========================================================
    // ВКЛЮЧЕНИЕ / ВЫКЛЮЧЕНИЕ
    // ========================================================

    musicButton.addEventListener(
        "click",
        () => {

            if (!musicEnabled) {

                musicEnabled =
                    true;

                playRandomTrack();

                musicButton.innerHTML =
                    "♫ MUSIC: ON";

            }

            else {

                musicEnabled =
                    false;

                audio.pause();

                musicButton.innerHTML =
                    "♫ MUSIC: OFF";

            }

        }
    );


    document.body.appendChild(
        musicButton
    );

}