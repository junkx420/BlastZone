// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "diddy-kong",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongJab1.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "19",
          "endlag": "16",
          "damage": "2.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as ealy as frame 6"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongJab2.gif"
          ],
          "startup": "5",
          "active": "5",
          "total": "20",
          "endlag": "15",
          "damage": "1.5",
          "advantage": "-12",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 6"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongJab3.gif"
          ],
          "startup": "5",
          "active": "5",
          "total": "34",
          "endlag": "29",
          "damage": "4.0",
          "advantage": "-24",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongFTilt.gif",
            "hitboxes/diddy_kong/DiddyKongFTiltUp.gif",
            "hitboxes/diddy_kong/DiddyKongFTiltDown.gif"
          ],
          "startup": "10",
          "active": "10-11(12/13-16)",
          "total": "36",
          "endlag": "20",
          "damage": "10.0/7.0",
          "advantage": "-16",
          "shieldLag": "8",
          "shieldStun": "10",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongUTilt.gif"
          ],
          "startup": "6",
          "active": "6-11",
          "total": "29",
          "endlag": "18",
          "damage": "6.0",
          "advantage": "-17",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongDTilt.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "18",
          "endlag": "13",
          "damage": "5.5",
          "advantage": "-8",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongDashAttack.gif"
          ],
          "startup": "8/16/22",
          "active": "8-9/16-17/22-23",
          "total": "40",
          "endlag": "17",
          "damage": "2.0/3.0",
          "advantage": "-14",
          "shieldLag": "4/5",
          "shieldStun": "3/4",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongFSmash.gif"
          ],
          "startup": "12/21",
          "active": "12(13)/21-23",
          "total": "50",
          "endlag": "27",
          "damage": "5.0/11.0",
          "advantage": "-21",
          "shieldLag": "6/10",
          "shieldStun": "4/8",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongUSmash.gif"
          ],
          "startup": "5/12/19",
          "active": "5(6-8)/12-14(15)/19-23",
          "total": "53",
          "endlag": "30",
          "damage": "2.5/6.0",
          "advantage": "-29",
          "shieldLag": "5/6",
          "shieldStun": "3/5",
          "hitboxes": "Multihit/Final",
          "notes": "Charge hold is frame 1"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongDSmash.gif"
          ],
          "startup": "7/12",
          "active": "7-8/12-13",
          "total": "50",
          "endlag": "37",
          "damage": "12.0/15.0",
          "advantage": "-35/-28",
          "shieldLag": "9/10",
          "shieldStun": "8/10",
          "notes": "Charge hold frame is 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongNAir.gif"
          ],
          "startup": "8",
          "active": "8-20",
          "total": "48",
          "endlag": "28",
          "landingLag": "8",
          "damage": "6.0",
          "advantage": "-5",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Autocancels on frame 1-3 and 27 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongFAir.gif"
          ],
          "startup": "6",
          "active": "6-9(10-16)",
          "total": "46",
          "endlag": "30",
          "landingLag": "16",
          "damage": "10.0/8.0",
          "advantage": "-12/-12",
          "shieldLag": "8/7",
          "shieldStun": "4/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 26 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongBAir.gif"
          ],
          "startup": "5",
          "active": "5-8",
          "total": "30",
          "endlag": "22",
          "landingLag": "7",
          "damage": "9.0",
          "advantage": "-3",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-2 and 20 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongUAir.gif"
          ],
          "startup": "4",
          "active": "4-7",
          "total": "36",
          "endlag": "29",
          "landingLag": "9",
          "damage": "7.0",
          "advantage": "-7",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Autocancels on frame 27 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongDAir.gif"
          ],
          "startup": "15",
          "active": "15-16",
          "total": "46",
          "endlag": "30",
          "landingLag": "17",
          "damage": "13.0/10.0",
          "advantage": "-26 (-13 landing)",
          "shieldLag": "9/8",
          "shieldStun": "5/4",
          "notes": "Autocancels on frame 1-14 and 35 onward"
        },
        {
          "name": "Neutral B (Peanut Popgun)",
          "section": "special",
          "startup": "16/17-121/124",
          "total": "48",
          "damage": "3.3-15.0/2.0",
          "advantage": "-25 to -17/-19 to -13",
          "shieldLag": "5-10/10-14",
          "shieldStun": "2-5/2-2",
          "hitboxes": "Projectile/melee",
          "notes": "Melee hitbox generated after projectile. Diddy does not suffer hitlag from melee attack"
        },
        {
          "name": "Peanut Popgun, Misfire",
          "section": "special",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongPeanutPopgunBoom.gif"
          ],
          "startup": "123",
          "total": "228",
          "damage": "23.0",
          "advantage": "-85",
          "shieldLag": "16",
          "shieldStun": "20",
          "notes": "You can cancel charge into shield/air dodge as early as frame 14."
        },
        {
          "name": "Peanuts (Thrown)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongPeanut.gif"
          ]
        },
        {
          "name": "Side B (Monkey Flip)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongMonkeyFlip.gif"
          ],
          "startup": "18",
          "active": "18-36",
          "total": "47/61",
          "endlag": "11",
          "landingLag": "26",
          "notes": "First total frames is in the air, second is along level ground."
        },
        {
          "name": "Monkey Flip, Attack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongMonkeyFlipKick.gif"
          ],
          "startup": "6",
          "active": "6-10(11-25)",
          "total": "32",
          "endlag": "7",
          "landingLag": "18",
          "damage": "14.0/10.0",
          "advantage": "-5/-8",
          "shieldLag": "10/8",
          "shieldStun": "13/10",
          "hitboxes": "Early/Late",
          "notes": "Total frames is in the air."
        },
        {
          "name": "Monkey Flip, Grab Success",
          "section": "special",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongMonkeyFlipStick.gif"
          ],
          "startup": "11/29/59..."
        },
        {
          "name": "Monkey Flip, Grab Attack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongMonkeyFlipStickAttack.gif"
          ],
          "startup": "18/21",
          "total": "36"
        },
        {
          "name": "Monkey Flip, Grab Jump",
          "section": "special",
          "startup": "18/27",
          "total": "42"
        },
        {
          "name": "Up B (Rocketbarrel Boost)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongRocketBarrels.gif"
          ],
          "startup": "8-68",
          "active": "8-9(10-16/17-35)",
          "landingLag": "30",
          "damage": "10.0/8.0/6.0",
          "shieldLag": "8/7/6",
          "shieldStun": "10/8/6",
          "hitboxes": "Early/Late/Later",
          "notes": "Touching a solid surface during boost activates explosion"
        },
        {
          "name": "Rocketbarrel Boost, Explosion",
          "section": "special",
          "startup": "1",
          "active": "1-2",
          "total": "57-59",
          "endlag": "55",
          "damage": "18.0",
          "advantage": "-39 to -41",
          "shieldLag": "11",
          "shieldStun": "6",
          "notes": "Total frames assumes exploding on level ground, Diddy does not suffer hitlag from explosion"
        },
        {
          "name": "Down B (Banana Peel)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongBanana.gif"
          ],
          "active": "20 (banana appears)",
          "total": "39",
          "shieldLag": "6",
          "shieldStun": "6",
          "notes": "Item generated on frame 20"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongGrab.gif"
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
            "hitboxes/diddy_kong/DiddyKongDashGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "44",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongPivotGrab.gif"
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
            "hitboxes/diddy_kong/DiddyKongPummel.gif"
          ],
          "startup": "1",
          "total": "16",
          "damage": "1.0",
          "notes": "Total frames includes 10 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongFThrow.gif"
          ],
          "startup": "21",
          "total": "31",
          "damage": "9.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongBThrow.gif"
          ],
          "startup": "18",
          "total": "51",
          "damage": "12.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongUThrow.gif"
          ],
          "startup": "17/19",
          "total": "26",
          "damage": "1.0/4.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/diddy_kong/DiddyKongDThrow.gif"
          ],
          "startup": "22",
          "total": "31",
          "damage": "7.0"
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
          "total": "44",
          "landingLag": "10",
          "notes": "Intangible on frame 2-27"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "62",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "68",
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
          "total": "86",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/diddy_kong/diddykongGetupAttackU.gif",
            "hitboxes/diddy_kong/diddykongGetupAttackD.gif",
            "hitboxes/diddy_kong/diddykongTripAttack.gif",
            "hitboxes/diddy_kong/diddykongLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/diddy_kong",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
