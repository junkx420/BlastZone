// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "ness",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ness/NessJab1.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "19",
          "endlag": "16",
          "damage": "2.0",
          "advantage": "-13",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 5"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ness/NessJab2.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "19",
          "endlag": "16",
          "damage": "1.5",
          "advantage": "-13",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 as early as frame 6"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ness/NessJab3.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "29",
          "endlag": "22",
          "damage": "4.0",
          "advantage": "-18",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ness/NessFTilt.gif",
            "hitboxes/ness/NessFTiltUp.gif",
            "hitboxes/ness/NessFTiltDown.gif"
          ],
          "startup": "7",
          "active": "7-10",
          "total": "34",
          "endlag": "24",
          "damage": "10.0",
          "advantage": "-17",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ness/NessUTilt.gif"
          ],
          "startup": "5",
          "active": "5-6(7-8)",
          "total": "28",
          "endlag": "20",
          "damage": "9.0/7.0",
          "advantage": "-14/-16",
          "shieldLag": "8/6",
          "shieldStun": "9/7",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ness/NessDTilt.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "11",
          "endlag": "7",
          "damage": "4.5/3.0",
          "advantage": "-3/-4",
          "shieldLag": "5/5",
          "shieldStun": "5/4",
          "hitboxes": "Far/Close",
          "notes": "Can transition to another Dtilt as early as frame 6."
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ness/NessDashAttack.gif"
          ],
          "startup": "8/15/23",
          "active": "8/15-16/23-24",
          "total": "39",
          "endlag": "15",
          "damage": "4.0/2.0/6.0",
          "advantage": "-10",
          "shieldLag": "5/4/10",
          "shieldStun": "5/3/7"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ness/NessFSmash.gif"
          ],
          "startup": "21",
          "active": "21-22",
          "total": "54",
          "endlag": "32",
          "damage": "18.0/20.0/22.0",
          "advantage": "-21/-20/-19",
          "shieldLag": "11/12/15",
          "shieldStun": "12/13/14",
          "hitboxes": "close/med/far",
          "notes": "Reflects on frame 18-30. Charge hold is frame 10."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ness/NessUSmash.gif"
          ],
          "startup": "10",
          "active": "10-32",
          "total": "52",
          "endlag": "20",
          "damage": "13.0",
          "advantage": "-33",
          "shieldLag": "4/9",
          "shieldStun": "2/9",
          "hitboxes": "charging/launch",
          "notes": "Charge hold on frame 10 and also creates a hitbox hitting every 6 frames"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ness/NessDSmash.gif"
          ],
          "startup": "12/17/23/31",
          "active": "12-15(17-18)/23-25(31-32)",
          "total": "45",
          "endlag": "13",
          "damage": "1.0/10.0",
          "advantage": "-21/-7",
          "shieldLag": "4/8",
          "shieldStun": "2/7",
          "hitboxes": "weak/strong",
          "notes": "Charge hold on frame 12 and also creates a hitbox hitting every 6 frames"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ness/NessNAir.gif"
          ],
          "startup": "5",
          "active": "5-12(13-15)",
          "total": "35",
          "endlag": "20",
          "landingLag": "8",
          "damage": "11.0/7.0",
          "advantage": "-3/-5",
          "shieldLag": "9/7",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-4 and 26 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ness/NessFAir.gif"
          ],
          "startup": "8.../20",
          "active": "8-18 (rehit: 5) / 20-21",
          "total": "39",
          "endlag": "21",
          "landingLag": "12",
          "damage": "1.5/5.5",
          "advantage": "-10/-9",
          "shieldLag": "4/9",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-7 and 33 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ness/NessBAir.gif"
          ],
          "startup": "10",
          "active": "10-11(12-18)",
          "total": "35",
          "endlag": "17",
          "landingLag": "10",
          "damage": "15.0/8.0",
          "advantage": "-4/-6",
          "shieldLag": "10/7",
          "shieldStun": "6/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-9 and 25 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ness/NessUAir.gif"
          ],
          "startup": "8.../15",
          "active": "8-14 (rehit: 2) / 15-16",
          "total": "33",
          "endlag": "19",
          "landingLag": "8",
          "damage": "2.5/5.0",
          "advantage": "-6/-5",
          "shieldLag": "5/9",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-7 and 34 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ness/NessDAir.gif"
          ],
          "startup": "18",
          "active": "18-20/21-24",
          "total": "52",
          "endlag": "28",
          "landingLag": "12",
          "damage": "14.0/12.0",
          "advantage": "-7/-8",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-17 and 39 onward"
        },
        {
          "name": "Neutral B (PK Flash)",
          "section": "special",
          "startup": "40-117",
          "active": "40-44/117-121",
          "total": "61-138",
          "damage": "11.0-27.0",
          "advantage": "-4 to +11",
          "shieldLag": "13-24",
          "shieldStun": "4-8",
          "notes": "On release, startup is 14 and total frames is 35."
        },
        {
          "name": "Side B (PK Fire)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ness/NessPKFireG.gif",
            "hitboxes/ness/NessPKFireA.gif"
          ],
          "startup": "18",
          "active": "18-37",
          "total": "55",
          "endlag": "18",
          "landingLag": "12 (Air version)",
          "damage": "6.0/1.0",
          "advantage": "-28",
          "shieldLag": "6",
          "shieldStun": "3",
          "hitboxes": "Spark/Pillar",
          "notes": "Will not erupt on shields. The flame pillar has a rehit rate of 7 and lasts about 100 frames"
        },
        {
          "name": "Up B (PK Thunder)",
          "section": "special",
          "startup": "20",
          "active": "20-139",
          "damage": "11.0/1.0",
          "advantage": "-22",
          "shieldLag": "13/3",
          "shieldStun": "4/10",
          "hitboxes": "Direct/Tail",
          "notes": "39 endlag after hitting a target"
        },
        {
          "name": "Up B, Self-hit (PK Thunder 2)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ness/NessPKThunder2.gif"
          ],
          "startup": "1",
          "active": "1-10/11-32",
          "total": "56",
          "endlag": "24",
          "landingLag": "24",
          "damage": "25.0/21.0",
          "advantage": "-33",
          "shieldLag": "17/16",
          "shieldStun": "22/18",
          "hitboxes": "Early/Late",
          "notes": "Invulnerable on frame 1-32. Landing lag is if you enter special fall."
        },
        {
          "name": "Down B (PSI Magnet)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ness/NessPSIMagnet.gif",
            "hitboxes/ness/NessPSIMagnetEnd.gif",
            "hitboxes/ness/NessPSIMagnetA.gif"
          ],
          "startup": "7 (7 is start of absorb)",
          "active": "7-12 (absorb)",
          "total": "24",
          "damage": "4.0",
          "advantage": "-12",
          "shieldLag": "5",
          "shieldStun": "5",
          "notes": "Begins absorbing on frame 7. Total frame is the minimum duration. Endlag is otherwise 9 on release."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ness/NessGrab.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "37",
          "endlag": "30"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ness/NessDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "45",
          "endlag": "35"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ness/NessPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "40",
          "endlag": "29"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ness/NessPummel.gif"
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
            "hitboxes/ness/NessFThrow.gif"
          ],
          "startup": "27",
          "total": "52",
          "damage": "11.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ness/NessBThrow.gif"
          ],
          "startup": "27",
          "total": "52",
          "damage": "11.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ness/NessUThrow.gif"
          ],
          "startup": "36",
          "total": "55",
          "damage": "12.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ness/NessDThrow.gif"
          ],
          "startup": "6-9, 10-13, 14-17, 26-29",
          "total": "50",
          "damage": "0.5/0.5/0.5/1.5/4.0",
          "notes": "Releases on frame 27."
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
          "total": "59",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "77",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "86",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "99",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "119",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "134",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Ness Ledgehang.gif",
            "ledgerolls/Ness.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/ness/nessGetupAttackU.gif",
            "hitboxes/ness/nessGetupAttackD.gif",
            "hitboxes/ness/nessTripAttack.gif",
            "hitboxes/ness/nessLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/ness",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
