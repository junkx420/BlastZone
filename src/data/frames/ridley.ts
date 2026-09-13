// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "ridley",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyJab1.gif"
          ],
          "startup": "4",
          "active": "4—5",
          "total": "23",
          "endlag": "18",
          "damage": "2.0",
          "advantage": "-16",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 on frame 7"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyJab2.gif"
          ],
          "startup": "5",
          "active": "5—6",
          "total": "26",
          "endlag": "20",
          "damage": "1.5",
          "advantage": "-18",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 on frame 10. Rapid on frame 9."
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyJab3.gif"
          ],
          "startup": "4",
          "active": "4—5",
          "total": "35",
          "endlag": "30",
          "damage": "5.0",
          "advantage": "-25",
          "shieldLag": "11",
          "shieldStun": "6"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyJabRapid.gif"
          ],
          "startup": "4/7/10...",
          "damage": "0.7",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyJabRapidEnd.gif"
          ],
          "startup": "4",
          "active": "4—5",
          "total": "45",
          "endlag": "40",
          "damage": "2.0",
          "advantage": "-38",
          "shieldLag": "9",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyFTilt.gif",
            "hitboxes/ridley/RidleyFTiltUp.gif",
            "hitboxes/ridley/RidleyFTiltDown.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "32",
          "endlag": "21",
          "damage": "10.0/13.0",
          "advantage": "-12/-10",
          "shieldLag": "8/11",
          "shieldStun": "10/12",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyUTilt.gif"
          ],
          "startup": "8",
          "active": "8—12",
          "total": "29",
          "endlag": "17",
          "damage": "7.0/9.0",
          "advantage": "-14/-12",
          "shieldLag": "7/7",
          "shieldStun": "7/9",
          "notes": "Head and arm intangibility on frame 8-9. Wing intangibility on frame 8-12"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyDTilt.gif"
          ],
          "startup": "9",
          "active": "9—11",
          "total": "30",
          "endlag": "19",
          "damage": "6.0/9.0",
          "advantage": "-15/-12",
          "shieldLag": "6/7",
          "shieldStun": "6/9",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyDashAttack.gif"
          ],
          "startup": "12",
          "active": "12—13",
          "total": "39",
          "endlag": "26",
          "damage": "12.0",
          "advantage": "-16",
          "shieldLag": "10",
          "shieldStun": "11"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyFSmash.gif"
          ],
          "startup": "18",
          "active": "18—21",
          "total": "53",
          "endlag": "32",
          "damage": "20.0",
          "advantage": "-22",
          "shieldLag": "11",
          "shieldStun": "13",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyUSmash.gif"
          ],
          "startup": "12",
          "active": "12—17",
          "total": "47",
          "endlag": "30",
          "damage": "17.0",
          "advantage": "-24",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Leg intangibility on frame 12-17. Charge hold is frame 6"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ridley/RidleyDSmash.gif"
          ],
          "startup": "24",
          "active": "24—27",
          "total": "57",
          "endlag": "30",
          "damage": "16.0",
          "advantage": "-22",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ridley/RidleyNAir.gif"
          ],
          "startup": "8",
          "active": "8—14/15—20",
          "total": "39",
          "endlag": "19",
          "landingLag": "12",
          "damage": "9.0/12.0/(5.0/8.0",
          "advantage": "-8/-7/-9",
          "shieldLag": "7/10/6",
          "shieldStun": "4/5/3",
          "hitboxes": "Early Tail/Early Tip/Late Tail/Late Tip",
          "notes": "Autocancels on frame 1-2 and 28 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ridley/RidleyFAir.gif"
          ],
          "startup": "10/13/16",
          "active": "10—11/13—14/16—17",
          "total": "41",
          "endlag": "24",
          "landingLag": "16",
          "damage": "(3.0/5.0)/(5.0/7.0)",
          "advantage": "(-14/-13)/(-13/-13)",
          "shieldLag": "(6/6)/(6/8)",
          "shieldStun": "(2/3)/(3/3)",
          "hitboxes": "(Multi close/far)/(Final close/far)",
          "notes": "Autocancels on frame 1-2 and 43 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ridley/RidleyBAir.gif"
          ],
          "startup": "10",
          "active": "10—12",
          "total": "43",
          "endlag": "31",
          "landingLag": "17",
          "damage": "16.0",
          "advantage": "-12",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Autocancels on frame 38 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ridley/RidleyUAir.gif"
          ],
          "startup": "11",
          "active": "11—13",
          "total": "39",
          "endlag": "26",
          "landingLag": "14",
          "damage": "14.0/14.0",
          "advantage": "-9/-9",
          "shieldLag": "9/13",
          "shieldStun": "5/5",
          "hitboxes": "Far/Close",
          "notes": "Autocancels on frame 1-3 and 35 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ridley/RidleyDAir.gif"
          ],
          "startup": "11",
          "active": "11—18/19—40",
          "total": "55",
          "endlag": "15",
          "landingLag": "32",
          "damage": "14.0/12.0",
          "advantage": "-27/-27",
          "shieldLag": "11/9",
          "shieldStun": "5/5",
          "hitboxes": "Early Meteor/Late",
          "notes": "Autocancels on frame 1-3 and 50 onward"
        },
        {
          "name": "Neutral B (Plasma Breath)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ridley/RidleyPlasmaBreath.gif",
            "hitboxes/ridley/RidleyPlasmaBreathCharge.gif"
          ],
          "startup": "29 | 56/65/73/84/92",
          "active": "29—58/59—78 | ***",
          "total": "55 | 102",
          "damage": "4.5/3.5 | 5.67/4.41",
          "advantage": "-23 // -1",
          "shieldLag": "5/5 // 6/5",
          "shieldStun": "3/2 // 3/3",
          "hitboxes": "Early / Late",
          "notes": "If Ridley is hit in the mouth while charging on frame 16-45, he recoils in a 52 frame animation."
        },
        {
          "name": "Side B (Space Pirate Rush)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ridley/RidleySpacePirateRushG.gif"
          ],
          "startup": "22",
          "active": "22—34",
          "total": "78",
          "endlag": "44"
        },
        {
          "name": "Side B (Space Pirate Rush, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ridley/RidleySpacePirateRushA.gif"
          ],
          "startup": "22",
          "active": "22—34",
          "total": "60",
          "endlag": "26",
          "notes": "Landing hitbox on frame 1 after a grab, then transitions to ground drag"
        },
        {
          "name": "Side B (Space Pirate Rush, Success)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ridley/RidleySpacePirateRushDragStart.gif",
            "hitboxes/ridley/RidleySpacePirateRushDrag.gif"
          ],
          "startup": "10/24/28/32...",
          "total": "60",
          "damage": "4.0/2.0",
          "hitboxes": "Initial / Drag",
          "notes": "Drag begins on 24. Deals damage every four frames."
        },
        {
          "name": "Space Pirate Rush, Manual/Ledge/Air Release",
          "section": "special",
          "startup": "2/7/2",
          "total": "41/42/41",
          "damage": "7.0/7.0/7.0",
          "hitboxes": "Ground/Ledge/Air",
          "notes": "Can manually release on 48 on the ground. 43 in the air."
        },
        {
          "name": "Up B (Wing Blitz)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ridley/RidleyWingBlitzForward.gif",
            "hitboxes/ridley/RidleyWingBlitzBack.gif",
            "hitboxes/ridley/RidleyWingBlitzUp.gif",
            "hitboxes/ridley/RidleyWingBlitzDown.gif",
            "hitboxes/ridley/RidleyWingBlitzDownLanding.gif"
          ],
          "startup": "34/36/37",
          "active": "34—57/36—55/37—59",
          "landingLag": "32/35",
          "damage": "18.0 / 16.0 / 15.0 / 5.0",
          "advantage": "-28",
          "shieldLag": "10/10/10/6",
          "shieldStun": "16/14/14/6",
          "hitboxes": "Up/horizontal/down/landing",
          "notes": "Second landing lag is for a dive directly into the ground. Wing intangibility on frame 34-57 when traveling up. 36-59 when traveling horizontally. Damage dependent on direction travelled. Landing hit on frame 1. Advantage is for that. Grabs ledges on frame 35/37/38."
        },
        {
          "name": "Down B (Skewer)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ridley/RidleySkewer.gif"
          ],
          "startup": "30",
          "active": "30—31",
          "total": "96/67",
          "endlag": "65",
          "damage": "5.0 | 45.0 / 10.0",
          "advantage": "-29",
          "shieldLag": "6",
          "shieldStun": "2",
          "hitboxes": "graze | skewer",
          "notes": "Total frames is 67 when you fail to skewer. Ridley does not suffer hitlag from a grazing hit."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ridley/RidleyGrab.gif"
          ],
          "startup": "8",
          "active": "8—10",
          "total": "34",
          "endlag": "24"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ridley/RidleyDashGrab.gif"
          ],
          "startup": "11",
          "active": "11—13",
          "total": "42",
          "endlag": "29"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ridley/RidleyPivotGrab.gif"
          ],
          "startup": "12",
          "active": "12—14",
          "total": "39",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ridley/RidleyPummel.gif"
          ]
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ridley/RidleyFThrow.gif"
          ],
          "startup": "13",
          "total": "37"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ridley/RidleyBThrow.gif"
          ],
          "startup": "18",
          "total": "45"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ridley/RidleyUThrow.gif"
          ],
          "startup": "14/19",
          "total": "43"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ridley/RidleyDThrow.gif"
          ],
          "startup": "25",
          "total": "35"
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
          "notes": "Intangible on frame 3-31"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "64",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-22"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "73",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-22"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "78",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-22"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "90",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-22"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "103",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-22"
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Ridley Ledgehang.gif",
            "ledgerolls/Ridley.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/ridley/ridleyGetupAttackU.gif",
            "hitboxes/ridley/ridleyGetupAttackD.gif",
            "hitboxes/ridley/ridleyTripAttack.gif",
            "hitboxes/ridley/ridleyLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/ridley",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
