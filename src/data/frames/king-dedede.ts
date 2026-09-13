// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "king-dedede",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "10",
          "active": "10—11",
          "total": "32",
          "endlag": "21",
          "damage": "2.5",
          "advantage": "-18",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Transitions to Jab 2 as early as frame 13"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "11",
          "active": "11—12",
          "total": "27",
          "endlag": "15",
          "damage": "2.2",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to Rapid jab as early as frame 22"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "startup": "5/8/11...",
          "active": "34—**",
          "damage": "0.5",
          "shieldLag": "4",
          "shieldStun": "3"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "startup": "4",
          "total": "49",
          "damage": "3.0",
          "advantage": "-41",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "12/16/20/23",
          "active": "12—21/23",
          "total": "48",
          "endlag": "25",
          "damage": "2.0/3.0",
          "advantage": "-21",
          "shieldLag": "4/10",
          "shieldStun": "3/4",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "7",
          "active": "7—13",
          "total": "38",
          "endlag": "25",
          "damage": "10.0/8.0",
          "advantage": "-21/-23",
          "shieldLag": "8/7",
          "shieldStun": "10/8",
          "hitboxes": "Close/Far",
          "notes": "Head intangible on frame 7-13."
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—7(8—11)",
          "total": "37",
          "endlag": "26",
          "damage": "10.0/6.0",
          "advantage": "-21",
          "shieldLag": "8/6",
          "shieldStun": "10/6",
          "hitboxes": "Early/Late",
          "notes": "Clanks with projectiles doing less than 26.8% damage."
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "26",
          "active": "26—27(28—41)",
          "total": "66",
          "endlag": "25",
          "damage": "16.0/13.0",
          "advantage": "-26",
          "shieldLag": "13/9",
          "shieldStun": "14/12",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "40",
          "active": "40—41(42—43/44)",
          "total": "77",
          "endlag": "33",
          "damage": "16.0/18.5/25.0/11.0",
          "advantage": "?/-/-18/-25",
          "shieldLag": "?/12/14/8",
          "shieldStun": "?/-/16/8",
          "hitboxes": "Early/close/far/Shockwave",
          "notes": "This attack hits directly above Dedede only on frame 40. Hammer comes down on 43. Shockwave on 44. Charge hold is frame 33. Multiple hitboxes: an aerial only hitbox that does 0%, sweetspot near tip of hammer, weak hit near Dedede."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "17",
          "active": "17—24",
          "total": "67",
          "endlag": "43",
          "damage": "16.0",
          "advantage": "-39",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "14",
          "active": "14—22",
          "total": "52",
          "endlag": "30",
          "damage": "13.0",
          "advantage": "-31/-23",
          "shieldLag": "9",
          "shieldStun": "9",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—8(9—29)",
          "total": "39",
          "endlag": "10",
          "landingLag": "9",
          "damage": "12.0/7.0",
          "advantage": "-4/-6",
          "shieldLag": "9/7",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 35 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "13",
          "active": "13—15",
          "total": "41",
          "endlag": "26",
          "landingLag": "18",
          "damage": "12.0",
          "advantage": "-13",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-4 and 40 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "17",
          "active": "17—19",
          "total": "37",
          "endlag": "18",
          "landingLag": "13",
          "damage": "16.0",
          "advantage": "-7",
          "shieldLag": "13",
          "shieldStun": "6",
          "notes": "Autocancels on frame 1-4 and 33 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "10/12/14/16/18/20/22/24",
          "active": "10/12/14/16/18/20/22/24—25",
          "total": "44",
          "endlag": "19",
          "landingLag": "13",
          "damage": "1.0/5.0",
          "advantage": "-10",
          "shieldLag": "4/12",
          "shieldStun": "-/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-4 and 42 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "22",
          "active": "22—23",
          "total": "47",
          "endlag": "24",
          "landingLag": "18",
          "damage": "15.0/8.0",
          "advantage": "-13/-14",
          "shieldLag": "15/7",
          "shieldStun": "5/4",
          "hitboxes": "Meteor/Late",
          "notes": "Autocancels on frame 1-6 and 44 onward"
        },
        {
          "name": "Neutral B (Inhale)",
          "section": "special",
          "startup": "14",
          "active": "17—**",
          "total": "74",
          "notes": "Startup and total frames refer to minimum usage. 19 endlag after extended usage. Can inhale projectiles starting on frame 14 and involuntarily spit them back. Gains invulnerability for 14 frames after the 4th frame of inhaling a character/item out. For example, if a character gets grabbed as soon as inhale comes out, (f14) the i-frames would be 18-32. Invulnerability information from @Landslide___ on Twitter."
        },
        {
          "name": "Inhale, Spit",
          "section": "special",
          "startup": "6",
          "total": "29"
        },
        {
          "name": "Side B (Gordo Throw)",
          "section": "special",
          "startup": "29",
          "active": "29(5—146)",
          "total": "58",
          "damage": "10.0/9.5—14.0",
          "advantage": "-21/-11/-17",
          "shieldLag": "8/12—15/15",
          "shieldStun": "10/4—5/14",
          "hitboxes": "Hammer/gordo/both"
        },
        {
          "name": "Up B (Super Dedede Jump)",
          "section": "special",
          "startup": "69",
          "active": "69/4—5/6—20",
          "landingLag": "60/30",
          "damage": "15.0/12.0/5.0",
          "advantage": "-46",
          "shieldLag": "10/9/6",
          "shieldStun": "14/-/3",
          "hitboxes": "Falling/landing/stars",
          "notes": "Cancelling incurs 30 frames landing lag. Invulnerable on frame 18-21. Super Armor (infinite %) on frames 22-34 and then 69-76. Leg intangibility frame 69-landing. Landing hitbox on frame 3—4. Stars on frame 5—24. Hitbox 69—landing."
        },
        {
          "name": "Down B (Jet Hammer, Partial Charge)",
          "section": "special",
          "startup": "10(+17)",
          "active": "27—29",
          "total": "59",
          "endlag": "30",
          "damage": "11.0—29.8",
          "advantage": "-39 to -24",
          "shieldLag": "8—15",
          "shieldStun": "10—25",
          "notes": "10 startup from release. 17 to enter charge state. 136 frames to reach full charge. Heavy armor (14%) on frame 1-14 from release but only on ground version."
        },
        {
          "name": "Down B, Full Charge (Jet Hammer, Full Charge)",
          "section": "special",
          "startup": "10",
          "active": "10—11",
          "total": "69",
          "endlag": "58",
          "damage": "40.0",
          "advantage": "-26",
          "shieldLag": "16",
          "shieldStun": "34",
          "notes": "Heavy armor on frame 1-14 from release but only on ground version."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "8",
          "active": "8—10",
          "total": "39",
          "endlag": "29"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "11",
          "active": "11—13",
          "total": "47",
          "endlag": "34"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "12",
          "active": "12—14",
          "total": "42",
          "endlag": "28"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "2",
          "total": "21",
          "damage": "1.6",
          "notes": "Total frames includes 14 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "14",
          "total": "37",
          "damage": "4.0/6.0",
          "notes": "Hit is 12/13, throw is 14"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "19",
          "total": "41",
          "damage": "4.0/9.0",
          "notes": "Hit is 16—18, throw is 19"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "19",
          "total": "39",
          "damage": "4.0/5.0",
          "notes": "Hit is 16—18, throw is 19"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "26",
          "total": "41",
          "damage": "6.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "23/28",
          "notes": "Intangible on frame 3-18"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "32",
          "notes": "Intangible on frame 4-16"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "37",
          "notes": "Intangible on frame 5-17"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "43",
          "landingLag": "10",
          "notes": "Intangible on frame 4-32"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "58",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-23"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "66",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-23"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "72",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-23"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "86",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-23"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-23"
        },
        {
          "name": "Getup Attacks",
          "section": "misc"
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/king_dedede",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
