// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "incineroar",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "5",
          "active": "5—6",
          "total": "23",
          "endlag": "17",
          "damage": "2.5",
          "advantage": "-14",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Transitions to jab 2 on frame 8"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "4",
          "active": "4—5",
          "total": "31",
          "endlag": "26",
          "damage": "2.8",
          "advantage": "-23",
          "shieldLag": "6",
          "shieldStun": "4",
          "notes": "Transitions to jab 3 on frame 13"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "4",
          "active": "4—5",
          "total": "37",
          "endlag": "32",
          "damage": "6.7",
          "advantage": "-28",
          "shieldLag": "6",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "12",
          "active": "12—14",
          "total": "36",
          "endlag": "22",
          "damage": "13.0/12.0",
          "advantage": "-12",
          "shieldLag": "11",
          "shieldStun": "12",
          "hitboxes": "Far/Close"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—11",
          "total": "34",
          "endlag": "23",
          "damage": "9.0",
          "advantage": "-19",
          "shieldLag": "7",
          "shieldStun": "9",
          "notes": "Head intangibility on frame 6-11"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "9",
          "active": "9—11",
          "total": "29",
          "endlag": "18",
          "damage": "9.0",
          "advantage": "-11",
          "shieldLag": "7",
          "shieldStun": "9",
          "notes": "Leg intangibility on frame 8-12"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "8",
          "active": "8—11/12—15",
          "total": "41",
          "endlag": "26",
          "damage": "13.0/9.0",
          "advantage": "-21",
          "shieldLag": "9/7",
          "shieldStun": "12/9",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "16",
          "active": "16—18",
          "total": "51",
          "endlag": "33",
          "damage": "20.0/16.0",
          "advantage": "-22/-24",
          "shieldLag": "14/10",
          "shieldStun": "13/11",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 1"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "13",
          "active": "13—18",
          "total": "47",
          "endlag": "29",
          "damage": "17.0",
          "advantage": "-23",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Arm intangibility on frame 13-18. Charge hold is frame 5"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "18",
          "active": "18—20",
          "total": "57",
          "endlag": "37",
          "damage": "17.0",
          "advantage": "-28",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Charge hold is frame 1"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "5",
          "active": "5—6/7—25",
          "total": "41",
          "endlag": "16",
          "landingLag": "11",
          "damage": "13.0/7.0",
          "advantage": "-6/-8",
          "shieldLag": "9/7",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-3 and 36 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "8",
          "active": "8—10(11—14)",
          "total": "44",
          "endlag": "30",
          "landingLag": "14",
          "damage": "12.0/13.0/9.0/9.6",
          "advantage": "-9/-9",
          "shieldLag": "9/10",
          "shieldStun": "5/5",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-6 and 46 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—10",
          "total": "41",
          "endlag": "31",
          "landingLag": "11",
          "damage": "11.0/13.0",
          "advantage": "-7/-6",
          "shieldLag": "8/10",
          "shieldStun": "4/5",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-5 and 36 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—11",
          "total": "31",
          "endlag": "20",
          "landingLag": "8",
          "damage": "8.0",
          "advantage": "-4",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-5 and 26 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "16",
          "active": "16—19/20—21",
          "total": "44",
          "endlag": "23",
          "landingLag": "16",
          "damage": "15.0/14.0/9.0/8.0",
          "advantage": "-11/-11/-12",
          "shieldLag": "10/10/7",
          "shieldStun": "5/5/4",
          "hitboxes": "Meteor/Close/Late",
          "notes": "Autocancels on frame 1-3 and 45 onward"
        },
        {
          "name": "Neutral B (Darkest Lariat)",
          "section": "special",
          "startup": "5/15/23/37/50/56",
          "active": "5—10/15—16/23—30/37—44/50—51/56—57",
          "total": "84",
          "endlag": "27",
          "damage": "16.0—6.0",
          "advantage": "-65",
          "shieldLag": "12—7",
          "shieldStun": "14—8",
          "notes": "On the ground: Invincible on frame 5-6, head/arm invincible on frame 7, and arm invincible on frame 7-57."
        },
        {
          "name": "Side B (Alolan Whip, Grab)",
          "section": "special",
          "startup": "16",
          "active": "16—32(grab)",
          "total": "57",
          "notes": "Follow with: Lariat, Back Body Drop, or Chest Bounce."
        },
        {
          "name": "Alolan Whip, Lariat Attack",
          "section": "special",
          "startup": "7",
          "total": "47",
          "damage": "20.0",
          "notes": "Following a grab, successful window for a lariat is frame 43-47. Any later is a failure and results in Back Body Drop or Chest Bounce. Damage-based armor 1—58 (14.338% in 1v1, 11.99% base)."
        },
        {
          "name": "Alolan Whip, Back Body Drop",
          "section": "special",
          "startup": "8",
          "total": "42",
          "damage": "12.0",
          "notes": "You can hold the button to guarantee this particular attack. Damage-based armor 1—... (14.338% in 1v1, 11.99% base)."
        },
        {
          "name": "Alolan Whip, Chest Bounce (Failure)",
          "section": "special",
          "total": "32",
          "damage": "4.0",
          "notes": "Damage-based armor 1—4 (14.338% in 1v1, 11.99% base)."
        },
        {
          "name": "Up B (Cross Chop)",
          "section": "special",
          "startup": "11/38",
          "active": "(11/13—15/16—24)(38...)",
          "total": "79",
          "endlag": "41",
          "landingLag": "61/35",
          "damage": "3.0/7.0/11.0/9.0",
          "advantage": "-51",
          "shieldLag": "9/10/10/10",
          "shieldStun": "4/7/10/9",
          "hitboxes": "rising/falling early/falling late/landing",
          "notes": "Landing hitbox on frame 1. Arm intangibility on frame 13-26. Damage=based armor on frame 4-15 (14.338% in 1v1, 11.99% base). Total frames is if you never land during the dive. Second landing lag is if you land too late."
        },
        {
          "name": "Down B (Revenge)",
          "section": "special",
          "startup": "3 (Start of Counter)",
          "total": "49",
          "notes": "Counter window 3-27. Next attack's damage increased by \"((3-x) + (Max KB Multiplier) * (x-1)) / 2\" where x = current damage dealt multiplier . Stores up to 3x Revenges for total damage combined. Revenge store is lost when you are grabbed or take 36% damage. Lasts 60 seconds at base. Jab 1/2 and the rising hits of Cross Chop don't remove revenge. For more info, including exact knockback multipliers, check Smash Wiki's page on Revenge ."
        },
        {
          "name": "Revenge, Counter Attack",
          "section": "special",
          "startup": "8",
          "active": "8—9",
          "total": "25",
          "endlag": "16",
          "damage": "2.4",
          "notes": "Invulnerable on frame 1-14 in addition to counter freeze frames."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "7",
          "active": "7—9",
          "total": "37",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "11",
          "active": "11—13",
          "total": "45",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "12",
          "active": "12—14",
          "total": "43",
          "endlag": "29"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "1",
          "total": "20",
          "damage": "1.6",
          "notes": "Total frames includes 14 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "58",
          "total": "81",
          "damage": "12.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "28/30",
          "total": "51",
          "damage": "14.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "27",
          "total": "55",
          "damage": "12.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "22",
          "total": "35",
          "damage": "9.0"
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
          "total": "44",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "63",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "72",
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
          "total": "86",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc"
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/incineroar",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
