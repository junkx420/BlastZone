// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "yoshi",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiJab1.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "17",
          "endlag": "14",
          "damage": "3.0",
          "advantage": "-10",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Transitions to Jab 2 as early as frame 6"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiJab2.gif"
          ],
          "startup": "3",
          "active": "3—4",
          "total": "19",
          "endlag": "15",
          "damage": "4.0",
          "advantage": "-11",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiFTilt.gif",
            "hitboxes/yoshi/YoshiFTiltUp.gif",
            "hitboxes/yoshi/YoshiFTiltDown.gif"
          ],
          "startup": "5",
          "active": "5—7",
          "total": "29",
          "endlag": "22",
          "damage": "8.0",
          "advantage": "-16",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiUTilt.gif"
          ],
          "startup": "8",
          "active": "8—15",
          "total": "31",
          "endlag": "16",
          "damage": "7.0",
          "advantage": "-16",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiDTilt.gif"
          ],
          "startup": "8",
          "active": "8—10",
          "total": "23",
          "endlag": "13",
          "damage": "5.0/4.5/4.0",
          "advantage": "-9/-9/-10",
          "shieldLag": "6/6/5",
          "shieldStun": "6/6/5",
          "hitboxes": "Close/Middle/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiDashAttack.gif"
          ],
          "startup": "10",
          "active": "10—12/13—20",
          "total": "40",
          "endlag": "20",
          "damage": "11.0/8.0",
          "advantage": "-19",
          "shieldLag": "9/7",
          "shieldStun": "11/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiFSmash.gif",
            "hitboxes/yoshi/YoshiFSmashUp.gif",
            "hitboxes/yoshi/YoshiFSmashDown.gif"
          ],
          "startup": "14",
          "active": "14—16",
          "total": "52",
          "endlag": "36",
          "damage": "15.5",
          "advantage": "-27",
          "shieldLag": "11",
          "shieldStun": "11",
          "notes": "Head intangibility on frame 12-16. Charge hold is frame 7"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiUSmash.gif"
          ],
          "startup": "11",
          "active": "11—13/14—16",
          "total": "46",
          "endlag": "30",
          "damage": "14.0/12.0",
          "advantage": "-24",
          "shieldLag": "10/9",
          "shieldStun": "10/8",
          "hitboxes": "Early/Late",
          "notes": "Leg intangibility on frame 11-13. Charge hold is frame 7"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiDSmash.gif"
          ],
          "startup": "7/22",
          "active": "7—8/22—23",
          "total": "49",
          "endlag": "26",
          "damage": "12.0/10.0",
          "advantage": "-33/-18",
          "shieldLag": "9/8",
          "shieldStun": "9/8",
          "hitboxes": "First/Second",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiNAir.gif"
          ],
          "startup": "3",
          "active": "3—4(5—11/12—25)",
          "total": "44",
          "endlag": "19",
          "landingLag": "7",
          "damage": "10.0/7.0/5.0",
          "advantage": "-3/-4/-4",
          "shieldLag": "8/7/6",
          "shieldStun": "4/3/3",
          "hitboxes": "Early/Late/Latest",
          "notes": "Autocancels on frame 1-2 and 38 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiFAir.gif"
          ],
          "startup": "16",
          "active": "16—20",
          "total": "43",
          "endlag": "23",
          "landingLag": "12",
          "damage": "15.0/14.0",
          "advantage": "-6/-7",
          "shieldLag": "10/10",
          "shieldStun": "6/5",
          "hitboxes": "Close/meteor",
          "notes": "Autocancels on frame 1-3 and 40 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiBAir.gif"
          ],
          "startup": "11/14/18",
          "active": "11/14/18—19",
          "total": "55",
          "endlag": "36",
          "landingLag": "11",
          "damage": "3.5/5.5",
          "advantage": "-9/-8",
          "shieldLag": "5/9",
          "shieldStun": "2/3",
          "hitboxes": "Multihit/Final",
          "notes": "Autocancels on frame 1-5 and 44 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiUAir.gif"
          ],
          "startup": "5",
          "active": "5—6",
          "total": "36",
          "endlag": "30",
          "landingLag": "8",
          "damage": "12.0",
          "advantage": "-3",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-4 and 31 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiDAir.gif",
            "hitboxes/yoshi/YoshiDAirLanding.gif"
          ],
          "startup": "16/18/20/22/24/26/28/30/32/34/36/38/41",
          "active": "16/18/20/22/24/26/28/30/32/34/36/38/41",
          "total": "56",
          "endlag": "15",
          "landingLag": "17",
          "damage": "(2.3%/1.8%)/(1.9%/1.4%)/2.8%",
          "advantage": "-14",
          "shieldLag": "5/4/7/4",
          "shieldStun": "-/2/2/2",
          "hitboxes": "(Hits 1-6 (Middle/Sides)/Hit 7-12 (Middle/Sides)/Hit 13)",
          "notes": "Landing hit generates on frame 1. Autocancels on frame 50 onward"
        },
        {
          "name": "Neutral B (Egg Lay)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiEggLay.gif"
          ],
          "startup": "19",
          "active": "19—22",
          "total": "49/41",
          "endlag": "27",
          "notes": "Egg appears on frame 33 when successful. Total frames when successful is 62. Total frames is 41 on whiff."
        },
        {
          "name": "Side B (Egg Roll)",
          "section": "special",
          "startup": "32",
          "damage": "10.8—12.8",
          "advantage": "-29 to -27",
          "shieldLag": "8—9",
          "shieldStun": "10—12",
          "notes": "Takes 39 frames to emerge."
        },
        {
          "name": "Up B (Egg Throw)",
          "section": "special",
          "startup": "16",
          "active": "16—**",
          "total": "55",
          "damage": "6.0",
          "advantage": "-30",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Eggs explode automatically on frame 60."
        },
        {
          "name": "Down B (Yoshi Bomb, Yoshi Bomb Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiYoshiBombG.gif"
          ],
          "startup": "7/27, 19",
          "active": "7/27/*, 19/*",
          "total": "77, --",
          "landingLag": "39, 39",
          "damage": "4.0/15.0/4.0, 12.0/4.0",
          "advantage": "-32, -32",
          "shieldLag": "5/10/3, 9/3",
          "shieldStun": "5/14/0, 11/0",
          "hitboxes": "Rising/falling/star, falling/star",
          "notes": "Total frames assumes level ground. Passes through platforms, voluntarily if you fall long enough. Stars appear on frame 4 of landing."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiGrab.gif"
          ],
          "startup": "14",
          "active": "14—21",
          "total": "48",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiDashGrab.gif"
          ],
          "startup": "16",
          "active": "16—23",
          "total": "56",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiPivotGrab.gif"
          ],
          "startup": "17",
          "active": "17—24",
          "total": "51",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames includes 14 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiFThrow.gif"
          ],
          "startup": "15",
          "total": "39",
          "damage": "9.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiBThrow.gif"
          ],
          "startup": "20",
          "total": "43",
          "damage": "9.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiUThrow.gif"
          ],
          "startup": "13",
          "total": "43",
          "damage": "5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/yoshi/YoshiDThrow.gif"
          ],
          "startup": "25",
          "total": "43",
          "damage": "4.0"
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
          "total": "58",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "79",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "89",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "107",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "116",
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
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Yoshi Ledgehang.gif",
            "ledgerolls/Yoshi.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/yoshi/yoshiGetupAttackU.gif",
            "hitboxes/yoshi/yoshiGetupAttackD.gif",
            "hitboxes/yoshi/yoshiTripAttack.gif",
            "hitboxes/yoshi/yoshiLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/yoshi",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
