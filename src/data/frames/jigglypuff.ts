// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "jigglypuff",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffJab1.gif"
          ],
          "startup": "5",
          "active": "5—6",
          "total": "16",
          "endlag": "10",
          "damage": "3.0",
          "advantage": "-7",
          "shieldLag": "6",
          "shieldStun": "4",
          "notes": "Transitions to Jab 2 as early as frame 7."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffJab2.gif"
          ],
          "startup": "5",
          "active": "5—6",
          "total": "16",
          "endlag": "10",
          "damage": "3.0",
          "advantage": "-7",
          "shieldLag": "9",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffFTilt.gif",
            "hitboxes/jigglypuff/JigglypuffFTiltUp.gif",
            "hitboxes/jigglypuff/JigglypuffFTiltDown.gif"
          ],
          "startup": "7",
          "active": "7—10",
          "total": "24",
          "endlag": "14",
          "damage": "10.0",
          "advantage": "-7",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffUTilt.gif"
          ],
          "startup": "9",
          "active": "9—10(11—13)",
          "total": "24",
          "endlag": "11",
          "damage": "9.0/8.0",
          "advantage": "-6",
          "shieldLag": "7/7",
          "shieldStun": "9/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffDTilt.gif"
          ],
          "startup": "10",
          "active": "10—12",
          "total": "30",
          "endlag": "18",
          "damage": "10.0",
          "advantage": "-10",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffDashAttack.gif"
          ],
          "startup": "5",
          "active": "5—7(8—20)",
          "total": "39",
          "endlag": "19",
          "damage": "12.0/8.0",
          "advantage": "-22/-23",
          "shieldLag": "9/7",
          "shieldStun": "12/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffFSmash.gif"
          ],
          "startup": "16",
          "active": "16—19(20—24)",
          "total": "49",
          "endlag": "25",
          "damage": "16.0/14.0",
          "advantage": "-22",
          "shieldLag": "10/10",
          "shieldStun": "11/10",
          "hitboxes": "Early/Late",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffUSmash.gif"
          ],
          "startup": "16",
          "active": "16—19",
          "total": "45",
          "endlag": "26",
          "damage": "15.0",
          "advantage": "-18",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Charge hold is frame 8"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffDSmash.gif"
          ],
          "startup": "14",
          "active": "14—16",
          "total": "48",
          "endlag": "32",
          "damage": "11.0",
          "advantage": "-26",
          "shieldLag": "8",
          "shieldStun": "8",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffNAir.gif"
          ],
          "startup": "6",
          "active": "6—7(8—30)",
          "total": "43",
          "endlag": "13",
          "landingLag": "9",
          "damage": "11.0/6.0",
          "advantage": "-4/-6",
          "shieldLag": "9/6",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-3 and 40 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffFAir.gif"
          ],
          "startup": "8",
          "active": "8—9(10—20)",
          "total": "36",
          "endlag": "16",
          "landingLag": "9",
          "damage": "9.0/6.0",
          "advantage": "-5/-6",
          "shieldLag": "8/6",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-3 and 28 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffBAir.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "35",
          "endlag": "24",
          "landingLag": "8",
          "damage": "13.0",
          "advantage": "-3",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-3 and 26 onward. Turns the character around."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffUAir.gif"
          ],
          "startup": "9",
          "active": "9—21",
          "total": "39",
          "endlag": "18",
          "landingLag": "9",
          "damage": "9.0",
          "advantage": "-5",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-3 and 35 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffDAir.gif"
          ],
          "startup": "7/10/13/16/19/22/25/28/31",
          "active": "7—8/10—11/13—14/16—17/19—20/22—23/25—26/28—29/31—32",
          "total": "52",
          "endlag": "20",
          "landingLag": "12",
          "damage": "1.5/2.0",
          "advantage": "-13",
          "shieldLag": "4/10",
          "shieldStun": "2/2",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 42 onward"
        },
        {
          "name": "Neutral B (Rollout)",
          "section": "special",
          "startup": "15+37...",
          "total": "67 (no charge)",
          "damage": "10.0—20.0",
          "shieldLag": "9—12",
          "shieldStun": "11—18",
          "notes": "Reaches full charge at 51 frames. Max charge active frames are at 52-144 if released frame perfectly (93 active frames). Ending animation has 31 total frames if grounded or 36 when aerial. Jigglypuff is helpless if she does not land or grab an edge after a hit, but she will pass through shields."
        },
        {
          "name": "Side B (Pound)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffPound.gif"
          ],
          "startup": "13",
          "active": "13—28",
          "total": "39",
          "endlag": "11",
          "damage": "11.0",
          "advantage": "-11",
          "shieldLag": "8",
          "shieldStun": "15"
        },
        {
          "name": "Up B (Sing)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffSing.gif"
          ],
          "startup": "27/61/100",
          "active": "27—36/61—70/100—115",
          "total": "149",
          "endlag": "34"
        },
        {
          "name": "Down B (Rest)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffRest.gif"
          ],
          "startup": "2",
          "active": "2—4",
          "total": "209 (186 on hit)",
          "endlag": "205",
          "damage": "20.0",
          "advantage": "-166",
          "shieldLag": "12",
          "shieldStun": "18",
          "notes": "Invulnerable on frame 1-27"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffGrab.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "32",
          "endlag": "25"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffDashGrab.gif"
          ],
          "startup": "9",
          "active": "9—10",
          "total": "39",
          "endlag": "29"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "34",
          "endlag": "23"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag. Active 1—2."
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffFThrow.gif"
          ],
          "startup": "10/12",
          "total": "35",
          "damage": "5.0/5.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffBThrow.gif"
          ],
          "startup": "26",
          "total": "49",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffUThrow.gif"
          ],
          "startup": "9",
          "total": "37",
          "damage": "8.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/jigglypuff/JigglypuffDThrow.gif"
          ],
          "startup": "60/62",
          "total": "83",
          "damage": "6.0/6.0"
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
          "notes": "Intangible on frame 4-15."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "35",
          "notes": "Intangible on frame 5-16."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "63",
          "landingLag": "10",
          "notes": "Intangible on frame 4-32."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "106",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "132",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "158",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/jigglypuff/jigglypuffGetupAttackU.gif",
            "hitboxes/jigglypuff/jigglypuffGetupAttackD.gif",
            "hitboxes/jigglypuff/jigglypuffTripAttack.gif",
            "hitboxes/jigglypuff/jigglypuffLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/jigglypuff",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
