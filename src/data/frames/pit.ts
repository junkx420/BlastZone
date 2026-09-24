// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "pit",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitJab1.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "25",
          "endlag": "20",
          "damage": "2.0",
          "advantage": "-18",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 8"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitJab2.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "29",
          "endlag": "23",
          "damage": "2.0",
          "advantage": "-21",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 8. To rapid jab as early as 7"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitJab3.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "31",
          "endlag": "28",
          "damage": "4.0",
          "advantage": "-23",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitJabRapid.gif"
          ],
          "startup": "6/8/10...",
          "active": "6/8/10...",
          "damage": "0.5",
          "shieldLag": "4",
          "shieldStun": "3"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitJabRapidEnd.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "47",
          "endlag": "42",
          "damage": "2.0",
          "advantage": "-40",
          "shieldLag": "9",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitFTilt.gif"
          ],
          "startup": "10",
          "active": "10-14",
          "total": "39",
          "endlag": "25",
          "damage": "7.0/10.0",
          "advantage": "-22/-19",
          "shieldLag": "7/10",
          "shieldStun": "7/10",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitUTilt.gif"
          ],
          "startup": "6/15",
          "active": "6-8/15-16",
          "total": "32",
          "endlag": "16",
          "damage": "4.0/5.0",
          "advantage": "-23/-13",
          "shieldLag": "5/6",
          "shieldStun": "5/6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitDTilt.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "25",
          "endlag": "18",
          "damage": "6.0",
          "advantage": "-13",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitDashAttack.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "38",
          "endlag": "29",
          "damage": "11.0",
          "advantage": "-17",
          "shieldLag": "8",
          "shieldStun": "14"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitFSmash.gif"
          ],
          "startup": "10/21",
          "active": "10/21-22",
          "total": "54",
          "endlag": "32",
          "damage": "5.0/10.0",
          "advantage": "-26",
          "shieldLag": "6/8",
          "shieldStun": "4/7",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitUSmash.gif"
          ],
          "startup": "6/7/10/18",
          "active": "6/7/10/18",
          "total": "51",
          "endlag": "33",
          "damage": "3.0/*/2.0/8.0",
          "advantage": "-27",
          "shieldLag": "5/*/4/9",
          "shieldStun": "3/*/3/6",
          "hitboxes": "First/First Late/Second/Third",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pit/PitDSmash.gif"
          ],
          "startup": "5/18",
          "active": "5-6/18-20",
          "total": "40",
          "endlag": "20",
          "damage": "12.0/10.0",
          "advantage": "-27/-28/-14/-15",
          "shieldLag": "9/8",
          "shieldStun": "8/7",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pit/PitNAir.gif"
          ],
          "startup": "4/7/10/13/16/19/22/25",
          "active": "4-5/7-8/10-11/13-14/16-17/19-20/22-23/25",
          "total": "54",
          "endlag": "29",
          "landingLag": "14",
          "damage": "0.7/4.5",
          "advantage": "-12/-11",
          "shieldLag": "4/10",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-3 and 30 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pit/PitFAir.gif"
          ],
          "startup": "11/14/18",
          "active": "11-12/14-15/18-19",
          "total": "46",
          "endlag": "27",
          "landingLag": "12",
          "damage": "2.5/6.0",
          "advantage": "-10/-9",
          "shieldLag": "5/14",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 28 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pit/PitBAir.gif"
          ],
          "startup": "10",
          "active": "10-12",
          "total": "40",
          "endlag": "28",
          "landingLag": "8",
          "damage": "8.0/12.0",
          "advantage": "-4/-3",
          "shieldLag": "8/11",
          "shieldStun": "4/5",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 28 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pit/PitUAir.gif"
          ],
          "startup": "10/13/16/19/22",
          "active": "10-12/13-15/16-18/19-21/22-23",
          "total": "40",
          "endlag": "17",
          "landingLag": "14",
          "damage": "1.5/5.0",
          "advantage": "-12/-11",
          "shieldLag": "4/11",
          "shieldStun": "2/3",
          "notes": "Autocancels on frame 1-4 and 37 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pit/PitDAir.gif"
          ],
          "startup": "10",
          "active": "10/11-12",
          "total": "36",
          "endlag": "24",
          "landingLag": "12",
          "damage": "10.0",
          "advantage": "-8",
          "shieldLag": "8",
          "shieldStun": "4",
          "hitboxes": "Normal/Late",
          "notes": "Autocancels on frame 1-6 and 36 onward"
        },
        {
          "name": "Neutral B (Palutena's Bow)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pit/PitPalutenasBowMinimum.gif"
          ],
          "startup": "16-76",
          "active": "16-60 (sideways) || 17-61 (up)",
          "total": "See Notes",
          "damage": "3.2-8.6",
          "advantage": "-23 to -20",
          "shieldLag": "5-7",
          "shieldStun": "2-3",
          "notes": "Total frames vary depending on which move is used: Forward, Grounded : 46 | Forward, Aerial : 43 | Up, Grounded : 42 | Up, Aerial : 40"
        },
        {
          "name": "Side B (Upperdash Arm)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pit/PitUpperdashkArmG.gif",
            "hitboxes/pit/PitUpperdashArmHitG.gif"
          ],
          "startup": "18",
          "active": "16-35(detector)",
          "total": "79/49",
          "damage": "11.0",
          "advantage": "-37",
          "shieldLag": "15",
          "shieldStun": "10",
          "notes": "Startup is 2 upon reaching a target. Super Armor begins on frame 11 and ends on the frame he begins swing."
        },
        {
          "name": "Side B, Air (Upperdash Arm, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pit/PitUpperdashArmA.gif",
            "hitboxes/pit/PitUpperdashArmHitA.gif"
          ],
          "startup": "21",
          "active": "19-35(detector)",
          "total": "104/51",
          "landingLag": "30",
          "damage": "9.0",
          "advantage": "-40",
          "shieldLag": "15",
          "shieldStun": "9",
          "notes": "Startup is 2 upon reaching a target. 55 endlag on the swing if you don't land"
        },
        {
          "name": "Up B (Power of Flight)",
          "section": "special",
          "landingLag": "40",
          "notes": "Invulnerable on frame 9-19, 15-19 in the air. Can Sweetspot ledges starting on frame 24."
        },
        {
          "name": "Down B (Guardian Orbitars)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pit/PitGuardianOrbitars.gif",
            "hitboxes/dark_pit/PitGuardianOrbitarsAerial.gif"
          ],
          "startup": "7 (Start of Reflect)",
          "total": "39-124",
          "notes": "Reflects/blocks as early as frame 7. 18 endlag on release."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pit/PitGrab.gif"
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
            "hitboxes/pit/PitDashGrab.gif"
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
            "hitboxes/pit/PitPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "37",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pit/PitPummel.gif"
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
            "hitboxes/pit/PitFThrow.gif"
          ],
          "startup": "12/14",
          "total": "27",
          "damage": "6.0/4.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pit/PitBThrow.gif"
          ],
          "startup": "29",
          "total": "38",
          "damage": "8.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pit/PitUThrow.gif"
          ],
          "startup": "13/15",
          "total": "37",
          "damage": "4.0/7.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pit/PitDThrow.gif"
          ],
          "startup": "13/16",
          "total": "31",
          "damage": "2.0/4.0"
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
          "total": "52",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "73",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "82",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "89",
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
          "total": "119",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/pit/pitGetupAttackU.gif",
            "hitboxes/pit/pitGetupAttackD.gif",
            "hitboxes/pit/pitTripAttack.gif",
            "hitboxes/pit/pitLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/pit",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
