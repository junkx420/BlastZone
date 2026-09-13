// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "king-k-rool",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolJab1.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "24",
          "endlag": "19",
          "damage": "2.5",
          "advantage": "-16",
          "shieldLag": "9",
          "shieldStun": "4"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolJab2.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "27",
          "endlag": "23",
          "damage": "2.5",
          "advantage": "-20",
          "shieldLag": "6",
          "shieldStun": "4"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolJab3.gif"
          ],
          "startup": "5",
          "active": "5-8",
          "total": "33",
          "endlag": "25",
          "damage": "7.0",
          "advantage": "-21",
          "shieldLag": "13",
          "shieldStun": "7"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolFTilt.gif",
            "hitboxes/king_k_rool/KingKRoolFTiltUp.gif",
            "hitboxes/king_k_rool/KingKRoolFTiltDown.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "42",
          "endlag": "29",
          "damage": "11.0/13.0",
          "advantage": "-20/-18",
          "shieldLag": "12/13",
          "shieldStun": "10/12",
          "hitboxes": "Close/Far",
          "notes": "Belly armor on frame 5-11"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolUTilt.gif"
          ],
          "startup": "5",
          "active": "5-6/7-13",
          "total": "37",
          "endlag": "24",
          "damage": "12.5/8.9/7.4",
          "advantage": "-21",
          "shieldLag": "10/9/8",
          "shieldStun": "11/8/7",
          "hitboxes": "Early/Late Far/Close",
          "notes": "Arm intangibility on frame 4-9"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolDTilt.gif"
          ],
          "startup": "13",
          "active": "13/14-15",
          "total": "42",
          "endlag": "27",
          "damage": "13.0/8.0/7.0",
          "advantage": "-17",
          "shieldLag": "9/8/7",
          "shieldStun": "12/10/7",
          "hitboxes": "Frame 13/Close/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolDashAttack.gif"
          ],
          "startup": "7",
          "active": "7-14/15-25",
          "total": "60",
          "endlag": "35",
          "damage": "15.0/11.0",
          "advantage": "-38",
          "shieldLag": "11/9",
          "shieldStun": "15/10",
          "hitboxes": "Early/Late",
          "notes": "Belly armor on frame 7-28"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolFSmash.gif",
            "hitboxes/king_k_rool/KingKRoolFSmashUp.gif",
            "hitboxes/king_k_rool/KingKRoolFSmashDown.gif"
          ],
          "startup": "19",
          "active": "19-21",
          "total": "61",
          "endlag": "40",
          "damage": "19.0/16.5/19.5/16.9/19.9/17.3",
          "advantage": "-29/--/-29/--/-29/-30",
          "shieldLag": "13/--/14/--/14/12",
          "shieldStun": "13/--/13/--/13/12",
          "hitboxes": "(neutral far/close)/(Down far/close)/(Up far/close)",
          "notes": "Charge hold on frame 9"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolUSmash.gif"
          ],
          "startup": "6/19/22",
          "active": "(6-9/10-11)(19/20/21-23)(22-23)",
          "total": "71",
          "endlag": "48",
          "damage": "17.0/3.0/8.0",
          "advantage": "-55/-42",
          "shieldLag": "11/0/10",
          "shieldStun": "10/--/7",
          "hitboxes": "Hit 1/Hit 2/Hit 3",
          "notes": "Head intangibility on frame 6-11. Belly armor on frame 6-19. Charge hold is frame 2"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolDSmash.gif"
          ],
          "startup": "22",
          "active": "22-24/25",
          "total": "63",
          "endlag": "38",
          "damage": "18.0/4.0",
          "advantage": "-29/-34",
          "shieldLag": "10/5",
          "shieldStun": "12/4",
          "hitboxes": "Body/Shockwave",
          "notes": "Belly armor on frame 8-21. Charge hold is frame 1"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolNAir.gif"
          ],
          "startup": "7",
          "active": "7-8/9-30",
          "total": "45",
          "endlag": "15",
          "landingLag": "9",
          "damage": "12.0/8.0",
          "advantage": "-4/-5",
          "shieldLag": "9/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Belly armor on frame 6-30. Autocancels on frame 1-3 and 40 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolFAir.gif"
          ],
          "startup": "11",
          "active": "11/12-14/15-17",
          "total": "54",
          "endlag": "37",
          "landingLag": "11",
          "damage": "15.5/13.5/10.0/8.0",
          "advantage": "-5/-6/-7/-7",
          "shieldLag": "10/9/8/7",
          "shieldStun": "6/5/4/4",
          "hitboxes": "Early far/close, Late far/close",
          "notes": "Autocancels on frame 1-2 and 40 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolBAir.gif"
          ],
          "startup": "18",
          "active": "18-20",
          "total": "49",
          "endlag": "29",
          "landingLag": "14",
          "damage": "19.0/14.5",
          "advantage": "-7/-9",
          "shieldLag": "13/10",
          "shieldStun": "7/5",
          "hitboxes": "Far/Close",
          "notes": "Autocancels on frame 1-3 and 50 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolUAir.gif"
          ],
          "startup": "7",
          "active": "7-13/14-19",
          "total": "71",
          "endlag": "52",
          "landingLag": "13",
          "damage": "14.0/10.0",
          "advantage": "-8/-9",
          "shieldLag": "10/8",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Head intangibility on frame 7-13. Belly armor on frame 7-20. Autocancels on frame 1-2 and 70 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolDAir.gif"
          ],
          "startup": "14",
          "active": "14-15/16-21",
          "total": "61",
          "endlag": "40",
          "landingLag": "14",
          "damage": "12.0/9.0",
          "advantage": "-9/-10",
          "shieldLag": "9/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Belly armor on frame 14-25. Autocancels on frame 1-3 and 40 onward"
        },
        {
          "name": "Neutral B (Blunderbuss Kannonball)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolBlunderbussKannonballDetection.gif"
          ],
          "startup": "25",
          "active": "30-150",
          "total": "65",
          "damage": "13.0",
          "advantage": "-25",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Transitions to Vacuum on frame 50. K Rool can pass under platforms during any stage of this attack."
        },
        {
          "name": "Blunderbuss, Vacuum",
          "section": "special",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolBlunderbuss.gif"
          ],
          "startup": "7",
          "active": "7-36",
          "notes": "Max hold of 120 frames"
        },
        {
          "name": "Blunderbuss, Second Shot",
          "section": "special",
          "startup": "35",
          "total": "55",
          "damage": "18.0/17.0",
          "advantage": "+7/-4",
          "shieldLag": "11/11",
          "shieldStun": "16/5",
          "hitboxes": "Person/Cannonball",
          "notes": "12.0 damage dealt to vacuumed victim"
        },
        {
          "name": "Side B (Crownerang)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolCrownerangThrow.gif",
            "hitboxes/king_k_rool/KingKRoolCrownerang.gif"
          ],
          "startup": "27",
          "active": "27-64/65-...",
          "total": "63",
          "damage": "9.0/7.0",
          "advantage": "-26",
          "shieldLag": "7/7",
          "shieldStun": "4/3",
          "hitboxes": "Throw/Return",
          "notes": "17 frame animation of catching the crown. Armor on frame 6-63 (12.0% / 14.4% in 1v1) . If picked up as an item, Crown pickup is 27 frames (as a Projectile, 17 frames)."
        },
        {
          "name": "Up B (Propellerpack)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolPropellerpack.gif"
          ],
          "startup": "11",
          "active": "11/26/41/56/71/...108",
          "landingLag": "30",
          "damage": "3.0",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Rehit rate of 14 frames. K Rool does not suffer hitlag from this attack"
        },
        {
          "name": "Down B (Gut Check)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolGutCheck.gif"
          ],
          "startup": "5 (Start of Counter)",
          "total": "62",
          "notes": "Invulnerable on frame 4-15. Counters or reflects on 5-28. Must be facing attacker to activate."
        },
        {
          "name": "Gut Check, Counterattack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolGutCheckHit.gif",
            "hitboxes/king_k_rool/KingKRoolGutCheckHitTurn.gif"
          ],
          "startup": "3, 9",
          "active": "3-6, 9-12",
          "total": "38",
          "endlag": "26",
          "hitboxes": "Front, Reverse"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolGrab.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "total": "40",
          "endlag": "30"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolDashGrab.gif"
          ],
          "startup": "11",
          "active": "11-13",
          "total": "48",
          "endlag": "35"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolPivotGrab.gif"
          ],
          "startup": "12",
          "active": "12-14",
          "total": "43",
          "endlag": "29"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolPummel.gif"
          ]
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolFThrow.gif"
          ],
          "startup": "28",
          "total": "39"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolBThrow.gif"
          ],
          "startup": "32",
          "total": "62"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolUThrow.gif"
          ],
          "startup": "67",
          "total": "103"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/king_k_rool/KingKRoolDThrow.gif"
          ],
          "startup": "40",
          "total": "73",
          "notes": "Buries"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "23/28",
          "notes": "Intangible on frame 3-18"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "32",
          "notes": "Intangible on frame 4-16"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "37",
          "notes": "Intangible on frame 5-17"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "46",
          "landingLag": "10",
          "notes": "Intangible on frame 4-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "64",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "74",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "78",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "88",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "102",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/king_k_rool/kingkroolGetupAttackU.gif",
            "hitboxes/king_k_rool/kingkroolGetupAttackD.gif",
            "hitboxes/king_k_rool/kingkroolTripAttack.gif",
            "hitboxes/king_k_rool/kingkroolLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/king_k_rool",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
