// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "terry",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "3",
          "active": "3—4",
          "total": "13",
          "endlag": "9",
          "damage": "3.0",
          "advantage": "-6",
          "notes": "Special Cancellable (+4 on shield). Transitions to jab 2 as early as frame 6"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "3/4",
          "active": "3/4—7",
          "total": "24",
          "endlag": "17",
          "damage": "1.0",
          "advantage": "-19/-17",
          "notes": "Special Cancellable (+2 on shield). Transitions to jab 3 as early as frame 9"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "7",
          "active": "7—10",
          "total": "33",
          "endlag": "23",
          "damage": "7.0",
          "advantage": "-19"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "8",
          "active": "8—13",
          "total": "27",
          "endlag": "14",
          "damage": "12.0/13.0",
          "advantage": "-8/-7",
          "shieldLag": "9/9",
          "shieldStun": "11/12",
          "hitboxes": "Close/Far",
          "notes": "Special Cancellable (+11 on shield). Leg intangible on frame 8-13."
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "7",
          "active": "7—11",
          "total": "30",
          "endlag": "19",
          "damage": "11.0",
          "advantage": "-12",
          "notes": "Special Cancellable (+10 on shield). Arm intangible on frame 7-11"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—8",
          "total": "16",
          "endlag": "8",
          "damage": "3.0",
          "advantage": "-6",
          "notes": "Special Cancellable (+4 on shield)."
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "10",
          "active": "10—14(15—22)",
          "total": "40",
          "endlag": "18",
          "damage": "13.0/10.0",
          "advantage": "-18/-15",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "18",
          "active": "18—21",
          "total": "50",
          "endlag": "29",
          "damage": "18.0",
          "advantage": "-20",
          "notes": "Charges between frames 10-11"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "10",
          "active": "10(11—14)",
          "total": "41",
          "endlag": "27",
          "damage": "16.0/18.0",
          "advantage": "-20 / -18",
          "hitboxes": "Early/Late",
          "notes": "Charges between frames 8-9"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "8",
          "active": "8—11",
          "total": "40",
          "endlag": "29",
          "damage": "12.0",
          "advantage": "-23",
          "notes": "Charges between frames 2-3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "4",
          "active": "4—8(9—19)",
          "total": "33",
          "endlag": "14",
          "landingLag": "7",
          "damage": "7.0/5.0",
          "advantage": "-4",
          "shieldLag": "7/6",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late",
          "notes": "Special Cancellable (+3 on shield). Autocancels on 1-3 and 24 onward."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—10(11—17)",
          "total": "39",
          "endlag": "22",
          "landingLag": "12",
          "damage": "11.0/8.0",
          "advantage": "-7/-8",
          "shieldLag": "9/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on 1-4 and 26 onward."
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "11",
          "active": "11—13(14—15)",
          "total": "39",
          "endlag": "24",
          "landingLag": "11",
          "damage": "15.0",
          "advantage": "-5/-6",
          "shieldLag": "10/9",
          "shieldStun": "6/5",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on 1-10 and 30 onward."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—9",
          "total": "35",
          "endlag": "26",
          "landingLag": "7",
          "damage": "5.0",
          "advantage": "-3",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Special Cancellable (+4 on shield). Autocancels on 1 and 19 onward."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "12",
          "active": "12—15",
          "total": "32",
          "endlag": "17",
          "landingLag": "16",
          "damage": "15.0/17.0",
          "advantage": "-10",
          "shieldLag": "11/10",
          "shieldStun": "6/6",
          "hitboxes": "Close/Far",
          "notes": "Special Cancellable (+6 on shield). Autocancels on 1-11 and 24 onward."
        },
        {
          "name": "Neutral B (Power Wave, Ground)",
          "section": "special",
          "startup": "18 (21)",
          "active": "18—86 (21—66)",
          "total": "49 (52)",
          "damage": "8.0 (9.0)",
          "advantage": "-22 (-21)",
          "hitboxes": "Weak (Strong)"
        },
        {
          "name": "Power Wave, Air",
          "section": "special",
          "startup": "18 (18)",
          "active": "18—27 (18—24)",
          "total": "49 (49)",
          "endlag": "22",
          "damage": "10.0 (11.0)",
          "hitboxes": "Weak (Strong)"
        },
        {
          "name": "Forward B (Burning Knuckle)",
          "section": "special",
          "startup": "15/19 (21/26) | 14—17(18—26)",
          "active": "15—19(20—30) | 21—28(27—39) | 14—17(18—26) | 18—21(22—30)",
          "total": "60 (69) | 46 (50)",
          "endlag": "21",
          "damage": "13.0/12.0 (14.0/12.0)",
          "advantage": "-28 (-34)",
          "hitboxes": "Ground Weak | (Strong) | Air Weak | (Strong) Ground | Air",
          "notes": "Air version has 14/18 startup and 45/54 total frames"
        },
        {
          "name": "Burning Knuckle, Input",
          "section": "special",
          "startup": "15/21 (21/28) | 14/19 (18/23)",
          "active": "15—21(22—30) | 21—28(29—39) | 14—19(20—26) | 18—23(24—30)",
          "total": "60 (69) | 46 (50)",
          "endlag": "21",
          "damage": "16.0/14.0 (17.0/14.0)",
          "advantage": "-26 (-32)",
          "hitboxes": "Weak (Strong)",
          "notes": "Arm intangibility on frame 15-21 (weak) or 21-28 (strong) air version has 14/18 startup and 45/54 total frames"
        },
        {
          "name": "Back B (Crack Shoot)",
          "section": "special",
          "startup": "13/21",
          "active": "13(14—20)/21(22—26)",
          "total": "46 (45 air)",
          "endlag": "20",
          "damage": "(3.0/4.0/5.0)/(6.0/8.0/10.0)",
          "advantage": "-12",
          "hitboxes": "(First Close/Far/Farthest)/(Second Close/Far/Farthest)",
          "notes": "Hold the button for more distance. Input version has 1.2x damage multiplier."
        },
        {
          "name": "Up B (Rising Tackle)",
          "section": "special",
          "startup": "10/12/15/20/25",
          "active": "10/12/15/20/25",
          "landingLag": "15",
          "damage": "4.0/0.3/7.0/9.0",
          "hitboxes": "First/Multi/Final",
          "notes": "Leg intangible on frames 9-20. Final hit damage depends on weak or strong input."
        },
        {
          "name": "Rising Tackle (Charged Input)",
          "section": "special",
          "startup": "10/12/14/16/19/21/24/29/34",
          "active": "10/12/14/16/19/21/24/29/34",
          "landingLag": "15",
          "damage": "4.5/0.3/8.0/10.0",
          "hitboxes": "First/Multi/Final",
          "notes": "Takes 24 frames of down-input to charge, stores charge for 10 frames after releasing down for up input ( more info here ). Invulnerable on frame 5-16 (5-11 air). Leg intangible frame 17-24."
        },
        {
          "name": "Down B (Power Dunk)",
          "section": "special",
          "startup": "Weak: 6/9/29 | Strong: 6/9/35",
          "active": "6/9/11/29—30/31—41",
          "total": "Ground Weak 54, Ground Strong 65 | Air Weak 67, Air Strong 74",
          "endlag": "13",
          "landingLag": "20 (24)",
          "damage": "1.0/2.0/12.0/14.0",
          "advantage": "-19",
          "hitboxes": "First/Second/Dunk Early/Dunk Late",
          "notes": "First total frames assumes level ground. Input version invulnerable on frame 6-12 and deals 20% more base damage."
        },
        {
          "name": "Power Geyser",
          "section": "special",
          "startup": "20",
          "active": "20—23/24—29",
          "total": "71",
          "endlag": "42",
          "damage": "26.0/23.0",
          "advantage": "-29",
          "hitboxes": "Close/Far",
          "notes": "Must be above 100% to use. Input shortcut: Down, Back, Forward+A/B. Heavy Armor: 1-14F (5%)."
        },
        {
          "name": "Buster Wolf",
          "section": "special",
          "startup": "14",
          "active": "14—23/46",
          "total": "65/64",
          "endlag": "19",
          "damage": "5.0/20.0",
          "advantage": "-45",
          "hitboxes": "Punch/Blast",
          "notes": "Must be above 100% to use. Input shortcut: Down, Forward, Down, Forward+A/B. Heavy Armor: 1-15F (8%, search). Right arm invincibility: 10-23F (search). Whole body intangible: 1-26F (after hit). Second total frames is on success. Proximity activator begins at frame 14 and ends on 24. Will not activate on shields."
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
          "total": "16",
          "damage": "1.5",
          "notes": "Includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "21",
          "total": "40",
          "damage": "10.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "21",
          "total": "44",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "12/13",
          "total": "33",
          "damage": "5.0/1.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "23",
          "total": "47",
          "damage": "8.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "20/25",
          "notes": "Intangible on frame 3-17"
        },
        {
          "name": "Spot Dodge ATTACK",
          "section": "dodge",
          "startup": "5",
          "active": "5—9",
          "total": "28 Total",
          "advantage": "-17",
          "notes": "Intangible on frame 1-3. Upper body intangible frame 4-9. Deals 11.0 damage."
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
          "total": "51",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge"
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc"
        },
        {
          "name": "Getup Attacks",
          "section": "misc"
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/terry",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
