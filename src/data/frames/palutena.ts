// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "palutena",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaJab1.gif"
          ],
          "startup": "8",
          "active": "8—9",
          "total": "24",
          "endlag": "15",
          "damage": "3.0",
          "advantage": "-12",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Transitions to rapid jab as early as frame 13"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaJabRapid.gif"
          ],
          "startup": "4/7/10...",
          "active": "4/7/10...",
          "damage": "0.6",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaJabRapidEnd.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "39",
          "endlag": "36",
          "damage": "3.5",
          "advantage": "-32",
          "shieldLag": "11",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaFTilt.gif"
          ],
          "startup": "14/24",
          "active": "14—23/24—35",
          "total": "59",
          "endlag": "24",
          "damage": "6.0/7.0",
          "advantage": "-28",
          "shieldLag": "6/7",
          "shieldStun": "6/7",
          "notes": "Right-arm intangible 14—35"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaUTilt.gif"
          ],
          "startup": "8...",
          "active": "8—22/24—25 (rehit: 3)",
          "total": "55",
          "endlag": "30",
          "damage": "1.4/4.5",
          "advantage": "-27",
          "shieldLag": "4/7",
          "shieldStun": "3/4",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaDTilt.gif"
          ],
          "startup": "14",
          "active": "14—27",
          "total": "39",
          "endlag": "12",
          "damage": "8.5 (grounded opponents) // 5.0 (aerial opponents)",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaDashAttack.gif"
          ],
          "startup": "6",
          "active": "6—9/10—17",
          "total": "40",
          "endlag": "23",
          "damage": "11.0/7.0",
          "advantage": "-23/-21",
          "shieldLag": "8/7",
          "shieldStun": "10/7",
          "hitboxes": "Early/Late",
          "notes": "Head, torso, and arm invincibility on frame 5-6. Arm invincibility continues frame 7-16"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaFSmash.gif"
          ],
          "startup": "18",
          "active": "18—20",
          "total": "63",
          "endlag": "43",
          "damage": "16.0/13.0",
          "advantage": "-34/-36",
          "shieldLag": "10/9",
          "shieldStun": "11/9",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 10"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaUSmash.gif"
          ],
          "startup": "18",
          "active": "18—29/30—35",
          "total": "63",
          "endlag": "28",
          "damage": "(16.0%/12.0%/9.0%)/(13.0%/9.0%/7.0%)",
          "advantage": "-34/-37",
          "shieldLag": "10/9",
          "shieldStun": "11/8",
          "hitboxes": "Early/Late",
          "notes": "Charge hold is frame 12. Damage values are Early(Close/Mid/Far)/Late(Close/Mid/Far)."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaDSmash.gif"
          ],
          "startup": "17",
          "active": "17—19",
          "total": "68",
          "endlag": "49",
          "damage": "15.0/13.0",
          "advantage": "-41/-42",
          "shieldLag": "14/9",
          "shieldStun": "10/9",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 13"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaNAir.gif"
          ],
          "startup": "5...",
          "active": "5—27/29—30 (rehit: 4)",
          "total": "51",
          "endlag": "21",
          "landingLag": "12",
          "damage": "1.4/5.0",
          "advantage": "-10/-9",
          "shieldLag": "4/9",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-3 and 40 onward. Final hitbox has an inner and outer circle as of 7.0.0 -- inner circle only hits aerial opponents, outer circle only hits grounded opponents."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaFAir.gif"
          ],
          "startup": "9",
          "active": "9—11",
          "total": "44",
          "endlag": "33",
          "landingLag": "9",
          "damage": "10.0",
          "advantage": "-5",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-3 and 24 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaBAir.gif"
          ],
          "startup": "8",
          "active": "8—10",
          "total": "49",
          "endlag": "39",
          "landingLag": "10",
          "damage": "12.0",
          "advantage": "-5",
          "shieldLag": "11",
          "shieldStun": "5",
          "notes": "Arm invinicibility on frame 7-10. Autocancels on frame 1-2 and 35 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaUAir.gif"
          ],
          "startup": "10...",
          "active": "10—22/24—25 (rehit: 3)",
          "total": "51",
          "endlag": "26",
          "landingLag": "14",
          "damage": "1.0/5.0",
          "advantage": "-12/-11",
          "shieldLag": "4/9",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-2 and 42 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaDAir.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "58",
          "endlag": "47",
          "landingLag": "11",
          "damage": "11.0",
          "advantage": "-7",
          "shieldLag": "13",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-2 and 48 onward"
        },
        {
          "name": "Neutral B (Autoreticle)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaAutoreticle.gif"
          ],
          "startup": "24/30/36",
          "active": "24/30/36",
          "total": "67",
          "endlag": "31",
          "damage": "3.5",
          "advantage": "-24",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Targets on frames 7-14."
        },
        {
          "name": "Side B (Explosive Flame)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaExplosiveFlame.gif"
          ],
          "startup": "28/33/38/43/48/53/57",
          "active": "28/33/38/43/48/53/57",
          "total": "71",
          "endlag": "14",
          "damage": "1.5/5.5",
          "advantage": "-2",
          "shieldLag": "4/9",
          "shieldStun": "-/3",
          "hitboxes": "Multi/Final",
          "notes": "Area of explosion dictated on frame 1. Smash input for farther distance"
        },
        {
          "name": "Up B (Warp)",
          "section": "special",
          "total": "67",
          "landingLag": "22",
          "notes": "Invulnerable on frame 16-32. Total frames refers to ending on the ground."
        },
        {
          "name": "Down B (Counter)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaCounter.gif"
          ],
          "startup": "7 (Start of Counter/Reflect)",
          "total": "70",
          "notes": "Invulnerable on frame 6. Counters/Reflects on frame 7-34"
        },
        {
          "name": "Counter, Attack/Reflect",
          "section": "special",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaCounterHit.gif",
            "hitboxes/palutena/PalutenaReflectBarrier.gif"
          ],
          "startup": "4/--",
          "active": "4—6",
          "total": "36/34",
          "endlag": "30",
          "hitboxes": "Attack/Reflect",
          "notes": "Attack: Invulnerable on frame 1-5 in addition to counter freeze frames. Reflect: Barrier lasts until frame 45 for additional reflects. Wind box on 1-11."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaGrab.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "39",
          "endlag": "31"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaDashGrab.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "47",
          "endlag": "36"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaPivotGrab.gif"
          ],
          "startup": "11",
          "active": "11—12",
          "total": "42",
          "endlag": "30"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaFThrow.gif"
          ],
          "startup": "20",
          "total": "44",
          "damage": "9.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaBThrow.gif"
          ],
          "startup": "20",
          "total": "54",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaUThrow.gif"
          ],
          "startup": "17",
          "total": "54",
          "damage": "8.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/palutena/PalutenaDThrow.gif"
          ],
          "startup": "25",
          "total": "45",
          "damage": "5.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "20/25",
          "notes": "Intangible on frame 3-17"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "29",
          "notes": "Intangible on frame 4-15"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "34",
          "notes": "Intangible on frame 5-16"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "49",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "70",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "77",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "82",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "93",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "105",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/palutena/palutenaGetupAttackU.gif",
            "hitboxes/palutena/palutenaGetupAttackD.gif",
            "hitboxes/palutena/palutenaTripAttack.gif",
            "hitboxes/palutena/palutenaLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/palutena",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
