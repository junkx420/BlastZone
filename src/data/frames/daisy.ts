// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "daisy",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/daisy/DaisyJab1.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "27",
          "endlag": "25",
          "damage": "2.0",
          "advantage": "-22",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 7."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/daisy/DaisyJab2.gif"
          ],
          "startup": "2",
          "active": "2—3",
          "total": "29",
          "endlag": "26",
          "damage": "3.0",
          "advantage": "-23",
          "shieldLag": "9",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/daisy/DaisyFTilt.gif"
          ],
          "startup": "7",
          "active": "7/8—9/10—15",
          "total": "36",
          "endlag": "21",
          "damage": "7.0/8.0/6.0",
          "advantage": "-22/-21",
          "shieldLag": "7/4/**",
          "shieldStun": "7/8/**",
          "hitboxes": "Close/Mid hit far/Late"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/daisy/DaisyUTilt.gif"
          ],
          "startup": "9",
          "active": "9—13",
          "total": "37",
          "endlag": "24",
          "damage": "8.0/10.0",
          "advantage": "-20/-18",
          "shieldLag": "7/8",
          "shieldStun": "8/10",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/daisy/DaisyDTilt.gif"
          ],
          "startup": "8",
          "active": "8—9",
          "total": "23",
          "endlag": "14",
          "damage": "7.0",
          "advantage": "-8",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/daisy/DaisyDashAttack.gif"
          ],
          "startup": "6/17",
          "active": "6—9/17—19",
          "total": "37",
          "endlag": "18",
          "damage": "4.0/6.0",
          "advantage": "-14",
          "shieldLag": "5/7",
          "shieldStun": "-/6",
          "notes": "First hit blockstrings into second hit"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/daisy/DaisyFSmashFryingPan.gif",
            "hitboxes/daisy/DaisyFSmashGolfClub.gif",
            "hitboxes/daisy/DaisyFSmashTennisRacket.gif"
          ],
          "startup": "15",
          "active": "15—17/15—17/15—17",
          "total": "45",
          "endlag": "28",
          "damage": "15.0/13.5/18.0",
          "advantage": "-20/-21/-18",
          "shieldLag": "10/10/11",
          "shieldStun": "10/9/12",
          "hitboxes": "Golf/Tennis/Pan",
          "notes": "Can make directional inputs to change weapon. Charge hold is frame 5."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/daisy/DaisyUSmash.gif"
          ],
          "startup": "14",
          "active": "14—16/17—20",
          "total": "44",
          "endlag": "24",
          "damage": "17.0/15.0/12.0/10.0/12.0",
          "advantage": "-20/-19",
          "shieldLag": "10/11",
          "shieldStun": "10/11",
          "hitboxes": "Early tip/Early hand/Early sides/Late tip/Late hand",
          "notes": "Head and arm intangibility on frame 14-20. Charge hold is frame 9"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/daisy/DaisyDSmash.gif"
          ],
          "startup": "6/10/14/18/22/26/30",
          "active": "6—7/10—11/14—15/18—19/ 22—23/26—27/30—31",
          "total": "54",
          "endlag": "23",
          "damage": "2.0/3.0",
          "advantage": "-21",
          "shieldLag": "4/15",
          "shieldStun": "3/3",
          "hitboxes": "Multi/Final",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/daisy/DaisyNAir.gif"
          ],
          "startup": "5",
          "active": "5—8/9—19",
          "total": "48",
          "endlag": "29",
          "landingLag": "7",
          "damage": "13.0/6.0/5.0",
          "advantage": "-2/-4",
          "shieldLag": "9/6",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late hands/Late hips",
          "notes": "Autocancels on frame 1-4 and 36 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/daisy/DaisyFAir.gif"
          ],
          "startup": "16",
          "active": "16—20",
          "total": "57",
          "endlag": "37",
          "landingLag": "13",
          "damage": "14.0/15.0",
          "advantage": "-8/-8",
          "shieldLag": "10/10",
          "shieldStun": "5/5",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-9 and 41 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/daisy/DaisyBAir.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "53",
          "endlag": "46",
          "landingLag": "11",
          "damage": "12.0/7.0",
          "advantage": "-6/-8",
          "shieldLag": "9/7",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-4 and 30 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/daisy/DaisyUAir.gif"
          ],
          "startup": "10/15",
          "active": "(10/11/12—13)(15/16—19)",
          "total": "45",
          "endlag": "26",
          "landingLag": "7",
          "damage": "4.0/6.0",
          "advantage": "-4/-4",
          "shieldLag": "6/7",
          "shieldStun": "3/3",
          "hitboxes": "Hit 1(Early/Normal/Late)/Hit 2(Early/Normal)",
          "notes": "Autocancels on frame 1-4 and 41 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/daisy/DaisyDAir.gif"
          ],
          "startup": "12/18/24/30",
          "active": "12—13/18—19/24—25/30—31",
          "total": "38",
          "endlag": "7",
          "landingLag": "8",
          "damage": "2.0/1.0/5.0",
          "advantage": "-6/-5",
          "shieldLag": "4/6",
          "shieldStun": "2/3",
          "hitboxes": "Multihits far/Multihits close/Final",
          "notes": "Autocancels on frame 1-11 and 38 onward"
        },
        {
          "name": "Neutral B (Toad)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/daisy/DaisyToad.gif"
          ],
          "startup": "9 (Start of Counter)",
          "total": "62",
          "notes": "Counter window 9-34 from 10-35. Also invulnerable on frame 8."
        },
        {
          "name": "Toad, Attack",
          "section": "special",
          "startup": "2/6/8/12/14/17",
          "total": "60",
          "damage": "3.5 per spore"
        },
        {
          "name": "Side B (daisy Bomber)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/daisy/DaisyDaisyBomberHit.gif"
          ],
          "startup": "13",
          "active": "13—36(detector)",
          "total": "62/87",
          "damage": "12.0",
          "advantage": "-13",
          "shieldLag": "9",
          "shieldStun": "11",
          "notes": "Startup is 2 upon reaching a target. 18 endlag on hit. Total frames is 62 on level ground when you miss. And 87 if you miss and go over an edge. Hit is 25 total frames."
        },
        {
          "name": "Side B, Air (daisy Bomber, Air)",
          "section": "special",
          "startup": "13",
          "active": "13—36(detector)",
          "total": "87",
          "landingLag": "35",
          "damage": "12.0",
          "advantage": "-13",
          "shieldLag": "9",
          "shieldStun": "11",
          "notes": "Startup is 2 upon reaching a target. 18 endlag on hit."
        },
        {
          "name": "Up B (daisy Parasol)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/daisy/DaisyDaisyParasol.gif",
            "hitboxes/daisy/DaisyDaisyParasolFall.gif"
          ],
          "startup": "7/11/16/21/26/31",
          "active": "7/11/16/21/26/31",
          "landingLag": "26/40",
          "damage": "3.0/1.0/4.0",
          "shieldLag": "5/4/15",
          "shieldStun": "4/2/5",
          "hitboxes": "First/Multi/Final",
          "notes": "40 landing lag from special fall. Or 26 if still holding umbrella"
        },
        {
          "name": "Down B (Turnip Pull)",
          "section": "special",
          "total": "39",
          "damage": "8.3—27.6",
          "shieldLag": "7—15",
          "shieldStun": "3—8",
          "notes": "Turnip damage depends both on the type and how it is thrown. Z-Drop damage depends on distance fallen. Turnip chances are: Normal(88.7), Winking(6.89), Dot Eye(1.7), Stitchface(1.7), Bob-omb(0.4), Mr. Saturn(0.6)."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/daisy/DaisyGrab.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "36",
          "endlag": "29"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/daisy/DaisyDashGrab.gif"
          ],
          "startup": "9",
          "active": "9—10",
          "total": "44",
          "endlag": "34"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/daisy/DaisyPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "39",
          "endlag": "28"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/daisy/DaisyPummel.gif"
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
            "hitboxes/daisy/DaisyFThrow.gif"
          ],
          "startup": "14/16",
          "total": "39",
          "damage": "2.0/6.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/daisy/DaisyBThrow.gif"
          ],
          "startup": "20/21",
          "total": "49",
          "damage": "2.0/9.0",
          "notes": "Invincible 1-22"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/daisy/DaisyUThrow.gif"
          ],
          "startup": "19/26",
          "total": "49",
          "damage": "2.0/6.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/daisy/DaisyDThrow.gif"
          ],
          "startup": "34/43",
          "total": "64",
          "damage": "1.0/7.0"
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
          "total": "61",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "86",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "92",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "103",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "124",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "141",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/daisy/daisyGetupAttackU.gif",
            "hitboxes/daisy/daisyGetupAttackD.gif",
            "hitboxes/daisy/daisyTripAttack.gif",
            "hitboxes/daisy/daisyLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/daisy",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
