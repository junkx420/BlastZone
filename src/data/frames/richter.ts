// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "richter",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterJab1.gif"
          ],
          "startup": "5",
          "active": "5",
          "total": "29",
          "endlag": "24",
          "damage": "2.0",
          "advantage": "-21",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 on frame 11. Transitions to Whip dangle from 9."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterJab2.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "29",
          "endlag": "25",
          "damage": "2.0",
          "advantage": "-23",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to rapid jab on frame 10."
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterJabRapid.gif"
          ],
          "startup": "9/12/15...",
          "damage": "0.5",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterJabRapidEnd.gif"
          ],
          "startup": "3",
          "total": "44",
          "damage": "2.5",
          "advantage": "-37",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Whip Dangle",
          "section": "ground",
          "damage": "1.0/1.5",
          "shieldLag": "0/0",
          "shieldStun": "3/3",
          "hitboxes": "Chain/Ball",
          "notes": "Can initiate from Jab and F-Tilt. 19 lag from putting it away."
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterFTilt.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "30",
          "endlag": "17",
          "damage": "10.0/12.0/2.0",
          "advantage": "-8/-7",
          "shieldLag": "8/9",
          "shieldStun": "10/11",
          "hitboxes": "Chain/Ball"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterUTilt.gif"
          ],
          "startup": "10",
          "active": "10-22",
          "total": "37",
          "endlag": "15",
          "damage": "10.0/2.0",
          "advantage": "-17",
          "shieldLag": "8",
          "shieldStun": "10",
          "hitboxes": "Ball/Chain"
        },
        {
          "name": "Down Tilt 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterDTilt1.gif"
          ],
          "startup": "7",
          "active": "7-23",
          "total": "44",
          "endlag": "21",
          "damage": "5.0",
          "advantage": "-31",
          "shieldLag": "6",
          "shieldStun": "6",
          "notes": "Can cancel hitlag from first hit with second."
        },
        {
          "name": "Down Tilt 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterDTilt2.gif"
          ],
          "startup": "8",
          "active": "8-19/20-28",
          "total": "57/43",
          "endlag": "29",
          "damage": "7.0/3.5",
          "advantage": "-42/-28",
          "shieldLag": "8/5",
          "shieldStun": "7/4",
          "hitboxes": "Early/Late",
          "notes": "Total frames is 57 on level ground. 43 if you go over an edge."
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterDashAttack.gif"
          ],
          "startup": "10/13/16/19/22/24",
          "active": "10/13/16/19/22/24",
          "total": "54",
          "endlag": "30",
          "damage": "2.0/3.5",
          "advantage": "-26",
          "shieldLag": "4/5",
          "shieldStun": "-/4"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterFSmash.gif",
            "hitboxes/richter/RichterFSmashUp.gif",
            "hitboxes/richter/RichterFSmashDown.gif"
          ],
          "startup": "24",
          "active": "24-25",
          "total": "62",
          "endlag": "37",
          "damage": "14.0/16.0/18.0",
          "advantage": "-28/-26",
          "shieldLag": "11/13",
          "shieldStun": "10/12",
          "hitboxes": "Chain/Ball",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterUSmash.gif"
          ],
          "startup": "16",
          "active": "16-18",
          "total": "53",
          "endlag": "35",
          "damage": "16.0/14.0",
          "advantage": "-27/-26",
          "shieldLag": "10/10",
          "shieldStun": "10/11",
          "hitboxes": "Ball/Chain",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/richter/RichterDSmash.gif"
          ],
          "startup": "14/20",
          "active": "14-15/20-21",
          "total": "55",
          "endlag": "34",
          "damage": "12.0/14.0/16.0",
          "advantage": "-33/-30/-27/-24",
          "shieldLag": "9/10",
          "shieldStun": "8/11",
          "hitboxes": "Chain/Ball",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/richter/RichterNAir.gif"
          ],
          "startup": "8...",
          "active": "8-9/11-12/14-15/17-18/20-21/23-24/26-27",
          "total": "42",
          "endlag": "15",
          "landingLag": "14",
          "damage": "1.0/4.0",
          "advantage": "-12/-11",
          "shieldLag": "4/5",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-6 and 36 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/richter/RichterFAir.gif",
            "hitboxes/richter/RichterFAirUp.gif",
            "hitboxes/richter/RichterFAirDown.gif"
          ],
          "startup": "14",
          "active": "14",
          "total": "39",
          "endlag": "25",
          "landingLag": "10",
          "damage": "12.0/10.0/2.0",
          "advantage": "-6/-5/-8",
          "shieldLag": "8/9/4",
          "shieldStun": "4/5/2",
          "hitboxes": "Ball/Chain/Arm",
          "notes": "Tethers on frame 13. Autocancels on frame 29 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/richter/RichterBAir.gif",
            "hitboxes/richter/RichterBAirUp.gif",
            "hitboxes/richter/RichterBAirDown.gif"
          ],
          "startup": "14",
          "active": "14-15",
          "total": "39",
          "endlag": "24",
          "landingLag": "10",
          "damage": "12.0/10.0/2.0",
          "advantage": "-6/-5/-8",
          "shieldLag": "8/9/4",
          "shieldStun": "4/5/2",
          "hitboxes": "Ball/Chain/Arm",
          "notes": "Tethers on frame 13. Autocancels on frame 28 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/richter/RichterUAir.gif"
          ],
          "startup": "14",
          "active": "14-16",
          "total": "39",
          "endlag": "23",
          "landingLag": "10",
          "damage": "12.0/10.0/2.0",
          "advantage": "-6/-5/-8",
          "shieldLag": "8/9/4",
          "shieldStun": "4/5/2",
          "hitboxes": "Ball/Chain/Arm",
          "notes": "Tethers on frame 13. Autocancels on frame 1-11 and 28 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/richter/RichterDAir.gif"
          ],
          "startup": "13",
          "active": "13-14/15-36",
          "total": "48",
          "endlag": "12",
          "landingLag": "26",
          "damage": "12.0/7.0",
          "advantage": "-21/-23",
          "shieldLag": "10/7",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late",
          "notes": "A hit results in 26 frames of endlag. Autocancels on frame 1-3 and 47 onward"
        },
        {
          "name": "Neutral B (Axe)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/richter/RichterAxe.gif"
          ],
          "startup": "30",
          "active": "30-97",
          "total": "66",
          "damage": "15.0",
          "advantage": "-6",
          "shieldLag": "15",
          "shieldStun": "15"
        },
        {
          "name": "Side B (Cross)",
          "section": "special",
          "startup": "19",
          "active": "19-64",
          "total": "44",
          "damage": "8.0/6.0/5.0",
          "advantage": "-15",
          "shieldLag": "7/7/6",
          "shieldStun": "3/3/3",
          "hitboxes": "Smash/Tilt/Return",
          "notes": "9 frame animation of catching the cross if no other action is being performed."
        },
        {
          "name": "Up B (Uppercut)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/richter/RichterUppercut.gif"
          ],
          "startup": "6/9/...",
          "active": "6/9-20/21 (rehit: 3)",
          "landingLag": "26",
          "damage": "2.0/1.5/6.0",
          "shieldLag": "6/4/6",
          "shieldStun": "-/3/6",
          "hitboxes": "First/Multi/Final",
          "notes": "Intangible frames 5-6."
        },
        {
          "name": "Down B (Holy Water)",
          "section": "special",
          "startup": "18",
          "active": "18...",
          "total": "45",
          "endlag": "27",
          "damage": "2.0-2.9",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "Lands on level ground at frame 32 if nothing is in the way. Explodes on contact with the ground or a wall. Bottle will explode if it takes 6% or more damage. When it hits a shield it takes 0% damage but when it hits a character it takes 3%. Touching the ground loses all 6% damage. Click here for more information."
        },
        {
          "name": "Holy Water Explosion",
          "section": "special",
          "hitboxImages": [
            "hitboxes/Richter/RichterHolyWater.gif"
          ],
          "startup": "1/4/7/15/23/31/39/47/55",
          "active": "1/4/7/15/23/31/39/47/55",
          "damage": "1.4",
          "notes": "Simon's explosion is Fire-type damage, Richter's explosion is Aura-type damage."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/richter/RichterGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "37",
          "endlag": "26"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/richter/RichterDashGrab.gif"
          ],
          "startup": "13",
          "active": "13-14",
          "total": "45",
          "endlag": "31"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/richter/RichterPivotGrab.gif"
          ],
          "startup": "14",
          "active": "14-15",
          "total": "42",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/richter/RichterPummel.gif"
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
            "hitboxes/richter/RichterFThrow.gif"
          ],
          "startup": "24",
          "total": "41",
          "damage": "7.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/richter/RichterBThrow.gif"
          ],
          "startup": "18",
          "total": "41",
          "damage": "7.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/richter/RichterUThrow.gif"
          ],
          "startup": "25/26",
          "total": "46",
          "damage": "6.0/4.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/richter/RichterDThrow.gif"
          ],
          "startup": "33",
          "total": "48",
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
          "total": "46",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "62",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "69",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "76",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "90",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "104",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/richter/richterGetupAttackU.gif",
            "hitboxes/richter/richterGetupAttackD.gif",
            "hitboxes/richter/richterTripAttack.gif",
            "hitboxes/richter/richterLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/richter",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
