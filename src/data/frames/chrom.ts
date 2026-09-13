// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "chrom",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "startup": "5",
          "active": "5—7",
          "total": "22",
          "endlag": "15",
          "damage": "6.5",
          "advantage": "-10",
          "shieldLag": "9",
          "shieldStun": "7"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "8",
          "active": "8—10",
          "total": "33",
          "endlag": "23",
          "damage": "10.9",
          "advantage": "-15",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6/7—8/9—11",
          "total": "38",
          "endlag": "27",
          "damage": "10.4",
          "advantage": "-22",
          "shieldLag": "8",
          "shieldStun": "10",
          "hitboxes": "Early/Normal/Late"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "7",
          "active": "7—8",
          "total": "21",
          "endlag": "13",
          "damage": "9.0",
          "advantage": "-5",
          "shieldLag": "7",
          "shieldStun": "9"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "13",
          "active": "13—16",
          "total": "45",
          "endlag": "29",
          "damage": "12.0",
          "advantage": "-21",
          "shieldLag": "12",
          "shieldStun": "11"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "13",
          "active": "13—14",
          "total": "53",
          "endlag": "39",
          "damage": "18.0",
          "advantage": "-28",
          "shieldLag": "15",
          "shieldStun": "12",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "12/13/15/17/19/22",
          "active": "12/13/15/17/19/22—23",
          "total": "58",
          "endlag": "35",
          "damage": "1.0/2.0/10.0",
          "advantage": "-29",
          "shieldLag": "5/4/9",
          "shieldStun": "2/-/7",
          "hitboxes": "First/multi/final",
          "notes": "Forearm intangibility on frame 10-23. Charge hold is frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "6/21",
          "active": "6—7/21—22",
          "total": "62",
          "endlag": "40",
          "damage": "12.3/14.2",
          "advantage": "-47/-31",
          "shieldLag": "9/10",
          "shieldStun": "9/10",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "6/15",
          "active": "6—7/15—21",
          "total": "45",
          "endlag": "24",
          "landingLag": "9",
          "damage": "4.7/6.6",
          "advantage": "-6/-6",
          "shieldLag": "6/6",
          "shieldStun": "3/3",
          "notes": "Autocancels on frame 47 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "10",
          "active": "10—12",
          "total": "29",
          "endlag": "17",
          "landingLag": "8",
          "damage": "9.0",
          "advantage": "-4",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 31 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "8",
          "active": "8—10",
          "total": "35",
          "endlag": "25",
          "landingLag": "10",
          "damage": "10.9",
          "advantage": "-6",
          "shieldLag": "10",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-2 and 32 onward. Turns the character around."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "5",
          "active": "5—12",
          "total": "41",
          "endlag": "29",
          "landingLag": "8",
          "damage": "7.6",
          "advantage": "-4",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-2 and 38 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "16",
          "active": "16—17",
          "total": "51",
          "endlag": "34",
          "landingLag": "14",
          "damage": "14.2/11.875",
          "advantage": "-9/-9",
          "shieldLag": "12",
          "shieldStun": "5",
          "hitboxes": "Sweet/Sour",
          "notes": "Autocancels on frame 1-2 and 52 onward"
        },
        {
          "name": "Neutral B (Flare Blade)",
          "section": "special",
          "startup": "21-260",
          "active": "Normal: 21—24 (or 10—14 from release) || Max: 21—25",
          "total": "44-283",
          "endlag": "19",
          "damage": "8.0—50.0",
          "advantage": "-15—Shieldbreak",
          "shieldLag": "7—21",
          "shieldStun": "8—...",
          "notes": "Startup is 10 from release. 11 frames to enter charge state."
        },
        {
          "name": "Side B, Hit 1 (Double-Edge Dance, Hit 1)",
          "section": "special",
          "startup": "9",
          "active": "9—11",
          "total": "39/29",
          "endlag": "28",
          "damage": "2.8",
          "advantage": "-26/-16(air)",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Second total frames is from the air. Can transition to next slash as early as frame 12."
        },
        {
          "name": "Double-Edge Dance, Hit 2 Neutral",
          "section": "special",
          "startup": "5",
          "active": "5—7",
          "total": "38",
          "endlag": "31",
          "damage": "2.8",
          "advantage": "-29",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Can transition to next slash as early as frame 8."
        },
        {
          "name": "Double-Edge Dance, Hit 3 Neutral",
          "section": "special",
          "startup": "4",
          "active": "4—6",
          "total": "43",
          "endlag": "37",
          "damage": "3.8",
          "advantage": "-34",
          "shieldLag": "5",
          "shieldStun": "5",
          "notes": "Can transition to next slash as early as frame 7."
        },
        {
          "name": "Double-Edge Dance, Hit 4 Neutral",
          "section": "special",
          "startup": "7",
          "active": "7—9",
          "total": "58",
          "endlag": "49",
          "damage": "5.2",
          "advantage": "-45",
          "shieldLag": "9",
          "shieldStun": "6"
        },
        {
          "name": "Double-Edge Dance, Hit 2 Up",
          "section": "special",
          "startup": "4",
          "active": "4—6",
          "total": "38",
          "endlag": "32",
          "damage": "2.8",
          "advantage": "-30",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Can transition to next slash as early as frame 8."
        },
        {
          "name": "Double-Edge Dance, Hit 3 Up",
          "section": "special",
          "startup": "5",
          "active": "5—7",
          "total": "43",
          "endlag": "36",
          "damage": "3.8",
          "advantage": "-33",
          "shieldLag": "5",
          "shieldStun": "5",
          "notes": "Can transition to next slash as early as frame 8."
        },
        {
          "name": "Double-Edge Dance, Hit 4 Up",
          "section": "special",
          "startup": "6",
          "active": "6—10",
          "total": "44",
          "endlag": "34",
          "damage": "6.4",
          "advantage": "-31",
          "shieldLag": "8",
          "shieldStun": "7"
        },
        {
          "name": "Double-Edge Dance, Hit 3 Down",
          "section": "special",
          "startup": "5",
          "active": "5—7",
          "total": "43",
          "endlag": "36",
          "damage": "3.8",
          "advantage": "-34",
          "shieldLag": "5",
          "shieldStun": "5",
          "notes": "Can transition to next slash as early as frame 8"
        },
        {
          "name": "Double-Edge Dance, Hit 4 Down",
          "section": "special",
          "startup": "7/10/13/16/19",
          "active": "7/10/13/16/19—21",
          "total": "71",
          "endlag": "50",
          "damage": "2.0/4.2",
          "advantage": "-47",
          "shieldLag": "4/8",
          "shieldStun": "-/5",
          "hitboxes": "multi/final"
        },
        {
          "name": "Up B (Soaring Slash)",
          "section": "special",
          "startup": "10/39/53/**",
          "active": "10—11/39—47(rehit: 7) / 54—**/1—4",
          "landingLag": "36",
          "damage": "6.0/1.5/6.0/6.0",
          "advantage": "-29",
          "shieldLag": "10/4/6/7",
          "shieldStun": "6/3/6/6",
          "hitboxes": "First/multi/falling/landing",
          "notes": "Landing hit on frame 1, Super armor on frame 10-30. Ending just before he ascends"
        },
        {
          "name": "Down B (Counter)",
          "section": "special",
          "startup": "8 (Start of Counter)",
          "total": "67",
          "notes": "Invulnerable on frames 7-9. Counters on 8-29 from 8-27."
        },
        {
          "name": "Counter, Attack",
          "section": "special",
          "startup": "4",
          "active": "4—5",
          "total": "40",
          "endlag": "35",
          "notes": "Invulnerable on frame 1-5. In addition to counter freeze frames"
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "7",
          "active": "7—8",
          "total": "36",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "10",
          "active": "10—11",
          "total": "44",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "11",
          "active": "11—12",
          "total": "39",
          "endlag": "27"
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
          "startup": "15",
          "total": "31",
          "damage": "5.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "8",
          "total": "44",
          "damage": "5.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "13",
          "total": "44",
          "damage": "6.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "16",
          "total": "41",
          "damage": "5.0"
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
          "total": "44",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "62",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "68",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "74",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "87",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "97",
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
    "url": "https://ultimateframedata.com/chrom",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
