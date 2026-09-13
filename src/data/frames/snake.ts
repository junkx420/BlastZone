// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "snake",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeJab1.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "15",
          "endlag": "11",
          "damage": "2.5",
          "advantage": "-8",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Transitions to jab 2 as early as frame 6"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeJab2.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "24",
          "endlag": "19",
          "damage": "2.5",
          "advantage": "-16",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Transitions to jab 3 as early as frame 7"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeJab3.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "46",
          "endlag": "37",
          "damage": "6.0",
          "advantage": "-32",
          "shieldLag": "11",
          "shieldStun": "6"
        },
        {
          "name": "Forward Tilt 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeFTilt1.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "31",
          "endlag": "26",
          "damage": "4.0",
          "advantage": "-22",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Transitions to Ftilt 2 as early as frame 10"
        },
        {
          "name": "Forward Tilt 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeFTilt2.gif"
          ],
          "startup": "8",
          "active": "8",
          "total": "39",
          "endlag": "31",
          "damage": "9.0/10.0/11.0",
          "advantage": "-22/-22/-21",
          "shieldLag": "7/7/8",
          "shieldStun": "9/9/10",
          "hitboxes": "Close/Far/Farther"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeUTilt.gif"
          ],
          "startup": "6",
          "active": "6-8/9-13",
          "total": "37",
          "endlag": "24",
          "damage": "14.5/13.5",
          "advantage": "-18/?",
          "shieldLag": "10/9",
          "shieldStun": "13/12",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeDTilt.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "30",
          "endlag": "23",
          "damage": "12.0",
          "advantage": "-13",
          "shieldLag": "9",
          "shieldStun": "11"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeDashAttack.gif"
          ],
          "startup": "5",
          "active": "5-8/9-12",
          "total": "41",
          "endlag": "29",
          "damage": "11.0/9.0/8.0/6.0",
          "advantage": "-26/?",
          "shieldLag": "8/7",
          "shieldStun": "10/8",
          "hitboxes": "Early/Late",
          "notes": "Arm intangibility on frame 5-12"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeFSmash.gif"
          ],
          "startup": "41",
          "active": "41-43",
          "total": "73",
          "endlag": "30",
          "damage": "22.0",
          "advantage": "-18",
          "shieldLag": "13",
          "shieldStun": "14",
          "notes": "Charge hold is frame 38"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeUSmash.gif"
          ],
          "startup": "11/35",
          "active": "11-12/35-?",
          "total": "54",
          "damage": "4.0/14.0",
          "advantage": "-39/+1",
          "shieldLag": "5/10",
          "shieldStun": "4/10",
          "hitboxes": "Initial/Projectile",
          "notes": "Charge hold is frame 24. Projectile generated on frame 35. Projectile explosion is active for 5 frames."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/snake/SnakeDSmash.gif"
          ],
          "startup": "8/20",
          "active": "8-10/20-22",
          "total": "44",
          "endlag": "22",
          "damage": "12.0/14.0",
          "advantage": "-28/-14",
          "shieldLag": "9/10",
          "shieldStun": "8/10",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/snake/SnakeNAir.gif"
          ],
          "startup": "10/18/26/36",
          "active": "10-11/18-19/26-27/36-38",
          "total": "59",
          "endlag": "21",
          "landingLag": "16",
          "damage": "3.0/12.0",
          "advantage": "-14/-11",
          "shieldLag": "5/9",
          "shieldStun": "2/5",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-3 and 50 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/snake/SnakeFAir.gif"
          ],
          "startup": "23",
          "active": "23-26",
          "total": "69",
          "endlag": "43",
          "landingLag": "19",
          "damage": "14.0/15.0",
          "advantage": "-14/-14",
          "shieldLag": "10/10",
          "shieldStun": "5/5",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-3 and 63 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/snake/SnakeBAir.gif"
          ],
          "startup": "7",
          "active": "7-9/10-26",
          "total": "42",
          "endlag": "16",
          "landingLag": "19",
          "damage": "16.0/14.0/10.0/9.0",
          "advantage": "-13/-14/-15/-15",
          "shieldLag": "10/10/8/7",
          "shieldStun": "6/5/4/4",
          "hitboxes": "Early far/close, Late far/close",
          "notes": "Autocancels on frame 40 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/snake/SnakeUAir.gif"
          ],
          "startup": "10",
          "active": "10-12/13-23",
          "total": "47",
          "endlag": "24",
          "landingLag": "15",
          "damage": "14.0/10.0",
          "advantage": "-10/-11",
          "shieldLag": "10/8",
          "shieldStun": "5/4",
          "hitboxes": "Far/Close",
          "notes": "Autocancels on frame 1-4 and 36 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/snake/SnakeDAir.gif"
          ],
          "startup": "3/10/17/25",
          "active": "3-4/10-11/17-18/25-26",
          "total": "59",
          "endlag": "33",
          "landingLag": "20",
          "damage": "4.0/3.0/10.0",
          "advantage": "-17/-18/-16",
          "shieldLag": "5/5/8",
          "shieldStun": "3/2/4",
          "hitboxes": "First/Multi/Final",
          "notes": "Autocancels on frame 54 onward"
        },
        {
          "name": "Neutral B (Grenade)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/snake/SnakeGrenadeBurst.gif"
          ],
          "startup": "1 (Grenade Pull)",
          "total": "21",
          "notes": "Pull Pin animation takes 21 frames before you can throw or shield/dodge. Grenades explode on roughly frame 150. Grenade generates on frame 1. Grenade lasts 2.5 seconds until it blows up on its own."
        },
        {
          "name": "Grenade (Neutral Throw, Smash Throw, Underhand Throw)",
          "section": "special",
          "startup": "8, 10, 9",
          "total": "27, 31, 25",
          "damage": "2.0-3.1/8.9-9.9",
          "shieldLag": "5/8",
          "shieldStun": "2/4",
          "hitboxes": "Collide/Explosion",
          "notes": "Grenade collision and explosion vary slightly in damage"
        },
        {
          "name": "Side B (Nikita)",
          "section": "special",
          "startup": "41",
          "active": "41-?",
          "damage": "7.0/14.0",
          "advantage": "-19/-14",
          "shieldLag": "7/10",
          "shieldStun": "3/5",
          "hitboxes": "Early/Late",
          "notes": "Takes 27 frames to cancel with shield. 29 frame fist pump animation after a hit."
        },
        {
          "name": "Up B (Cypher)",
          "section": "special",
          "damage": "6.0",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Damage-based armor on frame 7-94. Frame 47 is the earliest you can cancel the move. To knock Snake off of Cypher you need to do 7% damage in doubles or 8.4% damage in singles with a single hit. To destroy the Cypher with multiple hits, it takes 13% in doubles and 15.6% in singles."
        },
        {
          "name": "Down B (C4)",
          "section": "special",
          "startup": "9",
          "total": "24",
          "notes": "Lasts 26.6 seconds until it blows up on its own."
        },
        {
          "name": "C4 Detonate/Explosion",
          "section": "special",
          "startup": "25",
          "active": "25-27",
          "total": "32",
          "endlag": "5",
          "damage": "17.0",
          "advantage": "+20 / +11",
          "shieldLag": "11/11",
          "shieldStun": "15/6",
          "hitboxes": "Sticky/Non-Sticky"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/snake/SnakeGrab.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "34",
          "endlag": "25"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/snake/SnakeDashGrab.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "42",
          "endlag": "30"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/snake/SnakePivotGrab.gif"
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
            "hitboxes/snake/SnakePummel.gif"
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
            "hitboxes/snake/SnakeFThrow.gif"
          ],
          "startup": "21",
          "total": "39",
          "damage": "9.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/snake/SnakeBThrow.gif"
          ],
          "startup": "20",
          "total": "30",
          "damage": "9.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/snake/SnakeUThrow.gif"
          ],
          "startup": "22/23",
          "total": "47",
          "damage": "7.0/4.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/snake/SnakeDThrow.gif"
          ],
          "startup": "35",
          "total": "41",
          "damage": "9.0"
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
          "total": "47",
          "landingLag": "10",
          "notes": "Intangible on frame 4-28"
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
          "total": "75",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "81",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "99",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "108",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Snake Ledgehang.gif",
            "ledgerolls/Snake.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/snake/snakeGetupAttackU.gif",
            "hitboxes/snake/snakeGetupAttackD.gif",
            "hitboxes/snake/snakeTripAttack.gif",
            "hitboxes/snake/snakeLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/snake",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
