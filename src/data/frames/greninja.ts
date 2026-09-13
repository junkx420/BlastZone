// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "greninja",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "3",
          "active": "3",
          "total": "21",
          "endlag": "18",
          "damage": "2.0",
          "advantage": "-15",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 6"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "3",
          "active": "3—4",
          "total": "21",
          "endlag": "17",
          "damage": "2.0",
          "advantage": "-15",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 6"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "5",
          "active": "5—6",
          "total": "35",
          "endlag": "29",
          "damage": "3.0",
          "advantage": "-26",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "startup": "5/8/11/14...",
          "damage": "0.5",
          "shieldLag": "4",
          "shieldStun": "3"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "startup": "4",
          "active": "4—5",
          "total": "47",
          "endlag": "42",
          "damage": "2.0",
          "advantage": "-39",
          "shieldLag": "9",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "10",
          "active": "10—12",
          "total": "32",
          "endlag": "20",
          "damage": "7.3/8.3",
          "advantage": "-14/-14",
          "shieldLag": "7/7",
          "shieldStun": "8/8",
          "hitboxes": "No Angle/Angled"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "9",
          "active": "9—12",
          "total": "32",
          "endlag": "20",
          "damage": "4.5",
          "advantage": "-18",
          "shieldLag": "5",
          "shieldStun": "5"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "5",
          "active": "5—6",
          "total": "22",
          "endlag": "16",
          "damage": "4.0",
          "advantage": "-12",
          "shieldLag": "5",
          "shieldStun": "5"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "7",
          "active": "7—11",
          "total": "28",
          "endlag": "17",
          "damage": "8.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "13",
          "active": "13—15",
          "total": "49",
          "endlag": "34",
          "damage": "14.0",
          "advantage": "-26",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Charge hold is frame 7"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "12/18",
          "active": "12—17/18(19—20/21)",
          "total": "51",
          "endlag": "30",
          "damage": "5.0/14.0/11.0",
          "advantage": "-23",
          "shieldLag": "8/14/8",
          "shieldStun": "4/10/8",
          "hitboxes": "First/Second/Late",
          "notes": "Charge hold is frame 8"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "11",
          "active": "11—12(13)",
          "total": "49",
          "endlag": "36",
          "damage": "13.0/11.0",
          "advantage": "-29",
          "shieldLag": "9/?",
          "shieldStun": "9/?",
          "hitboxes": "Far/Close",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Down Taunt",
          "section": "ground",
          "startup": "30",
          "active": "30—73 (rehit: 3)",
          "total": "109",
          "endlag": "6",
          "damage": "0.5",
          "notes": "Does not give aerial opponents hit stun"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "12",
          "active": "12—13(14—19)",
          "total": "52",
          "endlag": "33",
          "landingLag": "7",
          "damage": "11.0/6.0",
          "advantage": "-2/-4",
          "shieldLag": "9/6",
          "shieldStun": "5/3",
          "notes": "Autocancels on frame 1-9 and 40 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "16",
          "active": "16—17",
          "total": "54",
          "endlag": "37",
          "landingLag": "11",
          "damage": "14.0",
          "advantage": "-6",
          "shieldLag": "11",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-12 and 40 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "5/7/11",
          "active": "5/7/11—14",
          "total": "40",
          "endlag": "26",
          "landingLag": "10",
          "damage": "3.0/2.5/6.0",
          "advantage": "-8/-7",
          "shieldLag": "5/5/13",
          "shieldStun": "2/2/3",
          "notes": "Autocancels on frame 1-3 and 35 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "7/10/13/16/19/22",
          "active": "7—8/10—11/13—14/16—17/19—20/22",
          "total": "41",
          "endlag": "19",
          "landingLag": "14",
          "damage": "1.3/3.0",
          "advantage": "-12/-12",
          "shieldLag": "4/13",
          "shieldStun": "2/2",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-2 and 35 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "17",
          "active": "17—19(20—45)",
          "total": "51",
          "endlag": "6",
          "landingLag": "30",
          "damage": "8.0",
          "advantage": "-16",
          "shieldLag": "15",
          "shieldStun": "4",
          "hitboxes": "Early/Late",
          "notes": "On-hit bounce animation takes 20 frames before you can act. Autocancels on frame 1-2 and 53 onward"
        },
        {
          "name": "Neutral B (Water Shuriken)",
          "section": "special",
          "startup": "20—60",
          "active": "20—35 — 60—95",
          "total": "** (see notes)",
          "damage": "3.0—10.8, 1.0/9.0",
          "advantage": "-18 to -13",
          "shieldLag": "5—8/4/11",
          "shieldStun": "2—4/2/4/10/11",
          "hitboxes": "partial charge/full charge",
          "notes": "Hits on frames 6—41(rehit:4)/42 on release. Total Frames: 31 for any level of charge before max, 27 for max, 24 for any level of charge on aerial release, 20 for max charge aerial release."
        },
        {
          "name": "Side B (Shadow Sneak)",
          "section": "special",
          "startup": "24(+5)",
          "active": "24—25",
          "total": "63",
          "endlag": "38",
          "damage": "10.0/12.0",
          "advantage": "-29/-28",
          "shieldLag": "10/12",
          "shieldStun": "10/11",
          "hitboxes": "Front/Back Kick",
          "notes": "Startup is 24 from release. Must ready this move for at least five frames."
        },
        {
          "name": "Up B (Hydro Pump)",
          "section": "special",
          "startup": "19",
          "landingLag": "32",
          "damage": "2.0",
          "shieldLag": "8",
          "shieldStun": "2"
        },
        {
          "name": "Down B (Substitute)",
          "section": "special",
          "startup": "8 (Start of Counter)",
          "active": "8—34 (counter)",
          "total": "69",
          "notes": "Invulnerable on frame 7. Counters on frame 8-34"
        },
        {
          "name": "Down B, Attack (Substitute, Attack)",
          "section": "special",
          "startup": "19",
          "active": "19",
          "total": "63",
          "endlag": "44",
          "damage": "11.0/13.0",
          "advantage": "-33/-32",
          "shieldLag": "9/10",
          "shieldStun": "11/12",
          "hitboxes": "Side/Up or Down",
          "notes": "Invulnerable on frame 1-33 in addition to 22 freeze frames."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "10",
          "active": "10—11",
          "total": "38",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "13",
          "active": "13—14",
          "total": "46",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "14",
          "active": "14—15",
          "total": "41",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "2",
          "total": "18",
          "landingLag": "Total frames includes 10 frames of hitlag.",
          "damage": "1.0"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "15/16",
          "total": "31",
          "damage": "3.5/4.5"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "18",
          "total": "44",
          "damage": "9.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "16",
          "total": "42",
          "damage": "5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "16",
          "total": "37",
          "damage": "5.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "19/24",
          "notes": "Intangible on frame 3-16."
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "28",
          "notes": "Intangible on frame 4-14."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "33",
          "notes": "Intangible on frame 4-15."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "41",
          "landingLag": "10",
          "notes": "Intangible on frame 2-27."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "60",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "67",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "71",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "78",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19."
        },
        {
          "name": "Getup Attacks",
          "section": "misc"
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/greninja",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
