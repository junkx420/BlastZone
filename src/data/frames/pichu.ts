// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "pichu",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pichu/PichuJab.gif"
          ],
          "startup": "2",
          "active": "2—3",
          "total": "16",
          "endlag": "13",
          "damage": "1.2",
          "advantage": "-11",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to next Jab as early as frame 7."
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pichu/PichuFTilt.gif"
          ],
          "startup": "5",
          "active": "5—12",
          "total": "24",
          "endlag": "12",
          "damage": "8.0",
          "advantage": "-11",
          "shieldLag": "11",
          "shieldStun": "8",
          "notes": "1.2 base recoil damage"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pichu/PichuUTilt.gif"
          ],
          "startup": "7",
          "active": "7—14",
          "total": "23",
          "endlag": "9",
          "damage": "5.0",
          "advantage": "-10",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pichu/PichuDTilt.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "18",
          "endlag": "10",
          "damage": "6.0",
          "advantage": "-4",
          "shieldLag": "6",
          "shieldStun": "7"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pichu/PichuDashAttack.gif"
          ],
          "startup": "6",
          "active": "6—9/10—15",
          "total": "34",
          "endlag": "19",
          "damage": "8.0/6.0",
          "advantage": "-20",
          "shieldLag": "7/6",
          "shieldStun": "8/7",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pichu/PichuFSmash.gif"
          ],
          "startup": "16/19/22/25/28/31",
          "active": "16—18/19—21/22—24/25—27/28—30/31—33",
          "total": "53",
          "endlag": "20",
          "damage": "2.0/8.0",
          "advantage": "-16",
          "shieldLag": "7/11",
          "shieldStun": "-/6",
          "hitboxes": "Multi/Final",
          "notes": "Charge hold is frame 13. 2.4 base recoil damage"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pichu/PichuUSmash.gif"
          ],
          "startup": "9",
          "active": "9—11",
          "total": "40",
          "endlag": "29",
          "damage": "14.0",
          "advantage": "-21",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Ear intangibility on frame 9-11. Charge hold is frame 4."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pichu/PichuDSmash.gif"
          ],
          "startup": "8/11/15/19/23",
          "active": "8—9/11—12/15—16/19—20/23—24",
          "total": "50",
          "endlag": "26",
          "damage": "1.5/8.0",
          "advantage": "-21",
          "shieldLag": "7/11",
          "shieldStun": "2/6",
          "hitboxes": "Multi/Final",
          "notes": "Invulnerable on frame 7-10. Charge hold is frame 4. 1.5 base recoil damage"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pichu/PichuNAir.gif"
          ],
          "startup": "3",
          "active": "3—9/10—27",
          "total": "39",
          "endlag": "12",
          "landingLag": "7",
          "damage": "7.0/5.0",
          "advantage": "-4/-4",
          "shieldLag": "7/6",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 35 onward. Ear intangibility on frames 3-9."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pichu/PichuFAir.gif"
          ],
          "startup": "10/14/18/22",
          "active": "10—12/14—16/18—20/22—23",
          "total": "39",
          "endlag": "16",
          "landingLag": "12",
          "damage": "3.5/3.5",
          "advantage": "-10/-10",
          "shieldLag": "8/8",
          "shieldStun": "2/2",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-9 and 34 onward. 1.8 base recoil damage"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pichu/PichuBAir.gif"
          ],
          "startup": "5/11/15/19/26/30",
          "active": "5—6/11—12/15—16/19—20/26—27/30—31",
          "total": "54",
          "endlag": "23",
          "landingLag": "18",
          "damage": "2.0/2.5",
          "advantage": "-16/-16",
          "shieldLag": "7/7",
          "shieldStun": "2/2",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-4 and 38 onward. 1.8 base recoil damage"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pichu/PichuUAir.gif"
          ],
          "startup": "4",
          "active": "4—9",
          "total": "26",
          "endlag": "17",
          "landingLag": "11",
          "damage": "4.0",
          "advantage": "-8",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Autocancels on frame 1-3 and 18 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pichu/PichuDAir.gif",
            "hitboxes/pichu/PichuDAirLanding.gif"
          ],
          "startup": "14",
          "active": "14—17/18—26/1—2",
          "total": "47",
          "endlag": "21",
          "landingLag": "22",
          "damage": "13.0/12.0/4.0",
          "advantage": "-16",
          "shieldLag": "14/13/8",
          "shieldStun": "5/5/5",
          "hitboxes": "Early/Late/Landing",
          "notes": "Ear intangibility on frame 14-17. Landing hit on frame 1. Autocancels on frame 32 onward. Recoil damage is 1.8 when hitbox comes out and 0.5 on landing"
        },
        {
          "name": "Neutral B (Thunderjolt)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pichu/PichuThunderjoltAerial.gif"
          ],
          "startup": "18",
          "active": "18—47/48—77/78—101",
          "total": "51",
          "damage": "10.0/7.0—5.0",
          "advantage": "-29/-30",
          "shieldLag": "12/10—9",
          "shieldStun": "4/3—3",
          "hitboxes": "Projectile/Arc",
          "notes": "0.8 base recoil damage. Grounded has a life of 84 frames, aerial 100."
        },
        {
          "name": "Side B (Skull Bash)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pichu/PichuSkullBash.gif"
          ],
          "startup": "17",
          "active": "17—52 (4—39 on charge release)",
          "total": "96/86",
          "endlag": "44",
          "damage": "4.0—33.0",
          "advantage": "-20 to +3",
          "shieldLag": "8—18",
          "shieldStun": "5—28",
          "notes": "25 on hit endlag. Second total frames is from the air. Startup is 5 from charge release. 2.1 base recoil damage."
        },
        {
          "name": "Up B (Agility)",
          "section": "special",
          "active": "(No Hitbox)",
          "total": "53/70",
          "landingLag": "24",
          "notes": "Total frames is for one/two dashes ending on the ground. 0.9 base recoil damage on first dash, and 1.4 on second. Can grab ledges as early as frame 14."
        },
        {
          "name": "Down B (Thunder)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pichu/PichuThunder.gif",
            "hitboxes/pichu/PichuThunderHit.gif"
          ],
          "startup": "9",
          "active": "Bolt 1: 9-11/12-67 | Bolt 2: 16—18/19—74",
          "total": "86/66",
          "endlag": "12",
          "damage": "6.0/4.0/14.0",
          "advantage": "-27",
          "shieldLag": "8/15",
          "shieldStun": "2/13",
          "hitboxes": "Spike/Late Bolt/Self-Hit",
          "notes": "First total frames is if the bolt misses. Invulnerable on frame 26-35 if bolt hits and incurs 4.2 base recoil damage"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pichu/PichuGrab.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "31",
          "endlag": "24"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pichu/PichuDashGrab.gif"
          ],
          "startup": "8",
          "active": "8—9",
          "total": "39",
          "endlag": "30"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pichu/PichuPivotGrab.gif"
          ],
          "startup": "9",
          "active": "9—10",
          "total": "36",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pichu/PichuPummel.gif"
          ],
          "startup": "1",
          "total": "18",
          "damage": "1.4",
          "notes": "0.1 base recoil damage. Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pichu/PichuFThrow.gif"
          ],
          "startup": "11/15/19/23/27",
          "total": "43",
          "damage": "1.5/6.0",
          "notes": "0.5 base recoil damage"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pichu/PichuBThrow.gif"
          ],
          "startup": "26",
          "total": "49",
          "damage": "9.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pichu/PichuUThrow.gif"
          ],
          "startup": "14/15",
          "total": "35",
          "damage": "5.0/5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pichu/PichuDThrow.gif"
          ],
          "startup": "14/19",
          "total": "39",
          "damage": "4.0/4.0"
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
          "total": "42",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "60",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "65",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "70",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "80",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "88",
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
            "ledgehangs/Pichu Ledgehang.gif",
            "ledgerolls/Pichu.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/pichu/pichuGetupAttackU.gif",
            "hitboxes/pichu/pichuGetupAttackD.gif",
            "hitboxes/pichu/pichuTripAttack.gif",
            "hitboxes/pichu/pichuLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/pichu",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
