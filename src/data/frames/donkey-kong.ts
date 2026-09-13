// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "donkey-kong",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "5",
          "active": "5—6",
          "total": "24",
          "endlag": "18",
          "damage": "4.0",
          "advantage": "-14",
          "shieldLag": "8",
          "shieldStun": "5",
          "notes": "Transitions to Jab 2 as early as frame 8."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "4",
          "active": "4—6",
          "total": "31",
          "endlag": "25",
          "damage": "6.0",
          "advantage": "-20",
          "shieldLag": "12",
          "shieldStun": "7"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "7",
          "active": "7—9",
          "total": "34",
          "endlag": "25",
          "damage": "8.0/9.0",
          "advantage": "-19/-18",
          "shieldLag": "7/8",
          "shieldStun": "8/9",
          "hitboxes": "No angle/angled",
          "notes": "Arm intangibility on frame 6-9"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "5",
          "active": "5—11",
          "total": "38",
          "endlag": "27",
          "damage": "10.0",
          "advantage": "-24",
          "shieldLag": "8",
          "shieldStun": "9",
          "notes": "Arm intangibility on frame 5-11"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—7",
          "total": "24",
          "endlag": "17",
          "damage": "6.0",
          "advantage": "-11",
          "shieldLag": "6",
          "shieldStun": "7",
          "notes": "Arm intangibility on frame 5-7"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "9",
          "active": "9—12/13—24",
          "total": "34",
          "endlag": "10",
          "damage": "12.0/9.0",
          "advantage": "-13",
          "shieldLag": "11/9",
          "shieldStun": "12/9",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "22",
          "active": "22—23",
          "total": "54",
          "endlag": "31",
          "damage": "22.0/21.0",
          "advantage": "-17/-18",
          "shieldLag": "19/19",
          "shieldStun": "15/14",
          "hitboxes": "Far/Close",
          "notes": "Arm and head intangibility on frame 20-26. Charge hold is frame 14. Cannot rebound."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "14",
          "active": "14—15",
          "total": "49",
          "endlag": "34",
          "damage": "19.0",
          "advantage": "-22",
          "shieldLag": "12",
          "shieldStun": "13",
          "notes": "Arm and head intangibility on frame 12-15. Charge hold is frame 6. Cannot rebound."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "11",
          "active": "11—12/13—14",
          "total": "55",
          "endlag": "41",
          "damage": "17.0/18.0/14.0",
          "advantage": "-32",
          "shieldLag": "11",
          "shieldStun": "12",
          "hitboxes": "Early Fist/Late Fist/Arms",
          "notes": "Arm intangibility on frame 11-14. Charge hold is frame 2. Cannot rebound."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "10",
          "active": "10—13/14—26",
          "total": "38",
          "endlag": "12",
          "landingLag": "10",
          "damage": "12.0/9.0",
          "advantage": "-5/-6",
          "shieldLag": "9/8",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-9 and 27 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "18",
          "active": "18—20/21—23",
          "total": "55",
          "endlag": "32",
          "landingLag": "17",
          "damage": "16.0/15.0/13.0",
          "advantage": "-12/-11/-12",
          "shieldLag": "11/16/14",
          "shieldStun": "6/6/5",
          "hitboxes": "Early/Late Meteor/Late Arms",
          "notes": "Autocancels on frame 56 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—8/9—16",
          "total": "31",
          "endlag": "15",
          "landingLag": "11",
          "damage": "13.0/8.0",
          "advantage": "-6/-7",
          "shieldLag": "9/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-6 and 31 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "6",
          "active": "6—10",
          "total": "37",
          "endlag": "27",
          "landingLag": "15",
          "damage": "13.0",
          "advantage": "-10",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Head intangibility on frame 5-10. Autocancels on frame 1-5 and 26 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "14",
          "active": "14—16",
          "total": "54",
          "endlag": "38",
          "landingLag": "14",
          "damage": "16.0/13.0",
          "advantage": "-8/-9",
          "shieldLag": "10/9",
          "shieldStun": "6/5",
          "notes": "Autocancels on frame 1-2 and 50 onward"
        },
        {
          "name": "Neutral B (Giant Punch)",
          "section": "special",
          "startup": "19(+7)",
          "active": "26—27 (19—20 after starting charge)",
          "total": "62",
          "endlag": "35",
          "damage": "10.0—27.0",
          "advantage": "-33 to -19",
          "shieldLag": "8—16",
          "shieldStun": "10—24",
          "notes": "Entering charge window takes 7 frames. 4 to cancel with shield. Arm intangibility on frame 4-20. Cannot rebound."
        },
        {
          "name": "Giant Punch, Full Charge",
          "section": "special",
          "startup": "19",
          "active": "19—20",
          "total": "47",
          "endlag": "27",
          "damage": "Grounded: 28.0%/18.0% | Aerial: 25.0",
          "advantage": "-3",
          "shieldLag": "16",
          "shieldStun": "25",
          "notes": "Ground version has Super Armor frames 9-20. Air version has Super Armor frames 15-20. Takes 111 frames to reach full charge. Cannot rebound."
        },
        {
          "name": "Side B (Headbutt)",
          "section": "special",
          "startup": "20",
          "active": "20—21",
          "total": "62",
          "endlag": "41",
          "damage": "10.0",
          "advantage": "-32",
          "shieldLag": "8",
          "shieldStun": "10",
          "notes": "Super armor on frame 5-14 on the ground and in the air."
        },
        {
          "name": "Up B (Spinning Kong)",
          "section": "special",
          "startup": "19/25/32/40/49/55/62",
          "active": "¯\\_(ツ)_/¯ (19/25-27/32-33/40-42/49-50/55-58/62)",
          "total": "104",
          "endlag": "42",
          "damage": "5.0/1.3/4.0",
          "advantage": "-37",
          "shieldLag": "6/4/11",
          "shieldStun": "6/3/5",
          "hitboxes": "First/multi/Final",
          "notes": "Armor on frame 5-17. Arm intangibility on frame 19-24."
        },
        {
          "name": "Spinning Kong, Air",
          "section": "special",
          "startup": "4/12...",
          "active": "¯\\_(ツ)_/¯ (4-6/10-12/13-14/15-17/18-19/20-21/22-24/25-26/27-29/30-31/32-33/34-36/37-38/39-43)",
          "landingLag": "38",
          "damage": "5.0/1.0/2.0",
          "shieldLag": "6/4/4",
          "shieldStun": "6/2/3",
          "hitboxes": "First/Multi/Final",
          "notes": "Past frame 12, this move hits once every 1, 2, or 3 frames, seems inconsistent. Arm intangibility from frame 10-38."
        },
        {
          "name": "Down B (Hand Slap)",
          "section": "special",
          "startup": "12/23",
          "active": "12—13/23—24...",
          "total": "46",
          "endlag": "22",
          "damage": "14.0",
          "advantage": "-15",
          "shieldLag": "10",
          "shieldStun": "8",
          "notes": "Each additional rep takes another 26 frames as you mash."
        },
        {
          "name": "Hand Slap, Air",
          "section": "special",
          "startup": "19/28",
          "active": "19—21/28—30",
          "total": "49",
          "endlag": "19",
          "landingLag": "10",
          "damage": "5.0/6.0",
          "advantage": "-4",
          "shieldLag": "6/6",
          "shieldStun": "6/6",
          "hitboxes": "First/Second",
          "notes": "Transcendent priority."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "8",
          "active": "8—10",
          "total": "38",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "11",
          "active": "11—13",
          "total": "46",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "12",
          "active": "12—14",
          "total": "41",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "2",
          "total": "21",
          "damage": "1.6",
          "notes": "Total frames includes 15 frames of hitlag"
        },
        {
          "name": "Cargo Forward Throw",
          "section": "throw",
          "startup": "15",
          "total": "45",
          "damage": "12.0"
        },
        {
          "name": "Cargo Backward Throw",
          "section": "throw",
          "startup": "16",
          "total": "42",
          "damage": "13.0"
        },
        {
          "name": "Cargo Up Throw",
          "section": "throw",
          "startup": "15",
          "total": "29",
          "damage": "12.0"
        },
        {
          "name": "Cargo Down Throw",
          "section": "throw",
          "startup": "17",
          "total": "44",
          "damage": "11.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "15",
          "total": "39",
          "damage": "11.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "14",
          "total": "43",
          "damage": "9.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "19",
          "total": "54",
          "damage": "7.0"
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
          "notes": "Intangible on frame 4-15"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "35",
          "notes": "Intangible on frame 5-16"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "48",
          "landingLag": "10",
          "notes": "Intangible on frame 4-32"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "66",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "73",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "82",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "88",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "109",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Getup Attacks",
          "section": "misc"
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/donkey_kong",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
