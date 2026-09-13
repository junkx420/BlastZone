// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "toon-link",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkJab1.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "18",
          "endlag": "12",
          "damage": "2.0",
          "advantage": "-10",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 8"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkJab2.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "20",
          "endlag": "13",
          "damage": "2.0",
          "advantage": "-11",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 9"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkJab3.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "36",
          "endlag": "29",
          "damage": "4.0",
          "advantage": "-25",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkFTilt.gif"
          ],
          "startup": "9",
          "active": "9-13",
          "total": "29",
          "endlag": "16",
          "damage": "9.0",
          "advantage": "-11",
          "shieldLag": "7",
          "shieldStun": "9"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkUTilt.gif"
          ],
          "startup": "8",
          "active": "8-12",
          "total": "25",
          "endlag": "13",
          "damage": "5.0",
          "advantage": "-11",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkDTilt.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "22",
          "endlag": "12",
          "damage": "7.0",
          "advantage": "-6",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkDashAttack.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "28",
          "endlag": "19",
          "damage": "8.0/6.0",
          "advantage": "-13",
          "shieldLag": "9",
          "shieldStun": "8"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkFSmash.gif"
          ],
          "startup": "16",
          "active": "16-17",
          "total": "48",
          "endlag": "31",
          "damage": "14.0",
          "advantage": "-22",
          "shieldLag": "12",
          "shieldStun": "10",
          "notes": "Charge hold is frame 8"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkUSmash.gif"
          ],
          "startup": "11",
          "active": "11(12-13/14-15)",
          "total": "42",
          "endlag": "27",
          "damage": "13.0",
          "advantage": "-22",
          "shieldLag": "9",
          "shieldStun": "9",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkDSmash.gif"
          ],
          "startup": "9/17",
          "active": "9-10/17-18",
          "total": "46",
          "endlag": "28",
          "damage": "12.0/13.0",
          "advantage": "-29/-20",
          "shieldLag": "9/9",
          "shieldStun": "8/9",
          "notes": "Charge hold frame is 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkNAir.gif"
          ],
          "startup": "6/13",
          "active": "6-7/13-14",
          "total": "41",
          "endlag": "27",
          "landingLag": "7",
          "damage": "8.5/7.0",
          "advantage": "-3/-4",
          "shieldLag": "7/7",
          "shieldStun": "4/3",
          "notes": "Autocancels on frame 1-2 and 41 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkFAir.gif"
          ],
          "startup": "14",
          "active": "14-15",
          "total": "38",
          "endlag": "23",
          "landingLag": "11",
          "damage": "13.0",
          "advantage": "-6",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-3 and 39 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkBAir.gif"
          ],
          "startup": "6",
          "active": "6-9",
          "total": "35",
          "endlag": "26",
          "landingLag": "8",
          "damage": "8.0",
          "advantage": "-4",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 34 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkUAir.gif"
          ],
          "startup": "11",
          "active": "11-13(14-40)",
          "total": "59",
          "endlag": "19",
          "landingLag": "13",
          "damage": "14.0/11.0",
          "advantage": "-8/-9",
          "shieldLag": "11/9",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-5 and 47 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkDAir.gif",
            "hitboxes/toon_link/ToonLinkDAirLanding.gif"
          ],
          "startup": "17",
          "active": "17-25(26-64)/1",
          "total": "79",
          "endlag": "15",
          "landingLag": "23",
          "damage": "16.0/12.0",
          "advantage": "-17/-16",
          "shieldLag": "10/9",
          "shieldStun": "6/5",
          "hitboxes": "Early/Late/Landing",
          "notes": "Autocancels on frame 1-5 and 65 onward. Landing hitbox on frame 1."
        },
        {
          "name": "Z Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkZAir.gif"
          ],
          "startup": "11",
          "active": "11-20",
          "total": "73",
          "endlag": "53",
          "landingLag": "8",
          "damage": "4.0",
          "advantage": "-3",
          "shieldLag": "5",
          "shieldStun": "5"
        },
        {
          "name": "Neutral B (Hero's Bow)",
          "section": "special",
          "startup": "18-60",
          "active": "18-77",
          "total": "39-82",
          "damage": "4.0-12.0",
          "advantage": "-12 to -6",
          "shieldLag": "5-9",
          "shieldStun": "2-4",
          "hitboxes": "Uncharged-Full Charge",
          "notes": "Startup is 1 from charge release. Reaches full charge on 60."
        },
        {
          "name": "Side B (Boomerang)",
          "section": "special",
          "startup": "27",
          "active": "27-36(37-77/78-173)",
          "total": "45",
          "damage": "5.0-9.6/3.0",
          "advantage": "-9 to -6",
          "shieldLag": "6-8/5",
          "shieldStun": "3-4/2",
          "hitboxes": "Going/Returning",
          "notes": "9 frame animation of catching the boomerang if no other action is performed"
        },
        {
          "name": "Up B (Spin Attack)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkSpinAttackG.gif"
          ],
          "startup": "6...",
          "active": "6-14/15-46/48 (rehit: 4)",
          "total": "77",
          "endlag": "29",
          "damage": "1.0/3.0",
          "advantage": "-25",
          "shieldLag": "4/10",
          "shieldStun": "2/4",
          "hitboxes": "Multi/Final",
          "notes": "Multihits have shieldlag but no hitlag. Can be charged up to 60 frames for up to 60% additional damage. Startup is 3 on charge release"
        },
        {
          "name": "Up B, Air (Spin Attack, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkSpinAttackA.gif"
          ],
          "startup": "8...",
          "active": "8-10/12-13/16-18/19-20/22-24/27-28/31-33/35/44-48",
          "landingLag": "30",
          "damage": "4.0/2.0/4.0",
          "shieldLag": "5/4/9",
          "shieldStun": "5/3/5",
          "hitboxes": "First/Multi/Final"
        },
        {
          "name": "Down B (Bomb Pull)",
          "section": "special",
          "total": "36",
          "notes": "Explodes automatically on frame ~315. Bomb rotates on searchbox's center, not bomb's center."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkGrab.gif"
          ],
          "startup": "12",
          "active": "12-18",
          "total": "52",
          "endlag": "34",
          "notes": "Hand grabbox active for the first 2 frames"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkDashGrab.gif"
          ],
          "startup": "14",
          "active": "14-20",
          "total": "60",
          "endlag": "40",
          "notes": "Hand grabbox active for the first 2 frames"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkPivotGrab.gif"
          ],
          "startup": "15",
          "active": "15-21",
          "total": "55",
          "endlag": "34",
          "notes": "Hand grabbox active for the first 2 frames"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkPummel.gif"
          ],
          "startup": "1",
          "total": "16",
          "damage": "1.0",
          "notes": "Total frames includes 10 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkFThrow.gif"
          ],
          "startup": "12/14",
          "total": "39",
          "damage": "3.0/4.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkBThrow.gif"
          ],
          "startup": "18",
          "total": "45",
          "damage": "7.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkUThrow.gif"
          ],
          "startup": "27/28",
          "total": "49",
          "damage": "5.0/2.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/toon_link/ToonLinkDThrow.gif"
          ],
          "startup": "22/24",
          "total": "49",
          "damage": "3.0/4.0"
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
          "total": "56",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "76",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "93",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "111",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "123",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Toon Link Ledgehang.gif",
            "ledgerolls/ToonLink.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/toon_link/toonlinkGetupAttackU.gif",
            "hitboxes/toon_link/toonlinkGetupAttackD.gif",
            "hitboxes/toon_link/toonlinkTripAttack.gif",
            "hitboxes/toon_link/toonlinkLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/toon_link",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
