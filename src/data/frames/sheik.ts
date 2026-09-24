// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "sheik",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikJab1.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "17",
          "endlag": "15",
          "damage": "2.0",
          "advantage": "-12",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 4."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikJab2.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "17",
          "endlag": "14",
          "damage": "1.6",
          "advantage": "-11",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Rapid jab as early as frame 5."
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikJabRapid.gif"
          ],
          "startup": "5/4/9...",
          "damage": "0.3",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikJabRapidEnd.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "35",
          "endlag": "29",
          "damage": "2.0",
          "advantage": "-27",
          "shieldLag": "9",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikFTilt.gif"
          ],
          "startup": "5",
          "active": "5-8",
          "total": "24",
          "endlag": "16",
          "damage": "3.0",
          "advantage": "-15",
          "shieldLag": "5",
          "shieldStun": "4"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikUTilt.gif"
          ],
          "startup": "5/16",
          "active": "5-8/16-23",
          "total": "32",
          "endlag": "9",
          "damage": "3.0/4.0",
          "advantage": "-11",
          "shieldLag": "5/5",
          "shieldStun": "4/5"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikDTilt.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "26",
          "endlag": "20",
          "damage": "4.5",
          "advantage": "-16",
          "shieldLag": "5",
          "shieldStun": "5"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikDashAttack.gif"
          ],
          "startup": "5",
          "active": "5-6(7-8)",
          "total": "34",
          "endlag": "26",
          "damage": "7.0",
          "advantage": "-19",
          "shieldLag": "9",
          "shieldStun": "10"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikFSmash.gif"
          ],
          "startup": "12/20",
          "active": "12/20-21",
          "total": "44",
          "endlag": "23",
          "damage": "5.0/8.0",
          "advantage": "-18",
          "shieldLag": "6/7",
          "shieldStun": "4/6",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikUSmash.gif"
          ],
          "startup": "11/14",
          "active": "11/14-15",
          "total": "52",
          "endlag": "37",
          "damage": "15.0/11.0",
          "advantage": "-30",
          "shieldLag": "13/8",
          "shieldStun": "10/8",
          "notes": "Arm intangibility on frame 8-15. Charge hold is frame 6"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sheik/SheikDSmash.gif"
          ],
          "startup": "8/15",
          "active": "8-9/15-16",
          "total": "48",
          "endlag": "32",
          "damage": "4.0/6.0",
          "advantage": "-28",
          "shieldLag": "5/6",
          "shieldStun": "4/5",
          "notes": "Charge hold is frame 1"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/sheik/SheikNAir.gif"
          ],
          "startup": "3",
          "active": "3-6(7-30)",
          "total": "49",
          "endlag": "19",
          "landingLag": "6",
          "damage": "6.0/4.0",
          "advantage": "-3/-3",
          "shieldLag": "6/5",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 31 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/sheik/SheikFAir.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "34",
          "endlag": "27",
          "landingLag": "5",
          "damage": "3.8/4.5",
          "advantage": "-2/-2",
          "shieldLag": "4/5",
          "shieldStun": "3/3",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-4 and 11 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/sheik/SheikBAir.gif"
          ],
          "startup": "4",
          "active": "4-6(7-14)",
          "total": "37",
          "endlag": "23",
          "landingLag": "7",
          "damage": "(7.5%/9.5%)/6.0%",
          "advantage": "-4/-4",
          "shieldLag": "7/6",
          "shieldStun": "3/3",
          "hitboxes": "(Clean (Close/Far)/Late)",
          "notes": "Autocancels on frame 1-3 and 31 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/sheik/SheikUAir.gif"
          ],
          "startup": "4...",
          "active": "4-15/23-24 (rehit: 4)",
          "total": "43",
          "endlag": "19",
          "landingLag": "13",
          "damage": "1.0/4.0",
          "advantage": "-11/-10",
          "shieldLag": "4/11",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-3 and 44 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/sheik/SheikDAir.gif",
            "hitboxes/sheik/SheikDAirLanding.gif"
          ],
          "startup": "15",
          "active": "15-18/19-33/1-2",
          "total": "54",
          "endlag": "21",
          "landingLag": "22",
          "damage": "10.0/2.0",
          "advantage": "-18",
          "shieldLag": "8/4",
          "shieldStun": "4/3",
          "hitboxes": "Meteor/Falling/Landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-2 and 53 onward"
        },
        {
          "name": "Neutral B (Needle Storm)",
          "section": "special",
          "startup": "4/7/10/13/16 (+7)",
          "total": "41/35",
          "damage": "1.5/0.8",
          "advantage": "-18",
          "shieldLag": "4/4",
          "shieldStun": "2/2",
          "hitboxes": "Close/Far",
          "notes": "Startup is 5 from a charging state. 7 frames to enter charge state. Takes 4 frames to exit charge with shield. Second total frames is for the air."
        },
        {
          "name": "Needle Storm, Full Charge",
          "section": "special",
          "startup": "11/14/17/20/23/26",
          "total": "48/42",
          "landingLag": "16",
          "damage": "1.5/0.8",
          "advantage": "-15",
          "shieldLag": "4/4",
          "shieldStun": "2/2",
          "hitboxes": "Close/Far",
          "notes": "86 frames to reach full charge. Second total frames is for the air."
        },
        {
          "name": "Side B (Burst Grenade)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sheik/SheikBurstGrenade.gif"
          ],
          "startup": "13/67/70/73/76/79/82/88",
          "total": "75-104",
          "damage": "1.0/12.6",
          "advantage": "+28",
          "shieldLag": "4/11",
          "shieldStun": "2/4",
          "notes": "From release, startup is 29/32/35/38/41/44/50 and endlag is 39 frames. All but the final hit are just windboxes."
        },
        {
          "name": "Up B (Vanish)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sheik/SheikVanishG.gif",
            "hitboxes/sheik/SheikVanishA.gif"
          ],
          "startup": "36/55",
          "active": "36-38/55-57",
          "total": "95",
          "endlag": "38",
          "landingLag": "20",
          "damage": "12.0/5.0",
          "advantage": "-33",
          "shieldLag": "9/6",
          "shieldStun": "4/6",
          "notes": "Invulnerable on frame 14-60 on the ground or 19-55 in the air. Landing lag only occurs if you enter special fall."
        },
        {
          "name": "Down B (Bouncing Fish)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sheik/SheikBouncingFish.gif"
          ],
          "startup": "18/26",
          "total": "63/50/45",
          "landingLag": "35/19",
          "damage": "11.0",
          "advantage": "-39",
          "shieldLag": "14",
          "shieldStun": "10",
          "notes": "First startup is if you attack early. Second landing lag is after a hit. Endlag is 79 on hit, or after 20 frames initiate a 29 total frames rebound attack with 3 startup. First total frames is on level ground. Second is in the air. Third is in the air if you attack early."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sheik/SheikGrab.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "36",
          "endlag": "29"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sheik/SheikDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "44",
          "endlag": "34"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sheik/SheikPivotGrab.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "39",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sheik/SheikPummel.gif"
          ],
          "startup": "1",
          "total": "15",
          "landingLag": "Total frames includes 10 frames of hitlag.",
          "damage": "1.0"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sheik/SheikFThrow.gif"
          ],
          "startup": "20/22",
          "total": "39",
          "damage": "5.0/2.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sheik/SheikBThrow.gif"
          ],
          "startup": "15/17",
          "total": "35",
          "damage": "5.0/2.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sheik/SheikUThrow.gif"
          ],
          "startup": "19/21",
          "total": "49",
          "damage": "3.0/3.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sheik/SheikDThrow.gif"
          ],
          "startup": "26/30",
          "total": "53",
          "damage": "3.0/3.0",
          "notes": "Active 26-29, releases on 30."
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "18/23",
          "notes": "Intangible on frame 3-14"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "26",
          "notes": "Intangible on frame 4-12"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "32",
          "notes": "Intangible on frame 4-14"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "44",
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
          "total": "67",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "74",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "93",
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
            "ledgehangs/Sheik Ledgehang.gif",
            "ledgerolls/Sheik.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/sheik/sheikGetupAttackU.gif",
            "hitboxes/sheik/sheikGetupAttackD.gif",
            "hitboxes/sheik/sheikTripAttack.gif",
            "hitboxes/sheik/sheikLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/sheik",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
