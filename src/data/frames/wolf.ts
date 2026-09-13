// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "wolf",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wolf/WolfJab1.gif"
          ],
          "startup": "4",
          "active": "4",
          "total": "21",
          "endlag": "17",
          "damage": "2.0",
          "advantage": "-14",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 7."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wolf/WolfJab2.gif"
          ],
          "startup": "4",
          "active": "4",
          "total": "21",
          "endlag": "17",
          "damage": "2.0",
          "advantage": "-14",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 as early as frame 7."
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wolf/WolfJab3.gif"
          ],
          "startup": "4",
          "active": "4",
          "total": "34",
          "endlag": "30",
          "damage": "4.0",
          "advantage": "-25",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wolf/WolfFTilt.gif",
            "hitboxes/wolf/WolfFTiltUp.gif",
            "hitboxes/wolf/WolfFTiltDown.gif"
          ],
          "startup": "8/9",
          "active": "8/9—10",
          "total": "34",
          "endlag": "24",
          "damage": "5.0/6.0",
          "advantage": "-19",
          "shieldLag": "11/6",
          "shieldStun": "-/6"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wolf/WolfUTilt.gif"
          ],
          "startup": "7",
          "active": "7—11",
          "total": "35",
          "endlag": "24",
          "damage": "10.0/8.0/9.0/10.0",
          "advantage": "-18",
          "shieldLag": "8",
          "shieldStun": "10",
          "hitboxes": "Early Front/Tip/Mid/Close"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wolf/WolfDTilt.gif"
          ],
          "startup": "5",
          "active": "5—6",
          "total": "27",
          "endlag": "21",
          "damage": "6.0",
          "advantage": "-16",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wolf/WolfDashAttack.gif"
          ],
          "startup": "11",
          "active": "11—14/15—18",
          "total": "37",
          "endlag": "19",
          "damage": "11.0/8.0",
          "advantage": "-16",
          "shieldLag": "8/7",
          "shieldStun": "10/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wolf/WolfFSmash.gif"
          ],
          "startup": "20",
          "active": "20—23",
          "total": "41",
          "endlag": "18",
          "damage": "15.0",
          "advantage": "-10",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wolf/WolfUSmash.gif"
          ],
          "startup": "13/20",
          "active": "13—15/20—23",
          "total": "47",
          "endlag": "24",
          "damage": "6.0/12.0",
          "advantage": "-29/-19",
          "shieldLag": "6/9",
          "shieldStun": "5/8",
          "hitboxes": "Early/Late",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/wolf/WolfDSmash.gif"
          ],
          "startup": "14/21",
          "active": "14—15/21—22",
          "total": "43",
          "endlag": "21",
          "damage": "14.0/16.0, 12.0/14.0",
          "advantage": "-19/-18/-14/-12",
          "shieldLag": "10/10/9/10",
          "shieldStun": "10/11/8/10",
          "hitboxes": "First close/far, Second close/far",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/wolf/WolfNAir.gif"
          ],
          "startup": "7",
          "active": "7—9/10—26",
          "total": "42",
          "endlag": "16",
          "landingLag": "9",
          "damage": "12.0/8.0",
          "advantage": "-4/-5",
          "shieldLag": "9/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-6 and 39 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/wolf/WolfFAir.gif",
            "hitboxes/wolf/WolfFAirInterpolated.gif"
          ],
          "startup": "7",
          "active": "7—9",
          "total": "40",
          "endlag": "31",
          "landingLag": "10",
          "damage": "9.0",
          "advantage": "-6",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 30 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/wolf/WolfBAir.gif"
          ],
          "startup": "13",
          "active": "13—15",
          "total": "44",
          "endlag": "29",
          "landingLag": "15",
          "damage": "11.0/13.0/15.0",
          "advantage": "-11/-10",
          "shieldLag": "8/10",
          "shieldStun": "4/5",
          "hitboxes": "Close/Mid/Far",
          "notes": "Autocancels on frame 1-7 and 19 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/wolf/WolfUAir.gif"
          ],
          "startup": "7",
          "active": "7—9",
          "total": "38",
          "endlag": "29",
          "landingLag": "10",
          "damage": "12.0",
          "advantage": "-5",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-3 and 31 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/wolf/WolfDAir.gif"
          ],
          "startup": "16",
          "active": "16—17",
          "total": "53",
          "endlag": "36",
          "landingLag": "19",
          "damage": "15.0/13.0",
          "advantage": "-14/-14",
          "shieldLag": "10/9",
          "shieldStun": "5/5",
          "hitboxes": "Far/Close",
          "notes": "Autocancels on frame 1-4 and 36 onward"
        },
        {
          "name": "Neutral B (Blaster)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/wolf/WolfBlaster.gif"
          ],
          "startup": "15/16",
          "active": "15—19/16—50",
          "total": "52",
          "endlag": "2",
          "damage": "7.0 (Melee) / 6.0 (Early shot) / 8.0 (Mid shot) / 7.0 (Late shot)",
          "advantage": "-24",
          "shieldLag": "10/9",
          "shieldStun": "-/3",
          "hitboxes": "Bayonet/Shot"
        },
        {
          "name": "Side B (Wolf Flash)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/wolf/WolfWolfFlash.gif"
          ],
          "startup": "18",
          "landingLag": "29",
          "damage": "20.0/15.0/3.0",
          "shieldLag": "18/5",
          "shieldStun": "18/2",
          "hitboxes": "Sweet/Sourspot/Trail",
          "notes": "Sweetspot is on frame 20. Can be slightly angled up or down. *Weak hit's hitboxes actually trail behind the character and are not actually on Wolf.*"
        },
        {
          "name": "Up B (Fire Wolf)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/wolf/WolfFireWolf.gif"
          ],
          "startup": "18...",
          "active": "18—20/27—32(Rehit :2)/37—38",
          "total": "66",
          "endlag": "28",
          "landingLag": "36",
          "damage": "4.0/2.5/5.0",
          "advantage": "-24",
          "shieldLag": "5/5/15",
          "shieldStun": "5/-/6",
          "hitboxes": "First/Multi/Final",
          "notes": "Total frames refers to travel along the ground. Final hit does 1.0 more damage when you are airborne."
        },
        {
          "name": "Down B (Reflector)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/wolf/WolfReflectorStart.gif",
            "hitboxes/wolf/WolfReflector.gif",
            "hitboxes/wolf/WolfReflectorHit.gif"
          ],
          "startup": "6",
          "total": "30",
          "damage": "4.0",
          "advantage": "-19",
          "shieldLag": "8",
          "shieldStun": "5",
          "notes": "Total frames refers to minimum usage. 12 endlag from extended usage. Invulnerable on frame 5-8. Reflects on frame 9."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wolf/WolfGrab.gif"
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
            "hitboxes/wolf/WolfDashGrab.gif"
          ],
          "startup": "8",
          "active": "8—9",
          "total": "44",
          "endlag": "35"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wolf/WolfPivotGrab.gif"
          ],
          "startup": "9",
          "active": "9—10",
          "total": "39",
          "endlag": "29"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wolf/WolfPummel.gif"
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
            "hitboxes/wolf/WolfFThrow.gif"
          ],
          "startup": "10/11",
          "total": "32",
          "damage": "5.0/4.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wolf/WolfBThrow.gif"
          ],
          "startup": "23/24",
          "total": "47",
          "damage": "6.0/5.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wolf/WolfUThrow.gif"
          ],
          "startup": "26/27",
          "total": "45",
          "damage": "5.0/2.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/wolf/WolfDThrow.gif"
          ],
          "startup": "26",
          "total": "40",
          "damage": "8.5"
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
          "total": "44",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "61",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-20."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "68",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-20."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "73",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-20."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "84",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-20."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "93",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-20."
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Wolf Ledgehang.gif",
            "ledgerolls/Wolf.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/wolf/wolfGetupAttackU.gif",
            "hitboxes/wolf/wolfGetupAttackD.gif",
            "hitboxes/wolf/wolfTripAttack.gif",
            "hitboxes/wolf/wolfLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/wolf",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
