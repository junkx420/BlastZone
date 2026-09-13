// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "young-link",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkJab1.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "17",
          "endlag": "12",
          "damage": "2.0",
          "advantage": "-10",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 7"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkJab2.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "16",
          "endlag": "9",
          "damage": "1.5",
          "advantage": "-7",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 as early as frame 9 and Rapid Jab on 11"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkJab3.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "35",
          "endlag": "28",
          "damage": "3.5",
          "advantage": "-25",
          "shieldLag": "11",
          "shieldStun": "4"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkJabRapid.gif"
          ],
          "startup": "3/5/7",
          "damage": "0.3",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkJabRapidEnd.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "45",
          "endlag": "40",
          "damage": "2.5",
          "advantage": "-37",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkFTilt.gif"
          ],
          "startup": "10",
          "active": "10-12",
          "total": "33",
          "endlag": "21",
          "damage": "12.0/11.0",
          "advantage": "-12/-13",
          "shieldLag": "11/8",
          "shieldStun": "11/10",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkUTilt.gif"
          ],
          "startup": "9",
          "active": "9-14",
          "total": "31",
          "endlag": "17",
          "damage": "8.0",
          "advantage": "-14",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkDTilt.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "25",
          "endlag": "16",
          "damage": "10.0/9.0/7.0",
          "advantage": "-7/-8/-10",
          "shieldLag": "8/7/7",
          "shieldStun": "10/9/7",
          "hitboxes": "Close/Medium/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkDashAttack.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "total": "34",
          "endlag": "24",
          "damage": "11.0/10.0",
          "advantage": "-16",
          "shieldLag": "10/8",
          "shieldStun": "10/10",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Forward Smash 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkFSmash1.gif"
          ],
          "startup": "15",
          "active": "15-16",
          "total": "47",
          "endlag": "31",
          "damage": "6.0",
          "advantage": "-27",
          "shieldLag": "6",
          "shieldStun": "5",
          "notes": "Transitions to Forward Smash 2 as early as frame 20. Charge hold is frame 9"
        },
        {
          "name": "Forward Smash 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkFSmash2.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "49",
          "endlag": "37",
          "damage": "12.0",
          "advantage": "-30",
          "shieldLag": "13",
          "shieldStun": "8"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkUSmash.gif"
          ],
          "startup": "10/25/41",
          "active": "10-14/25-29/41-45",
          "total": "69",
          "endlag": "24",
          "damage": "3.0/8.0",
          "advantage": "-22",
          "shieldLag": "5/7",
          "shieldStun": "3/6",
          "hitboxes": "Multi/Final",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkDSmash.gif"
          ],
          "startup": "9/21",
          "active": "9-10/21-22",
          "total": "49",
          "endlag": "27",
          "damage": "13.0/10.0/12.0/9.0",
          "advantage": "-31/-33/-20/-21",
          "shieldLag": "9/8/9/7",
          "shieldStun": "9/7/8/7",
          "hitboxes": "Close/far, Close/far",
          "notes": "Charge hold frame is 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkNAir.gif"
          ],
          "startup": "4",
          "active": "4-5(6-27)",
          "total": "35",
          "endlag": "8",
          "landingLag": "6",
          "damage": "10.0/5.0",
          "advantage": "-2/-3",
          "shieldLag": "8/6",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-3 and 32 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkFAir.gif"
          ],
          "startup": "14/24",
          "active": "14-15/24-25",
          "total": "40",
          "endlag": "15",
          "landingLag": "6",
          "damage": "6.0/8.0/7.0",
          "advantage": "-3/-2",
          "shieldLag": "6/9",
          "shieldStun": "3/4",
          "hitboxes": "First/Second Close/Second Far",
          "notes": "Autocancels on frame 41 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkBAir.gif"
          ],
          "startup": "6/18",
          "active": "6-8/18-20",
          "total": "29",
          "endlag": "9",
          "landingLag": "6",
          "damage": "5.0/7.0",
          "advantage": "-3/-3",
          "shieldLag": "6/8",
          "shieldStun": "3/3",
          "notes": "Autocancels on frame 29 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkUAir.gif"
          ],
          "startup": "5",
          "active": "5-7(8-49)",
          "total": "59",
          "endlag": "10",
          "landingLag": "14",
          "damage": "15.0/12.0",
          "advantage": "-9",
          "shieldLag": "9",
          "shieldStun": "5",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-4 and 56 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkDAir.gif"
          ],
          "startup": "13",
          "active": "13-15(16-64)",
          "total": "79",
          "endlag": "15",
          "landingLag": "17",
          "damage": "18.0/15.0/9.0",
          "advantage": "Bounce: ? | Fast Fall: -11/-12",
          "shieldLag": "14/12",
          "shieldStun": "6/5",
          "hitboxes": "Early/Late/Pogo",
          "notes": "Autocancels on frame 1-12 and 65 onward. Can hit same target once again after 30 frames during pogo effect."
        },
        {
          "name": "Z Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkZAir.gif"
          ],
          "startup": "9",
          "active": "9-16",
          "total": "71",
          "endlag": "55",
          "landingLag": "8",
          "damage": "4.0",
          "advantage": "-3",
          "shieldLag": "5",
          "shieldStun": "5"
        },
        {
          "name": "Neutral B (Fire Arrow)",
          "section": "special",
          "startup": "14-47",
          "total": "37-70",
          "damage": "4.0-12.0",
          "advantage": "-16 to -10",
          "shieldLag": "5-9",
          "shieldStun": "2-4",
          "hitboxes": "Uncharged-Full Charge",
          "notes": "On release, startup is 1 and total frames is 24."
        },
        {
          "name": "Side B (Boomerang)",
          "section": "special",
          "startup": "27",
          "active": "27-29(30-82/83-153)",
          "total": "45",
          "damage": "7.0-11.0 (normal) // 8.4/13.2 (smash) // 2.0 (return)",
          "advantage": "-8 to -4",
          "shieldLag": "5-9",
          "shieldStun": "2-4"
        },
        {
          "name": "Up B (Spin Attack)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkSpinAttackG.gif"
          ],
          "startup": "9...",
          "active": "9-47/49 (rehit: 4)",
          "total": "70",
          "endlag": "21",
          "damage": "1.0/3.0",
          "advantage": "-17",
          "shieldLag": "4/10",
          "shieldStun": "2/4",
          "notes": "Can charge for up to 60 additional frames. Startup is 4 from charge."
        },
        {
          "name": "Up B, Air (Spin Attack, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkSpinAttackA.gif"
          ],
          "startup": "8/12/16/19/22/26/31/39/47",
          "active": "8-10/12-13/16-18/19-20/22-24/26-27/31-33/39-40/47-51",
          "landingLag": "24",
          "damage": "3.0/2.0/3.0",
          "hitboxes": "First/Multi/Final"
        },
        {
          "name": "Down B (Bomb Pull)",
          "section": "special",
          "startup": "17",
          "total": "39",
          "notes": "Fuse timer of ~4 seconds. Bomb explosion hits on frame 1/3/5/7. After pulling, lasts 196 frames and explodes on frame 197."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkGrab.gif"
          ],
          "startup": "12",
          "active": "12-18",
          "total": "51",
          "endlag": "33"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkDashGrab.gif"
          ],
          "startup": "14",
          "active": "14-20",
          "total": "60",
          "endlag": "40"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkPivotGrab.gif"
          ],
          "startup": "15",
          "active": "15-21",
          "total": "55",
          "endlag": "34"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkPummel.gif"
          ],
          "startup": "1",
          "total": "18",
          "damage": "1.0",
          "notes": "Total frames includes 12 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkFThrow.gif"
          ],
          "startup": "11/13",
          "total": "39",
          "damage": "3.0/3.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkBThrow.gif"
          ],
          "startup": "11/13",
          "total": "39",
          "damage": "3.0/3.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkUThrow.gif"
          ],
          "startup": "26/29",
          "total": "49",
          "damage": "4.0/2.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/young_link/YoungLinkDThrow.gif"
          ],
          "startup": "22/28",
          "total": "49",
          "damage": "3.0/3.0"
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
          "total": "45",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "63",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "70",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "76",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "90",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "100",
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
            "ledgehangs/Young Link Ledgehang.gif",
            "ledgerolls/YoungLink.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/young_link/young_linkGetupAttackU.gif",
            "hitboxes/young_link/young_linkGetupAttackD.gif",
            "hitboxes/young_link/young_linkTripAttack.gif",
            "hitboxes/young_link/young_linkLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/young_link",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
