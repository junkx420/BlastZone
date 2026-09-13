// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "pokemon-trainer",
  "sets": [
    {
      "label": "Squirtle",
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleJab1.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "16",
          "endlag": "13",
          "damage": "2.0",
          "advantage": "-11",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 5"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleJab2.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "24",
          "endlag": "19",
          "damage": "1.5",
          "advantage": "-17",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 as early as frame 10"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleJab3.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "31",
          "endlag": "25",
          "damage": "4.0",
          "advantage": "-21",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleFTilt.gif",
            "hitboxes/pt_squirtle/SquirtleFTiltUp.gif",
            "hitboxes/pt_squirtle/SquirtleFTiltDown.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "17",
          "endlag": "11",
          "damage": "5.0",
          "advantage": "-6",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleUTilt.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "19",
          "endlag": "13",
          "damage": "5.0",
          "advantage": "-8",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleDTilt.gif"
          ],
          "startup": "8",
          "active": "8-13",
          "total": "29",
          "endlag": "16",
          "damage": "9.0",
          "advantage": "-12",
          "shieldLag": "7",
          "shieldStun": "9"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleDashAttack.gif"
          ],
          "startup": "8",
          "active": "8-11/12-17",
          "total": "35",
          "endlag": "18",
          "damage": "8.0/7.0",
          "advantage": "-16",
          "shieldLag": "7/7",
          "shieldStun": "11/7",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleFSmash.gif",
            "hitboxes/pt_squirtle/SquirtleFSmashUp.gif",
            "hitboxes/pt_squirtle/SquirtleFSmashDown.gif"
          ],
          "startup": "20",
          "active": "20-21",
          "total": "49",
          "endlag": "28",
          "damage": "15.0",
          "advantage": "-19",
          "shieldLag": "12",
          "shieldStun": "10",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleUSmash.gif"
          ],
          "startup": "19/21",
          "active": "19/21-22/(22-23/24-25)",
          "total": "65",
          "endlag": "40",
          "damage": "3.0/13.0/10.0",
          "advantage": "-35",
          "shieldLag": "5/9/9",
          "shieldStun": "3/9/8",
          "hitboxes": "First/Early/Late",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleDSmash.gif"
          ],
          "startup": "18",
          "active": "18-19/24-25",
          "total": "41",
          "endlag": "16",
          "damage": "13.0",
          "advantage": "-13",
          "shieldLag": "9",
          "shieldStun": "9",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleNAir.gif"
          ],
          "startup": "4",
          "active": "4-6/7-26",
          "total": "41",
          "endlag": "15",
          "landingLag": "8",
          "damage": "10.0/7.0",
          "advantage": "-4/-5",
          "shieldLag": "8/7",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-3 and 35 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleFAir.gif"
          ],
          "startup": "5",
          "active": "5-6/7-14",
          "total": "35",
          "endlag": "21",
          "landingLag": "6",
          "damage": "7.0/6.0",
          "advantage": "-3/-3",
          "shieldLag": "7/6",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-4 and 35 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleBAir.gif",
            "hitboxes/pt_squirtle/SquirtleBAirLanding.gif"
          ],
          "startup": "5...",
          "active": "5-14/15-16 (rehit: 2)",
          "total": "35",
          "endlag": "19",
          "landingLag": "18",
          "damage": "1.0/6.0/2.0",
          "advantage": "-15",
          "shieldLag": "4/7/9",
          "shieldStun": "2/3/3",
          "hitboxes": "Multi/Final/Landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-4 and 22 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleUAir.gif"
          ],
          "startup": "5",
          "active": "5-9",
          "total": "29",
          "endlag": "20",
          "landingLag": "6",
          "damage": "7.0",
          "advantage": "-3",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Autocancels on frame 20 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleDAir.gif"
          ],
          "startup": "6...",
          "active": "6-20/22 (rehit: 3)",
          "total": "44",
          "endlag": "22",
          "landingLag": "16",
          "damage": "1.5/4.0",
          "advantage": "-14/-13",
          "shieldLag": "4/11",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-5 and 35 onward"
        },
        {
          "name": "Neutral B (Watergun)",
          "section": "special",
          "startup": "26",
          "active": "24-?",
          "total": "63",
          "notes": "From a charging state, startup is 7 and total frames is 44. Takes 64 frames to fully charge."
        },
        {
          "name": "Side B (Withdraw)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleWithdraw.gif"
          ],
          "startup": "23",
          "active": "22-41/22-61",
          "damage": "13.0-13.9",
          "advantage": "-18",
          "shieldLag": "7",
          "shieldStun": "8",
          "notes": "26 endlag on hit. 34 endlag to cancel the move manually. Armor begins on 22. Getting footstooled places Squirtle in a ~155 frame helpless animation."
        },
        {
          "name": "Up B (Waterfall)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleWaterfall.gif"
          ],
          "startup": "9...",
          "active": "9-41/43-44 (rehit: 5)",
          "landingLag": "30",
          "damage": "1.3/3.0",
          "shieldLag": "4/5",
          "shieldStun": "3/4",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Down B (Pokemon Change)",
          "section": "special",
          "total": "39",
          "notes": "Invulnerable on frame 1-25. ~140 frame period before you can change again."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleGrab.gif"
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
            "hitboxes/pt_squirtle/SquirtleDashGrab.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "39",
          "endlag": "30"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtlePivotGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "37",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtlePummel.gif"
          ],
          "startup": "1",
          "total": "15",
          "damage": "1.0",
          "notes": "Total frames includes 10 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleFThrow.gif"
          ],
          "startup": "11/13",
          "total": "34",
          "damage": "2.0/6.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleBThrow.gif"
          ],
          "startup": "27",
          "total": "44",
          "damage": "8.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleUThrow.gif"
          ],
          "startup": "16/18",
          "total": "37",
          "damage": "2.0/5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_squirtle/SquirtleDThrow.gif"
          ],
          "startup": "22/30",
          "total": "46",
          "damage": "2.0/5.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "19/24",
          "notes": "Intangible on frame 3-16"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "28",
          "notes": "Intangible on frame 4-14"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "33",
          "notes": "Intangible on frame 4-15"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "53",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "79",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "87",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "90",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "105",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "114",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Squirtle Ledgehang.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/pt_squirtle/squirtleGetupAttackU.gif",
            "hitboxes/pt_squirtle/squirtleGetupAttackD.gif",
            "hitboxes/pt_squirtle/squirtleTripAttack.gif",
            "hitboxes/pt_squirtle/squirtleLedgeAttack.gif"
          ]
        }
      ]
    },
    {
      "label": "Ivysaur",
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurJab1.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "27",
          "endlag": "19",
          "damage": "2.0",
          "advantage": "-17",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 10."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurJab2.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "27",
          "endlag": "21",
          "damage": "2.0",
          "advantage": "-19",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to Rapid jab as early as frame 10."
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurJabRapid.gif"
          ],
          "startup": "4/7/10...",
          "active": "4/7/10...",
          "damage": "0.5",
          "shieldLag": "4",
          "shieldStun": "3"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurJabRapidEnd.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "39",
          "endlag": "34",
          "damage": "2.0",
          "advantage": "-32",
          "shieldLag": "9",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurFTilt.gif"
          ],
          "startup": "10/12/14/16/18/20/22",
          "active": "10/12/14/16/18/20/22",
          "total": "45",
          "endlag": "23",
          "damage": "1.5/2.0",
          "advantage": "-20",
          "shieldLag": "4/10",
          "shieldStun": "3/3",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurUTilt.gif"
          ],
          "startup": "7",
          "active": "7-13",
          "total": "32",
          "endlag": "19",
          "damage": "7.0",
          "advantage": "-18",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurDTilt.gif"
          ],
          "startup": "4",
          "active": "4-6",
          "total": "31",
          "endlag": "25",
          "damage": "5.5",
          "advantage": "-21",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurDashAttack.gif"
          ],
          "startup": "4",
          "active": "4-11/12-19",
          "total": "43",
          "endlag": "24",
          "damage": "12.0/10.0",
          "advantage": "-27",
          "shieldLag": "9/8",
          "shieldStun": "11/10",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurFSmash.gif",
            "hitboxes/pt_ivysaur/IvysaurFSmashUp.gif",
            "hitboxes/pt_ivysaur/IvysaurFSmashDown.gif"
          ],
          "startup": "15",
          "active": "15-18/19-20",
          "total": "59",
          "endlag": "39",
          "damage": "16.0/14.0",
          "advantage": "-33",
          "shieldLag": "10/10",
          "shieldStun": "11/10",
          "hitboxes": "Early/Late",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurUSmash.gif"
          ],
          "startup": "26",
          "active": "26-29",
          "total": "59",
          "endlag": "30",
          "damage": "17.0",
          "advantage": "-21",
          "shieldLag": "11",
          "shieldStun": "11",
          "notes": "Charge hold is frame 7"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurDSmash.gif"
          ],
          "startup": "13",
          "active": "13-14",
          "total": "45",
          "endlag": "31",
          "damage": "8.0/10.0/12.0",
          "advantage": "-26/-25/-24",
          "shieldLag": "7/8/9",
          "shieldStun": "6/7/8",
          "hitboxes": "close/far/farther",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurNAir.gif"
          ],
          "startup": "7/10/13/16/19/22/25/28",
          "active": "7-26/28-29",
          "total": "41",
          "endlag": "12",
          "landingLag": "16",
          "damage": "1.0/2.0",
          "advantage": "-14/-14",
          "shieldLag": "4/9",
          "shieldStun": "2/2",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-3 and 41 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurFAir.gif"
          ],
          "startup": "14",
          "active": "14-18",
          "total": "48",
          "endlag": "30",
          "landingLag": "13",
          "damage": "12.0",
          "advantage": "-8",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-2 and 39 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurBAir.gif"
          ],
          "startup": "7/13",
          "active": "7-9/13-15",
          "total": "43",
          "endlag": "28",
          "landingLag": "7",
          "damage": "3.0/6.0",
          "advantage": "-5/-4",
          "shieldLag": "5/7",
          "shieldStun": "2/3",
          "notes": "Autocancels on frame 1-6 and 43 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurUAir.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "51",
          "endlag": "38",
          "landingLag": "11",
          "damage": "15.0",
          "advantage": "-6",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Autocancels on frame 41 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurDAir.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "63",
          "endlag": "51",
          "landingLag": "13",
          "damage": "10.0",
          "advantage": "-9",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-2 and 52 onward"
        },
        {
          "name": "Neutral B (Bullet Seed)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurBulletSeedG.gif",
            "hitboxes/pt_ivysaur/IvysaurBulletSeedA.gif"
          ],
          "startup": "7",
          "active": "7, 13-20, 19-26, 25-32, 31-38...",
          "total": "44 ground (after last seed) / 31 air (after last seed)",
          "endlag": "6",
          "damage": "3.0/1.5/1.3/3.0",
          "advantage": "-34",
          "shieldLag": "5/4/4/5",
          "shieldStun": "4/2/2/2",
          "hitboxes": "First/multi/later multi/final",
          "notes": "Startup is initial launcher and then the timing each bullet spawns, not necessarily when they impact. Numbers refer to minimum use. Each"
        },
        {
          "name": "Side B (Razor Leaf)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurRazorLeafTilt.gif",
            "hitboxes/pt_ivysaur/IvysaurRazorLeafSmash.gif"
          ],
          "startup": "24",
          "active": "24-34/35-53/54-73",
          "total": "48",
          "damage": "8.0/6.0/4.0",
          "advantage": "-14",
          "shieldLag": "7/6/5",
          "shieldStun": "3/3/2",
          "hitboxes": "Early/late/later"
        },
        {
          "name": "Up B (Vinewhip)",
          "section": "special",
          "startup": "15",
          "active": "15-17",
          "total": "47",
          "endlag": "30",
          "damage": "11.0/13.0",
          "advantage": "-22/-20",
          "shieldLag": "8/9",
          "shieldStun": "10/12",
          "hitboxes": "Close/Far",
          "notes": "Tethers on frame 13. Does not induce special fall."
        },
        {
          "name": "Down B (Pokemon Change)",
          "section": "special",
          "total": "39",
          "notes": "Invulnerable on frame 1-25. ~140 frame period before you can change again."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurGrab.gif"
          ],
          "startup": "13",
          "active": "13-14",
          "total": "42",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurDashGrab.gif"
          ],
          "startup": "13",
          "active": "13-14",
          "total": "48",
          "endlag": "34"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurPivotGrab.gif"
          ],
          "startup": "13",
          "active": "13-14",
          "total": "44",
          "endlag": "30"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurPummel.gif"
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
            "hitboxes/pt_ivysaur/IvysaurFThrow.gif"
          ],
          "startup": "16/17",
          "total": "37",
          "damage": "5.0/5.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurBThrow.gif"
          ],
          "startup": "20",
          "total": "35",
          "damage": "12.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurUThrow.gif"
          ],
          "startup": "20/21",
          "total": "39",
          "damage": "4.0/5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/IvysaurDThrow.gif"
          ],
          "startup": "19",
          "total": "34",
          "damage": "7.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "21/26",
          "notes": "Intangible on frame 3-17"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "30",
          "notes": "Intangible on frame 4-15"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "35",
          "notes": "Intangible on frame 5-16"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "56",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "76",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "84",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "93",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "110",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "124",
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
            "ledgehangs/Ivysaur Ledgehang.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/pt_ivysaur/ivysaurGetupAttackU.gif",
            "hitboxes/pt_ivysaur/ivysaurGetupAttackD.gif",
            "hitboxes/pt_ivysaur/ivysaurTripAttack.gif",
            "hitboxes/pt_ivysaur/ivysaurLedgeAttack.gif"
          ]
        }
      ]
    },
    {
      "label": "Glurak",
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardJab1.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "22",
          "endlag": "17",
          "damage": "2.5",
          "advantage": "-14",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Transitions to jab 2 as early as frame 7"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardJab2.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "25",
          "endlag": "19",
          "damage": "2.5",
          "advantage": "-16",
          "shieldLag": "6",
          "shieldStun": "4",
          "notes": "Transitions to jab 3 as early as frame 8"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardJab3.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "33",
          "endlag": "25",
          "damage": "5.0",
          "advantage": "-20",
          "shieldLag": "9",
          "shieldStun": "6"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardFTilt.gif",
            "hitboxes/pt_charizard/charitardFTiltUp.gif",
            "hitboxes/pt_charizard/charitardFTiltDown.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "37",
          "endlag": "24",
          "damage": "7.0/11.0",
          "advantage": "-18/-15",
          "shieldLag": "7/8",
          "shieldStun": "7/10",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardUTilt.gif"
          ],
          "startup": "9",
          "active": "9-12",
          "total": "33",
          "endlag": "21",
          "damage": "8.0",
          "advantage": "-16",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardDTilt.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "30",
          "endlag": "20",
          "damage": "10.0",
          "advantage": "-11",
          "shieldLag": "10",
          "shieldStun": "10"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardDashAttack.gif"
          ],
          "startup": "10",
          "active": "10-12/13-20",
          "total": "39",
          "endlag": "19",
          "damage": "13.0/10.0",
          "advantage": "-12",
          "shieldLag": "9/8",
          "shieldStun": "17/14",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardFSmash.gif"
          ],
          "startup": "22",
          "active": "22/23-24",
          "total": "69",
          "endlag": "45",
          "damage": "19.0/16.4",
          "advantage": "-36/-37",
          "shieldLag": "15/10",
          "shieldStun": "11/10",
          "hitboxes": "Close/Far",
          "notes": "Invulnerable on frame 20-24. Charge hold is frame 15"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardUSmash.gif"
          ],
          "startup": "6/14",
          "active": "(6/7-9) / 14-19",
          "total": "46",
          "endlag": "27",
          "damage": "5.0/11.0",
          "advantage": "-24",
          "shieldLag": "6/8",
          "shieldStun": "4/8",
          "hitboxes": "Hit 1(Ground Only/Late) / Hit 2",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardDSmash.gif"
          ],
          "startup": "14",
          "active": "14-16",
          "total": "60",
          "endlag": "44",
          "damage": "16.0",
          "advantage": "-35",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Charge hold is frame 1"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardNAir.gif"
          ],
          "startup": "8",
          "active": "8-20",
          "total": "39",
          "endlag": "19",
          "landingLag": "10",
          "damage": "9.0/12.0",
          "advantage": "-6/-5",
          "shieldLag": "7/9",
          "shieldStun": "4/5",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-3 and 31 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardFAir.gif"
          ],
          "startup": "8",
          "active": "8-9/10-12",
          "total": "45",
          "endlag": "33",
          "landingLag": "19",
          "damage": "12.0/13.0",
          "advantage": "-14/-14",
          "shieldLag": "9/9",
          "shieldStun": "5/5",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-4 and 35 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardBAir.gif"
          ],
          "startup": "14",
          "active": "14/15-16",
          "total": "45",
          "endlag": "29",
          "landingLag": "20",
          "damage": "11.0/14.0/16.0",
          "advantage": "-16/-15/-14",
          "shieldLag": "8/10/10",
          "shieldStun": "4/5/6",
          "hitboxes": "Close/far/farther",
          "notes": "Autocancels on frame 1-3 and 44 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardUAir.gif"
          ],
          "startup": "12",
          "active": "12-15",
          "total": "45",
          "endlag": "30",
          "landingLag": "13",
          "damage": "13.0",
          "advantage": "-8",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Head intangibility on frame 11-15. Autocancels on frame 1-3 and 38 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardDAir.gif"
          ],
          "startup": "18",
          "active": "18-21/22-25",
          "total": "51",
          "endlag": "26",
          "landingLag": "21",
          "damage": "14.0/8.0",
          "advantage": "-16/-17",
          "shieldLag": "10/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-5 and 42 onward"
        },
        {
          "name": "Neutral B (Flamethrower)",
          "section": "special",
          "startup": "19/26/33/40",
          "active": "19-22/26-29/33-36/40-43",
          "total": "70",
          "endlag": "27",
          "damage": "2.0/1.0",
          "advantage": "-24",
          "shieldLag": "4/4",
          "shieldStun": "2/2",
          "hitboxes": "Close/Far",
          "notes": "Startup and total frames are the minimum. Endlag is 27 from extended use"
        },
        {
          "name": "Side B (Flare Blitz)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardFlareBlitz.gif"
          ],
          "startup": "23",
          "active": "23-51",
          "total": "101",
          "endlag": "50",
          "damage": "6.0/18.0",
          "advantage": "-52/-66",
          "shieldLag": "6/15",
          "shieldStun": "-/6",
          "notes": "58 endlag on hit if nothing catches your fall first. Lands on 48 on level ground and can input a wakeup move on 73. Total frames is when you don't hit anything. Explosion is frames 2-4 after connecting. Damage based armor 15% (18% in 1v1) on frames 23-51."
        },
        {
          "name": "Up B (Fly)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardFly.gif"
          ],
          "startup": "9...",
          "active": "9-10/16-26(rehit: 3)/27-28",
          "landingLag": "30",
          "damage": "5.0/2.0/4.0",
          "shieldLag": "6/4/5",
          "shieldStun": "6/3/5",
          "notes": "Super armor on frame 4-15"
        },
        {
          "name": "Down B (Pokemon Change)",
          "section": "special",
          "total": "39",
          "notes": "Invulnerable on frame 1-25. ~140 frame period before you can change again."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardGrab.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "total": "39",
          "endlag": "29"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardDashGrab.gif"
          ],
          "startup": "11",
          "active": "11-13",
          "total": "45",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardPivotGrab.gif"
          ],
          "startup": "12",
          "active": "12-14",
          "total": "42",
          "endlag": "28"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardPummel.gif"
          ],
          "startup": "2",
          "total": "21",
          "damage": "1.6",
          "notes": "Total frames includes 14 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardFThrow.gif"
          ],
          "startup": "27",
          "total": "59",
          "damage": "10.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardBThrow.gif"
          ],
          "startup": "26",
          "total": "32",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardUThrow.gif"
          ],
          "startup": "52/58",
          "total": "79",
          "damage": "8.0/3.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pt_charizard/charitardDThrow.gif"
          ],
          "startup": "24/30/36/42/48/55",
          "total": "76",
          "damage": "1.0"
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
          "total": "49",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "70",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-22"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "78",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-22"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-22"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "99",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-22"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "105",
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
            "ledgehangs/Charizard Ledgehang.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/pt_charizard/charizardGetupAttackU.gif",
            "hitboxes/pt_charizard/charizardGetupAttackD.gif",
            "hitboxes/pt_charizard/charizardTripAttack.gif",
            "hitboxes/pt_charizard/charizardLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/squirtle",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
