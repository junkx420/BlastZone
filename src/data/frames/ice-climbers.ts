// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "ice-climbers",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoJab1.gif",
            "hitboxes/ice_climbers/NanaJab1.gif"
          ],
          "startup": "4",
          "active": "4—5",
          "total": "27",
          "endlag": "22",
          "damage": "2.0(1.5)",
          "advantage": "-20(-15)",
          "shieldLag": "6(6)",
          "shieldStun": "3(3)",
          "notes": "Transitions to Jab 2 as early as frame 10."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoJab2.gif",
            "hitboxes/ice_climbers/NanaJab2.gif"
          ],
          "startup": "4",
          "active": "4—5",
          "total": "29",
          "endlag": "24",
          "damage": "3.5(2.6)",
          "advantage": "-21(-12)",
          "shieldLag": "9(9)",
          "shieldStun": "4(4)"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoFTilt.gif",
            "hitboxes/ice_climbers/PopoFTiltUp.gif",
            "hitboxes/ice_climbers/PopoFTiltDown.gif",
            "hitboxes/ice_climbers/NanaFTilt.gif",
            "hitboxes/ice_climbers/NanaFTiltUp.gif",
            "hitboxes/ice_climbers/NanaTiltDown.gif"
          ],
          "startup": "9",
          "active": "9—10",
          "total": "29",
          "endlag": "19",
          "damage": "9.0(6.7)",
          "advantage": "-14(-10)",
          "shieldLag": "7(6)",
          "shieldStun": "9(7)"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoUTilt.gif",
            "hitboxes/ice_climbers/NanaUTilt.gif"
          ],
          "startup": "8/11/14/17/20/23/27",
          "active": "8—9/11—12/14—15/17—18/20—21/23—24/27",
          "total": "48",
          "endlag": "21",
          "damage": "0.8/4.5(0.6/3.0)",
          "advantage": "-16(-7)",
          "shieldLag": "4/11(4/10)",
          "shieldStun": "2/5(2/4)"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoDTilt.gif",
            "hitboxes/ice_climbers/NanaDTilt.gif"
          ],
          "startup": "8",
          "active": "8—11",
          "total": "30",
          "endlag": "19",
          "damage": "6.0(4.5)",
          "advantage": "-16(-10)",
          "shieldLag": "6(5)",
          "shieldStun": "6(5)"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoDashAttack.gif",
            "hitboxes/ice_climbers/NanaDashAttack.gif"
          ],
          "startup": "9",
          "active": "9—12",
          "total": "39",
          "endlag": "27",
          "damage": "6.0(4.5)",
          "advantage": "-24(-18)",
          "shieldLag": "6(5)",
          "shieldStun": "6(5)"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoFSmash.gif",
            "hitboxes/ice_climbers/NanaFSmash.gif"
          ],
          "startup": "11",
          "active": "11—13",
          "total": "46",
          "endlag": "33",
          "damage": "12.0(9.0)",
          "advantage": "-27(-22)",
          "shieldLag": "9(7)",
          "shieldStun": "8(7)",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoUSmash.gif",
            "hitboxes/ice_climbers/NanaUSmash.gif"
          ],
          "startup": "12",
          "active": "12—17",
          "total": "49",
          "endlag": "32",
          "damage": "11.0(8.2)",
          "advantage": "-29(-24)",
          "shieldLag": "8(7)",
          "shieldStun": "8(6)",
          "notes": "Charge hold is frame 7"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoDSmash.gif",
            "hitboxes/ice_climbers/NanaDSmash.gif"
          ],
          "startup": "9/16",
          "active": "9—11/16",
          "total": "40",
          "endlag": "24",
          "damage": "13.0(9.7)",
          "advantage": "-22/-17",
          "shieldLag": "9/8",
          "shieldStun": "9/7",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoNAir.gif",
            "hitboxes/ice_climbers/NanaNAir.gif"
          ],
          "startup": "6",
          "active": "6—23",
          "total": "45",
          "endlag": "22",
          "landingLag": "7",
          "damage": "7.0(5.2)",
          "advantage": "-4(+2)",
          "shieldLag": "7(6)",
          "shieldStun": "3(3)",
          "notes": "Autocancels on frame 1-5 and 30 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoFAir.gif",
            "hitboxes/ice_climbers/NanaFAir.gif"
          ],
          "startup": "19",
          "active": "19—20",
          "total": "56",
          "endlag": "36",
          "landingLag": "10",
          "damage": "12.0(9.0)",
          "advantage": "-5(+3)",
          "shieldLag": "9(7)",
          "shieldStun": "5(4)",
          "notes": "Autocancels on frame 1-2 and 49 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoBAir.gif",
            "hitboxes/ice_climbers/NanaBAir.gif"
          ],
          "startup": "8",
          "active": "8—11",
          "total": "35",
          "endlag": "24",
          "landingLag": "7",
          "damage": "10.0(7.5)",
          "advantage": "-3(+0)",
          "shieldLag": "8(7)",
          "shieldStun": "4(3)",
          "notes": "Autocancels on frame 1-7 and 19 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoUAir.gif",
            "hitboxes/ice_climbers/NanaUAir.gif"
          ],
          "startup": "7",
          "active": "7—11",
          "total": "35",
          "endlag": "24",
          "landingLag": "14",
          "damage": "9.0(6.7)",
          "advantage": "-10(-3)",
          "shieldLag": "7(6)",
          "shieldStun": "4(3)",
          "notes": "Autocancels on frame 1-6 and 27 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoDAir.gif",
            "hitboxes/ice_climbers/NanaDAir.gif"
          ],
          "startup": "12",
          "active": "12—51",
          "total": "63",
          "endlag": "12",
          "landingLag": "20",
          "damage": "8.0(6.0)",
          "advantage": "-16(-12)",
          "shieldLag": "7(6)",
          "shieldStun": "4(3)",
          "notes": "Autocancels on frame 54 onward"
        },
        {
          "name": "Neutral B (Ice Shot)",
          "section": "special",
          "startup": "18/19",
          "active": "18/19—**",
          "total": "55",
          "damage": "3.5/3.5",
          "advantage": "-29(-24)",
          "shieldLag": "5",
          "shieldStun": "2"
        },
        {
          "name": "Side B, both (Squal Hammer, both)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoSquallHammerDuo.gif",
            "hitboxes/ice_climbers/NanaSquallHammerDuo.gif"
          ],
          "startup": "10/14/18/23/28/34/40/51",
          "active": "10/14/18/23/28/34/40/51—52",
          "total": "77",
          "endlag": "25",
          "landingLag": "29",
          "damage": "2.0/4.0",
          "advantage": "-21",
          "shieldLag": "4/8",
          "shieldStun": "3/5",
          "notes": "Landing lag only occurs if you enter special fall."
        },
        {
          "name": "Side B, alone (Squal Hammer, alone)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoSqualHammerSolo.gif",
            "hitboxes/ice_climbers/NanaSqualHammerSolo.gif"
          ],
          "startup": "10/13/15/18/21/24/28/32/37/42/49",
          "active": "10/13/15/18/21/24/28/32/37/42/49—50",
          "total": "77",
          "endlag": "27",
          "landingLag": "29",
          "damage": "1.2/2.0",
          "advantage": "-24",
          "shieldLag": "4/4",
          "shieldStun": "3/3",
          "notes": "Landing lag only occurs if you enter special fall."
        },
        {
          "name": "Up B (Belay)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ice_climbers/NanaBelay.gif"
          ],
          "startup": "13",
          "active": "16—33",
          "landingLag": "27",
          "damage": "16.0",
          "shieldLag": "10",
          "shieldStun": "14",
          "notes": "Hitting somebody with this move reduces its height gain for your climber. The AI is invulnerable frame 1-15 and invincible frame 16-33"
        },
        {
          "name": "Down B (Blizzard)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoBlizzard.gif",
            "hitboxes/ice_climbers/NanaBlizzard.gif"
          ],
          "startup": "16/21/26/31/36/41/46/51/56",
          "active": "lul",
          "total": "84",
          "damage": "1.8%/1.0%/1.0%",
          "advantage": "-22(-15)",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "The game randomly picks an angle between 60 and 115 for each shot and then flips to face in front of the Ice Climbers. The angles thus vary between -30 and 25."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoGrab.gif"
          ],
          "startup": "8",
          "active": "8—9",
          "total": "39",
          "endlag": "30"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoDashGrab.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "47",
          "endlag": "36"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "40",
          "endlag": "29"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoPummel.gif"
          ],
          "startup": "1",
          "total": "16",
          "landingLag": "Total frames includes 10 frames of hitlag.",
          "damage": "1.0"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoFThrow.gif"
          ],
          "startup": "24/25",
          "total": "49",
          "damage": "3.0/5.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoBThrow.gif"
          ],
          "startup": "18",
          "total": "39",
          "damage": "6.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoUThrow.gif"
          ],
          "startup": "25/27",
          "total": "52",
          "damage": "3.0/5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ice_climbers/PopoDThrow.gif"
          ],
          "startup": "37",
          "total": "49",
          "damage": "6.0"
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
          "total": "58",
          "landingLag": "10",
          "notes": "Intangible on frame 3-28."
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
          "total": "86",
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
          "total": "115",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "129",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/ice_climbers/popoGetupAttackU.gif",
            "hitboxes/ice_climbers/popoGetupAttackD.gif",
            "hitboxes/ice_climbers/popoTripAttack.gif",
            "hitboxes/ice_climbers/popoLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/ice_climbers",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
