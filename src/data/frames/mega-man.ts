// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "mega-man",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManJab.gif"
          ],
          "startup": "7/19/31",
          "active": "7 [7-8/9-12/13-36] / 19 [19-20/11-24/25-42] / 31 [31-32/33-36/37-54]",
          "total": "35/47/59",
          "damage": "3.0/4.0/2.0",
          "advantage": "-25/-23/-20",
          "shieldLag": "4/4/4",
          "shieldStun": "3/2/2",
          "hitboxes": "Cannon/Projectiles",
          "notes": "Cannon and projectile hits generate on same frame."
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "7/19/31",
          "active": "7-8(9-12/13-36) / 19-20(11-24/25-42) / 31-32(33-36/37-54)",
          "total": "33/45/57",
          "damage": "3.0/4.0/2.0",
          "advantage": "-25/-23/-20",
          "shieldLag": "4/4/4",
          "shieldStun": "3/2/2",
          "hitboxes": "Cannon/Projectiles",
          "notes": "Does not have a hitbox before the projectile comes out."
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManUTilt.gif"
          ],
          "startup": "6",
          "active": "6(7-9/10-16)",
          "total": "70/52/54",
          "endlag": "54",
          "damage": "17.0/12.0/8.0",
          "advantage": "-49/-31/-33",
          "shieldLag": "15/9/7",
          "shieldStun": "15/11/8",
          "hitboxes": "Early/late/later",
          "notes": "Total frames refer to use on level ground/over an edge/under a platform. Invulnerable on frame 5-7"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManDTilt.gif"
          ],
          "startup": "5",
          "active": "5-8(9-21)",
          "total": "46",
          "endlag": "25",
          "damage": "8.0/5.0",
          "advantage": "-33",
          "shieldLag": "7/6",
          "shieldStun": "8/6",
          "hitboxes": "Early/late",
          "notes": "Leg intangibility on frame 3-12"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManDashAttack.gif"
          ],
          "startup": "7/10/13/16/19/22/25/35",
          "active": "7/10/13/16/19/22/25/35",
          "total": "59",
          "endlag": "24",
          "damage": "1.2/4.0",
          "advantage": "-16",
          "shieldLag": "4/5",
          "shieldStun": "2/8",
          "hitboxes": "Multi/final"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManFSmashMinimum.gif",
            "hitboxes/mega_man/MegaManFSmashMaximum.gif"
          ],
          "startup": "19",
          "active": "19-42(79-108/199-222)",
          "total": "54",
          "damage": "11.5",
          "advantage": "-18",
          "shieldLag": "13",
          "shieldStun": "4",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManUSmash.gif"
          ],
          "startup": "8/11/15/19/23/27/31",
          "active": "8/11-12/15-16/19-20/23-24/27-28/31",
          "total": "68",
          "endlag": "37",
          "damage": "2.0/1.5/6.0",
          "advantage": "-32",
          "shieldLag": "-/3/9",
          "shieldStun": "-/0/5",
          "hitboxes": "First/multi/final",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManDSmash.gif"
          ],
          "startup": "17",
          "active": "17(18-19/20-33)",
          "total": "78",
          "endlag": "45",
          "damage": "17.0",
          "advantage": "-50",
          "shieldLag": "11",
          "shieldStun": "11",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManNAir.gif"
          ],
          "startup": "7/19/31",
          "active": "7-9 [7-8/9-12/13-36] / 19-21 [19-20/11-24/25-42] / 31-34 [31-32/33-36/37-54]",
          "total": "33/45/57",
          "damage": "3.0/4.0/2.0",
          "advantage": "-25/-23/-20",
          "shieldLag": "4/4/4",
          "shieldStun": "3/2/2",
          "hitboxes": "Cannon/Cannon(air)/Projectile",
          "notes": "Cannon and projectile hits generate on same frame."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManFAir.gif"
          ],
          "startup": "9",
          "active": "9-11(12-17)",
          "total": "40",
          "endlag": "23",
          "landingLag": "11",
          "damage": "8.5/8.0/5.0",
          "advantage": "-7/-7/-8",
          "shieldLag": "7/7/6",
          "shieldStun": "4/4/3",
          "hitboxes": "Far/Close/Late",
          "notes": "Autocancels on frame 1-2 and 39 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManBAir.gif"
          ],
          "startup": "4/7/10",
          "active": "4-5/7-8/10-11",
          "total": "44",
          "endlag": "33",
          "landingLag": "20",
          "damage": "3.0/4.0/5.0",
          "advantage": "-18/-17/-17",
          "shieldLag": "5/5/6",
          "shieldStun": "2/3/3",
          "notes": "Autocancels on frame 1-3 and 40 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManUAir.gif"
          ],
          "startup": "11...",
          "active": "11-17/18-31/32-54/55-61 (rehit: 3/5/5/5)",
          "total": "53",
          "landingLag": "20",
          "damage": "3.0/1.0/2.0",
          "shieldLag": "-/4/4",
          "shieldStun": "-/2/2",
          "hitboxes": "Early/late/final",
          "notes": "Autocancels on frame 51 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManDAir.gif"
          ],
          "startup": "23",
          "active": "23-25(26-35)",
          "total": "64",
          "endlag": "29",
          "landingLag": "14",
          "damage": "14.0/12.0",
          "advantage": "+1/+0",
          "shieldLag": "10/9",
          "shieldStun": "5/5",
          "hitboxes": "Early/Meteor",
          "notes": "Autocancels on frame 1-4 and 55 onward"
        },
        {
          "name": "Neutral B (Metal Blade)",
          "section": "special",
          "startup": "16",
          "total": "42",
          "damage": "5.0",
          "advantage": "-17",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Projectile hits every 6 frames. Add 2 to startup and total frames when throwing backward"
        },
        {
          "name": "Side B (Crash Bomber)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManCrashBomberExplosion.gif"
          ],
          "startup": "19",
          "active": "19-69",
          "total": "44",
          "damage": "1.0/4.0",
          "shieldLag": "4/5",
          "shieldStun": "-/2",
          "hitboxes": "Multi/Final",
          "notes": "Does not attach to shields. Explosion occurs about 2.5 seconds later and hits on frame 1/6/11/16/21"
        },
        {
          "name": "Up B (Rush Coil)",
          "section": "special",
          "total": "41",
          "notes": "Invulnerable on frame 7-10. Rush dissapears at Frame ~130"
        },
        {
          "name": "Down B (Leaf Shield)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManLeafShield.gif"
          ],
          "startup": "9-**",
          "active": "9-**",
          "total": "35",
          "damage": "1.5",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Hits every 11 frames. Leaves do not disappear after hitting something. Hold the button to move with the shield. Can delay 40 frames before an automatic throw."
        },
        {
          "name": "Leaf Shield, Throw",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManLeafShieldFly.gif"
          ],
          "total": "55",
          "damage": "3.8",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Hits every 11 frames."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManGrab.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "37",
          "endlag": "30"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "45",
          "endlag": "35"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "40",
          "endlag": "29"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManFThrow.gif"
          ],
          "startup": "10",
          "total": "32",
          "damage": "8.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManBThrow.gif"
          ],
          "startup": "18",
          "total": "43",
          "damage": "11.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManUThrow.gif"
          ],
          "startup": "12",
          "total": "39",
          "damage": "7.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mega_man/MegaManDThrow.gif"
          ],
          "startup": "17",
          "total": "39",
          "damage": "4.5"
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
          "total": "45",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "63",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "70",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "76",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "84",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "98",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/mega_man/megamanGetupAttackU.gif",
            "hitboxes/mega_man/megamanGetupAttackD.gif",
            "hitboxes/mega_man/megamanTripAttack.gif",
            "hitboxes/mega_man/megamanLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/mega_man",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
