// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "mr-game-and-watch",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchJab.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "15",
          "endlag": "10",
          "damage": "3.0",
          "advantage": "-7",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Transitions to rapid jab as early as 7."
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchJabRapid.gif"
          ],
          "startup": "5/11/17...",
          "damage": "0.8",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchJabRapidFinisher.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "34",
          "endlag": "32",
          "damage": "3.0",
          "advantage": "-28",
          "shieldLag": "11",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchFTilt.gif"
          ],
          "startup": "8",
          "active": "8-9(10-20)",
          "total": "37",
          "endlag": "17",
          "damage": "12.0/10.0/6.0",
          "advantage": "-18",
          "shieldLag": "9",
          "shieldStun": "11",
          "hitboxes": "Early Far/Early Close/Late"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchUTilt.gif"
          ],
          "startup": "10/20",
          "active": "10-12/20-22",
          "total": "33",
          "endlag": "11",
          "damage": "7.0/7.0",
          "advantage": "-16/-6",
          "shieldLag": "7/7",
          "shieldStun": "7/7"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchDTilt.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "total": "42",
          "endlag": "34",
          "damage": "9.0",
          "advantage": "-27",
          "shieldLag": "7",
          "shieldStun": "9",
          "notes": "Can only hit grounded opponents. More info."
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchDashAttack.gif"
          ],
          "startup": "6",
          "active": "6-9(10-19)",
          "total": "38",
          "endlag": "19",
          "damage": "10.0/6.5",
          "advantage": "-21",
          "shieldLag": "8/6",
          "shieldStun": "10/7",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchFSmash.gif"
          ],
          "startup": "17",
          "active": "17-18",
          "total": "42",
          "endlag": "24",
          "damage": "14.0/18.0",
          "advantage": "-15/-13",
          "shieldLag": "10/11",
          "shieldStun": "10/12",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 7"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchUSmash.gif"
          ],
          "startup": "21",
          "active": "21-25",
          "total": "38",
          "endlag": "13",
          "damage": "16.0",
          "advantage": "-6",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Invincible on frame 21-25. Charge hold is frame 15"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchDSmash.gif"
          ],
          "startup": "12",
          "active": "12-16",
          "total": "37",
          "endlag": "21",
          "damage": "13.0/15.0",
          "advantage": "-16/-15",
          "shieldLag": "9/10",
          "shieldStun": "9/10",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 6, hammer heads ground the opponent."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchNAir.gif"
          ],
          "startup": "7/12/17/22",
          "active": "7-10/12-15/17-20/22-23",
          "total": "42",
          "endlag": "19",
          "landingLag": "7",
          "damage": "3.0/4.0",
          "advantage": "-5/-4",
          "shieldLag": "5/11",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-2 and 40 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchFAir.gif"
          ],
          "startup": "10/44",
          "active": "10-13/**",
          "total": "47",
          "landingLag": "17",
          "damage": "3.0/12.0",
          "advantage": "-3",
          "shieldLag": "5/9",
          "shieldStun": "2/5",
          "notes": "Bomb leaves his hands on 14, exploding automatically on 44 or upon touching ground. Autocancels on frame 42 onward. Advantage assumes landing on the same frame as bomb."
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchBair.gif",
            "hitboxes/mr_game_and_watch/MrGame_WatchBairLanding.gif"
          ],
          "startup": "10/14/18/22",
          "active": "10-13/14-17/18-21/22/1",
          "total": "39",
          "endlag": "17",
          "landingLag": "18",
          "damage": "2.0/3.0/3.0",
          "advantage": "-13",
          "shieldLag": "4/13/5",
          "shieldStun": "2/2/4",
          "hitboxes": "Multi/Final/landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-9 and 38 onward. The turtle's name is Augustus Philippe."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchUAir.gif"
          ],
          "startup": "9/15/21/27/33/37",
          "active": "9/15/21/27/33/37-41",
          "total": "42",
          "endlag": "1",
          "landingLag": "12",
          "damage": "1.7/3.0",
          "shieldLag": "3/3",
          "shieldStun": "0/0",
          "hitboxes": "Multi/Final",
          "notes": "Attack is a projectile. Autocancels on frame 44 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchDair.gif",
            "hitboxes/mr_game_and_watch/MrGame_WatchDairLanding.gif"
          ],
          "startup": "12",
          "active": "12-13/14-38/1-2",
          "total": "49",
          "endlag": "11",
          "landingLag": "22",
          "damage": "11.0/3.5",
          "advantage": "-17",
          "shieldLag": "8/5",
          "shieldStun": "4/4",
          "hitboxes": "Meteor/Late/Landing",
          "notes": "landing hit on frame 1. Autocancels on frame 1-5 and 50 onward"
        },
        {
          "name": "Neutral B (Chef)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchChef.gif"
          ],
          "startup": "18",
          "active": "18-20/**",
          "total": "54",
          "damage": "5.0/13.0",
          "advantage": "-28",
          "shieldLag": "6/7",
          "shieldStun": "3/8",
          "hitboxes": "Sausage/Pan",
          "notes": "Projectile and melee attack generate on same frame. Generates new sausage every 32 frames"
        },
        {
          "name": "Side B (Judge)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchJudge1.gif",
            "hitboxes/mr_game_and_watch/MrGame_WatchJudge2.gif",
            "hitboxes/mr_game_and_watch/MrGame_WatchJudge3.gif",
            "hitboxes/mr_game_and_watch/MrGame_WatchJudge4.gif",
            "hitboxes/mr_game_and_watch/MrGame_WatchJudge5.gif",
            "hitboxes/mr_game_and_watch/MrGame_WatchJudge6.gif",
            "hitboxes/mr_game_and_watch/MrGame_WatchJudge7.gif",
            "hitboxes/mr_game_and_watch/MrGame_WatchJudge8.gif",
            "hitboxes/mr_game_and_watch/MrGame_WatchJudge9.gif"
          ],
          "startup": "16",
          "active": "16-23 (Judge 5: 16-18/19-21/22-24/25-27)",
          "total": "49",
          "endlag": "22",
          "damage": "1: 2.0, 2: 4.0, 3: 6.0, 4: 8.0, 5: 3.0, 6: 12.0, 7: 14.0, 8: 13.0, 9: 32.0",
          "advantage": "-30, -28, -27, -25, -20, -22, -20, -21, -6",
          "shieldLag": "4, 5, 6, 7, 7, 9, 10, 9, 21",
          "shieldStun": "3, 5, 6, 8, 4, 11, 13, 12, 27",
          "notes": "Judge 1: Deals 12.0 recoil and no knockback. Judge 3: Deals bonus shield damage. Judge 5: Hits on frame 16/19/22/25. Judge 7: Spawns three food items. Judge 8: Freezes the opponent."
        },
        {
          "name": "Up B (Fire)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchFireA.gif"
          ],
          "startup": "3/9",
          "active": "3-4/9-18",
          "landingLag": "7",
          "damage": "3.0/6.0",
          "shieldLag": "7/6",
          "shieldStun": "4/6",
          "hitboxes": "Early/Late",
          "notes": "Invulnerable frame 5-13 Takes 7 frames to exit parachute by pressing down and avoiding landing lag. Can cancel directly with attacks as well. Opens parachute on frame 37."
        },
        {
          "name": "Down B (Oil Panic)",
          "section": "special",
          "startup": "6 (Start of Absorb/Reflect)",
          "active": "6-30 (absorb)",
          "total": "43",
          "notes": "Begins absorbing/reflecting on frame 6. Takes 13 frames to put away bucket after extended usage. Has a 2x Damage Multiplier per unit. Maximum Damage of 16% per unit, this is also the minimum damage output. If an attack deals more than 10% it fills 2 Units, 20% for 3. Takes 6F to turn around."
        },
        {
          "name": "Oil Panic, Overload",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchOilPanic.gif"
          ],
          "startup": "2",
          "active": "2-7(8-14/15-26)",
          "total": "49",
          "endlag": "23",
          "damage": "16.0-48.0",
          "hitboxes": "Early/Late/Later",
          "notes": "Successful absorbs incur a 24 frame animation that is completely invulnerable."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchGrab.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "34",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "42",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchPivotGrab.gif"
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
            "hitboxes/mr_game_and_watch/MrGameWatchPummel.gif"
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
            "hitboxes/mr_game_and_watch/MrGame_WatchFThrow.gif"
          ],
          "startup": "26",
          "total": "40",
          "damage": "8.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchBThrow.gif"
          ],
          "startup": "26",
          "total": "40",
          "damage": "8.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGameWatchUThrow.gif"
          ],
          "startup": "26",
          "total": "40",
          "damage": "12.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/MrGame_WatchDThrow.gif"
          ],
          "startup": "35",
          "total": "49",
          "damage": "4.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "21/25",
          "notes": "Intangible on frame 3-17."
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "30",
          "notes": "Intangible on frame 4-15."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "35",
          "notes": "Intangible on frame 5-16."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "59",
          "landingLag": "10",
          "notes": "Intangible on frame 3-28."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "84",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "93",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "100",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "123",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "132",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Mr. Game _ Watch Ledgehang.gif",
            "ledgerolls/MrGameWatch.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/mr_game_and_watch/mrgame_watchGetupAttackU.gif",
            "hitboxes/mr_game_and_watch/mrgame_watchGetupAttackD.gif",
            "hitboxes/mr_game_and_watch/mrgame_watchTripAttack.gif",
            "hitboxes/mr_game_and_watch/mrgame_watchLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/mr_game_and_watch",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
