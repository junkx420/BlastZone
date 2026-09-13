// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "piranha-plant",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantJab1.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "19",
          "endlag": "16",
          "damage": "2.4",
          "advantage": "-13",
          "shieldLag": "10",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 on frame 5"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantJab2.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "20",
          "endlag": "17",
          "damage": "2.2",
          "advantage": "-15",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 8 and rapid as early as frame 7"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantJab3.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "25",
          "endlag": "17",
          "damage": "4.4",
          "advantage": "-13",
          "shieldStun": "10",
          "hitboxes": "5"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantJabRapid.gif"
          ],
          "startup": "6/10/14...",
          "active": "6/10/14...",
          "damage": "0.6",
          "shieldLag": "4",
          "shieldStun": "5"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantJabRapidEnd.gif"
          ],
          "startup": "7",
          "active": "6-7",
          "total": "40",
          "endlag": "33",
          "damage": "3.4",
          "advantage": "-29",
          "shieldStun": "15",
          "hitboxes": "4"
        },
        {
          "name": "Forward Tilt 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantFTilt1.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "27",
          "endlag": "19",
          "damage": "5.5",
          "advantage": "-14",
          "shieldLag": "8",
          "shieldStun": "6",
          "notes": "Transitions to F-tilt 2 as early as frame 12"
        },
        {
          "name": "Forward Tilt 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantFTilt2.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "31",
          "endlag": "25",
          "damage": "6.0",
          "advantage": "-20",
          "shieldLag": "9",
          "shieldStun": "6"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantUTilt.gif"
          ],
          "startup": "6",
          "active": "6-13",
          "total": "26",
          "endlag": "13",
          "damage": "9.0/7.0",
          "advantage": "-11/-13",
          "shieldLag": "7/7",
          "shieldStun": "9/7",
          "hitboxes": "Head/Body",
          "notes": "Head intangibility on frame 6-13"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantDTilt.gif"
          ],
          "startup": "9",
          "active": "9-11",
          "total": "26",
          "endlag": "15",
          "damage": "6.0/7.0",
          "advantage": "-10/-10",
          "shieldLag": "6/7",
          "shieldStun": "6/7",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantDashAttack.gif"
          ],
          "startup": "7",
          "active": "7-9/10-14",
          "total": "47",
          "endlag": "33",
          "damage": "10.0/7.0",
          "advantage": "-28",
          "shieldLag": "8/7",
          "shieldStun": "12/9",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantFSmash.gif"
          ],
          "startup": "16",
          "active": "16-17",
          "total": "51",
          "endlag": "34",
          "damage": "15.0/19.0",
          "advantage": "-25/-22",
          "shieldLag": "10/13",
          "shieldStun": "10/13",
          "hitboxes": "Close/Far",
          "notes": "Head intangibility on frame 16-17. Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantUSmash.gif"
          ],
          "startup": "12/16",
          "active": "12-15/16-18",
          "total": "51",
          "endlag": "33",
          "damage": "3.0/12.0",
          "advantage": "-27",
          "shieldLag": "5/10",
          "shieldStun": "3/8",
          "notes": "Head intangibility on frame 12-18. Charge hold is frame 6"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantDSmash.gif"
          ],
          "startup": "10/14",
          "active": "10-11/14-15",
          "total": "43",
          "endlag": "28",
          "damage": "12.0/14.0",
          "advantage": "-24",
          "shieldLag": "9/10",
          "shieldStun": "8/10",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantNAir.gif"
          ],
          "startup": "8/11/14/17/18",
          "active": "8-17/18-19",
          "total": "47",
          "endlag": "28",
          "landingLag": "15",
          "damage": "2.0/3.0",
          "advantage": "-13/-13",
          "shieldLag": "4/9",
          "shieldStun": "2/2",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-4 and 40 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantFAir.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "44",
          "endlag": "35",
          "landingLag": "13",
          "damage": "9.0/11.0",
          "advantage": "-9/-9",
          "shieldLag": "7/8",
          "shieldStun": "4/4",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-2 and 36 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantBAir.gif"
          ],
          "startup": "14",
          "active": "14-15",
          "total": "61",
          "endlag": "46",
          "landingLag": "16",
          "damage": "14.5",
          "advantage": "-11",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-4 and 43 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantUAir.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "38",
          "endlag": "29",
          "landingLag": "10",
          "damage": "10.0",
          "advantage": "-6",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 22 onward. Head and stem intangibility 7-9."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantDAir.gif"
          ],
          "startup": "9",
          "active": "9-11/12-14",
          "total": "44",
          "endlag": "30",
          "landingLag": "18",
          "damage": "11.0/9.0",
          "advantage": "-14/-14",
          "shieldLag": "8/7",
          "shieldStun": "4/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 33 onward"
        },
        {
          "name": "Neutral B (Ptooie)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantPtooie.gif"
          ],
          "startup": "9",
          "active": "9...",
          "damage": "14.0/18.0/15.3",
          "advantage": "+6/-3",
          "shieldLag": "12/14/12",
          "shieldStun": "13/6/5",
          "hitboxes": "Initial/Blown Away/After Bounce",
          "notes": "To blow away is 41 total frames. Earliest you can blow away is on 22. Endlag is 18 if projectile makes contact. Eating projectile is 44 frames or 30 if it's close to you. Ptooie can eat a single attack of up to 10% while hovering before being knocked down (like damage based armor but for a projectile)."
        },
        {
          "name": "Side B (Poison Breath)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantPoisonBreathMin.gif"
          ],
          "startup": "10(+11)",
          "active": "21-102",
          "total": "38",
          "damage": "!!!",
          "shieldLag": "0",
          "shieldStun": "3",
          "notes": "10 frames to enter charge state, 11 startup from charge. Hitbox lasts 82 frames at no charge. Cloud grows from frame 1-25 and slowly moves, stops moving on frame 45. Wind box 12-25."
        },
        {
          "name": "Side B, Full Charge (Poison Breath, Full Charge)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantPoisonBreathMax.gif"
          ],
          "startup": "10",
          "active": "21-142",
          "total": "48",
          "damage": "!!!",
          "shieldLag": "0",
          "shieldStun": "3",
          "notes": "Cloud deals damage every 4 frames at first then every 7 towards the end. Hitbox lasts 122 frames. Takes 95 frames to reach full charge. Takes 2 frames to cancel charge with hield. Cloud grows from frame 1-25 and slowly moves, stops moving on frame 75. Wind box 12-25."
        },
        {
          "name": "Up B (Piranhacopter)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantPiranhacopter.gif"
          ],
          "startup": "13...",
          "active": "13-14/15/16-55/56-61/62-67",
          "landingLag": "20",
          "damage": "1.2/4.0",
          "shieldLag": "4/--",
          "shieldStun": "2/--",
          "hitboxes": "Hit 1/Multihits (Early)/Multihits (Mid)/Multihits (Late)/Final Hit",
          "notes": "16-55/56-61/62-67 are rehitting hitboxes, rehit rate of 6."
        },
        {
          "name": "Down B (Long Stem Strike)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantLong-StemStrike.gif"
          ],
          "startup": "2(+18)",
          "total": "39/49",
          "damage": "8.4-26.0",
          "advantage": "-31 to -17 (-10 more when tipped over)",
          "shieldLag": "7-17",
          "shieldStun": "8-22",
          "notes": "Startup is 2 upon reaching target. Reaches full charge on frame 78. Takes 18 frames to enter charge state Endlag on hit is 39, or 49 if you tipped over. Endlag on whiff is 49 or 59 if you tipped over. Head intangibility begins on frame 3 of travel or frame 1 of reaching a target, whichever comes first. Pot damage-based armor begins on frame 18, 15% (18% in 1v1)."
        },
        {
          "name": "Footstool Attack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantFootstoolAttack.gif"
          ],
          "startup": "13",
          "active": "5-6",
          "total": "22",
          "endlag": "16",
          "damage": "4.0",
          "notes": "Occurs whenever Piranha Plant is footstooled while crouching."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantGrab.gif"
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
            "hitboxes/piranha_plant/PiranhaPlantDashGrab.gif"
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
            "hitboxes/piranha_plant/PiranhaPlantPivotGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "36",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantPummel.gif"
          ]
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantFThrow.gif"
          ],
          "startup": "13/14",
          "total": "31"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantBThrow.gif"
          ],
          "startup": "19",
          "total": "34"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantUThrow.gif"
          ],
          "startup": "20",
          "total": "49"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/piranha_plant/PiranhaPlantDThrow.gif"
          ],
          "startup": "20/30/31",
          "total": "47"
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
          "total": "42",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "58",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "66",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "69",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "81",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "88",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/piranha_plant/piranhaplantGetupAttackUp.gif",
            "hitboxes/piranha_plant/piranhaplantGetupAttackDown.gif",
            "hitboxes/piranha_plant/piranhaplantTripAttack.gif",
            "hitboxes/piranha_plant/piranhaplantLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/piranha_plant",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
