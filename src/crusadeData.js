import artemAvatar from "./assets/avatars/artem.png";
import rustemAvatar from "./assets/avatars/rustem.png";
import farkhadAvatar from "./assets/avatars/farkhad.png"
import mishaAvatar from "./assets/avatars/misha.png"
import akbarAvatar from "./assets/avatars/akbar.png"
import yuraAvatar from "./assets/avatars/yura.png"
import dimaAvatar from "./assets/avatars/dima.png"
import shurikenAvatar from "./assets/avatars/shuriken.png"
import timurAvatar from "./assets/avatars/timur.png"
import nikitaAvatar from "./assets/avatars/nikita.png"
import ruslanAvatar from "./assets/avatars/ruslan.png"
import alibekAvatar from "./assets/avatars/alibek.png"
import mardenAvatar from "./assets/avatars/marden.png"
import stepanAvatar from "./assets/avatars/stepan.png"
import zhandarbekAvatar from "./assets/avatars/zhandarbek.png"
import ansarAvatar from "./assets/avatars/ansar.png"
import alisherAvatar from "./assets/avatars/alisher.png"
import dima_zAvatar from "./assets/avatars/dima_z.png"
import nikita_sAvatar from "./assets/avatars/nikita_s.png"
import kolyaAvatar from "./assets/avatars/kolya.png"
import alexAvatar from "./assets/avatars/alex.png"
import tamerlanAvatar from "./assets/avatars/tamerlan.png"
import nemoAvatar from "./assets/avatars/nemo.png"


// ============================================================
// ДАННЫЕ КРУСЕЙДА ALMA PRIME
// ============================================================

// ============================================================
// СЧЁТ АЛЬЯНСОВ
// ============================================================

export const crusadeScore = {
    Imperium: 0,
    Chaos: 0,
    Tyranids: 0,
    Marauders: 0
};

// ============================================================
// УЧАСТНИКИ КРУСЕЙДА
// ============================================================

export const crusadePlayers = [

    // ========================================================
    // ПРИМЕР ИГРОКА
    // ========================================================

    {
        name: "Artem",

        faction: "Chaos",

        subfaction: "Death Guard",

        avatar: artemAvatar,

        rankStars: 4,

        achievements: [
    "first_blood",
    "titan_slayer",
    "no_chance",
    "fulgrim",
    "sangviniy",
    "serius",
],

        

        // ====================================================
        // ПЕРСОНАЖИ ИГРОКА
        // ====================================================

        characters: [

            // ========================================================
            // ПЕРСОНАЖ 1
            // ========================================================

            {
                name: "3x Tri-lobe Vectors [Crucible]",

                dataslate: "CRUCIBLE",

                experience: 0,

                battleTraits: [
                    {
                        name: "none",

                        description:
                            ""
                    }
                ]
            },

            // ========================================================
            // ПЕРСОНАЖ 2
            // ========================================================

            {
                name: "6x Deathshroud Terminators",

                dataslate: "Deathshroud Terminators",

                experience: 0,

                battleTraits: [
                    {
                        name: "none",

                        description:
                            ""
                    },

                    {
                        name: "-none-",

                        description:
                            ""
                    }
                ]
            },

            // ========================================================
            // ПЕРСОНАЖ 3
            // ========================================================

            {
                name: "Defiler",

                dataslate: "Defiler",

                experience: 0,

                battleTraits: [
                    {
                        name: "none",

                        description:
                            ""
                    }
                ]
            }
        ]
    },
     {
        name: "Rustem",

        faction: "Imperium",

        subfaction: "Deathwatch",

        avatar: rustemAvatar,

        rankStars: 0,

        achievements: [
    "blitzkrieg",
    "domestic_abuse",
    "traitor",
    "loyal",
    "victory",
    "looser",
    "tactical",
    "anihillator",
    
],


        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "Ganibal Gaal",

                dataslate: "Watchmaster",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "Aeris",

                dataslate: "Venerable Brother-Dreadnought (crusible)",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "Odium Squad",

                dataslate: "Deathwatch Veterans Squad",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Farkhad",

        faction: "Imperium",

        subfaction: "Space Wolves",

        avatar: farkhadAvatar,

        rankStars: 0,

        achievements: [
    "chain_reaction",
    "disgrace",
    
    
],

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "Wolf Priest",

                dataslate: "Wolf Priest",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "Wolfguard Headtakers (6)",

                dataslate: "Wolfguard Headtakers",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "Wolfguard Terminators",

                dataslate: "Wolfguard Terminators",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Misha",

        faction: "Imperium",

        subfaction: "Space Wolves",

        avatar: mishaAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Akbar",

        faction: "Imperium",

        subfaction: "Astra Militarum",

        avatar: akbarAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "Shadowsword (Battalion Commander)",

                dataslate: "Shadowsword (Battalion Commander)",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "Krieg Command Squad",

                dataslate: "Krieg Command Squad",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "Tech-Priest Enginseer",

                dataslate: "Tech-Priest Enginseer",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Yura",

        faction: "Marodeurs",

        subfaction: "Drukhari",

        avatar: yuraAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Dima K",

        faction: "Maradeurs",

        subfaction: "Tau Empire",

        avatar: dimaAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "hazard battlesuit",

                dataslate: "hazard battlesuit",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "Kroot Lone-spear",

                dataslate: "Kroot Lone-spear",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "Kroot War Shaper",

                dataslate: "Kroot War Shaper",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Shuriken",

        faction: "Imperium",

        subfaction: "Adeptus Custodes",

        avatar: shurikenAvatar,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "Blade Champion",

                dataslate: "Blade Champion",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "4x Custodian Guard ",

                dataslate: "4x Custodian Guard ",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "3x Allarus Custodians",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Timur",

        faction: "Maradeurs",

        subfaction: "Leagues of Votann",

        avatar: timurAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Nikita T",

        faction: "Imperium",

        subfaction: "Adeptus Mechanicus",

        avatar: nikitaAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "Tech-priest Manipulus",

                dataslate: "Tech-priest Manipulus",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "Kataphron breachers (3)",

                dataslate: "Kataphron breachers (3)",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "Onager dunecrawler",

                dataslate: "Onager dunecrawler",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Ruslan",

        faction: "Chaos",

        subfaction: "Chaos Space Marines",

        avatar: ruslanAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: " Sorcerer in terminator armor",

                dataslate: "Sorcerer in terminator armor",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "Chaos Terminator Squad",

                dataslate: "Chaos Terminator Squad",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "Chaos Predator Annihilator",

                dataslate: "Chaos Predator Annihilator",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
     {
        name: "Alibek",

        faction: "Chaos",

        subfaction: "Emperor's Children",

        avatar: alibekAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Marden",

        faction: "Tyranids",

        subfaction: "Tyranids",

        avatar: mardenAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Stepan",

        faction: "Chaos",

        subfaction: "Worlds Eaters",

        avatar: stepanAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Zhandarbek",

        faction: "Chaos",

        subfaction: "Worlds Eaters",

        avatar: zhandarbekAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "Khorne Lord of Skulls",

                dataslate: "Khorne Lord of Skulls",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "Slaughterbound ",

                dataslate: "Slaughterbound ",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: " Exalted Eightbound",

                dataslate: " Exalted Eightbound",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Ansar",

        faction: "Imperium",

        subfaction: "Adepta Sororitas",

        avatar: ansarAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-dataslate-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Alisher",

        faction: "Chaos",

        subfaction: "Thousand Suns",

        avatar: alisherAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "Sorcerer",

                dataslate: "Sorcerer",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "Rubric marines 10",

                dataslate: "Rubric marines",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "Defiler",

                dataslate: "Defiler",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Dima Z",

        faction: "Maradeurs",

        subfaction: "Tau Empire",

        avatar: dima_zAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "Cadre Fireblade",

                dataslate: "Cadre Fireblade",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "10x Breacher Team",

                dataslate: "10x Breacher Team",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "Stormsurge",

                dataslate: "Stormsurge",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Nikita S",

        faction: "Imperium",

        subfaction: "Iron Hands",

        avatar: nikita_sAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "Techmarine",

                dataslate: "Techmarine",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "Ballistus Dreadnought",

                dataslate: "Ballistus Dreadnought",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "Incursor Squad",

                dataslate: "Incursor Squad",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Kolya",

        faction: "Tyranids",

        subfaction: "Genestiller Cult",

        avatar: kolyaAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Alex",

        faction: "Undecided alliance",

        subfaction: "None",

        avatar: alexAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Tamerlan",

        faction: "Undecided alliance",

        subfaction: "None",

        avatar: tamerlanAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },
    {
        name: "Nemo",

        faction: "Undecided alliance",

        subfaction: "None",

        avatar: nemoAvatar,

        rankStars: 0,

        characters: [

            // ------------------------------------------------
            // Персонаж 1
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    }

                ]

            },


            // ------------------------------------------------
            // Персонаж 2
            // ------------------------------------------------

            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            },
            {
                name: "-name-",

                dataslate: "-name-",

                experience: 0,

                battleTraits: [

                    {
                        name: "None",

                        description:
                            ""
                    },

                    

                ]

            }

        ]

    },


];
;


// ============================================================
// ПРИМЕЧАНИЕ
// ============================================================
//
// Чтобы добавить нового участника, создаём ещё один объект
// внутри crusadePlayers.
//
// Например:
//
// {
//     name: "Player2",
//     faction: "Imperium",
//     subfaction: "Ultramarines",
//     avatar: null,
//
//     characters: []
// }
//
// ============================================================