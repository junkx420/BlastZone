// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "isabelle",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleJab.gif"
          ],
          "startup": "3",
          "active": "3—4",
          "total": "19",
          "endlag": "15",
          "damage": "2.0",
          "advantage": "-13",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to another jab on frame 13."
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleFTilt.gif"
          ],
          "startup": "8",
          "active": "8—11",
          "total": "36",
          "endlag": "25",
          "damage": "9.0",
          "advantage": "-19",
          "shieldLag": "7",
          "shieldStun": "9"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleUTilt.gif"
          ],
          "startup": "6",
          "active": "6—13",
          "total": "29",
          "endlag": "16",
          "damage": "8.0",
          "advantage": "-15",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleDTilt.gif"
          ],
          "startup": "9",
          "active": "9—10",
          "total": "31",
          "endlag": "21",
          "damage": "13.0/8.0",
          "advantage": "-10/-14",
          "shieldLag": "9/7",
          "shieldStun": "12/8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleDashAttack.gif",
            "hitboxes/isabelle/IsabelleDashAttackOffLedge.gif"
          ],
          "startup": "7",
          "active": "7—12/13—19 (Normal) 7-12/13-66 (Off Ledge)",
          "total": "39",
          "damage": "10.0/6.0",
          "advantage": "-21",
          "shieldLag": "8/6",
          "shieldStun": "4/3",
          "hitboxes": "Clean/Late",
          "notes": "Projectile Attack. If done off ledge, the late hit of the projectile will fall 15—68 instead."
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleFSmash.gif"
          ],
          "startup": "14",
          "active": "14—16/17—19",
          "total": "45",
          "endlag": "26",
          "damage": "17.0/8.0",
          "advantage": "-20",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleUSmash.gif"
          ],
          "startup": "9/14",
          "active": "9—10/14—16/17—18",
          "total": "45",
          "endlag": "27",
          "damage": "2.0/12.0",
          "advantage": "-12",
          "shieldLag": "0/11",
          "shieldStun": "4/8",
          "hitboxes": "Early/Clean/Late",
          "notes": "Isabelle will not suffer hitlag from this attack, improving combo potential. Charge hold is frame 8"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleDSmash.gif"
          ],
          "startup": "8/12",
          "active": "8—9/12—13",
          "total": "43",
          "endlag": "30",
          "damage": "10.0/8.0",
          "advantage": "-28/-25",
          "shieldLag": "8/7",
          "shieldStun": "7/6",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleNAir.gif"
          ],
          "startup": "5/8",
          "active": "5—7/8—25",
          "total": "33",
          "endlag": "8",
          "landingLag": "6",
          "damage": "10.0/6.0",
          "advantage": "-2/-3",
          "shieldLag": "8/6",
          "shieldStun": "4/3",
          "notes": "Autocancels on frame 1-2 and 34 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleFAir.gif"
          ],
          "startup": "10",
          "active": "10—12(13—18/19—23)",
          "total": "39",
          "endlag": "16",
          "landingLag": "14",
          "damage": "7.0/4.0/2.5",
          "advantage": "-6 — +4",
          "shieldLag": "7/5/5",
          "shieldStun": "3/2/2",
          "notes": "Projectile attack. Autocancels on frame 1-2 and 30 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleBAir.gif"
          ],
          "startup": "13",
          "active": "13—15(16—21/22—26)",
          "total": "35",
          "endlag": "9",
          "landingLag": "14",
          "damage": "9.0/5.0/3.0",
          "advantage": "-4 — +5",
          "shieldLag": "7/6/5",
          "shieldStun": "4/3/2",
          "notes": "Projectile attack. Autocancels on frame 1-2 and 30 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleUAir.gif"
          ],
          "startup": "6",
          "active": "6—7/8—31",
          "total": "42",
          "endlag": "11",
          "landingLag": "9",
          "damage": "10.0/5.0",
          "advantage": "-5/-6",
          "shieldLag": "8/6",
          "shieldStun": "4/3",
          "notes": "Autocancels on frame 1-5 and 39 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleDAir.gif"
          ],
          "startup": "11",
          "active": "11—12/13—28",
          "total": "42",
          "endlag": "14",
          "landingLag": "9",
          "damage": "10.0/5.0",
          "advantage": "-5/-6",
          "shieldLag": "8/6",
          "shieldStun": "4/3",
          "notes": "Autocancels on frame 1-13 and 39 onward"
        },
        {
          "name": "Neutral B (Pocket)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/isabelle/IsabellePocket.gif"
          ],
          "startup": "8 (Start of projectile pocket)",
          "active": "8—23",
          "total": "50",
          "endlag": "27",
          "notes": "Invulnerable on frame 5-23. Pockets projectiles on frame 8-23."
        },
        {
          "name": "Pocket, Throw",
          "section": "special",
          "startup": "9",
          "total": "30",
          "notes": "This is not the same throw as with a holdable item"
        },
        {
          "name": "Side B (Fishing Rod)",
          "section": "special",
          "startup": "21",
          "active": "21—43 (Ground), 21—70+ (Air), 18 (Tether)",
          "notes": "Frame 50 is the earliest you can reel in."
        },
        {
          "name": "Fishing Rod, Reel In",
          "section": "special",
          "startup": "2",
          "active": "2—11",
          "total": "38",
          "endlag": "27"
        },
        {
          "name": "Fishing Rod, Throw Forward",
          "section": "special",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleFishingRodFThrow.gif"
          ],
          "startup": "15",
          "total": "45",
          "damage": "14.0—17.0"
        },
        {
          "name": "Fishing Rod, Throw Back",
          "section": "special",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleFishingRodBThrow.gif"
          ],
          "startup": "13",
          "total": "35",
          "damage": "11.0—14.0"
        },
        {
          "name": "Fishing Rod, Throw Up",
          "section": "special",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleFishingRodUThrow.gif"
          ],
          "startup": "22",
          "total": "43",
          "damage": "12.0—15.0"
        },
        {
          "name": "Fishing Rod, Throw Down",
          "section": "special",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleFishingRodDThrow.gif"
          ],
          "startup": "18/22",
          "total": "39",
          "damage": "9.5—15.0"
        },
        {
          "name": "Up B (Balloon Trip)",
          "section": "special",
          "landingLag": "20/30",
          "notes": "20 landing lag if you land inside the swing. 30 if you land from special fall. Has a \"fuel\" mechanic."
        },
        {
          "name": "Down B (Lloid Trap)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleLloidTrap.gif"
          ],
          "startup": "9/17/25/34/43/51",
          "active": "9/17/25/34/43/51",
          "total": "49/26",
          "shieldLag": "4/4/11",
          "shieldStun": "2/2/4",
          "notes": "Proximity activation as early as 51. 49 total frames to plant. 26 total frames to manually activate. Several characters can safely run past this trap."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleGrab.gif"
          ],
          "startup": "14",
          "active": "14—16",
          "total": "43",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleDashGrab.gif"
          ],
          "startup": "15",
          "active": "16—17",
          "total": "46",
          "endlag": "29"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/isabelle/IsabellePivotGrab.gif"
          ],
          "startup": "17",
          "active": "17—19",
          "total": "44",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/isabelle/IsabellePummel.gif"
          ]
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleFThrow.gif"
          ],
          "startup": "15",
          "total": "45"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleBThrow.gif"
          ],
          "startup": "14",
          "total": "49"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleUThrow.gif"
          ],
          "startup": "20",
          "total": "52"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/isabelle/IsabelleDThrow.gif"
          ],
          "startup": "18",
          "total": "35"
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
          "total": "58",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "80",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "91",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "97",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "115",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "133",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/isabelle/isabelleGetupAttackU.gif",
            "hitboxes/isabelle/isabelleGetupAttackD.gif",
            "hitboxes/isabelle/isabelleTripAttack.gif",
            "hitboxes/isabelle/isabelleLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/isabelle",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
