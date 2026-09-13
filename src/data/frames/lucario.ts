// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "lucario",
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
          "damage": "1.6 | 2.5 | 4.0",
          "advantage": "-16 | -15 | -14",
          "shieldLag": "6 | 7 | 8",
          "shieldStun": "3 | 4 | 5",
          "notes": "Transitions to jab 2 as early as frame 12"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "5",
          "active": "5—6",
          "total": "26",
          "endlag": "20",
          "damage": "1.3 | 2.0 | 3.2",
          "advantage": "-18 | -18 | -17",
          "shieldLag": "5 | 5 | 6",
          "shieldStun": "3 | 3 | 4",
          "notes": "Transitions to jab 3 as early as frame 8"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "9",
          "active": "9—10",
          "total": "35",
          "endlag": "25",
          "damage": "1.9 | 3.0 | 4.8",
          "advantage": "-23 | -22 | -21",
          "shieldLag": "7 | 8 | 9",
          "shieldStun": "3 | 4 | 5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "12/15",
          "active": "12—14/15—16",
          "total": "32",
          "endlag": "16",
          "damage": "2.6/3.9 | 4.0/6.0 | 6.4/9.6",
          "advantage": "-12 | -11 | -8",
          "shieldLag": "5/5 | 5/6 | 6/8",
          "shieldStun": "-/5 | -/6 | -/9",
          "hitboxes": "First/Second"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—13",
          "total": "32",
          "endlag": "19",
          "damage": "3.3/3.9 | 5.0/6.0 | 8.0/9.6",
          "advantage": "-22/-21 | -20/-20 | -18/-17",
          "shieldLag": "5/5 | 6/6 | 7/8",
          "shieldStun": "4/5 | 6/6 | 8/9",
          "hitboxes": "Close/far"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "7",
          "active": "7—10",
          "total": "20",
          "endlag": "10",
          "damage": "3.3 | 5.0 | 8.0",
          "advantage": "-9 | -7 | -5",
          "shieldLag": "5 | 6 | 7",
          "shieldStun": "4 | 6 | 8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "7",
          "active": "7—10(11—15)",
          "total": "41",
          "endlag": "26",
          "damage": "5.6/6.6/4.6/3.9 | 8.5/10.0/7.0/6.0 | 13.6/16.0/11.2/9.6",
          "advantage": "-28/-27 | -26/-24 | -22/-20",
          "shieldLag": "6/6/6/5 | 7/8/7/6 | 9/10/8/8",
          "shieldStun": "6/7/55 | 8/10/7/6| 12/14/10/9",
          "hitboxes": "Early close/far, Late close/far"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "19",
          "active": "19—20(21—22)",
          "total": "54",
          "endlag": "32",
          "damage": "10.5/8.5 | 16.0/13.0 | 25.6 / 20.8",
          "advantage": "-27/-25 | -24/-26 | -19/-21",
          "shieldLag": "8/7 | 10/9 | 15/13",
          "shieldStun": "8/6 | 11/9 | 16/14",
          "hitboxes": "Close/far",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "15/19",
          "active": "15—17/19—20/21—23",
          "total": "63",
          "endlag": "40",
          "damage": "2.6/9.2/7.9 | 4.0/14.0/12.0 | 6.4/22.4/19.2",
          "advantage": "-37/-38 | -34/-36 | -30/-31",
          "shieldLag": "5/8/7 | 5/10/9 | 6/13/12",
          "shieldStun": "3/7/6 | 4/10/8 | 5/14/13",
          "hitboxes": "First, second far, second close",
          "notes": "Charge hold is frame 11"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "16",
          "active": "16—18",
          "total": "51",
          "endlag": "33",
          "damage": "9.2 | 14.0 | 22.4",
          "advantage": "-28 | -25 | -21",
          "shieldLag": "8 | 10 | 13",
          "shieldStun": "7 | 10 | 14",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "10/18",
          "active": "10—14/18—21",
          "total": "42",
          "endlag": "21",
          "landingLag": "5",
          "damage": "5.2/3.9 | 8.0/6.0 | 12.8/9.6",
          "advantage": "-2/-2 | -1/-2 | 0/-1",
          "shieldLag": "6/5 | 7/6 | 9/8",
          "shieldStun": "3/3 | 4/3 | 5/4",
          "notes": "Autocancels on frame 1-4 and 36 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—8",
          "total": "27",
          "endlag": "19",
          "landingLag": "9",
          "damage": "3.9 | 6.0 | 9.6",
          "advantage": "-6 | -6 | -5",
          "shieldLag": "5 | 6 | 8",
          "shieldStun": "3 | 3 | 4",
          "notes": "Autocancels on frame 28 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "13",
          "active": "13—14(15—16)",
          "total": "49",
          "endlag": "33",
          "landingLag": "14",
          "damage": "9.2/8.5 | 14.0/13.0 | 22.4/20.8",
          "advantage": "-10/-10 | -9/-9 | -7/-7",
          "shieldLag": "8/7 | 10/9 | 13/13",
          "shieldStun": "4/4 | 5/5 | 7/7",
          "notes": "Autocancels on frame 1-4 and 41 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "10",
          "active": "10—11(12—13)",
          "total": "38",
          "endlag": "25",
          "landingLag": "13",
          "damage": "7.2/3.9 | 11.0/6.0 | 17.6/9.6",
          "advantage": "-10/-10 | -9/-10 | -7/-9",
          "shieldLag": "7/5 | 8/6 | 11/8",
          "shieldStun": "3/3 | 4/3 | 6/4",
          "hitboxes": "Far/close",
          "notes": "Autocancels on frame 29 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "4/11",
          "active": "4—5/11—12",
          "total": "30",
          "endlag": "18",
          "landingLag": "12",
          "damage": "3.3/3.9 | 5.0/6.0 | 8.0/9.6",
          "advantage": "-10/-9 | -9/-9 | -8/-8",
          "shieldLag": "5/5 | 6/6 | 7/8",
          "shieldStun": "2/3 | 3/3 | 4/4",
          "notes": "Autocancels on frame 25 onward"
        },
        {
          "name": "Neutral B (Aura Sphere)",
          "section": "special",
          "startup": "9 (+8)",
          "active": "17—**",
          "total": "43",
          "damage": "4.5 -11.3 | 6.0 - 17.2 | 11.0 - 27.6",
          "advantage": "-26 | -25 | -23",
          "shieldLag": "6-8 | 7-11 | 8-15",
          "shieldStun": "3-4 | 3-6 | 4-8",
          "notes": "9 startup from charge.Takes 8 frames to enter charge state and 4 frames to cancel charge with shield. Charging sphere becomes hitbox on 9 and hits every six frames"
        },
        {
          "name": "Aura Sphere, Full Charge",
          "section": "special",
          "startup": "17",
          "active": "17—**",
          "total": "51",
          "damage": "11.3 | 17.2 | 27.6",
          "advantage": "-23 | -18 | -11",
          "shieldLag": "8 | 11 | 15",
          "shieldStun": "4 | 6 | 8",
          "notes": "Takes 99 frames to reach full charge."
        },
        {
          "name": "Side B (Force Palm)",
          "section": "special",
          "startup": "(9)24",
          "active": "24—25",
          "total": "63",
          "endlag": "38",
          "damage": "7.8/3.5 | 11.5/5.4 | 19.0/8.6",
          "advantage": "-24/-30 | -19/-27 | -10/-24",
          "shieldLag": "7/5 | 9/6 | 12/7",
          "shieldStun": "8/4 | 11/6 | 17/8",
          "hitboxes": "Close/far",
          "notes": "Grabs on frame 9 if on the ground."
        },
        {
          "name": "Force Palm, Throw",
          "section": "special",
          "startup": "Throw Hit: 23, Throw: 29",
          "active": "Throw Hit: 23—24",
          "total": "42",
          "endlag": "18",
          "damage": "Throw Hit: ** | 10.0 | ** Throw: 8.5 | 13.0 | 20.8"
        },
        {
          "name": "Up B (Extreme Speed)",
          "section": "special",
          "startup": "46",
          "active": "46—47(1)",
          "landingLag": "40/37",
          "damage": "3.9/2.6 | 6.0/4.0 | 9.6/6.4",
          "advantage": "-23/-31 | -22/-31 | -19/-29",
          "shieldLag": "6/6 | 7/6 | 9/8",
          "shieldStun": "5/5 | 6/5 | 9/7",
          "notes": "28 endlag if you end on the ground. Hitbox on frame 1 if you crash directly into ground/wall/ceiling. This bounce is a 37 frame animation on the ground"
        },
        {
          "name": "Down B (Double Team)",
          "section": "special",
          "startup": "5 (Start of Counter)",
          "active": "5—24(counter)",
          "total": "70",
          "notes": "Invulnerable on frame 4. Counters on frame 5-24"
        },
        {
          "name": "Double Team, Counterattack",
          "section": "special",
          "startup": "8",
          "total": "47",
          "damage": "8.2 | 12.5 | 20.0",
          "advantage": "-31 | -27 | -21",
          "shieldLag": "15 | 16 | 18",
          "shieldStun": "8 | 12 | 18",
          "notes": "Invulnerable on frame 1-17 in addition to counter freeze frames."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "7",
          "active": "7—8",
          "total": "39",
          "endlag": "31"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "10",
          "active": "10—11",
          "total": "46",
          "endlag": "35"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "11",
          "active": "11—12",
          "total": "42",
          "endlag": "30"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "1",
          "total": "19 | 20 | 21",
          "damage": "0.8 | 1.3 | 2.0",
          "notes": "Total frames includes 12 | 13 | 14 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "6/7",
          "total": "21",
          "damage": "3.3 / 1.9 | 5.0 / 3.0 | 8.0 / 4.8"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "14",
          "total": "35",
          "damage": "6.6 | 10.0 | 16.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "16/17",
          "total": "37",
          "damage": "3.3 / 3.9 | 5.0 / 6.0 | 8.0 / 9.6"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "28",
          "total": "50",
          "damage": "4.6 | 7.0 | 11.2"
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
          "total": "48",
          "landingLag": "10",
          "notes": "Intangible on frame 3-28"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "65",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "74",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "91",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "98",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "108",
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
    "url": "https://ultimateframedata.com/lucario",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
