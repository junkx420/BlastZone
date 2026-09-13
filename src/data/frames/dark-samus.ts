// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "dark-samus",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusJab1.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "17",
          "endlag": "13",
          "damage": "3.0",
          "advantage": "-10",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Transitions to Jab 2 as early as frame 15."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusJab2.gif"
          ],
          "startup": "6",
          "active": "6-9",
          "total": "29",
          "endlag": "20",
          "damage": "8.0",
          "advantage": "-15",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusFTilt.gif",
            "hitboxes/dark_samus/DarkSamusFTiltUp.gif",
            "hitboxes/dark_samus/DarkSamusFTiltDown.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "total": "33",
          "endlag": "23",
          "damage": "8.0/9.0/10.0",
          "advantage": "-17/-16/-15",
          "shieldLag": "7/7/8",
          "shieldStun": "8/9/10",
          "hitboxes": "Close/Middle/Far",
          "notes": "Deals 1.0 more damage when angled."
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusUTilt.gif"
          ],
          "startup": "15",
          "active": "15-18",
          "total": "39",
          "endlag": "21",
          "damage": "13.0/12.0",
          "advantage": "-12",
          "shieldLag": "9",
          "shieldStun": "12",
          "hitboxes": "Grounded/Aerial"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusDTilt.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "total": "44",
          "endlag": "36",
          "damage": "12.0",
          "advantage": "-26",
          "shieldLag": "9",
          "shieldStun": "12"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusDashAttack.gif"
          ],
          "startup": "8",
          "active": "8-9(10-13/14-18)",
          "total": "41",
          "endlag": "23",
          "damage": "10.0/6.0",
          "advantage": "-23",
          "shieldLag": "8/6",
          "shieldStun": "10/6",
          "hitboxes": "Early/Late/Later"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusFSmash.gif",
            "hitboxes/dark_samus/DarkSamusFSmashUp.gif",
            "hitboxes/dark_samus/DarkSamusFSmashDown.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "48",
          "endlag": "37",
          "damage": "12.0/14.0",
          "advantage": "-29/-28",
          "shieldLag": "9/10",
          "shieldStun": "9/10",
          "hitboxes": "Close/Far",
          "notes": "Deals 1.0 more damage when angled up, 1.0 less when angled down. Charge hold frame is 3."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusUSmash.gif"
          ],
          "startup": "11/15/19/23/27",
          "active": "11-12/15-16/19-20/23-24/27-28",
          "total": "56",
          "endlag": "28",
          "damage": "3.0/6.0",
          "advantage": "-24",
          "shieldLag": "5/6",
          "shieldStun": "3/5",
          "hitboxes": "Multihit/Final",
          "notes": "Charge hold frame is 6"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusDSmash.gif"
          ],
          "startup": "9/17",
          "active": "9-10/17-18",
          "total": "44",
          "endlag": "26",
          "damage": "10.0/12.0",
          "advantage": "-27/-18",
          "shieldLag": "8/9",
          "shieldStun": "8/9",
          "notes": "Charge hold frame is 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusNAir.gif"
          ],
          "startup": "8/14",
          "active": "8-11/14-15(16-22)",
          "total": "45",
          "endlag": "23",
          "landingLag": "9",
          "damage": "10.0/9.0/8.0",
          "advantage": "-5/-5/-6",
          "shieldLag": "8/8/7",
          "shieldStun": "4/4/4",
          "hitboxes": "Hit 1/Early Hit 2/Late Hit 2",
          "notes": "Autocancels on frame 1-7 and 35 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusFAir.gif"
          ],
          "startup": "6/12/18/24/30",
          "active": "6-7/12-13/18-19/24-25/30-31",
          "total": "59",
          "endlag": "28",
          "landingLag": "14",
          "damage": "3.0/1.6/5.0",
          "advantage": "-12/-12/-11",
          "shieldLag": "5/4/12",
          "shieldStun": "2/2/3",
          "hitboxes": "First/multi/final",
          "notes": "Autocancels on frame 47 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusBAir.gif"
          ],
          "startup": "9",
          "active": "9-10(11-14)",
          "total": "41",
          "endlag": "27",
          "landingLag": "14",
          "damage": "12.0/14.0/9.0",
          "advantage": "-9/-9/-10",
          "shieldLag": "9/7/8",
          "shieldStun": "5/4/4",
          "hitboxes": "Early close/Early far/late",
          "notes": "Autocancels on frame 1-8 and 42 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusUAir.gif"
          ],
          "startup": "5...",
          "active": "5/7-14(rehit: 3)/16-17",
          "total": "39",
          "endlag": "22",
          "landingLag": "18",
          "damage": "3.0/1.2/4.0",
          "advantage": "-16/-16/-15",
          "shieldLag": "5/3/10",
          "shieldStun": "2/2/3",
          "hitboxes": "First/multi/final",
          "notes": "Autocancels on frame 1-2 and 34 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusDAir.gif"
          ],
          "startup": "17",
          "active": "17-18/19-21/22-23",
          "total": "48",
          "endlag": "25",
          "landingLag": "12",
          "damage": "10.0/14.0",
          "advantage": "-8/-7",
          "shieldLag": "8/10",
          "shieldStun": "4/5",
          "hitboxes": "Early/Meteor/Late",
          "notes": "Autocancels on frame 1-3 and 34 onward"
        },
        {
          "name": "Z Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusZAir.gif"
          ],
          "startup": "8/16",
          "active": "8-15/16-19",
          "total": "59",
          "endlag": "40",
          "landingLag": "8",
          "damage": "2.5/4.0",
          "advantage": "-4/-3",
          "shieldLag": "7/8",
          "shieldStun": "4/5",
          "hitboxes": "First/Second"
        },
        {
          "name": "Neutral B (Charge Shot)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusChargeShotMin.gif"
          ],
          "startup": "3(+13)",
          "active": "3-62 (from release)",
          "total": "44",
          "damage": "5.0-26.1",
          "advantage": "-17 to +4",
          "shieldLag": "9-24",
          "shieldStun": "3-8",
          "notes": "Startup is 3 from charge state. Takes 13 frames to enter charge state."
        },
        {
          "name": "Charge Shot, Full Charge",
          "section": "special",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusChargeShotMax.gif"
          ],
          "startup": "16",
          "active": "16-75",
          "total": "60",
          "damage": "28.0",
          "advantage": "-12",
          "shieldLag": "24",
          "shieldStun": "8",
          "notes": "Takes 125 frames to reach full charge"
        },
        {
          "name": "Side B (Homing Missle)",
          "section": "special",
          "startup": "18",
          "active": "18-137",
          "total": "54/59",
          "damage": "8.0",
          "advantage": "-26",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Projectile lasts until frame 118. Total frames is 59 in the air for either missile type."
        },
        {
          "name": "Side B (Super Missle)",
          "section": "special",
          "startup": "21",
          "active": "21-70",
          "total": "57/59",
          "landingLag": "30",
          "damage": "12.0",
          "advantage": "-24",
          "shieldLag": "9",
          "shieldStun": "4",
          "notes": "Projectile lasts until frame 87. Starts moving forward around frame 50, allowing for followups."
        },
        {
          "name": "Up B (Screw Attack)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusScrewAttackG.gif"
          ],
          "startup": "4...",
          "active": "4-6/7-11/12-14/15-24/25-26",
          "landingLag": "24",
          "damage": "3.0/1.0/2.0",
          "shieldLag": "5/4",
          "shieldStun": "4/2",
          "hitboxes": "First/Multi/Final",
          "notes": "Invulnerable on frame 3-6. Rehit rate of 6 for active frames 7-24."
        },
        {
          "name": "Up B, Air (Screw Attack, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusScrewAttackA.gif"
          ],
          "startup": "5...",
          "active": "5-10/11-26/27-28",
          "landingLag": "24",
          "damage": "1.0",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "Invulnerable on frame 3-4. Rehit rate of 2 for all hits except final."
        },
        {
          "name": "Down B (Bomb)",
          "section": "special",
          "startup": "33",
          "active": "33-82/1-18",
          "total": "47/44/48",
          "damage": "4.0/5.0",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Bomb is generated on frame 11. Explosion occurs one frame after touching a target. Bomb explodes automatically on frame 83. Total frames is 44 if the player is holding down. And 48 in the air with no way to reduce it."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusGrab.gif"
          ],
          "startup": "15",
          "active": "15-22",
          "total": "59",
          "endlag": "37",
          "notes": "Hand grabbox only active for the first 3 frames"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusDashGrab.gif"
          ],
          "startup": "17",
          "active": "17-24",
          "total": "67",
          "endlag": "43",
          "notes": "Hand grabbox only active for the first 3 frames"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusPivotGrab.gif"
          ],
          "startup": "18",
          "active": "18-25",
          "total": "62",
          "endlag": "37",
          "notes": "Hand grabbox only active for the first 3 frames"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusPummel.gif"
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
            "hitboxes/dark_samus/DarkSamusFThrow.gif"
          ],
          "startup": "16",
          "total": "41",
          "damage": "10.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusBThrow.gif"
          ],
          "startup": "12",
          "total": "49",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusUThrow.gif"
          ],
          "startup": "15/16",
          "total": "41",
          "damage": "5.0/7.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/dark_samus/DarkSamusDThrow.gif"
          ],
          "startup": "21",
          "total": "37",
          "damage": "8.0"
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
          "total": "31",
          "notes": "Intangible on frame 4-18"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "36",
          "notes": "Intangible on frame 5-20"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "56",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "80",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "86",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "113",
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
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/dark_samus/darksamusGetupAttackU.gif",
            "hitboxes/dark_samus/darksamusGetupAttackD.gif",
            "hitboxes/dark_samus/darksamusTripAttack.gif",
            "hitboxes/dark_samus/darksamusLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/dark_samus",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
