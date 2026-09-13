// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "ike",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ike/IkeJab1.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "23",
          "endlag": "18",
          "damage": "2.5",
          "advantage": "-15",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Transitions to Jab 2 as early as frame 9"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ike/IkeJab2.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "27",
          "endlag": "23",
          "damage": "2.5",
          "advantage": "-20",
          "shieldLag": "6",
          "shieldStun": "4",
          "notes": "Transitions to jab 3 as early as frame 9"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ike/IkeJab3.gif"
          ],
          "startup": "5",
          "active": "5-8",
          "total": "40",
          "endlag": "32",
          "damage": "5.0",
          "advantage": "-29",
          "shieldLag": "12",
          "shieldStun": "6",
          "notes": "Attack hits directly above Ike on frame 5 only."
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ike/IkeFTilt.gif",
            "hitboxes/ike/IkeFTiltUp.gif",
            "hitboxes/ike/IkeFTiltDown.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "41",
          "endlag": "28",
          "damage": "12.5",
          "advantage": "-17",
          "shieldLag": "9",
          "shieldStun": "12"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ike/IkeUTilt.gif"
          ],
          "startup": "11",
          "active": "11-16/17-21",
          "total": "39",
          "endlag": "18",
          "damage": "12.0/8.0",
          "advantage": "-17",
          "shieldLag": "9",
          "shieldStun": "11",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ike/IkeDTilt.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "28",
          "endlag": "20",
          "damage": "8.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ike/IkeDashAttack.gif"
          ],
          "startup": "15",
          "active": "15-16/17-19",
          "total": "47",
          "endlag": "28",
          "damage": "14.0",
          "advantage": "-17",
          "shieldLag": "12",
          "shieldStun": "15"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ike/IkeFSmash.gif"
          ],
          "startup": "31",
          "active": "31-32/33-35",
          "total": "83",
          "endlag": "48",
          "damage": "19.0/22.0",
          "advantage": "-39/-36",
          "shieldLag": "12/13",
          "shieldStun": "13/14",
          "hitboxes": "Early/Late",
          "notes": "Sword hits directly above Ike on frame 31. Strong hit on 33. Charge hold is frame 24"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ike/IkeUSmash.gif"
          ],
          "startup": "25",
          "active": "25-29/30-31",
          "total": "70",
          "endlag": "39",
          "damage": "17.0/10.0",
          "advantage": "-34",
          "shieldLag": "11",
          "shieldStun": "11",
          "hitboxes": "Early/Late",
          "notes": "Charge hold is frame 11"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ike/IkeDSmash.gif"
          ],
          "startup": "13/32",
          "active": "13-15/32-33/34-36",
          "total": "70",
          "endlag": "34",
          "damage": "16.0/19.0/9",
          "advantage": "-46/-25",
          "shieldLag": "10/12/?",
          "shieldStun": "11/13/?",
          "hitboxes": "First/Second/Second Late",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ike/IkeNAir.gif"
          ],
          "startup": "10",
          "active": "10-14/15-22",
          "total": "59",
          "endlag": "37",
          "landingLag": "8",
          "damage": "7.5/6.0",
          "advantage": "-5",
          "shieldLag": "7/6",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 50 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ike/IkeFAir.gif"
          ],
          "startup": "11",
          "active": "11-15",
          "total": "51",
          "endlag": "36",
          "landingLag": "14",
          "damage": "13.0",
          "advantage": "-9",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 42 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ike/IkeBAir.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "54",
          "endlag": "45",
          "landingLag": "11",
          "damage": "14.0",
          "advantage": "-6",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-2 and 35 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ike/IkeUAir.gif"
          ],
          "startup": "13",
          "active": "13-18",
          "total": "56",
          "endlag": "38",
          "landingLag": "9",
          "damage": "11.0",
          "advantage": "-5",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-5 and 51 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ike/IkeDAir.gif"
          ],
          "startup": "16",
          "active": "16-17",
          "total": "54",
          "endlag": "37",
          "landingLag": "14",
          "damage": "15.0",
          "advantage": "-9",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-4 and 48 onward"
        },
        {
          "name": "Neutral B (Eruption)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ike/IkeEruption.gif",
            "hitboxes/ike/IkeEruptionMid.gif",
            "hitboxes/ike/IkeEruptionMax.gif"
          ],
          "startup": "30-239",
          "total": "78-287",
          "damage": "10.0-35.0",
          "advantage": "-38 to Shieldbreak",
          "shieldLag": "8-16",
          "shieldStun": "10-Shieldbreak",
          "notes": "On release, startup is 11 and total frames is 59"
        },
        {
          "name": "Side B (Quickdraw)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ike/IkeQuickDraw.gif",
            "hitboxes/ike/IkeQuickDrawDash.gif"
          ],
          "startup": "16",
          "total": "53/34/44",
          "landingLag": "30",
          "damage": "6.0-13.0",
          "advantage": "-28 to -22",
          "shieldLag": "6-9",
          "shieldStun": "6-12",
          "notes": "Reaches max charge around 85. Startup is 2 upon reaching a target. Swing total frames is 34, or 44 from the air. Landing lag only occurs after entering special fall. Can continue recovery options after an air swing on frame 44."
        },
        {
          "name": "Up B (Aether)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ike/IkeAetherG.gif",
            "hitboxes/ike/IkeAetherA.gif",
            "hitboxes/ike/IkeAetherFall.gif",
            "hitboxes/ike/IkeAetherLanding.gif",
            "hitboxes/ike/IkeAetherSword.gif"
          ],
          "startup": "15/44/51/61",
          "landingLag": "36",
          "damage": "6.0/1.0/3.0/6.0",
          "advantage": "-29",
          "shieldLag": "6/4/5/6",
          "shieldStun": "6/2/4/6",
          "hitboxes": "First/multi/falling/landing",
          "notes": "Landing hit on frame 1. Super armor on frame 5-35. (ending the frame he ascends). Super armor on frame 15-35 for the air version."
        },
        {
          "name": "Down B (Counter)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ike/IkeCounter.gif"
          ],
          "startup": "9 (Start of Counter)",
          "total": "73",
          "notes": "Invulnerable on frame 8. Counters on frame 9-33"
        },
        {
          "name": "Counter, Attack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ike/IkeCounterHit.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "43",
          "endlag": "38",
          "notes": "Invulnerable on frame 1-4 in addition to counter freeze frames"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ike/IkeGrab.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "36",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ike/IkeDashGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "44",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ike/IkePivotGrab.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "39",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ike/IkePummel.gif"
          ],
          "startup": "1",
          "total": "20",
          "landingLag": "Total frames includes 14 frames of hitlag.",
          "damage": "1.6"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ike/IkeFThrow.gif"
          ],
          "startup": "5/8",
          "total": "32",
          "damage": "3.5/4.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ike/IkeBThrow.gif"
          ],
          "startup": "20/22",
          "total": "37",
          "damage": "3.0/4.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ike/IkeUThrow.gif"
          ],
          "startup": "18/20",
          "total": "42",
          "damage": "3.5/4.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ike/IkeDThrow.gif"
          ],
          "startup": "35/40",
          "total": "57",
          "damage": "3.0/4.0"
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
          "total": "49",
          "landingLag": "10",
          "notes": "Intangible on frame 4-31."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "66",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "76",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "82",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "108",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/ike/ikeGetupAttackU.gif",
            "hitboxes/ike/ikeGetupAttackD.gif",
            "hitboxes/ike/ikeTripAttack.gif",
            "hitboxes/ike/ikeLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/ike",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
