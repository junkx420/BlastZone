// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "luigi",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiJab1.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "18",
          "endlag": "15",
          "damage": "2.0",
          "advantage": "-13",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 5"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiJab2.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "18",
          "endlag": "14",
          "damage": "2.0",
          "advantage": "-12",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 as early as frame 6"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiJab3.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "30",
          "endlag": "23",
          "damage": "4.0",
          "advantage": "-19",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiFTilt.gif",
            "hitboxes/luigi/LuigiFTiltUp.gif",
            "hitboxes/luigi/LuigiFTiltDown.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "32",
          "endlag": "25",
          "damage": "9.0",
          "advantage": "-18",
          "shieldLag": "7",
          "shieldStun": "9"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiUTilt.gif"
          ],
          "startup": "5",
          "active": "5-10",
          "total": "27",
          "endlag": "17",
          "damage": "6.0",
          "advantage": "-15",
          "shieldLag": "7",
          "shieldStun": "9"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiDTilt.gif"
          ],
          "startup": "5",
          "active": "5-8",
          "total": "13",
          "endlag": "5",
          "damage": "5.0",
          "advantage": "-2",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiDashAttack.gif"
          ],
          "startup": "4/8/12/16/25",
          "active": "4/8/12/16/25",
          "total": "47",
          "endlag": "22",
          "damage": "2.0/4.0",
          "advantage": "-17",
          "shieldLag": "4/14",
          "shieldStun": "3/5",
          "hitboxes": "Multi/final"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiFSmash.gif",
            "hitboxes/luigi/LuigiFSmashUp.gif",
            "hitboxes/luigi/LuigiFSmashDown.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "41",
          "endlag": "28",
          "damage": "15.0",
          "advantage": "-18",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiUSmash.gif"
          ],
          "startup": "9",
          "active": "9-13",
          "total": "39",
          "endlag": "26",
          "damage": "14.0/12.0",
          "advantage": "-20",
          "shieldLag": "10",
          "shieldStun": "10",
          "hitboxes": "Far/Close",
          "notes": "Head intangibility on frame 9-13. Charge hold is frame 6"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiDSmash.gif"
          ],
          "startup": "6/14",
          "active": "6-7/14-15",
          "total": "37",
          "endlag": "22",
          "damage": "15.0/14.0",
          "advantage": "-20/-12",
          "shieldLag": "10/10",
          "shieldStun": "11/11",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 2."
        },
        {
          "name": "Down Taunt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/luigi/LuigiDTaunt.gif"
          ],
          "startup": "45",
          "total": "69",
          "damage": "2.0",
          "advantage": "-21"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/luigi/LuigiNAir.gif"
          ],
          "startup": "3",
          "active": "3-5(6-31)",
          "total": "44",
          "endlag": "13",
          "landingLag": "8",
          "damage": "12.0/6.0",
          "advantage": "-3/-5",
          "shieldLag": "9/6",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late",
          "notes": "Auto cancels on frame 1-2 and frame 36 onward."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/luigi/LuigiFAir.gif"
          ],
          "startup": "7",
          "active": "7-10",
          "total": "23",
          "endlag": "13",
          "landingLag": "13",
          "damage": "8.0",
          "advantage": "-9",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 21 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/luigi/LuigiBAir.gif"
          ],
          "startup": "6",
          "active": "6-7(8-13)",
          "total": "44",
          "endlag": "31",
          "landingLag": "10",
          "damage": "14.0/8.0",
          "advantage": "-5/-6",
          "shieldLag": "10/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 33 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/luigi/LuigiUAir.gif"
          ],
          "startup": "5",
          "active": "5-7(8-11)",
          "total": "26",
          "endlag": "15",
          "landingLag": "7",
          "damage": "11.0/7.0",
          "advantage": "-2/-4",
          "shieldLag": "9/7",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 19 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/luigi/LuigiDAir.gif"
          ],
          "startup": "10",
          "active": "10(11-14)",
          "total": "28",
          "endlag": "14",
          "landingLag": "12",
          "damage": "10.0/8.0",
          "advantage": "-8/-8",
          "shieldLag": "12/7",
          "shieldStun": "4/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-5 and 24 onward"
        },
        {
          "name": "Z Air",
          "section": "aerial",
          "startup": "14",
          "active": "14-68",
          "total": "52",
          "landingLag": "20",
          "damage": "5.0",
          "advantage": "-2",
          "shieldLag": "6",
          "shieldStun": "6",
          "notes": "If you land before firing, it will fire on frame 6 of landing. Advantage is that shot."
        },
        {
          "name": "Neutral B (Fireball)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/luigi/LuigiFireball.gif"
          ],
          "startup": "17",
          "active": "17-45(46-66)",
          "total": "43",
          "damage": "6.0/5.0",
          "advantage": "-17",
          "shieldLag": "6/6",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Side B (Green Missile)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/luigi/LuigiGreenMissile.gif",
            "hitboxes/luigi/LuigiGreenMissileMisfire.gif"
          ],
          "startup": "22",
          "active": "22-60",
          "total": "79/95",
          "endlag": "19",
          "landingLag": "39",
          "damage": "6.1-21.0/25.0",
          "advantage": "-23 to -13/-10",
          "shieldLag": "10-16/15",
          "shieldStun": "8-19/22",
          "notes": "On hit endlag is 18 or 32 total if you landed during that 18 frame animation. Total frames is 79 in the air, 95 on level ground. 41 landing lag is consistent as long as you land during the 79 frame animation. Invulnerable on frame 18-22."
        },
        {
          "name": "Up B (Super Jump Punch, Ground)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/luigi/LuigiSuperJumpPunchG.gif"
          ],
          "startup": "8",
          "active": "8(9-23)",
          "total": "109",
          "endlag": "86",
          "landingLag": "45",
          "damage": "25.0/1.0",
          "advantage": "-79/-99",
          "shieldLag": "14/4",
          "shieldStun": "22/2",
          "hitboxes": "Sweet/sourspot",
          "notes": "Invulnerable on frame 8-10 on the ground. Total frames assumes level ground."
        },
        {
          "name": "Up B (Super Jump Punch, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/luigi/LuigiSuperJumpPunchA.gif"
          ],
          "startup": "6",
          "active": "6(7-23)",
          "landingLag": "45",
          "damage": "20.0/1.0",
          "hitboxes": "Sweet/sourspot",
          "notes": "Invulnerable on frame 6-8 in the air"
        },
        {
          "name": "Down B (Luigi Cyclone)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/luigi/LuigiLuigiCycloneG.gif",
            "hitboxes/luigi/LuigiLuigiCycloneA.gif"
          ],
          "startup": "10.../40",
          "active": "10-33(rehit:6)/40",
          "total": "85",
          "endlag": "45",
          "damage": "2.0/4.0",
          "advantage": "-40",
          "shieldLag": "4/11",
          "shieldStun": "3/5",
          "hitboxes": "Multi/Final",
          "notes": "Invincible on frame 4-8 on the ground. 1-7 in the air."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/luigi/LuigiGrab.gif"
          ],
          "startup": "14",
          "active": "14-20",
          "total": "47",
          "endlag": "27",
          "notes": "Body grabbox only active for the first 2 frames"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/luigi/LuigiDashGrab.gif"
          ],
          "startup": "16",
          "active": "16-22",
          "total": "51",
          "endlag": "29",
          "notes": "Body grabbox only active for the first 2 frames"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/luigi/LuigiPivotGrab.gif"
          ],
          "startup": "17",
          "active": "17-24",
          "total": "49",
          "endlag": "25",
          "notes": "Body grabbox only active for the first 2 frames"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/luigi/LuigiPummel.gif"
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
            "hitboxes/luigi/LuigiFThrow.gif"
          ],
          "startup": "15",
          "total": "37",
          "damage": "9.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/luigi/LuigiBThrow.gif"
          ],
          "startup": "15",
          "total": "37",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/luigi/LuigiUThrow.gif"
          ],
          "startup": "18",
          "total": "39",
          "damage": "8.0",
          "notes": "Collateral hitbox on frame 15, does 6.0%."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/luigi/LuigiDThrow.gif"
          ],
          "startup": "18/29",
          "total": "40",
          "damage": "3.0/3.0",
          "notes": "Collateral hitbox on frames 18-28."
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
          "total": "57",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "81",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "88",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "113",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "127",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/luigi/luigiGetupAttackUp.gif",
            "hitboxes/luigi/luigiGetupAttackDown.gif",
            "hitboxes/luigi/luigiTripAttack.gif",
            "hitboxes/luigi/luigiLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/luigi",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
