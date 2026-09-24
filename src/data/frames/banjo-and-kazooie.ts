// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "banjo-and-kazooie",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieJab1.gif"
          ],
          "startup": "4",
          "active": "4-6",
          "total": "27",
          "endlag": "21",
          "damage": "2.2",
          "advantage": "-20",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 8"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieJab2.gif"
          ],
          "startup": "4",
          "active": "4-6",
          "total": "24",
          "endlag": "18",
          "damage": "2.2",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 as early as frame 10 or Rapid on 9."
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieJab3.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "31",
          "endlag": "24",
          "damage": "3.8",
          "advantage": "-21",
          "shieldLag": "10",
          "shieldStun": "5"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieJabRapid.gif"
          ],
          "startup": "5/7/9...",
          "damage": "0.4",
          "shieldLag": "4",
          "shieldStun": "3"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieJabRapidEnd.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "41",
          "endlag": "33",
          "damage": "1.6",
          "advantage": "-31",
          "shieldLag": "9",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieFTilt.gif",
            "hitboxes/banjo_and_kazooie/Banjo_KazooieFTiltUp.gif",
            "hitboxes/banjo_and_kazooie/Banjo_KazooieFTiltDown.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "28",
          "endlag": "19",
          "damage": "9.0/7.0",
          "advantage": "-12/-14",
          "shieldLag": "8/7",
          "shieldStun": "9/7",
          "hitboxes": "Far/Close"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieUTilt.gif"
          ],
          "startup": "11",
          "active": "11-14",
          "total": "31",
          "endlag": "17",
          "damage": "10.0",
          "advantage": "-10",
          "shieldLag": "8",
          "shieldStun": "10",
          "notes": "Kazooie has hurtboxes on frames 1-24."
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieDTilt.gif"
          ],
          "startup": "12",
          "active": "12-17(18-21)",
          "total": "37",
          "endlag": "16",
          "damage": "6.0/5.0/4.0",
          "advantage": "-19/-19",
          "shieldLag": "7/6/6",
          "shieldStun": "6/6/5",
          "hitboxes": "Far/Close/Late"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieDashAttack.gif"
          ],
          "startup": "9",
          "active": "9-12(13-20)",
          "total": "36",
          "endlag": "16",
          "damage": "12.0/8.0",
          "advantage": "-16",
          "shieldLag": "10/7",
          "shieldStun": "11/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieFSmash.gif"
          ],
          "startup": "19",
          "active": "19-21",
          "total": "52",
          "endlag": "31",
          "damage": "16.0",
          "advantage": "-22",
          "shieldLag": "12",
          "shieldStun": "11",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieUSmash.gif"
          ],
          "startup": "9...",
          "active": "9-10/13-25 (rehit: 2)/26-27",
          "total": "65",
          "endlag": "40",
          "damage": "1.0/1.5/3.6",
          "advantage": "-35",
          "shieldLag": "4/4/10",
          "shieldStun": "2/?/4",
          "hitboxes": "First/Multi/Final",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieDSmash.gif"
          ],
          "startup": "13",
          "active": "13-17",
          "total": "46",
          "endlag": "29",
          "damage": "15.0",
          "advantage": "-23",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieNAir.gif"
          ],
          "startup": "10/13/16/19/22/25/28/31",
          "active": "10-11/13-14/16-17/19-20/22-23/25-26/28-29/31-32",
          "total": "47",
          "endlag": "15",
          "landingLag": "16",
          "damage": "0.8/4.2",
          "advantage": "-14/-13",
          "shieldLag": "4/10",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-9 and 39 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieFAir.gif"
          ],
          "startup": "15",
          "active": "15-17(18)",
          "total": "51",
          "endlag": "33",
          "landingLag": "11",
          "damage": "15.0/12.0",
          "advantage": "-6/-6",
          "shieldLag": "13/10",
          "shieldStun": "5/5",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 37 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieBAir.gif"
          ],
          "startup": "8/12/16",
          "active": "8-9/12-13/16-17",
          "total": "43",
          "endlag": "26",
          "landingLag": "18",
          "damage": "1.6/4.8",
          "advantage": "-16/-15",
          "shieldLag": "4/6",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-7 and 37 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieUAir.gif"
          ],
          "startup": "7/9",
          "active": "7-8/9-11",
          "total": "33",
          "endlag": "22",
          "landingLag": "12",
          "damage": "1.6/5.8",
          "advantage": "-10/-9",
          "shieldLag": "4/6",
          "shieldStun": "2/3",
          "hitboxes": "First/Second",
          "notes": "Autocancels on frame 35 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieDAir.gif",
            "hitboxes/banjo_and_kazooie/Banjo_KazooieDAirLanding.gif"
          ],
          "startup": "15",
          "active": "15-17(18-45)/1-2",
          "total": "56",
          "endlag": "11",
          "landingLag": "27",
          "damage": "10.0/2.0",
          "advantage": "-23",
          "shieldLag": "8/4",
          "shieldStun": "4/3",
          "hitboxes": "Falling/Landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 55 onward"
        },
        {
          "name": "Neutral B (Egg Firing)",
          "section": "special",
          "startup": "13",
          "active": "13-22(23-52/53-102)",
          "total": "49",
          "damage": "5.4/4.6/3.8",
          "advantage": "-27",
          "shieldLag": "6/6/5",
          "shieldStun": "3/3/2",
          "hitboxes": "Early/Late/Latest",
          "notes": "Transitions to Blaster on frame 20."
        },
        {
          "name": "Breegull Blaster",
          "section": "special",
          "startup": "4(+28)",
          "active": "4-6/7-9/10-15/16-18",
          "total": "24",
          "endlag": "6",
          "damage": "2.4 - 0.8",
          "advantage": "-13 - -14",
          "shieldLag": "5-4",
          "shieldStun": "2-2",
          "notes": "Taking out Kazooie is a 28 frame animation. Putting her away is 11 frames."
        },
        {
          "name": "Side B (Wonderwing)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieWonderwing.gif"
          ],
          "startup": "18",
          "active": "18-35(36-53)",
          "total": "82",
          "endlag": "29",
          "damage": "22.0/16.0",
          "advantage": "-54",
          "shieldLag": "16/11",
          "shieldStun": "10/5",
          "hitboxes": "Early/Late",
          "notes": "Invincible on frames 18-53. Wonderwing is specially designed to lose to grab trades."
        },
        {
          "name": "Up B (Shock Spring Jump)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieShockSpringJump.gif"
          ],
          "startup": "15",
          "total": "42",
          "landingLag": "42",
          "damage": "3.0",
          "advantage": "-20",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Invulnerable on frame 15-17. Can be charged an additional 16 frames. Does not place Banjo in a helpless state."
        },
        {
          "name": "Down B (Rear Egg)",
          "section": "special",
          "startup": "10",
          "active": "10-143/1",
          "total": "44",
          "damage": "0.5/8.5",
          "advantage": "-23",
          "shieldLag": "--/-7",
          "shieldStun": "--/-3",
          "hitboxes": "Contact/Explosion",
          "notes": "Damage varies slightly based on velocity. Explodes 1 frame after contact."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieGrab.gif"
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
            "hitboxes/banjo_and_kazooie/Banjo_KazooieDashGrab.gif"
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
            "hitboxes/banjo_and_kazooie/Banjo_KazooiePivotGrab.gif"
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
            "hitboxes/banjo_and_kazooie/Banjo_KazooiePummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.4",
          "notes": "total frames includes 13 frames of hitlag (plus one in 1v1)"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieFThrow.gif"
          ],
          "startup": "9/11",
          "total": "33",
          "damage": "5.4/3.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieBThrow.gif"
          ],
          "startup": "36",
          "total": "53",
          "damage": "11.4"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieUThrow.gif"
          ],
          "startup": "13/15",
          "total": "39",
          "damage": "5.4/3.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/Banjo_KazooieDThrow.gif"
          ],
          "startup": "34",
          "total": "55",
          "damage": "5.6"
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
          "total": "45",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "62",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "69",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "75",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "88",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "97",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/banjo_and_kazooie/banjo_kazooieGetupAttackU.gif",
            "hitboxes/banjo_and_kazooie/banjo_kazooieGetupAttackD.gif",
            "hitboxes/banjo_and_kazooie/banjo_kazooieTripAttack.gif",
            "hitboxes/banjo_and_kazooie/banjo_kazooieLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/banjo_and_kazooie",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
