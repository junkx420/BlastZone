// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "dr-mario",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioJab1.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "19",
          "endlag": "16",
          "damage": "2.9",
          "advantage": "-13",
          "shieldLag": "9",
          "shieldStun": "4",
          "notes": "Transitions to Jab 2 as early as frame 5"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioJab2.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "21",
          "endlag": "18",
          "damage": "1.7",
          "advantage": "-16",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 as early as frame 6"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioJab3.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "33",
          "endlag": "29",
          "damage": "4.7",
          "advantage": "-25",
          "shieldLag": "12",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioFTilt.gif",
            "hitboxes/dr_mario/DrMarioFTiltUp.gif",
            "hitboxes/dr_mario/DrMarioFTiltDown.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "25",
          "endlag": "18",
          "damage": "10.5",
          "advantage": "-12",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioUTilt.gif"
          ],
          "startup": "5",
          "active": "5-11",
          "total": "29",
          "endlag": "18",
          "damage": "7.4",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioDTilt.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "27",
          "endlag": "20",
          "damage": "8.2/5.8",
          "advantage": "-14/-16",
          "shieldLag": "7/6",
          "shieldStun": "8/6",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioDashAttack.gif"
          ],
          "startup": "6",
          "active": "6-9/10-25",
          "total": "37",
          "endlag": "12",
          "damage": "11.5/7.0",
          "advantage": "-12",
          "shieldLag": "9/7",
          "shieldStun": "19/12",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioFSmash.gif",
            "hitboxes/dr_mario/DrMarioFSmashUp.gif",
            "hitboxes/dr_mario/DrMarioFSmashDown.gif"
          ],
          "startup": "15",
          "active": "15-17",
          "total": "47",
          "endlag": "30",
          "damage": "20.9/17.2",
          "advantage": "-18/-20",
          "shieldLag": "16/15",
          "shieldStun": "14/12",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 5."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioUSmash.gif"
          ],
          "startup": "9",
          "active": "9-13",
          "total": "39",
          "endlag": "26",
          "damage": "16.4",
          "advantage": "-19",
          "shieldLag": "11",
          "shieldStun": "11",
          "notes": "Head Invulnerability on frame 9-13. Charge hold is frame 6."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioDSmash.gif"
          ],
          "startup": "5/14",
          "active": "5-6/14",
          "total": "43",
          "endlag": "29",
          "damage": "11.7/14.1",
          "advantage": "-30/-19",
          "shieldLag": "9/10",
          "shieldStun": "8/10",
          "hitboxes": "First/Second",
          "notes": "Charge hold is frame 2."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioNAir.gif"
          ],
          "startup": "3",
          "active": "3-10/11-27",
          "total": "45",
          "endlag": "18",
          "landingLag": "7",
          "damage": "5.9/11.7",
          "advantage": "-4/-3",
          "shieldLag": "6/8",
          "shieldStun": "3/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 34 onward. Stronger the longer it's out (opposite of most \"sex kicks\")."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioFAir.gif"
          ],
          "startup": "16",
          "active": "16/17-20/21",
          "total": "59",
          "endlag": "38",
          "landingLag": "17",
          "damage": "11.7/17.6/10.5",
          "advantage": "-11/-12",
          "shieldLag": "11/9/*",
          "shieldStun": "6/5/*",
          "hitboxes": "Early/Clean/Late",
          "notes": "Auto cancels on frame 1-2 and frame 43 onward."
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioBAir.gif"
          ],
          "startup": "6",
          "active": "6-8/9-13",
          "total": "33",
          "endlag": "20",
          "landingLag": "10",
          "damage": "14.1/8.2",
          "advantage": "-5/-6",
          "shieldLag": "10/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Auto cancels on frame 1-5 and frame 19 onward."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioUAir.gif"
          ],
          "startup": "4",
          "active": "4-7",
          "total": "30",
          "endlag": "23",
          "landingLag": "8",
          "damage": "10.2",
          "advantage": "-4",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Auto cancels on frame 17 onward."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioDAir.gif"
          ],
          "startup": "14",
          "active": "14-17",
          "total": "42",
          "endlag": "25",
          "landingLag": "13",
          "damage": "14.1",
          "advantage": "-8",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Auto cancels on frame 1-5 and frame 33 onward."
        },
        {
          "name": "Neutral B (Megavitamin Pill)",
          "section": "special",
          "startup": "17",
          "active": "17-46/47-86",
          "total": "49",
          "damage": "5.8/4.7",
          "advantage": "-23",
          "shieldLag": "6/6",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Side B (Super Sheet)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioSuperSheet.gif"
          ],
          "startup": "12",
          "active": "12-16",
          "total": "35",
          "endlag": "19",
          "damage": "8.2",
          "advantage": "-15",
          "shieldLag": "7",
          "shieldStun": "8",
          "notes": "Reflects on frame 9-22."
        },
        {
          "name": "Up B (Super Jump Punch)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioSuperJumpPunch.gif"
          ],
          "startup": "3",
          "active": "3-5/6-19",
          "landingLag": "30",
          "damage": "14.1 / 7.0",
          "shieldLag": "10/7",
          "shieldStun": "13/7",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Down B (Dr. Tornado)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioDrTornadoG.gif",
            "hitboxes/dr_mario/DrMarioDrTornadoA.gif"
          ],
          "startup": "10/14/18/22/26/30/40",
          "active": "10/14/18/22/26/30/40-41",
          "total": "74",
          "endlag": "33",
          "damage": "1.8/3.5",
          "advantage": "-30",
          "shieldLag": "4/11",
          "shieldStun": "3/4",
          "hitboxes": "Multi/Final",
          "notes": "Armor on frames 2-10, but only on the ground."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioGrab.gif"
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
            "hitboxes/dr_mario/DrMarioDashGrab.gif"
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
            "hitboxes/dr_mario/DrMarioPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "36",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "landingLag": "Total frames includes 13 frames of hitlag.",
          "damage": "1.5"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioFThrow.gif"
          ],
          "startup": "13",
          "total": "27",
          "damage": "9.4"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioBThrow.gif"
          ],
          "startup": "40",
          "total": "59",
          "damage": "12.9"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioUThrow.gif"
          ],
          "startup": "18",
          "total": "39",
          "damage": "8.2"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dr_mario/DrMarioDThrow.gif"
          ],
          "startup": "18",
          "total": "39",
          "damage": "5.8"
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
          "total": "52",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "71",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "81",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "87",
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
          "total": "116",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/dr_mario/drmarioGetupAttackU.gif",
            "hitboxes/dr_mario/drmarioGetupAttackD.gif",
            "hitboxes/dr_mario/drmarioTripAttack.gif",
            "hitboxes/dr_mario/drmarioLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/dr_mario",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
