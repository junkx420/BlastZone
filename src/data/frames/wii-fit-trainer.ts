// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "wii-fit-trainer",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "4",
          "active": "4—5",
          "total": "25",
          "endlag": "20",
          "damage": "2.0",
          "advantage": "-18",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 9"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "3",
          "active": "3—4",
          "total": "29",
          "endlag": "25",
          "damage": "2.0",
          "advantage": "-23",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 9"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "5",
          "active": "5—6",
          "total": "39",
          "endlag": "33",
          "damage": "3.0",
          "advantage": "-30",
          "shieldLag": "10",
          "shieldStun": "4",
          "notes": "Can bury"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—10",
          "total": "32",
          "endlag": "22",
          "damage": "11.0",
          "advantage": "-16",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "5",
          "active": "5—12",
          "total": "29",
          "endlag": "17",
          "damage": "10.0",
          "advantage": "-14",
          "shieldLag": "8",
          "shieldStun": "10",
          "notes": "Arm intangibility on frame 3-12"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "9",
          "active": "9—12",
          "total": "38",
          "endlag": "26",
          "damage": "13.5",
          "advantage": "-17",
          "shieldLag": "9",
          "shieldStun": "12"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "6",
          "active": "6—8(9—13)",
          "total": "38",
          "endlag": "25",
          "damage": "10.0/6.0",
          "advantage": "-20",
          "shieldLag": "8/6",
          "shieldStun": "12/10",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "16",
          "active": "16—19",
          "total": "56",
          "endlag": "37",
          "damage": "15.5",
          "advantage": "-30",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "11",
          "active": "11—12(13—19)",
          "total": "54",
          "endlag": "35",
          "damage": "15.0/18.0",
          "advantage": "-33/-31",
          "shieldLag": "10/15",
          "shieldStun": "10/12",
          "hitboxes": "Body/Arms",
          "notes": "Invulnerable on frame 9-12. Charge hold is frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "18",
          "active": "18—21",
          "total": "46",
          "endlag": "25",
          "damage": "12.0",
          "advantage": "-25",
          "shieldLag": "9",
          "shieldStun": "8",
          "notes": "Charge hold frame is 4"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "9/12",
          "active": "9—11/12—13",
          "total": "34",
          "endlag": "21",
          "landingLag": "8",
          "damage": "5.0/9.0",
          "advantage": "-5/-4",
          "shieldLag": "6/7",
          "shieldStun": "3/4",
          "notes": "Autocancels on frame 1-5 and 33 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "9",
          "active": "9(10/11—15)",
          "total": "35",
          "endlag": "20",
          "landingLag": "7",
          "damage": "12.0/7.5/10.0/6.0",
          "advantage": "-2/-4/-3/-4",
          "shieldLag": "9/7/12/6",
          "shieldStun": "5/3/4/3",
          "hitboxes": "Early/Late, Meteor early/late",
          "notes": "Autocancels on frame 1-8 and 25 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "5",
          "active": "5(6—11)",
          "total": "48",
          "endlag": "37",
          "landingLag": "12",
          "damage": "13.5/11.0/6.0",
          "advantage": "-7/-8/-9",
          "shieldLag": "11/7/6",
          "shieldStun": "5/4/3",
          "hitboxes": "Far/close/late",
          "notes": "Autocancels on frame 1-2 and 43 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "6",
          "active": "6—10",
          "total": "39",
          "endlag": "29",
          "landingLag": "9",
          "damage": "10.0",
          "advantage": "-5",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-5 and 36 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "15",
          "active": "15—17(18—20)",
          "total": "39",
          "endlag": "19",
          "landingLag": "12",
          "damage": "13.0",
          "advantage": "-7",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Autocancels on frame 35 onward"
        },
        {
          "name": "Neutral B (Sun Salutation)",
          "section": "special",
          "startup": "4(+17)",
          "active": "21—90",
          "total": "39",
          "damage": "5.0—20.7",
          "advantage": "-26 to -16",
          "shieldLag": "6—13",
          "shieldStun": "3—6",
          "hitboxes": "Uncharged—Full Charge",
          "notes": "Startup is 4 from charging state. 17 frames to enter charging state. 4 frames to cancel charge with shield."
        },
        {
          "name": "Sun Salutation, Full Charge",
          "section": "special",
          "startup": "21",
          "active": "21—90",
          "total": "56",
          "damage": "21.0",
          "advantage": "-16",
          "shieldLag": "13",
          "shieldStun": "6",
          "notes": "103 frames to reach full charge"
        },
        {
          "name": "Side B (Header)",
          "section": "special",
          "startup": "15—31",
          "total": "40—56",
          "landingLag": "15",
          "damage": "15.0/8.9—10.3",
          "advantage": "-11/-13",
          "shieldLag": "10/8",
          "shieldStun": "14/4",
          "hitboxes": "Header/ball",
          "notes": "Earliest/latest hit. Total frames does not count 5 frames of hitlag from hitting the ball. Can cancel move on frame 10, resulting in 15 special landing lag"
        },
        {
          "name": "Up B (Super Hoop)",
          "section": "special",
          "startup": "6/23/40",
          "total": "30",
          "damage": "5.0",
          "shieldLag": "7",
          "shieldStun": "0"
        },
        {
          "name": "Down B (Deep Breathing)",
          "section": "special",
          "startup": "39",
          "notes": "24 frames endlag when successful, 15 frames in the air. 48 frames when unsuccessful. Effects lasts for just under ten seconds. Repeated use slows charge. Frame 39 is the earliest you can succeed on fresh use."
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
          "startup": "36/38",
          "total": "49",
          "damage": "3.0/7.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "19/21",
          "total": "49",
          "damage": "3.0/6.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "28",
          "total": "49",
          "damage": "8.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "24",
          "total": "49",
          "damage": "7.0"
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
          "total": "57",
          "landingLag": "10",
          "notes": "Intangible on frame 3-28"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "80",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "88",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "96",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "107",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "124",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
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
    "url": "https://ultimateframedata.com/wii_fit_trainer",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
