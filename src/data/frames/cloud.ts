// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "cloud",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/cloud/CloudJab1.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "29",
          "endlag": "24",
          "damage": "2.5",
          "advantage": "-21",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Transitions to jab 2 as early as frame 8"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/cloud/CloudJab2.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "32",
          "endlag": "26",
          "damage": "2.0",
          "advantage": "-24",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 9"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/cloud/CloudJab3.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "37",
          "endlag": "30",
          "damage": "3.5",
          "advantage": "-27",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/cloud/CloudFTilt.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "35",
          "endlag": "25",
          "damage": "11.0",
          "advantage": "-16",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/cloud/CloudUTilt.gif"
          ],
          "startup": "6",
          "active": "6-9",
          "total": "32",
          "endlag": "23",
          "damage": "8.0",
          "advantage": "-18",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/cloud/CloudDTilt.gif"
          ],
          "startup": "7",
          "active": "7-8(9-17)",
          "total": "40",
          "endlag": "23",
          "damage": "7.0",
          "advantage": "-26",
          "shieldLag": "7",
          "shieldStun": "7",
          "notes": "Back leg intangibility on frames 7-17."
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/cloud/CloudDashAttack.gif"
          ],
          "startup": "9",
          "active": "9-13(14-18)",
          "total": "45",
          "endlag": "27",
          "damage": "11.0/8.0",
          "advantage": "-26",
          "shieldLag": "8/7",
          "shieldStun": "10/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/cloud/CloudFSmash.gif"
          ],
          "startup": "19/24/28",
          "active": "19/24/28",
          "total": "66",
          "endlag": "38",
          "damage": "3.0/2.0/(13.0/12.0)",
          "advantage": "-29/-30",
          "shieldLag": "7/7/(16/15)",
          "shieldStun": "3/3/(9/8)",
          "hitboxes": "First/Second/(Final Close/Far)",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/cloud/CloudUSmash.gif"
          ],
          "startup": "12",
          "active": "12(13-14/15-16)",
          "total": "45",
          "endlag": "29",
          "damage": "13.0/8.0",
          "advantage": "-24",
          "shieldLag": "10/7",
          "shieldStun": "9/6",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/cloud/CloudDSmash.gif"
          ],
          "startup": "8/21",
          "active": "8-9/21-23",
          "total": "49",
          "endlag": "26",
          "damage": "3.0/11.0",
          "advantage": "-38/-20",
          "shieldLag": "5/11",
          "shieldStun": "3/8",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/cloud/CloudNAir.gif"
          ],
          "startup": "5",
          "active": "5-15",
          "total": "38",
          "endlag": "23",
          "landingLag": "9",
          "damage": "8.0",
          "advantage": "-5",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 31 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/cloud/CloudFAir.gif"
          ],
          "startup": "18",
          "active": "18-19(20-25)",
          "total": "53",
          "endlag": "28",
          "landingLag": "11",
          "damage": "13.0/14.0/11.0",
          "advantage": "-6/-6/-7",
          "shieldLag": "12/12/8",
          "shieldStun": "5/5/4",
          "hitboxes": "Early/Tipper/Late",
          "notes": "Autocancels on frame 1-2 and 43 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/cloud/CloudBAir.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "42",
          "endlag": "30",
          "landingLag": "8",
          "damage": "13.0",
          "advantage": "-3",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-4 and 37 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/cloud/CloudUAir.gif"
          ],
          "startup": "8",
          "active": "8-9(10-23)",
          "total": "44",
          "endlag": "21",
          "landingLag": "9",
          "damage": "11.0/8.0",
          "advantage": "-5/-5",
          "shieldLag": "10/7",
          "shieldStun": "4/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 32 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/cloud/CloudDAir.gif"
          ],
          "startup": "11",
          "active": "11-13(14-39)",
          "total": "64",
          "endlag": "25",
          "landingLag": "16",
          "damage": "13.0/8.0",
          "advantage": "-11/-12",
          "shieldLag": "14/9",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-4 and 46 onward"
        },
        {
          "name": "Neutral B (Blade Beam)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/cloud/CloudBladeBeamG.gif",
            "hitboxes/cloud/CloudBladeBeamA.gif"
          ],
          "startup": "18(18)",
          "active": "18-35(36-67)",
          "total": "53(60)",
          "damage": "8.0/6.0(6.4/4.8)",
          "advantage": "-25(-33)",
          "shieldLag": "7/6(6/6)",
          "shieldStun": "3/3(3/3)",
          "hitboxes": "Ground Early/Late (Air Early/Late)",
          "notes": "Windbox on 16-17."
        },
        {
          "name": "Limit Blade Beam",
          "section": "special",
          "hitboxImages": [
            "hitboxes/cloud/CloudBladeBeamLimitG.gif",
            "hitboxes/cloud/CloudBladeBeamLimitA.gif"
          ],
          "startup": "16 (1/7/13/19/25/28)",
          "active": "16-62, Multihits: (1-28 (Rehit : 6)/29-30)",
          "total": "60",
          "damage": "6.0/2.0/3.0 (Air: 4.8/1.6/2.4)",
          "advantage": "-9",
          "shieldLag": "-/4/5",
          "shieldStun": "-/2/2",
          "hitboxes": "First/Multi/Final",
          "notes": "Invulnerable on frame 10-17"
        },
        {
          "name": "Side B, Hit 1 (Cross Slash, Hit 1)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/cloud/CloudCrossSlash1Left.gif",
            "hitboxes/cloud/CloudCrossSlash1Right.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "40",
          "endlag": "29",
          "damage": "4.0",
          "advantage": "-25",
          "shieldLag": "5",
          "shieldStun": "5",
          "notes": "Transitions to next slash as early as frame 10 if you hit"
        },
        {
          "name": "Cross Slash, Hit 2",
          "section": "special",
          "hitboxImages": [
            "hitboxes/cloud/CloudCrossSlash2Left.gif",
            "hitboxes/cloud/CloudCrossSlash2Right.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "31",
          "endlag": "28",
          "damage": "3.0",
          "advantage": "-25",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Transitiions to next slash as early as frame 14 if you hit"
        },
        {
          "name": "Cross Slash, Hit 3",
          "section": "special",
          "hitboxImages": [
            "hitboxes/cloud/CloudCrossSlash3Left.gif",
            "hitboxes/cloud/CloudCrossSlash3Right.gif"
          ],
          "startup": "2/11/25",
          "active": "2-3/11-12/25-26",
          "total": "55",
          "endlag": "29",
          "damage": "3.0/3.0/6.0",
          "advantage": "-24",
          "shieldLag": "0/5/12",
          "shieldStun": "4/4/6"
        },
        {
          "name": "Limit Cross Slash",
          "section": "special",
          "hitboxImages": [
            "hitboxes/cloud/CloudCrossSlashLimitLeft.gif",
            "hitboxes/cloud/CloudCrossSlashLimitRight.gif"
          ],
          "startup": "10/15/21/28/38",
          "active": "10-11/15-16/21-22/28/38-39",
          "total": "60",
          "endlag": "21",
          "damage": "5.0/3.0/10.0",
          "advantage": "-12",
          "shieldLag": "6/5/19",
          "shieldStun": "-/4/10",
          "hitboxes": "Hits 1-2/3-4/Final",
          "notes": "Invulnerable on frame 6-11"
        },
        {
          "name": "Up B (Climhazzard)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/cloud/CloudClimhazzard.gif"
          ],
          "startup": "7/10",
          "active": "7/10(11/12-15/?)",
          "landingLag": "20",
          "damage": "3.0/4.0",
          "shieldLag": "12/6",
          "shieldStun": "-/5",
          "notes": "Transitions to followup as early as frame 20"
        },
        {
          "name": "Climhazzard, Followup",
          "section": "special",
          "hitboxImages": [
            "hitboxes/cloud/CloudClimhazzardFall.gif",
            "hitboxes/cloud/CloudClimhazzardLanding.gif"
          ],
          "startup": "12",
          "active": "12-?",
          "landingLag": "26",
          "damage": "6.0/7.0",
          "shieldLag": "15/16",
          "shieldStun": "-/7"
        },
        {
          "name": "Limit Climhazzard",
          "section": "special",
          "hitboxImages": [
            "hitboxes/cloud/CloudClimhazzardLimit.gif"
          ],
          "startup": "7/10",
          "active": "7-9/10(11-16)/1-3",
          "landingLag": "20",
          "damage": "4.5/3.5",
          "advantage": "-21",
          "shieldLag": "7/7",
          "shieldStun": "5/4",
          "hitboxes": "Falling/Landing",
          "notes": "Invulnerable on frame 5-12 Transitions to followup as early as frame 33"
        },
        {
          "name": "Down B (Limit Charge)",
          "section": "special",
          "notes": "Takes 7 frames to cancel. Has a 100 Unit cap and fills by 0.3 Units per frame, so 18 Units a second (was 0.25 Pre-7.0.0.)."
        },
        {
          "name": "Down B (Finishing Touch)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/cloud/CloudFinishingTouchG.gif",
            "hitboxes/cloud/CloudFinishingTouchA.gif"
          ],
          "startup": "12 (ground) // 14 (air)",
          "active": "12(13-14)/22-26 // 14-15(17)/25-29",
          "total": "84/87",
          "endlag": "55",
          "damage": "1.0",
          "advantage": "-70/-71",
          "shieldLag": "8",
          "shieldStun": "2"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/cloud/CloudGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "36",
          "endlag": "26"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/cloud/CloudDashGrab.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "44",
          "endlag": "31"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/cloud/CloudPivotGrab.gif"
          ],
          "startup": "13",
          "active": "13-14",
          "total": "39",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/cloud/CloudPummel.gif"
          ],
          "startup": "1",
          "total": "18",
          "damage": "1.3",
          "notes": "Total frames includes 12 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/cloud/CloudFThrow.gif"
          ],
          "startup": "7/9",
          "total": "35",
          "damage": "4.0/3.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/cloud/CloudBThrow.gif"
          ],
          "startup": "13/15",
          "total": "31",
          "damage": "3.0/3.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/cloud/CloudUThrow.gif"
          ],
          "startup": "8/13/15",
          "total": "50",
          "damage": "2.0/2.5/4.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/cloud/CloudDThrow.gif"
          ],
          "startup": "18",
          "total": "43",
          "damage": "7.0"
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
          "total": "47",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "64",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "72",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "79",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "94",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "104",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/cloud/cloudGetupAttackU.gif",
            "hitboxes/cloud/cloudGetupAttackD.gif",
            "hitboxes/cloud/cloudTripAttack.gif",
            "hitboxes/cloud/cloudLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/cloud",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
