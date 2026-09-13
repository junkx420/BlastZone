// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "ganondorf",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "startup": "7",
          "active": "7—8",
          "total": "26",
          "endlag": "18",
          "damage": "11.0",
          "advantage": "-8",
          "shieldLag": "13",
          "shieldStun": "10"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "10",
          "active": "10—12",
          "total": "39",
          "endlag": "27",
          "damage": "13.0/14.0",
          "advantage": "-17/-16",
          "shieldLag": "9/10",
          "shieldStun": "12/13",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "60",
          "active": "60—61(62—63) / Windboxes 6—52",
          "total": "95",
          "endlag": "43",
          "damage": "24.0/13.0",
          "advantage": "-14",
          "shieldLag": "14/9",
          "shieldStun": "21/12",
          "hitboxes": "Early and Late leg/Late explosion",
          "notes": "Flames hit on frame 62 above Ganon"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "10",
          "active": "10—12",
          "total": "35",
          "endlag": "23",
          "damage": "14.0",
          "advantage": "-12",
          "shieldLag": "10",
          "shieldStun": "13"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "10",
          "active": "10—12/13—19",
          "total": "37",
          "endlag": "18",
          "damage": "15.0/11.0",
          "advantage": "-13/-11",
          "shieldLag": "10/8",
          "shieldStun": "14/13",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "29",
          "active": "29—31",
          "total": "69",
          "endlag": "38",
          "damage": "24.0",
          "advantage": "-24",
          "shieldLag": "14",
          "shieldStun": "15",
          "notes": "Charge hold is frame 14. Hits targets above him on frame 29"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "20",
          "active": "20—25",
          "total": "61",
          "endlag": "36",
          "damage": "24.0/21.0",
          "advantage": "-25",
          "shieldLag": "14/13",
          "shieldStun": "15/14",
          "hitboxes": "Far/Close",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "15/35",
          "active": "15—18/35—38",
          "total": "59",
          "endlag": "21",
          "damage": "5.0/15.0",
          "advantage": "-39/-13",
          "shieldLag": "6/10",
          "shieldStun": "4/10",
          "hitboxes": "First/Second",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "7/17",
          "active": "(7—8/9—12)(17—18/19—26)",
          "total": "40",
          "endlag": "14",
          "landingLag": "10",
          "damage": "(7.0/5.25)(12.0/ 9.5)",
          "advantage": "(-7/-7)(-5/-6)",
          "shieldLag": "(7/6)(11/9)",
          "shieldStun": "(3/3)(5/4)",
          "hitboxes": "(First Early/Late)(Second Early/Late)",
          "notes": "Autocancels on frame 1-3 and 37 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "14",
          "active": "14—19",
          "total": "44",
          "endlag": "25",
          "landingLag": "13",
          "damage": "17.0/18.0",
          "advantage": "-7/-7",
          "shieldLag": "11/13",
          "shieldStun": "6/6",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-6 and 45 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "10",
          "active": "10—12",
          "total": "35",
          "endlag": "23",
          "landingLag": "11",
          "damage": "18.5/17",
          "advantage": "-4/-5",
          "shieldLag": "11/14",
          "shieldStun": "7/6",
          "hitboxes": "Sweet/Sour",
          "notes": "Autocancels on frame 1-6 and 22 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "8",
          "active": "8—10/11—13/14—16 (Close/Early/Late)",
          "total": "33",
          "landingLag": "11",
          "damage": "13.0/12.0/12.0/10.0/8.0/6.0",
          "advantage": "-6/-6/-6/-7/-7/-8",
          "shieldLag": "9/9/9/8/7/6",
          "shieldStun": "5/5/5/4/4/3",
          "hitboxes": "Clean/Late/Latest",
          "notes": "Autocancels on frame 25 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "16",
          "active": "16—18",
          "total": "44",
          "endlag": "26",
          "landingLag": "16",
          "damage": "19.0/17.0",
          "advantage": "-9/-10",
          "shieldLag": "15/16",
          "shieldStun": "7/6",
          "hitboxes": "Legs/Waist",
          "notes": "Autocancels on frame 1-3 and 32 onward"
        },
        {
          "name": "Neutral B (Warlock Punch)",
          "section": "special",
          "startup": "70/80",
          "active": "70—73/80—83",
          "total": "117/127",
          "endlag": "34",
          "damage": "30.0/37.0",
          "advantage": "-20/-14",
          "shieldLag": "15/16",
          "shieldStun": "26/31",
          "hitboxes": "Forward/Reversed",
          "notes": "Super armor on frame 11-67 (reversed version has super armor 21-75)."
        },
        {
          "name": "Neutral B, Air (Warlock Punch, Air)",
          "section": "special",
          "startup": "70/80",
          "active": "70—73/80—83",
          "total": "117/127",
          "endlag": "34",
          "damage": "38.0/40.0",
          "advantage": "-14/-12",
          "shieldLag": "16/16",
          "shieldStun": "32/34",
          "hitboxes": "Forward/Reversed",
          "notes": "Does not have Super armor."
        },
        {
          "name": "Side B (Flame Choke)",
          "section": "special",
          "startup": "16",
          "active": "16—30",
          "total": "59",
          "endlag": "29",
          "notes": "Damage dealt 32 frames after a grab. 57 total frames."
        },
        {
          "name": "Flame Choke, Success",
          "section": "special",
          "startup": "31",
          "active": "32",
          "total": "57",
          "endlag": "25",
          "damage": "12.0",
          "notes": "Armor on frame 17-40"
        },
        {
          "name": "Side B, Air (Flame Choke, Air)",
          "section": "special",
          "startup": "16",
          "active": "16—28",
          "landingLag": "29/20",
          "notes": "29 landing lag if you don't enter special fall. 20 if you do. Opponents can mash out of air flame choke to prevent Ganoncides, with opponents who have lower damage than Ganondorf being able to break out more quickly."
        },
        {
          "name": "Side B, Air Success (Flame Choke, Air Success)",
          "section": "special",
          "active": "1 (Landing)",
          "landingLag": "30",
          "damage": "15.0",
          "notes": "Damage dealt on frame 1 of landing. Untechable knockdown."
        },
        {
          "name": "Up B (Dark Dive)",
          "section": "special",
          "startup": "14",
          "active": "14—28(Grab)/34—36(Attack)",
          "landingLag": "30",
          "damage": "7.0",
          "shieldLag": "7",
          "shieldStun": "7",
          "notes": "First startup is for the grab."
        },
        {
          "name": "Dark Dive, Grab Success",
          "section": "special",
          "startup": "4/8/12/16/17",
          "total": "40",
          "damage": "1.9/9.0",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Down B (Wizard's Foot)",
          "section": "special",
          "startup": "16",
          "active": "16—35",
          "total": "60/68",
          "endlag": "25",
          "damage": "14.0/16.0",
          "advantage": "-29",
          "shieldLag": "10/10",
          "shieldStun": "13/14",
          "hitboxes": "Close/Far",
          "notes": "Total frames is 68 if you go over an edge."
        },
        {
          "name": "Down B, Air (Wizard's Foot, Air)",
          "section": "special",
          "startup": "16",
          "active": "16—18/19—29/2—3",
          "total": "57",
          "endlag": "28",
          "landingLag": "44",
          "damage": "15.0/14.0/8.0",
          "advantage": "-34",
          "shieldLag": "10/10",
          "shieldStun": "14/13/8",
          "hitboxes": "Early/Late/Landing",
          "notes": "Hitbox on frame 2 of landing."
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
          "landingLag": "Total frames includes 14 frames of hitlag.",
          "damage": "1.6"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "11/13",
          "total": "39",
          "damage": "5.0/8.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "12/14",
          "total": "49",
          "damage": "5.0/5.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "11/13",
          "total": "43",
          "damage": "10.0/3.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "23",
          "total": "39",
          "damage": "7.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "23/28",
          "notes": "Intangible on frame 3-18."
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "32",
          "notes": "Intangible on frame 4-16."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "37",
          "notes": "Intangible on frame 5-17."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "46",
          "landingLag": "10",
          "notes": "Intangible on frame 4-32."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "66",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "73",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "79",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "91",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "103",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22."
        },
        {
          "name": "Getup Attacks",
          "section": "misc"
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/ganondorf",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
