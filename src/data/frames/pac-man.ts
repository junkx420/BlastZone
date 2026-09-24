// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "pac-man",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pac_man/PacManJab1.gif"
          ],
          "startup": "4",
          "active": "4",
          "total": "19",
          "endlag": "15",
          "damage": "2.0",
          "advantage": "-12",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 7"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pac_man/PacManJab2.gif"
          ],
          "startup": "4",
          "active": "4",
          "total": "21",
          "endlag": "17",
          "damage": "2.0",
          "advantage": "-14",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 7"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pac_man/PacManJab3.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "33",
          "endlag": "28",
          "damage": "4.0",
          "advantage": "-24",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pac_man/PacManFTilt.gif",
            "hitboxes/pac_man/PacManFTiltUp.gif",
            "hitboxes/pac_man/PacManFTiltDown.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "30",
          "endlag": "23",
          "damage": "8.0",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pac_man/PacManUTilt.gif"
          ],
          "startup": "7",
          "active": "7-10",
          "total": "24",
          "endlag": "14",
          "damage": "6.5",
          "advantage": "-10",
          "shieldLag": "6",
          "shieldStun": "7",
          "notes": "Arm intangibile on frame 7-10"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pac_man/PacManDTilt.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "26",
          "endlag": "17",
          "damage": "6.0",
          "advantage": "-13",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pac_man/PacManDashAttack.gif"
          ],
          "startup": "10/19/28/37",
          "active": "10-11/19-20/28-29/37",
          "total": "45",
          "endlag": "8",
          "damage": "2.0 / 4.0",
          "advantage": "-3",
          "shieldLag": "4/11",
          "shieldStun": "3/5",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pac_man/PacManFSmash.gif"
          ],
          "startup": "16",
          "active": "16-18(19-29)",
          "total": "52",
          "endlag": "23",
          "damage": "16.0/9.0",
          "advantage": "-25",
          "shieldLag": "10/7",
          "shieldStun": "11/7",
          "hitboxes": "Early/Late",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pac_man/PacManUSmash.gif"
          ],
          "startup": "11/15",
          "active": "11/15-17(18-28)",
          "total": "49",
          "endlag": "21",
          "damage": "3.0/14.0",
          "advantage": "-24",
          "shieldLag": "5/10",
          "shieldStun": "3/10",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pac_man/PacManDSmash.gif"
          ],
          "startup": "15",
          "active": "15-17(18-28)",
          "total": "54",
          "endlag": "26",
          "damage": "13.0/7.0",
          "advantage": "-30",
          "shieldLag": "9/7",
          "shieldStun": "9/6",
          "hitboxes": "Early/late",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pac_man/PacManNAir.gif"
          ],
          "startup": "3",
          "active": "3-5(6-9/10-19)",
          "total": "51",
          "endlag": "32",
          "landingLag": "7",
          "damage": "10.0/6.0",
          "advantage": "-3/-4",
          "shieldLag": "8/6",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 45 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pac_man/PacManFAir.gif"
          ],
          "startup": "5",
          "active": "5-8",
          "total": "25",
          "endlag": "17",
          "landingLag": "10",
          "damage": "7.6",
          "advantage": "-6",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 26 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pac_man/PacManBAir.gif"
          ],
          "startup": "9",
          "active": "9-11(12-16)",
          "total": "40",
          "endlag": "24",
          "landingLag": "13",
          "damage": "11.8/7.0",
          "advantage": "-8/-10",
          "shieldLag": "9/7",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-8 and 36 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pac_man/PacManUAir.gif"
          ],
          "startup": "9",
          "active": "9-16",
          "total": "36",
          "endlag": "20",
          "landingLag": "10",
          "damage": "10.0",
          "advantage": "-6",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 32 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pac_man/PacManDAir.gif"
          ],
          "startup": "6/13/20/27",
          "active": "6-7/13-14/20-21/27-28",
          "total": "49",
          "endlag": "21",
          "landingLag": "12",
          "damage": "2.0/7.0",
          "advantage": "-10/-9",
          "shieldLag": "4/7",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 50 onward"
        },
        {
          "name": "Neutral B (Bonus Fruit, Throw)",
          "section": "special",
          "startup": "12(+7)",
          "total": "41",
          "damage": "4.3 / 6.0 / 7.5 / 9.5 / 12.0 / 9.0 / 7.5 / 16.0",
          "advantage": "-22/-20/-19/-17/-16/-18/-19/-14",
          "shieldLag": "5/6/7/8/9/7/7/10",
          "shieldStun": "2/3/3/4/4/4/3/5",
          "notes": "7 frames to enter charge state. 4 frames to cancel charge with shield. Fruits are Cherry (8), Strawberry (20), Lemon (32), Apple (52), Melon (72), Galaga (92), Bell (112), Key (132) Cherry, Strawberry, Lemon, Apple, and Melon linger for 32 frames after bouncing off somebody"
        },
        {
          "name": "Side B (Power Pellet (Travel | Dash))",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pac_man/PacManPowerPelletEarly.gif",
            "hitboxes/pac_man/PacManPowerPelletLate.gif"
          ],
          "startup": "24-42 | 35-53",
          "total": "83-118",
          "damage": "4.0-5.0 | 6.0-12.0",
          "advantage": "-42 to -54",
          "shieldLag": "5-6 | 6-9",
          "shieldStun": "5 | 6-11",
          "notes": "Only the dash's damage depends on level of charge. Knockback-based armor (100 units)."
        },
        {
          "name": "Up B (Pac-Jump)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pac_man/PacManPacJump.gif"
          ],
          "startup": "4",
          "active": "4-12/13-16/17-21",
          "landingLag": "30",
          "damage": "5.0-10.0",
          "shieldLag": "6-8",
          "shieldStun": "6-10",
          "hitboxes": "first/second/third",
          "notes": "Trampoline can be interracted with as early as frame 10 and is unblockable."
        },
        {
          "name": "Down B (Fire Hydrant)",
          "section": "special",
          "startup": "12",
          "total": "34",
          "damage": "9.0/13.0",
          "advantage": "-11",
          "shieldLag": "7/9",
          "shieldStun": "4/5",
          "hitboxes": "initial/launched"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pac_man/PacManGrab.gif"
          ],
          "startup": "12",
          "active": "12-33",
          "total": "58",
          "endlag": "25"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pac_man/PacManDashGrab.gif"
          ],
          "startup": "14",
          "active": "14-35",
          "total": "66",
          "endlag": "31"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pac_man/PacManPivotGrab.gif"
          ],
          "startup": "15",
          "active": "15-36",
          "total": "61",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pac_man/PacManPummel.gif"
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
            "hitboxes/pac_man/PacManFThrow.gif"
          ],
          "startup": "13",
          "total": "33",
          "damage": "8.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pac_man/PacManBThrow.gif"
          ],
          "startup": "25",
          "total": "59",
          "damage": "11.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pac_man/PacManUThrow.gif"
          ],
          "startup": "18",
          "total": "37",
          "damage": "5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pac_man/PacManDThrow.gif"
          ],
          "startup": "16/24/32/34",
          "total": "64",
          "damage": "1.5/6.0",
          "notes": "multi/final"
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
          "total": "55",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "78",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "87",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "111",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "130",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/pac_man/pacmanGetupAttackU.gif",
            "hitboxes/pac_man/pacmanGetupAttackD.gif",
            "hitboxes/pac_man/pacmanTripAttack.gif",
            "hitboxes/pac_man/pacmanLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/pac_man",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
