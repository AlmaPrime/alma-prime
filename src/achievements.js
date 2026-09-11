import firstBloodIcon from "./assets/achievements/first_blood.png";
import titanSlayerIcon from "./assets/achievements/titan_slayer.png";
import blitzkriegIcon from "./assets/achievements/blitzkrieg.png";
import domesticAbuseIcon from "./assets/achievements/domestic_abuse.png";
import traitorIcon from "./assets/achievements/traitor.png";
import loyalIcon from "./assets/achievements/loyal.png";
import victoryIcon from "./assets/achievements/victory.png";
import looserIcon from "./assets/achievements/looser.png"
import tacticalIcon from "./assets/achievements/tactical.png"
import anihillatorIcon from "./assets/achievements/anihillator.png"
import nochanceIcon from "./assets/achievements/no_chance.png"
import fulgrimIcon from "./assets/achievements/fulgrim.png"
import sangviniyIcon from "./assets/achievements/sangviniy.png"
import seriusIcon from "./assets/achievements/serius.png"
import chain_reactionIcon from "./assets/achievements/chain_reaction.png"
import disgraceIcon from "./assets/achievements/disgrace.png"
import controlIcon from "./assets/achievements/control.png"
import tzinchIcon from "./assets/achievements/tzinch.png"
import prosperoIcon from "./assets/achievements/prospero.png"
import warlord_deadIcon from "./assets/achievements/warlord_dead.png"


// ============================================================
// СПРАВОЧНИК АЧИВОК КРУСЕЙДА
// ============================================================

export const achievements = {

    // ========================================================
    // FIRST BLOOD
    // ========================================================

    first_blood: {

        name: "FIRST BLOOD - убить юнит противника в свой первый ход",

        icon: firstBloodIcon

    },


    // ========================================================
    // TITAN SLAYER
    // ========================================================

    titan_slayer: {

        name: "TITAN SLAYER - уничтожить юнит с кейвордом TITANIC юнитом с кейвордом INFANTRY из одной модели",

        icon: titanSlayerIcon

    },

     blitzkrieg: {

        name: "BLITZKRIEG - убить все юниты противника до окончания третьего раунда и победить в битве",

        icon: blitzkriegIcon

    },

    domestic_abuse: {

        name: "DOMESTIC ABUSE - убить моделью ROBAUT GILLIMAN модель YVRAINE либо наоборот",

        icon: domesticAbuseIcon

    },

    traitor: {

        name: "TRAITOR WITHIN",

        icon: traitorIcon

    },

    loyal: {

        name: "LOYALIST WITHIN",

        icon: loyalIcon

    },

    victory: {

        name: "INVINCIBLE",

        icon: victoryIcon

    },

    looser: {

        name: "MAIN IS FUN",

        icon: looserIcon

    },

    tactical: {

        name: "TACTICAL MASTER - проиграть битву, но заработать больше Campaign point, чем оппонент",

        icon: tacticalIcon

    },

     anihillator: {

        name: "ANIHILLATOR - убить юнит с одной активации, нанеся суммарно более 25 damage",

        icon: anihillatorIcon

    },

    no_chance: {

        name: "NO CHANCE - уничтожить юнит, так что бы противник не мог бросить сейв-ролл",

        icon: nochanceIcon

    },

    fulgrim: {

        name: "DAD, I KILLED MY BROTHER - убить моделью с кейвордом PRIMARСH другую модель с кейвордом PRIMARСH",

        icon: fulgrimIcon

    },
    
    sangviniy: {

        name: "SANGUINIUS CHALLENGE - бросить не менее семи единиц на сейв-ролле",

        icon: sangviniyIcon

    },

    serius: {

        name: "ARE YOU SERIOUS - убить юнит, который стоит минимум в два раза больше очков, чем юнит его уничтоживший",

        icon: seriusIcon

    },

    chain_reaction: {

        name: "CHAIN REACTION - уничтожить юнит со способностью Deadly Demise, взрыв которой уничтожит любой другой юнит",

        icon: chain_reactionIcon

    },

    disgrace: {

        name: "GALAXY DISGRACE - провалить Battle-shock тест всеми юнитами в одной битве",

        icon: disgraceIcon

    },

    control: {

        name: "ABSOLUT CONTROL - удерживать один и тот же  objective-маркер в No Men Land 5 раундов ",

        icon: controlIcon

    },

    tzinch: {

        name: "JUST AS PLANNED - выиграть битву, потеряв к последнему раунду все юниты",

        icon: tzinchIcon

    },

     prospero: {

        name: "PROSPERO 2.0 - играя за фракцию Space Wolves сыгарть против игрока на фракции Thousand Sons или наоборот" ,

        icon: prosperoIcon

    },

      warlord_dead: {

        name: "WARLORD...O SHIT! - убить вражескую модель WARLORD с одной активации на первом ходу",

        icon: warlord_deadIcon

    },

    

};