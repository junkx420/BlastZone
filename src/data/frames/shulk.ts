// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "shulk",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "5",
          "active": "5",
          "total": "25",
          "endlag": "20",
          "damage": "2.0",
          "advantage": "-17",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 11"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "5",
          "active": "5",
          "total": "33",
          "endlag": "28",
          "damage": "1.5",
          "advantage": "-25",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 12"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "6",
          "active": "6—7/8",
          "total": "44",
          "endlag": "36",
          "damage": "5.0/4.2",
          "advantage": "-32",
          "shieldLag": "12/11",
          "shieldStun": "6/5",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "12",
          "active": "12—13",
          "total": "43",
          "endlag": "30",
          "damage": "13.5/12.0",
          "advantage": "-19/-20",
          "shieldLag": "9/9",
          "shieldStun": "12/11",
          "hitboxes": "Blade/Beam"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "11",
          "active": "11—12/13—23",
          "total": "39",
          "endlag": "16",
          "damage": "10.0/9.0",
          "advantage": "-18/-19",
          "shieldLag": "8/7",
          "shieldStun": "10/9",
          "hitboxes": "Blade/Beam"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "10",
          "active": "10—11",
          "total": "31",
          "endlag": "20",
          "damage": "9.5/7.5",
          "advantage": "-12/-13",
          "shieldLag": "8/7",
          "shieldStun": "9/8",
          "hitboxes": "Blade/Beam"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "12",
          "active": "12—13",
          "total": "40",
          "endlag": "27",
          "damage": "12.5/11.0",
          "advantage": "-16/-18",
          "shieldLag": "9/8",
          "shieldStun": "12/10",
          "hitboxes": "Blade/Beam"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "14/23",
          "active": "14—15/23 (Angled: 14—16/23)",
          "total": "67",
          "endlag": "44",
          "damage": "5.5/13.0/11.5",
          "advantage": "-35/-36",
          "shieldLag": "9/16/15",
          "shieldStun": "5/9/8",
          "hitboxes": "First/Blade/Beam",
          "notes": "Charge hold is frame 8"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "18/30",
          "active": "(18—21/22—29)/(30—33)",
          "total": "67",
          "endlag": "34",
          "damage": "4.5/13.5",
          "advantage": "-28",
          "shieldLag": "5/9",
          "shieldStun": "4/9",
          "hitboxes": "First/Second",
          "notes": "Charge hold is frame 10"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "18/23/28/35/41",
          "active": "18—19/23—24/28—29/35—36/41—42",
          "total": "82",
          "endlag": "40",
          "damage": "14.0 / 11.0 / 12.0 / 10.0 / 10.0 / 8.0 / 8.0 / 6.0 / 6.0 / 4.0",
          "advantage": "-/-56/-51/-52/-47/-48/-41/-42/-36/-37",
          "shieldLag": "10/8/9/8/8/ 7/7/6/6/5",
          "shieldStun": "-/8/8/7/7/ 6/6/5/5/4",
          "hitboxes": "1st blade/beam, 2nd blade/beam, 3rd blade/beam, 4th blade/beam, 5th blade/beam",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "13",
          "active": "13—30",
          "total": "59",
          "endlag": "29",
          "landingLag": "6",
          "damage": "8.5/7.5",
          "advantage": "-2/-3",
          "shieldLag": "7/7",
          "shieldStun": "4/3",
          "hitboxes": "Blade/Beam",
          "notes": "Autocancels on frame 1-2 and 54 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "14",
          "active": "14—18",
          "total": "41",
          "endlag": "23",
          "landingLag": "10",
          "damage": "8.0/6.5",
          "advantage": "-6/-7",
          "shieldLag": "7/6",
          "shieldStun": "4/3",
          "hitboxes": "Blade/Beam",
          "notes": "Autocancels on frame 1-4 and 42 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "19",
          "active": "19—21(22—23)",
          "total": "54",
          "endlag": "31",
          "landingLag": "11",
          "damage": "12.5/8.5",
          "advantage": "-6/-7",
          "shieldLag": "9/7",
          "shieldStun": "5/4",
          "hitboxes": "Blade/Beam",
          "notes": "Autocancels on frame 1-2 and 43 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "14/24",
          "active": "14—16/24—26",
          "total": "54",
          "endlag": "28",
          "landingLag": "9",
          "damage": "5.5/10.5/8.0",
          "advantage": "-6/-5/-5",
          "shieldLag": "7/10/9",
          "shieldStun": "3/4/4",
          "hitboxes": "first/blade/beam",
          "notes": "Autocancels on frame 1-3 and 53 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "14/23",
          "active": "14—15/23—25",
          "total": "60",
          "endlag": "35",
          "landingLag": "14",
          "damage": "7.5/11.5/10.5",
          "advantage": "-11/-9/-10",
          "shieldLag": "7/9/8",
          "shieldStun": "3/5/4",
          "hitboxes": "first/blade/beam",
          "notes": "Autocancels on frame 1-2 and 52 onward"
        },
        {
          "name": "Neutral B (Monado Arts)",
          "section": "special",
          "total": "9",
          "notes": "Takes 4 frames to activate an art upon selection. 14 i-frames upon activating an art. Activation animation cancellable on frame 10."
        },
        {
          "name": "Side B (Back Slash)",
          "section": "special",
          "startup": "22",
          "active": "Ground: 22/23-31/32-33 Air: 22/23—...1—2",
          "total": "71",
          "endlag": "40",
          "landingLag": "40",
          "damage": "10.0/9.0/16.0/14.0",
          "advantage": "-29/-30/-25/-27",
          "shieldLag": "8/7/15/14",
          "shieldStun": "10/9/14/12",
          "hitboxes": "front blade/beam, back blade/beam",
          "notes": "Hits directly above Shulk at frame 22. Total frames is for level ground. Landing hit deals 1.0 less from the back. Block stats are for landing hit."
        },
        {
          "name": "Up B (Air Slash)",
          "section": "special",
          "startup": "10",
          "active": "10—11/12—14/15—17",
          "landingLag": "30",
          "damage": "6.0/5.0",
          "shieldLag": "6/6",
          "shieldStun": "6/6",
          "hitboxes": "Blade/Beam",
          "notes": "Transitions to second slash as early as frame 20"
        },
        {
          "name": "Air Slash 2",
          "section": "special",
          "startup": "9",
          "active": "9—10",
          "landingLag": "30",
          "damage": "5.5",
          "shieldLag": "8",
          "shieldStun": "6"
        },
        {
          "name": "Down B (Vision)",
          "section": "special",
          "startup": "7 (Start of Counter)",
          "total": "69",
          "notes": "Invulnerable on frame 6. Counters on 7-41 when fresh. No data on Activated/Reversal Vision at this time. Vision Forward hit has 79 total frames (active 37-39). Vision Back hit has 56 active frames and is active on 21-22."
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
          "total": "15",
          "landingLag": "Total frames includes 13 frames of hitlag.",
          "damage": "1.3"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "15/16",
          "total": "37",
          "damage": "3.0/5.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "18/20",
          "total": "45",
          "damage": "3.0/6.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "20/22",
          "total": "47",
          "damage": "3.0/4.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "23/25",
          "total": "43",
          "damage": "3.0/2.5"
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
          "total": "49",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "68",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "77",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "83",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "95",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "107",
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
    "url": "https://ultimateframedata.com/shulk",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
