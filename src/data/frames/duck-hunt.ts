// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "duck-hunt",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntJab1.gif"
          ],
          "startup": "4",
          "active": "4",
          "total": "25",
          "endlag": "21",
          "damage": "1.5",
          "advantage": "-18",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 7."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntJab2.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "27",
          "endlag": "21",
          "damage": "1.5",
          "advantage": "-19",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 8 and rapid jab as early as frame 7"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntJab3.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "33",
          "endlag": "26",
          "damage": "5.0",
          "advantage": "-21",
          "shieldLag": "12",
          "shieldStun": "6"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntJabRapid.gif"
          ],
          "startup": "5/7/9/...",
          "damage": "0.4",
          "shieldLag": "4",
          "shieldStun": "3"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntJabRapidEnd.gif"
          ],
          "startup": "5",
          "active": "5",
          "total": "45",
          "endlag": "40",
          "damage": "3.0",
          "advantage": "-36",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntFTilt.gif",
            "hitboxes/duck_hunt/DuckHuntFTiltUp.gif",
            "hitboxes/duck_hunt/DuckHuntFTiltDown.gif"
          ],
          "startup": "8",
          "active": "8-11",
          "total": "31",
          "endlag": "20",
          "damage": "8.0",
          "advantage": "-15",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntUTilt.gif"
          ],
          "startup": "7",
          "active": "7-11",
          "total": "27",
          "endlag": "16",
          "damage": "7.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntDTilt.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "27",
          "endlag": "20",
          "damage": "8.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntDashAttack.gif"
          ],
          "startup": "10",
          "active": "10-13(14-19)",
          "total": "43",
          "endlag": "24",
          "damage": "10.0/7.0",
          "advantage": "-23",
          "shieldLag": "8/7",
          "shieldStun": "10/7",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntFSmash.gif"
          ],
          "startup": "17/23/29",
          "active": "17-18/23-24/29-30",
          "total": "66",
          "endlag": "36",
          "damage": "4.0/9.0",
          "advantage": "-30",
          "shieldLag": "5/7",
          "shieldStun": "4/7",
          "hitboxes": "Multi/Final",
          "notes": "Charge hold is frame 5."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntUSmash.gif"
          ],
          "startup": "12/20/28",
          "active": "12-13/20-21/28-29",
          "total": "57",
          "endlag": "28",
          "damage": "2.5/10",
          "advantage": "-22",
          "shieldLag": "5/8",
          "shieldStun": "3/7",
          "hitboxes": "Multi/Final",
          "notes": "Charge hold is frame 5."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntDSmash.gif"
          ],
          "startup": "12/20/28",
          "active": "12-13/20-21/28-29",
          "total": "57",
          "endlag": "28",
          "damage": "5.0/6.0",
          "advantage": "-24",
          "shieldLag": "6/6",
          "shieldStun": "4/5",
          "hitboxes": "Multi/Final",
          "notes": "Charge hold is frame 2."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntNAir.gif"
          ],
          "startup": "6",
          "active": "6-8(9-37)",
          "total": "55",
          "endlag": "18",
          "landingLag": "10",
          "damage": "11./5.0",
          "advantage": "-5/-7",
          "shieldLag": "9/6",
          "shieldStun": "5/3",
          "notes": "Autocancels on frame 1-3 and 44 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntFAir.gif"
          ],
          "startup": "7",
          "active": "7(8-9/10-11)",
          "total": "44",
          "endlag": "33",
          "landingLag": "9",
          "damage": "10.0/6.5/7.5",
          "advantage": "-5/-6/-6",
          "shieldLag": "10/6/8",
          "shieldStun": "4/3/3",
          "hitboxes": "Far/Close/Late",
          "notes": "Autocancels on frame 1-5 and 46 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntBAir.gif"
          ],
          "startup": "7",
          "active": "7-8(9-10)",
          "total": "41",
          "endlag": "31",
          "landingLag": "14",
          "damage": "12.5/10.0",
          "advantage": "-9/-10",
          "shieldLag": "11/8",
          "shieldStun": "5/4",
          "hitboxes": "Far/Close",
          "notes": "Autocancels on frame 1-3 and 35 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntUAir.gif"
          ],
          "startup": "6/12/20",
          "active": "6-7/12-13/20-21",
          "total": "39",
          "endlag": "18",
          "landingLag": "11",
          "damage": "3.0/6.0",
          "advantage": "-9/-8",
          "shieldLag": "5/6",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 32 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntDAir.gif"
          ],
          "startup": "14/20",
          "active": "14-15/20-21",
          "total": "49",
          "endlag": "28",
          "landingLag": "15",
          "damage": "5.0/10.0",
          "advantage": "-12/-11",
          "shieldLag": "6/8",
          "shieldStun": "3/4",
          "notes": "Autocancels on frame 1-3 and 45 onward"
        },
        {
          "name": "Neutral B (Trick Shot)",
          "section": "special",
          "startup": "1 / 16 / 1-2",
          "active": "1 / 16-? / 1-2",
          "total": "41",
          "endlag": "39",
          "damage": "~2.0/10.0",
          "shieldLag": "-/8",
          "shieldStun": "-/4",
          "hitboxes": "Can/Explosion",
          "notes": "Explodes next frame after making contact. Can shoot the can every 12 frames. Can generates on frame 1. After eighth shot, can will auto explode after 76 frames but can still be manipulated."
        },
        {
          "name": "Side B (Clay Shooting)",
          "section": "special",
          "startup": "17",
          "active": "17-?",
          "total": "64",
          "damage": "2.0",
          "shieldLag": "9",
          "shieldStun": "2",
          "notes": "Can only detonate when clay is immobile or rebounding after a hit. \"Missed shots\" occur on frame 4."
        },
        {
          "name": "Clay Shooting, Detonate",
          "section": "special",
          "startup": "4/5/14/23",
          "damage": "2.5/3.0",
          "shieldLag": "7/5",
          "shieldStun": "2/2",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Up B (Duck Jump)",
          "section": "special",
          "landingLag": "30",
          "notes": "Can cancel into air dodge or attacks as early as frame 51. Cancels will avoid the special fall state and landing lag (This is technically only mostly true. For more detailed information, check out the Air Dodge Landing Lag Glitch on Smash Wiki via @CourageRatVA .)"
        },
        {
          "name": "Down B (Wild Gunman)",
          "section": "special",
          "total": "41",
          "notes": "Gunman appears on frame 6"
        },
        {
          "name": "Wild Gunman, Leader in brown coat",
          "section": "special",
          "startup": "55",
          "total": "41",
          "damage": "10.0",
          "shieldLag": "12",
          "shieldStun": "4",
          "notes": "Disappears on frame 151"
        },
        {
          "name": "Wild Gunman, Black suit",
          "section": "special",
          "startup": "67",
          "total": "41",
          "damage": "9.0",
          "shieldLag": "11",
          "shieldStun": "4",
          "notes": "Disappears on frame 163"
        },
        {
          "name": "Wild Gunman, Sombrero guy",
          "section": "special",
          "startup": "73",
          "total": "41",
          "damage": "11.0",
          "shieldLag": "13",
          "shieldStun": "4",
          "notes": "Disappears on frame 170"
        },
        {
          "name": "Wild Gunman, Short cowboy",
          "section": "special",
          "startup": "79",
          "total": "41",
          "damage": "8.0",
          "shieldLag": "11",
          "shieldStun": "3",
          "notes": "Disappears on frame 175"
        },
        {
          "name": "Wild Gunman, Tall cowboy",
          "section": "special",
          "startup": "91",
          "total": "41",
          "damage": "8.0",
          "shieldLag": "11",
          "shieldStun": "3",
          "notes": "Disappears on frame 187"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntGrab.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "34",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "42",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "37",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "landingLag": "Total frames includes 13 frames of hitlag.",
          "damage": "1.3"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntFThrow.gif"
          ],
          "startup": "18",
          "total": "29",
          "damage": "8.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntBThrow.gif"
          ],
          "startup": "15",
          "total": "39",
          "damage": "9.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntUThrow.gif"
          ],
          "startup": "18",
          "total": "47",
          "damage": "6.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/duck_hunt/DuckHuntDThrow.gif"
          ],
          "startup": "23/24",
          "total": "49",
          "damage": "5.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "20/25",
          "notes": "Intangible on frame 3-17."
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "29",
          "notes": "Intangible on frame 4-15."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "34",
          "notes": "Intangible on frame 5-16."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "49",
          "landingLag": "10",
          "notes": "Intangible on frame 3-27."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "66",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "78",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "83",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "100",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "113",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/duck_hunt/duckhuntGetupAttackU.gif",
            "hitboxes/duck_hunt/duckhuntGetupAttackD.gif",
            "hitboxes/duck_hunt/duckhuntTripAttack.gif",
            "hitboxes/duck_hunt/duckhuntLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/duck_hunt",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
