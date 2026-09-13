// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "inkling",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingJab1.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "19",
          "endlag": "15",
          "damage": "2.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "3"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingJab2.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "21",
          "endlag": "18",
          "damage": "2.0",
          "advantage": "-16",
          "shieldLag": "7",
          "shieldStun": "3"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingJab3.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "29",
          "endlag": "24",
          "damage": "3.5",
          "advantage": "-21",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingJabRapid.gif"
          ],
          "startup": "4/7/10...",
          "active": "4/7/10...",
          "damage": "0.4",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Will not hit opponents when out of Ink"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingJabRapidEnd.gif"
          ],
          "startup": "6",
          "active": "6",
          "total": "48",
          "endlag": "42",
          "damage": "2.5",
          "advantage": "-38",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Will not hit opponents when out of Ink"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingFTilt.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "total": "34",
          "endlag": "24",
          "damage": "9.0",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "9"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingUTilt_.gif"
          ],
          "startup": "7",
          "active": "7-12",
          "total": "29",
          "endlag": "17",
          "damage": "6.0",
          "advantage": "-16",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingDTilt.gif"
          ],
          "startup": "5/12",
          "active": "5-8/12-15",
          "total": "31",
          "endlag": "16",
          "damage": "3.0/6.0",
          "advantage": "-13",
          "shieldLag": "5/6",
          "shieldStun": "4/6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingDashAttack.gif"
          ],
          "startup": "8",
          "active": "8-9/10-13",
          "total": "35",
          "endlag": "22",
          "damage": "8.0/6.0",
          "advantage": "-16",
          "shieldLag": "7/6",
          "shieldStun": "11/9"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingFSmash.gif"
          ],
          "startup": "16",
          "active": "16-17",
          "total": "51",
          "endlag": "34",
          "damage": "14.0/16.0",
          "advantage": "-25/-24",
          "shieldLag": "10/10",
          "shieldStun": "10/11",
          "hitboxes": "Close/Far",
          "notes": "Gets weaker when out of ink. Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingUSmash.gif",
            "hitboxes/inkling/InklingUSmashNoInk.gif"
          ],
          "startup": "9/18",
          "active": "9-10/18-20",
          "total": "57",
          "endlag": "37",
          "damage": "4.0/15.0/10.0",
          "advantage": "-44/-29/-32",
          "shieldLag": "5/10/8",
          "shieldStun": "4/10/7",
          "hitboxes": "First/Close/Far",
          "notes": "Gets weaker when out of ink. Charge hold is frame 3"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/inkling/InklingDSmash.gif"
          ],
          "startup": "11/20",
          "active": "(11-12/13-15)/(20-21/22-24)",
          "total": "49",
          "endlag": "25",
          "damage": "12.5/11.0",
          "advantage": "-29/-21",
          "shieldLag": "9/8",
          "shieldStun": "9/8",
          "notes": "Gets weaker when out of ink. Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/inkling/InklingNAir.gif"
          ],
          "startup": "6",
          "active": "6-9",
          "total": "31",
          "endlag": "22",
          "landingLag": "5",
          "damage": "7.0",
          "advantage": "-2",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Autocancels on frame 27 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/inkling/InklingFAir.gif"
          ],
          "startup": "10",
          "active": "10-11/12-21",
          "total": "41",
          "endlag": "20",
          "landingLag": "12",
          "damage": "12.0/10.0/7.0",
          "advantage": "-8/-9",
          "shieldLag": "8/7",
          "shieldStun": "4/3",
          "hitboxes": "Tipper/Early/Late",
          "notes": "Autocancels on frame 1-4 and frame 40 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/inkling/InklingBAir.gif"
          ],
          "startup": "7",
          "active": "7-11",
          "total": "36",
          "endlag": "25",
          "landingLag": "6",
          "damage": "10.0/7.5",
          "advantage": "-2/-3",
          "shieldLag": "8/7",
          "shieldStun": "4/3",
          "hitboxes": "Far/Close",
          "notes": "Autocancels on frame 1-6 and frame 30 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/inkling/InklingUAir.gif"
          ],
          "startup": "12/17",
          "active": "12-15/17-20",
          "total": "43",
          "endlag": "23",
          "landingLag": "6",
          "damage": "4.5/6.5",
          "advantage": "-3/-3",
          "shieldLag": "5/6",
          "shieldStun": "3/3",
          "notes": "Autocancels on frame 40 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/inkling/InklingDAir.gif"
          ],
          "startup": "16",
          "active": "16-17",
          "total": "61",
          "endlag": "44",
          "landingLag": "10",
          "damage": "12.0/10.0",
          "advantage": "-5/-6",
          "shieldLag": "9/8",
          "shieldStun": "5/4",
          "hitboxes": "Far/Close",
          "notes": "Autocancels on frame 1-4 and 33 onward"
        },
        {
          "name": "Neutral B (Splattershot)",
          "section": "special",
          "startup": "12/16/20/24",
          "active": "16/16/20/24",
          "total": "36",
          "endlag": "12",
          "damage": "0.3",
          "advantage": "-6",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "Startup and total frames is the minimum. When out of Ink this move enters the refill state."
        },
        {
          "name": "Side B (Splat Roller)",
          "section": "special",
          "startup": "16",
          "active": "16...",
          "total": "17/35",
          "endlag": "1",
          "damage": "4.0-11.0",
          "advantage": "-15 to -12",
          "shieldLag": "5-8 (Inkling 8-13)",
          "shieldStun": "5-10",
          "notes": "17 frame animation to jump cancel. 35 animation to cancel on the ground. Inkling suffers more shieldlag than defender. Advantage assumes buffered jump cancel."
        },
        {
          "name": "Up B (Super Jump)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/inkling/InklingSuperJump.gif"
          ],
          "startup": "12",
          "active": "12/15-21/1-10",
          "landingLag": "40",
          "damage": "8.0/6.0",
          "advantage": "?/-29/-30",
          "shieldLag": "7/6",
          "shieldStun": "3/3",
          "hitboxes": "Ground/Aerial/Landing",
          "notes": "Inkling will not suffer hitlag from this attack. Landing hitbox on frame 1."
        },
        {
          "name": "Down B (Splat Bomb)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/inkling/InklingSplatBomb.gif",
            "hitboxes/inkling/InklingSplatBombExplosion.gif"
          ],
          "startup": "20-40",
          "total": "47-65",
          "damage": "9.4-15.0",
          "shieldLag": "8-10",
          "shieldStun": "4-5",
          "notes": "Holding the button allows for a longer yet slower throw. Bombs explode on contact or on frame 99-159."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/inkling/InklingGrab.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "34",
          "endlag": "25"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/inkling/InklingDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "41",
          "endlag": "31"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/inkling/InklingPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "37",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/inkling/InklingPummel.gif"
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
            "hitboxes/inkling/InklingFThrow.gif"
          ],
          "startup": "22/23",
          "total": "39",
          "damage": "5.0/3.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/inkling/InklingBThrow.gif"
          ],
          "startup": "17",
          "total": "36",
          "damage": "9.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/inkling/InklingUThrow.gif"
          ],
          "startup": "21/22",
          "total": "36",
          "damage": "3.0/3.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/inkling/InklingDThrow.gif"
          ],
          "startup": "20",
          "total": "34",
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
          "total": "50",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "70",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "76",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "84",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "100",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "112",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/inkling/inklingGetupAttackU.gif",
            "hitboxes/inkling/inklingGetupAttackD.gif",
            "hitboxes/inkling/inklingTripAttack.gif",
            "hitboxes/inkling/inklingLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/inkling",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
