// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "mii-brawler",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "2",
          "active": "2—3",
          "total": "15",
          "endlag": "12",
          "damage": "1.8",
          "advantage": "-10",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 5"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "2",
          "active": "2—3",
          "total": "18",
          "endlag": "15",
          "damage": "1.0",
          "advantage": "-14",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Transitions to rapid jab as early as frame 7"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "startup": "5/7/9...",
          "total": "40",
          "damage": "0.5",
          "shieldLag": "4",
          "shieldStun": "2"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "startup": "4",
          "active": "4—5",
          "total": "40",
          "endlag": "35",
          "damage": "2.0",
          "advantage": "-33",
          "shieldLag": "14",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—8",
          "total": "27",
          "endlag": "19",
          "damage": "8.0/8.3/8.5",
          "advantage": "-13/-13/-13",
          "shieldLag": "7/7/7",
          "shieldStun": "8/8/8",
          "hitboxes": "neutral/down/up"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "5",
          "active": "5—12",
          "total": "29",
          "endlag": "17",
          "damage": "6.0",
          "advantage": "-17",
          "shieldLag": "6",
          "shieldStun": "7"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "7",
          "active": "7—8",
          "total": "27",
          "endlag": "19",
          "damage": "8.0",
          "advantage": "-12",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "6",
          "active": "6—9(10—17)",
          "total": "35",
          "endlag": "18",
          "damage": "11.0/6.0",
          "advantage": "-18",
          "shieldLag": "9/6",
          "shieldStun": "11/6",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "17",
          "active": "17—18",
          "total": "67",
          "endlag": "49",
          "damage": "18.0",
          "advantage": "-38",
          "shieldLag": "18",
          "shieldStun": "12",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "8",
          "active": "8—12(13—14)",
          "total": "47",
          "endlag": "33",
          "damage": "14.0/10.0",
          "advantage": "-29",
          "shieldLag": "11/9",
          "shieldStun": "10/7",
          "hitboxes": "Early/Late",
          "notes": "Legs intangibile on frame 8-11. Charge hold is frame 3"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "9",
          "active": "9—10",
          "total": "43",
          "endlag": "33",
          "damage": "13.0",
          "advantage": "-25",
          "shieldLag": "11",
          "shieldStun": "9",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "3",
          "active": "3—5(6—29)",
          "total": "45",
          "endlag": "16",
          "landingLag": "6",
          "damage": "10.0/5.0",
          "advantage": "-2/-3",
          "shieldLag": "8/6",
          "shieldStun": "4/3",
          "notes": "Autocancels on frame 1-2 and 37 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "8/15",
          "active": "8—9/15—17",
          "total": "44",
          "endlag": "27",
          "landingLag": "11",
          "damage": "5.0/6.0",
          "advantage": "-8/-8",
          "shieldLag": "6/10",
          "shieldStun": "3/3",
          "hitboxes": "First/Second",
          "notes": "Autocancels on frame 1-2 and 30 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—9",
          "total": "39",
          "endlag": "30",
          "landingLag": "11",
          "damage": "12.0",
          "advantage": "-6",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 28 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "6",
          "active": "6—10",
          "total": "35",
          "endlag": "25",
          "landingLag": "10",
          "damage": "9.0",
          "advantage": "-6",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 23 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "16",
          "active": "16—17(18)",
          "total": "49",
          "endlag": "31",
          "landingLag": "18",
          "damage": "13.0",
          "advantage": "-13",
          "shieldLag": "12",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-4 and 37 onward"
        },
        {
          "name": "Shot Put",
          "section": "special",
          "startup": "28",
          "active": "28—**/59",
          "total": "67",
          "endlag": "8",
          "damage": "15.0/11.2",
          "advantage": "-19",
          "shieldLag": "16/13",
          "shieldStun": "5/4",
          "hitboxes": "Falling/After Bounce"
        },
        {
          "name": "Flashing Mach Punch",
          "section": "special",
          "startup": "10/14/17/20/23 (25/27/29/31/33/35/37/39/41/43/45/47/49/51/53/55/65",
          "active": "10/14/17/20/23",
          "total": "93/54",
          "endlag": "70",
          "damage": "0.4/9.5",
          "advantage": "-30",
          "shieldLag": "4",
          "shieldStun": "2",
          "hitboxes": "Multi/Final",
          "notes": "First total frames is when successful. Second is when you miss. When successful, invincible on frame 10-69. Landing any of the first five hits will activate the full version, but not on shields."
        },
        {
          "name": "Exploding Side Kick",
          "section": "special",
          "startup": "50/52",
          "active": "50—52 (Reverse: 62—64 to 81—73)",
          "total": "79",
          "damage": "25.0/28.0",
          "advantage": "-7/-5",
          "shieldLag": "17/17",
          "shieldStun": "22/24",
          "hitboxes": "Normal/Reversed",
          "notes": "Second number is for reversed version, depending on reverse timing."
        },
        {
          "name": "Onslaught",
          "section": "special",
          "startup": "16—30 + 4",
          "active": "Dash: 16—30 Hit: 4—5/8—10/13/15—16/18—19/28—29",
          "total": "70/73",
          "endlag": "41",
          "damage": "2.0/2.0/7.0",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Begins on frame 1 of reaching a target. Second total frames is if you don't hit. Stops on shields. When blocked, endlag equates to remaining total frames"
        },
        {
          "name": "Onslaught, Air",
          "section": "special",
          "startup": "16—30 + 4",
          "active": "Dash: 16—30 Hit: 4—5/8—10/13/15—16/18—19/28—30",
          "landingLag": "30/40",
          "damage": "2.0/1.5/5.0",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Begins on frame 1 of reaching a target. Second landing lag is if you don't hit. Stops on shields"
        },
        {
          "name": "Burning Dropkick",
          "section": "special",
          "startup": "18",
          "active": "18—29",
          "total": "68/60",
          "endlag": "39",
          "damage": "13.0",
          "advantage": "-30",
          "shieldLag": "11",
          "shieldStun": "12",
          "notes": "First total frames is in the air, second is on level ground. 34 endlag on hit"
        },
        {
          "name": "Suplex, Grab",
          "section": "special",
          "startup": "13",
          "active": "13—21",
          "total": "51",
          "endlag": "30"
        },
        {
          "name": "Suplex, Success",
          "section": "special",
          "startup": "82",
          "total": "79",
          "damage": "3.0/15.0",
          "hitboxes": "grab/landing"
        },
        {
          "name": "Soaring Axe Kick",
          "section": "special",
          "startup": "10/30",
          "active": "10—15/3—**/1—2",
          "landingLag": "22/29",
          "damage": "4.0/3.0/4.0",
          "advantage": "-23",
          "shieldLag": "5/11/8",
          "shieldStun": "5/4/5",
          "hitboxes": "rising/falling/landing",
          "notes": "Second kick is voluntary, second landing lag pertains to that. **Hitbox images all have model scaling issues, the foot grows too much.**"
        },
        {
          "name": "Helicopter Kick",
          "section": "special",
          "startup": "8...",
          "active": "Ground: 8—9/15/20/26/31/36—37 Air: 8/15/20/26/31/36—37",
          "landingLag": "26",
          "damage": "3.0/1.5/6.0",
          "shieldLag": "5/4/14",
          "shieldStun": "4/3/6",
          "notes": "Leg intangibility on frame 8-37"
        },
        {
          "name": "Thrust Uppercut",
          "section": "special",
          "startup": "3/6/9/12/15/20",
          "active": "3—4/6—7/9—10/12—13/15/20—21",
          "landingLag": "30",
          "damage": "0.8/9.0",
          "shieldLag": "4/13",
          "shieldStun": "2/9",
          "hitboxes": "multi/final"
        },
        {
          "name": "Head-On Assault",
          "section": "special",
          "startup": "8/31 (34/37/40...)",
          "landingLag": "58",
          "damage": "6.0/16.0/14.0",
          "advantage": "-44",
          "shieldLag": "6/10/11",
          "shieldStun": "6/14/13",
          "hitboxes": "rising/falling/landing",
          "notes": "Landing hit on frame 1"
        },
        {
          "name": "Head-On Assault, Air",
          "section": "special",
          "startup": "23(26/29/32...)",
          "landingLag": "58",
          "damage": "16.0(1.0)/14.0",
          "advantage": "-44",
          "shieldLag": "10(4)/11",
          "shieldStun": "14(2)/13",
          "notes": "Landing hit on frame 1. Body hitbox hits every three frames."
        },
        {
          "name": "Feint Jump",
          "section": "special",
          "total": "56",
          "landingLag": "29",
          "notes": "Total frames is if you don't land during the animation. Has detection on frames 27-42, transitions to Auto Kick which spikes."
        },
        {
          "name": "Feint Jump, Kick",
          "section": "special",
          "startup": "8",
          "active": "8—21(1—2)",
          "total": "52",
          "endlag": "31",
          "landingLag": "37",
          "damage": "10.0",
          "advantage": "-27",
          "shieldLag": "8",
          "shieldStun": "10",
          "hitboxes": "Kick/Landing",
          "notes": "Earliest you can begin kick is frame 17 of jump"
        },
        {
          "name": "Counter Throw",
          "section": "special",
          "active": "6—23 (counter)",
          "total": "38",
          "notes": "Invulnerable on frame 5. Counters frame 6-23"
        },
        {
          "name": "Counter Throw, Activated",
          "section": "special",
          "startup": "3/16",
          "total": "Grab: 39 (if missed) // Throw: 46",
          "notes": "Grab: has intangibility from 1-47, grabs on 4-5. Throw: hitlag on frames 1 and 13, throw on 14, hitbox on 9-12, invincibility on frames 1-13."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "6",
          "active": "6—7",
          "total": "34",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "9",
          "active": "9—10",
          "total": "42",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "10",
          "active": "10—11",
          "total": "37",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "1",
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "14",
          "total": "37",
          "damage": "9.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "9/11",
          "total": "42",
          "damage": "4.0/5.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "16",
          "total": "39",
          "damage": "11.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "18/20",
          "total": "35",
          "damage": "2.0/4.0"
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
          "total": "40",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "58",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "65",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "70",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "80",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "86",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc"
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/mii_brawler",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
