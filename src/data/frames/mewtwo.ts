// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "mewtwo",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "startup": "5",
          "active": "5—6",
          "total": "21",
          "endlag": "15",
          "damage": "3.0",
          "advantage": "-12",
          "shieldLag": "9",
          "shieldStun": "4",
          "notes": "Transitions to Rapid Jab as early as frame 12."
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "startup": "5/8/11...",
          "damage": "0.8",
          "shieldLag": "4",
          "shieldStun": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "startup": "6",
          "active": "6—7",
          "total": "40",
          "endlag": "33",
          "damage": "2.5",
          "advantage": "-30",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "10",
          "active": "10—11",
          "total": "35",
          "endlag": "24",
          "damage": "11.0/10.0/9.0",
          "advantage": "-15/-15/-16",
          "shieldLag": "10/8/7",
          "shieldStun": "10/10/9",
          "hitboxes": "Close/Med/Far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "8",
          "active": "8(9—13)",
          "total": "29",
          "endlag": "16",
          "damage": "7.0/6.0/5.5, 5.0/4.0",
          "advantage": "-14/-15/-15",
          "shieldLag": "7/6/6, 6/5",
          "shieldStun": "7/6/6, 6/5",
          "hitboxes": "Early close/med/far, Late med/far"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—7",
          "total": "23",
          "endlag": "16",
          "damage": "5.0/4.5/4.0",
          "advantage": "-11/-12/-12",
          "shieldLag": "6/5/5",
          "shieldStun": "6/5/5",
          "hitboxes": "Close/med/far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "10",
          "active": "10—11(12—20)",
          "total": "38",
          "endlag": "18",
          "damage": "12.0/6.0",
          "advantage": "-14",
          "shieldLag": "11/8",
          "shieldStun": "14/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "19",
          "active": "19—22",
          "total": "52",
          "endlag": "30",
          "damage": "16.0/20.0",
          "advantage": "-20/-18",
          "shieldLag": "10/15",
          "shieldStun": "11/13",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 12"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "9/14/18/22",
          "active": "9(10—11)/14—15/18—19/22—25",
          "total": "68",
          "endlag": "43",
          "damage": "2.0/10.0",
          "advantage": "-39",
          "shieldLag": "4/8",
          "shieldStun": "3/7",
          "hitboxes": "Multi/Final",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "21",
          "active": "21—23",
          "total": "40",
          "endlag": "17",
          "damage": "16.0",
          "advantage": "-8",
          "shieldLag": "14",
          "shieldStun": "11",
          "notes": "Charge hold is frame 15"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "7/11/15/19/23/27",
          "active": "7—8/11—12/15—16/19—20/23—24/27—28",
          "total": "49",
          "endlag": "21",
          "landingLag": "10",
          "damage": "1.6/4.0",
          "advantage": "-8/-7",
          "shieldLag": "7/10",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 46 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—9",
          "total": "39",
          "endlag": "30",
          "landingLag": "8",
          "damage": "13.0",
          "advantage": "-3",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 37 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "13",
          "active": "13—17",
          "total": "39",
          "endlag": "22",
          "landingLag": "10",
          "damage": "13.0/11.0/9.0",
          "advantage": "-5/-6/-6",
          "shieldLag": "9/8/7",
          "shieldStun": "5/4/4",
          "hitboxes": "Close/med/far",
          "notes": "Autocancels on frame 1-2 and 38 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "10",
          "active": "10—14",
          "total": "39",
          "endlag": "25",
          "landingLag": "8",
          "damage": "12.0/11.0/10.0",
          "advantage": "-3/-4/-4",
          "shieldLag": "9/8/8",
          "shieldStun": "5/4/4",
          "hitboxes": "Close/med/far",
          "notes": "Autocancels on frame 1-2 and 36 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "15",
          "active": "15—18",
          "total": "47",
          "endlag": "29",
          "landingLag": "11",
          "damage": "15.0/14.0",
          "advantage": "-6",
          "shieldLag": "12",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-3 and frame 42 onward"
        },
        {
          "name": "Neutral B (Shadow Ball)",
          "section": "special",
          "startup": "9(+12)",
          "total": "27",
          "landingLag": "29",
          "damage": "2.5—24.9",
          "advantage": "-16 to -2",
          "shieldLag": "5—14",
          "shieldStun": "2—7",
          "notes": "9 startup from charge state. 12 to enter charge state. Takes 4 frames to cancel charge with shield."
        },
        {
          "name": "Shadow Ball, Fully Charged",
          "section": "special",
          "startup": "16",
          "active": "16—98",
          "total": "39",
          "damage": "25.0",
          "advantage": "-2",
          "shieldLag": "14",
          "shieldStun": "7",
          "notes": "133 frames to reach full charge."
        },
        {
          "name": "Side B (Confusion)",
          "section": "special",
          "startup": "10 (21/23/25/27/29/31/33/39)",
          "active": "10—13",
          "total": "39/42",
          "endlag": "26",
          "notes": "Grab is on frame 10, the following hits are when successful. 44 total frames when you miss. Reflector active 10-33."
        },
        {
          "name": "Up B (Teleport)",
          "section": "special",
          "total": "44",
          "landingLag": "20",
          "notes": "Total frames is if you end on the ground. Intangible from 9-19. Grabs ledges as early as frame 16."
        },
        {
          "name": "Down B (Disable)",
          "section": "special",
          "startup": "16",
          "active": "16—23",
          "total": "52",
          "endlag": "29",
          "damage": "1.0",
          "advantage": "-30",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "Intangible on frames 10-16"
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
          "total": "47",
          "endlag": "36"
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
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "19/33/40/47/54/61",
          "total": "81",
          "damage": "3.0/2.0",
          "notes": "Fires shadow balls on 33,40,47,54, and 61."
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "30",
          "total": "54",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "43",
          "total": "79",
          "damage": "12.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "16/18",
          "total": "41",
          "damage": "4.0/5.0"
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
          "total": "51",
          "landingLag": "10",
          "notes": "Intangible on frame 3-26"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "70",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "79",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "101",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "114",
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
    "url": "https://ultimateframedata.com/mewtwo",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
