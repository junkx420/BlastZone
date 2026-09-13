// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "pikachu",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuJab.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "17",
          "endlag": "14",
          "damage": "1.4/1.2",
          "advantage": "-12/-13",
          "shieldLag": "4/4",
          "shieldStun": "3/2",
          "notes": "Transitions to next Jab as early as frame 7"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuFTilt.gif",
            "hitboxes/pikachu/PikachuFTiltUp.gif",
            "hitboxes/pikachu/PikachuFTiltDown.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "total": "29",
          "endlag": "21",
          "damage": "9.0/8.0/10.0",
          "advantage": "-14/-15/-13",
          "shieldLag": "11/11/12",
          "shieldStun": "9/8/10",
          "hitboxes": "Neutral/Down/Up"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuUTilt.gif"
          ],
          "startup": "7",
          "active": "7-13",
          "total": "26",
          "endlag": "13",
          "damage": "5.0",
          "advantage": "-13",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuDTilt.gif"
          ],
          "startup": "7",
          "active": "7-8",
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
            "hitboxes/pikachu/PikachuDashAttack.gif"
          ],
          "startup": "6",
          "active": "6-8(9-12)",
          "total": "35",
          "endlag": "23",
          "damage": "11.0/6.0",
          "advantage": "-11",
          "shieldLag": "13/9",
          "shieldStun": "18/10",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuFSmash.gif"
          ],
          "startup": "15",
          "active": "15-16/17-19/20-29",
          "total": "53",
          "endlag": "24",
          "damage": "15.0/18.0/12.0",
          "advantage": "-29",
          "shieldLag": "15/15/13",
          "shieldStun": "9/12/8",
          "hitboxes": "Early/late/latest",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuUSmash.gif"
          ],
          "startup": "10",
          "active": "10-12/13-14/15-17",
          "total": "44",
          "endlag": "27",
          "damage": "(14.0/13.0)/11.0/7.0",
          "advantage": "-24",
          "shieldLag": "10/9/8",
          "shieldStun": "10/9/8",
          "hitboxes": "Clean/Mid/Late",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuDSmash.gif"
          ],
          "startup": "8/11/14/17/20/23",
          "active": "8-9/11-12/14-15/17-18/20-21",
          "total": "65",
          "endlag": "44",
          "damage": "2.0/3.0",
          "advantage": "-39",
          "shieldLag": "7/7",
          "shieldStun": "3/3",
          "hitboxes": "Multi/Final",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuNAir.gif"
          ],
          "startup": "3/9/15/21",
          "active": "3-6/9-12/15-18/21-22",
          "total": "38",
          "endlag": "16",
          "landingLag": "9",
          "damage": "1.7/3.5",
          "advantage": "-7",
          "shieldLag": "7/8",
          "shieldStun": "2/2",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 37 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuFAir.gif"
          ],
          "startup": "11...",
          "active": "11-25/27 (rehit: 3)",
          "total": "41",
          "endlag": "14",
          "landingLag": "12",
          "damage": "1.3/4.8",
          "advantage": "-10/-9",
          "shieldLag": "6/13",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-4 and 32 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuBAir.gif",
            "hitboxes/pikachu/PikachuBAirLanding.gif"
          ],
          "startup": "4/8/12/16/20/24",
          "active": "4-5/8-9/12-13/16-17/20-21/24-25/1-2",
          "total": "43",
          "endlag": "18",
          "landingLag": "18",
          "damage": "1.0/3.5/4.0",
          "advantage": "-12",
          "shieldLag": "4/11/5",
          "shieldStun": "2/2/5",
          "hitboxes": "Multi/Final/Landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-3 and 38 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuUAir.gif"
          ],
          "startup": "4",
          "active": "4-6/7-8",
          "total": "26",
          "endlag": "18",
          "landingLag": "14",
          "damage": "6.0/5.0/4.0",
          "advantage": "-11/-11",
          "shieldLag": "6/5",
          "shieldStun": "3/3",
          "hitboxes": "Clean tail/Clean tip/Late",
          "notes": "Autocancels on frame 1-3 and 18 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuDAir.gif",
            "hitboxes/pikachu/PikachuDAirLanding.gif"
          ],
          "startup": "14",
          "active": "14-15/16-26/1-2",
          "total": "47",
          "endlag": "21",
          "landingLag": "22",
          "damage": "13.0/12.0/4.0",
          "advantage": "-16",
          "shieldLag": "14/13/8",
          "shieldStun": "5/5/5",
          "hitboxes": "Meteor/Late/Landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 38 onward"
        },
        {
          "name": "Neutral B (Thunderjolt)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuThunderjoltAerial.gif"
          ],
          "startup": "19",
          "active": "19-52(53-85/86-114)",
          "total": "51",
          "damage": "6.0/4.8",
          "advantage": "-20",
          "shieldLag": "9/9",
          "shieldStun": "3/3",
          "hitboxes": "Arc/Projectile"
        },
        {
          "name": "Side B (Skull Bash)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuSkullBash.gif"
          ],
          "startup": "18/18",
          "active": "18-52",
          "total": "96/74",
          "endlag": "44",
          "damage": "10.0-21.4",
          "advantage": "-11 to -2",
          "shieldLag": "8-13",
          "shieldStun": "10-19",
          "hitboxes": "Ground/Air",
          "notes": "Startup is 10 on release. On hit endlag is 21 frames. On level ground, total frames is 96, 74 in the air."
        },
        {
          "name": "Up B (Quick Attack)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuQuickAttack.gif"
          ],
          "startup": "15/29",
          "active": "15-19/29-33",
          "total": "52/66",
          "endlag": "19",
          "landingLag": "24",
          "damage": "3.0/2.0",
          "advantage": "-33",
          "shieldLag": "7/7",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late",
          "notes": "Total frames assumes you end on the ground."
        },
        {
          "name": "Down B (Thunder)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuThunder.gif",
            "hitboxes/pikachu/PikachuThunderHit.gif"
          ],
          "startup": "13/?",
          "active": "13-15(16-85): Early // 21-23(24-93): Late // 1-2: Contact",
          "total": "86/74",
          "endlag": "84",
          "damage": "6.0/8.0/15.0",
          "advantage": "-26",
          "shieldLag": "11/15",
          "shieldStun": "3/14",
          "hitboxes": "Projectile Early / Projectile Late / Contact",
          "notes": "First total frames is when the thunder bolt misses you. Invulnerable on frame 34-43 if bolt hits you. Spikes on frames 13-15."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuGrab.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "36",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuDashGrab.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "44",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuPivotGrab.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "39",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuPummel.gif"
          ],
          "startup": "1",
          "total": "16",
          "damage": "1.0",
          "notes": "Total frames includes 11 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuFThrow.gif"
          ],
          "startup": "11/15/19/23/30",
          "total": "43",
          "damage": "2.0/2.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuBThrow.gif"
          ],
          "startup": "26",
          "total": "49",
          "damage": "9.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuUThrow.gif"
          ],
          "startup": "14/16",
          "total": "35",
          "damage": "3.0/5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/pikachu/PikachuDThrow.gif"
          ],
          "startup": "29",
          "total": "51",
          "damage": "5.0"
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
          "total": "50",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "69",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "76",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "97",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "109",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/pikachu/pikachuGetupAttackU.gif",
            "hitboxes/pikachu/pikachuGetupAttackD.gif",
            "hitboxes/pikachu/pikachuTripAttack.gif",
            "hitboxes/pikachu/pikachuLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/pikachu",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
