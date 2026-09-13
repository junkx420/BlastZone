// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "meta-knight",
  "sets": [
    {
      "moves": [
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightJabRapid.gif"
          ],
          "startup": "4/7/10...",
          "active": "4/7/10...",
          "total": "15",
          "endlag": "5",
          "damage": "1.0",
          "shieldLag": "4",
          "notes": "Rapid Jab loop is 22 frames."
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightJabRapidEnd.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "30",
          "endlag": "27",
          "damage": "2.0",
          "advantage": "-24",
          "shieldLag": "12",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightFTilt1.gif"
          ],
          "startup": "6",
          "active": "6",
          "total": "25",
          "endlag": "19",
          "damage": "2.0",
          "advantage": "-16",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to next hit as early as frame 10."
        },
        {
          "name": "Forward Tilt 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightFTilt2.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "27",
          "endlag": "25",
          "damage": "2.0",
          "advantage": "-22",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to next hit as early as frame 7"
        },
        {
          "name": "Forward Tilt 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightFTilt3.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "30",
          "endlag": "28",
          "damage": "4.0",
          "advantage": "-23",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightUTilt.gif"
          ],
          "startup": "8",
          "active": "8—10/11—14",
          "total": "34",
          "endlag": "20",
          "damage": "6.0/7.0",
          "advantage": "-20/-19",
          "shieldLag": "7/8",
          "shieldStun": "6/7",
          "hitboxes": "Close/Tipper"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightDTilt.gif"
          ],
          "startup": "3",
          "active": "3—4",
          "total": "18",
          "endlag": "14",
          "damage": "5.0",
          "advantage": "-9",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightDashAttack.gif"
          ],
          "startup": "7",
          "active": "7—11",
          "total": "32",
          "endlag": "21",
          "damage": "7.0/6.0",
          "advantage": "-18",
          "shieldLag": "7/7",
          "shieldStun": "7/7",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightFSmash.gif"
          ],
          "startup": "24",
          "active": "24",
          "total": "41",
          "endlag": "17",
          "damage": "16.0",
          "advantage": "-6",
          "shieldLag": "15",
          "shieldStun": "11",
          "notes": "Charge hold is frame 20"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightUSmash.gif"
          ],
          "startup": "8/12/17",
          "active": "8/12/17",
          "total": "49",
          "endlag": "32",
          "damage": "4.0/3.0/5.0",
          "advantage": "-28",
          "shieldLag": "5/5/12",
          "shieldStun": "3/3/4",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightDSmash.gif"
          ],
          "startup": "4/9",
          "active": "4/9",
          "total": "37",
          "endlag": "28",
          "damage": "10.0/13.0",
          "advantage": "-26/-19",
          "shieldLag": "8/9",
          "shieldStun": "7/9",
          "notes": "Charge hold is frame 1"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightNAir.gif"
          ],
          "startup": "6",
          "active": "6—7/8—20",
          "total": "43",
          "endlag": "23",
          "landingLag": "7",
          "damage": "10.0/7.5",
          "advantage": "-3/-4",
          "shieldLag": "8/7",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-5 and 40 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightFAir.gif"
          ],
          "startup": "9/12/15",
          "active": "9/12/15",
          "total": "39",
          "endlag": "24",
          "landingLag": "10",
          "damage": "1.5/3.0",
          "advantage": "-8/-8",
          "shieldLag": "4/10",
          "shieldStun": "2/2",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 39 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightBAir.gif"
          ],
          "startup": "7/13/20",
          "active": "7—8/13—14/20—21",
          "total": "51",
          "endlag": "30",
          "landingLag": "11",
          "damage": "1.5/4.0",
          "advantage": "-9/-8",
          "shieldLag": "4/11",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-6 and 40 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightUAir.gif"
          ],
          "startup": "6",
          "active": "6",
          "total": "26",
          "endlag": "20",
          "landingLag": "9",
          "damage": "4.0",
          "advantage": "-6",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Autocancels on frame 1-5 and 24 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightDAir.gif"
          ],
          "startup": "4",
          "active": "4",
          "total": "27",
          "endlag": "23",
          "landingLag": "9",
          "damage": "6.0",
          "advantage": "-6",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Autocancels on frame 1-3 and 26 onward"
        },
        {
          "name": "Neutral B (Mach Tornado)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightMachTornado.gif"
          ],
          "startup": "12",
          "active": "12—21/22—46",
          "total": "104",
          "endlag": "58",
          "landingLag": "29",
          "damage": "12.0/8.0",
          "advantage": "-81",
          "shieldLag": "11/9",
          "shieldStun": "11/8",
          "notes": "Landing lag only occurs after entering special fall."
        },
        {
          "name": "Side B (Drill Rush)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightDrillRush.gif",
            "hitboxes/meta_knight/MetaKnightDrillRushEnd.gif"
          ],
          "startup": "26/30/34/38/42/46/ 50/54/58/62/66/70",
          "active": "26—69/70",
          "total": "98",
          "endlag": "28",
          "landingLag": "26",
          "damage": "1.1/3.0",
          "advantage": "-24",
          "shieldLag": "4/15",
          "shieldStun": "2/4",
          "notes": "Total frames is assuming you travel along the ground."
        },
        {
          "name": "Up B (Shuttle Loop)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightShuttleLoopG.gif"
          ],
          "startup": "8/22",
          "active": "(8/9—10/11—12)22—27",
          "landingLag": "30",
          "damage": "9.0/6.0/6.0",
          "shieldLag": "11/6/9",
          "shieldStun": "9/6/6",
          "hitboxes": "Early/Late/Second"
        },
        {
          "name": "Up B, Air (Shuttle Loop, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightShuttleLoopA.gif"
          ],
          "startup": "7/20",
          "active": "(7/8—10)20—26",
          "landingLag": "30",
          "damage": "6.0/6.0",
          "shieldLag": "6/9",
          "shieldStun": "6/6",
          "hitboxes": "First/Second"
        },
        {
          "name": "Down B (Dimensional Cape)",
          "section": "special",
          "total": "57",
          "landingLag": "30",
          "notes": "Invulnerable on frame 12-39. Landing lag only occurs if you enter special fall."
        },
        {
          "name": "Dimensional Cape, Attack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightDimensionalCapeA.gif",
            "hitboxes/meta_knight/MetaKnightDimensionalCapeAB.gif",
            "hitboxes/meta_knight/MetaKnightDimensionalCapeAF.gif",
            "hitboxes/meta_knight/MetaKnightDimensionalCapeG.gif",
            "hitboxes/meta_knight/MetaKnightDimensionalCapeGB.gif",
            "hitboxes/meta_knight/MetaKnightDimensionalCapeGF.gif"
          ],
          "startup": "34",
          "active": "34",
          "total": "92",
          "endlag": "58",
          "landingLag": "30",
          "damage": "16.0",
          "advantage": "-44",
          "shieldLag": "15",
          "shieldStun": "14",
          "notes": "Invulnerable on frame 12-32. Landing lag only occurs if you enter special fall."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightGrab.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "36",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightDashGrab.gif"
          ],
          "startup": "11",
          "active": "11—12",
          "total": "44",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightPivotGrab.gif"
          ],
          "startup": "12",
          "active": "12—13",
          "total": "39",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightPummel.gif"
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
            "hitboxes/meta_knight/MetaKnightFThrow.gif"
          ],
          "startup": "8/10",
          "total": "27",
          "damage": "6.0/3.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightBThrow.gif"
          ],
          "startup": "16/18",
          "total": "34",
          "damage": "7.0/3.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightUThrow.gif"
          ],
          "startup": "46",
          "total": "77",
          "damage": "10.0",
          "notes": "Meta Knight is airborne when he can act. Startup assumes level ground"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/meta_knight/MetaKnightDThrow.gif"
          ],
          "startup": "11—13/17—19/23—25/29—31/35—37/41—43/47—49/53—55/59—61/73—74",
          "total": "86",
          "damage": "0.5/1.0/2.0"
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
          "total": "47",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "66",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "74",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "80",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "94",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "101",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/meta_knight/metaknightGetupAttackU.gif",
            "hitboxes/meta_knight/metaknightGetupAttackD.gif",
            "hitboxes/meta_knight/metaknightTripAttack.gif",
            "hitboxes/meta_knight/metaknightLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/meta_knight",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
