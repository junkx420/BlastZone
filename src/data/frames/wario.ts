// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "wario",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wario/WarioJab1.gif"
          ],
          "startup": "8",
          "active": "8—9",
          "total": "27",
          "endlag": "18",
          "damage": "5.0",
          "advantage": "-16",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Transitions to Jab 2 as early as frame 10."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wario/WarioJab2.gif"
          ],
          "startup": "4",
          "active": "4—5",
          "total": "29",
          "endlag": "24",
          "damage": "7.0",
          "advantage": "-23",
          "shieldLag": "12",
          "shieldStun": "6"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wario/WarioFTilt.gif",
            "hitboxes/wario/WarioFTiltUp.gif",
            "hitboxes/wario/WarioFTiltDown.gif"
          ],
          "startup": "12",
          "active": "12—15",
          "total": "39",
          "endlag": "24",
          "damage": "13.0/10.0",
          "advantage": "-15",
          "shieldLag": "9",
          "shieldStun": "12",
          "hitboxes": "Far/Close"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wario/WarioUTilt.gif"
          ],
          "startup": "8",
          "active": "8—10/11—15",
          "total": "27",
          "endlag": "12",
          "damage": "6.0/5.0",
          "advantage": "-13",
          "shieldLag": "6",
          "shieldStun": "6",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wario/WarioDTilt.gif"
          ],
          "startup": "5",
          "active": "5",
          "total": "17",
          "endlag": "12",
          "damage": "4.0",
          "advantage": "-7",
          "shieldLag": "5",
          "shieldStun": "5"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wario/WarioDashAttack.gif"
          ],
          "startup": "5",
          "active": "5—8/9—23",
          "total": "48",
          "endlag": "25",
          "damage": "11.0/5.0",
          "advantage": "-33",
          "shieldLag": "8/6",
          "shieldStun": "10/6",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wario/WarioFSmash.gif"
          ],
          "startup": "18",
          "active": "18—19",
          "total": "65",
          "endlag": "46",
          "damage": "20.0",
          "advantage": "-34",
          "shieldLag": "12",
          "shieldStun": "13",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wario/WarioUSmash.gif"
          ],
          "startup": "11",
          "active": "11—12/13",
          "total": "57",
          "endlag": "44",
          "damage": "17.0/13.0",
          "advantage": "-35/-37",
          "shieldLag": "11/9",
          "shieldStun": "11/9",
          "hitboxes": "Close/Far",
          "notes": "Head intangibility on frame 8-14. Charge hold is frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wario/WarioDSmash.gif"
          ],
          "startup": "8",
          "active": "8—17/18—27/28—36",
          "total": "61",
          "endlag": "25",
          "damage": "13.0/10.0/5.0",
          "advantage": "-44",
          "shieldLag": "9",
          "shieldStun": "9",
          "hitboxes": "Early/Late/Later",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/wario/WarioNAir.gif"
          ],
          "startup": "4/20",
          "active": "4—12(13—17)/20—26(27—42)",
          "total": "45",
          "endlag": "3",
          "landingLag": "7",
          "damage": "6.0/3.0/6.0/4.0/5.0",
          "advantage": "-4/-4",
          "shieldLag": "6/6",
          "shieldStun": "3/3",
          "hitboxes": "Early Hit 1/Late Hit 1 Hands/Late Hit 1 Body/Early Hit 2/Late Hit 2",
          "notes": "Autocancels on frame 1-3 and 43 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/wario/WarioFAir.gif"
          ],
          "startup": "5",
          "active": "5—6/7—17",
          "total": "37",
          "endlag": "20",
          "landingLag": "10",
          "damage": "7.0 / 4.5",
          "advantage": "-7/-7",
          "shieldLag": "7/5",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-4 and 27 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/wario/WarioBAir.gif"
          ],
          "startup": "9",
          "active": "9—11",
          "total": "49",
          "endlag": "38",
          "landingLag": "16",
          "damage": "12.0",
          "advantage": "-11",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-4 and 34 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/wario/WarioUAir.gif"
          ],
          "startup": "8",
          "active": "8—9",
          "total": "46",
          "endlag": "37",
          "landingLag": "7",
          "damage": "13.0",
          "advantage": "-2",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-3 and 37 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/wario/WarioDAir.gif"
          ],
          "startup": "9/11/13/15/17/19/21",
          "active": "9/11/13/15/17/19/21",
          "total": "47",
          "endlag": "26",
          "landingLag": "18",
          "damage": "1.3/4.0",
          "advantage": "-16/-15",
          "shieldLag": "4/11",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-2 and 42 onward"
        },
        {
          "name": "Neutral B (Chomp)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/wario/WarioChomp.gif",
            "hitboxes/wario/WarioChompBite.gif",
            "hitboxes/wario/WarioChompBomb.gif"
          ],
          "startup": "8 (11 Grab Release)",
          "active": "8—16 (Can hold: 8—64)",
          "total": "41 (19 Grab Release)",
          "notes": "25 endlag from release of the button. Can eat projectiles on frame 9—. With the exception of Bike being eaten on frame 2. Animation for eating a projectile is 25 frames. 55 for the Bike."
        },
        {
          "name": "Side B (Wario Bike)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/wario/WarioBikeDrive.gif"
          ],
          "startup": "20/24",
          "active": "20—**",
          "damage": "0.6—11.4",
          "shieldLag": "4-8, 6-13(Wario)",
          "shieldStun": "2—4",
          "notes": "Startup is 24 if mounting a bike laying on the ground. Frame 20 is the earliest you can jump, turnaround, wheelie. Wario seems to suffer more shieldlag than the defender on any hit."
        },
        {
          "name": "Wario Bike, Wheelie",
          "section": "special",
          "hitboxImages": [
            "hitboxes/wario/WarioBikeWheelie.gif"
          ],
          "startup": "4/54",
          "total": "64",
          "damage": "5.0/13.0",
          "advantage": "-60/-10",
          "shieldLag": "8/9, 11/14(Wario)",
          "shieldStun": "3/5",
          "notes": "Bike armor on frame 10. Jump animation takes 28 frames."
        },
        {
          "name": "Wario Bike, Turnaround",
          "section": "special",
          "hitboxImages": [
            "hitboxes/wario/WarioBikeTurn.gif"
          ],
          "startup": "6",
          "total": "45",
          "damage": "7.0",
          "advantage": "-40",
          "shieldLag": "8, 12(Wario)",
          "shieldStun": "3",
          "notes": "Looking for Bike animation takes 39 frames"
        },
        {
          "name": "Bike (Thrown / Item)",
          "section": "special"
        },
        {
          "name": "Up B (Corkscrew)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/wario/WarioCorkscrew.gif"
          ],
          "startup": "6/8/12/16/20/29",
          "active": "6—7/8—11/12—15/16—19/20—23/29—30",
          "landingLag": "20",
          "damage": "5.0/1.0/4.0",
          "shieldLag": "6/4/11",
          "shieldStun": "-/2/5",
          "hitboxes": "First/Multi/Final"
        },
        {
          "name": "Down B (Wario Waft)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/wario/WarioWarioWaftToot.gif",
            "hitboxes/wario/WarioWarioWaftLow.gif",
            "hitboxes/wario/WarioWarioWaftHalf.gif",
            "hitboxes/wario/WarioWarioWaftFull.gif"
          ],
          "startup": "16, 10, 8, 12",
          "active": "16—18, 10—11, 8—11, 12—13/14—29",
          "total": "79, 64, 54, 63",
          "endlag": "50",
          "damage": "0.0, 12.0+, 20.0+, 27.0/20.0",
          "advantage": "--, -41, -24, -28",
          "shieldLag": "--, 10, 13, 19/12",
          "shieldStun": "--, 13, 20, 23/18",
          "hitboxes": "Stage 1, Stage 2, Stage 3, Final Stage Early/Late",
          "notes": "Full Waft has armor on frames 4—13."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wario/WarioGrab.gif"
          ],
          "startup": "8",
          "active": "8—10",
          "total": "35",
          "endlag": "25"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wario/WarioDashGrab.gif"
          ],
          "startup": "11",
          "active": "11—13",
          "total": "43",
          "endlag": "30"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wario/WarioPivotGrab.gif"
          ],
          "startup": "12",
          "active": "12—14",
          "total": "38",
          "endlag": "24"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wario/WarioPummel.gif"
          ],
          "startup": "2",
          "total": "21",
          "landingLag": "Total frames includes 14 frames of hitlag.",
          "damage": "1.6"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wario/WarioFThrow.gif"
          ],
          "startup": "20/21",
          "total": "54",
          "damage": "4.0/8.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wario/WarioBThrow.gif"
          ],
          "startup": "48",
          "total": "69",
          "damage": "7.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wario/WarioUThrow.gif"
          ],
          "startup": "24/25",
          "total": "43",
          "damage": "4.0/4.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wario/WarioDThrow.gif"
          ],
          "startup": "22/30",
          "total": "54",
          "damage": "4.0/7.0"
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
          "total": "50",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "66",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "75",
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
          "total": "97",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "104",
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
            "ledgehangs/Wario Ledgehang.gif",
            "ledgerolls/Wario.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/wario/warioGetupAttackU.gif",
            "hitboxes/wario/warioGetupAttackD.gif",
            "hitboxes/wario/warioTripAttack.gif",
            "hitboxes/wario/warioLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/wario",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
