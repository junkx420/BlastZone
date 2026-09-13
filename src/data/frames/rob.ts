// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "rob",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "3",
          "active": "3—4",
          "total": "20",
          "endlag": "16",
          "damage": "3.0",
          "advantage": "-13",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Transitions to jab 2 as early as frame 11"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "3",
          "active": "3—4",
          "total": "20",
          "endlag": "16",
          "damage": "3.0",
          "advantage": "-13",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "7",
          "active": "7—9",
          "total": "33",
          "endlag": "24",
          "damage": "7.0/8.0/10.0",
          "advantage": "-18",
          "shieldLag": "7",
          "shieldStun": "8",
          "hitboxes": "Close/Mid/Far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "4/6",
          "active": "4—5/6—7",
          "total": "26",
          "endlag": "19",
          "damage": "3.0/5.0/6.0",
          "advantage": "-14",
          "shieldLag": "5/6",
          "shieldStun": "4/6",
          "hitboxes": "Hit 1/Hit 2 Far/Hit 3 Close"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "3",
          "active": "3",
          "total": "14",
          "endlag": "11",
          "damage": "5.0",
          "advantage": "-5",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "7",
          "active": "7—8",
          "total": "31",
          "endlag": "23",
          "damage": "7.0",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "16",
          "active": "16—17",
          "total": "54",
          "endlag": "37",
          "damage": "15.0/11.5/6.0",
          "advantage": "-28/-30/-33",
          "shieldLag": "15/13/9",
          "shieldStun": "10/8/5",
          "hitboxes": "Close/Far/Farther",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "10/14",
          "active": "10—11/14—18",
          "total": "48",
          "endlag": "30",
          "damage": "3.0/14.0/13.0",
          "advantage": "-35/-24",
          "shieldLag": "5/10",
          "shieldStun": "3/10",
          "hitboxes": "Hit 1/Hit 2 Close/Hit 2 Far",
          "notes": "Charge hold is frame 7"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "7/11/16",
          "active": "7—8/11—12/16",
          "total": "45",
          "endlag": "29",
          "damage": "3.5/3.0/5.0",
          "advantage": "-25",
          "shieldLag": "5/12",
          "shieldStun": "3/4",
          "hitboxes": "Multi Close/Multi Far/Final",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "14",
          "active": "14—32",
          "total": "47",
          "endlag": "15",
          "landingLag": "7",
          "damage": "7.5/9.5",
          "advantage": "-4/-3",
          "shieldLag": "7/8",
          "shieldStun": "3/4",
          "hitboxes": "Close/Final",
          "notes": "Autocancels on frame 33 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "6",
          "active": "6—8",
          "total": "35",
          "endlag": "27",
          "landingLag": "9",
          "damage": "7.0",
          "advantage": "-6",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Autocancels on frame 25 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "19",
          "active": "19—23/24—32",
          "total": "52",
          "endlag": "20",
          "landingLag": "13",
          "damage": "15.0/13.0/9.0/7.5",
          "advantage": "-8/-9",
          "shieldLag": "12/11/9",
          "shieldStun": "5/5/4",
          "hitboxes": "Early Close/Early Far/Late Close/Late Far",
          "notes": "Autocancels on frame 46 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "7/9/13/17/23",
          "active": "7/9/13/17/23—24",
          "total": "51",
          "endlag": "27",
          "landingLag": "13",
          "damage": "1.5/4.0",
          "advantage": "-11/-10",
          "shieldLag": "4/11",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 40 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "20",
          "active": "20—21/20—26/22—26",
          "total": "69",
          "endlag": "43",
          "landingLag": "12",
          "damage": "(12.0/11.0/11.0/6.0)/(8.0/11.0/8.0/6.0)",
          "advantage": "-44/-45/-46",
          "shieldLag": "9/8/6",
          "shieldStun": "5/4/3",
          "hitboxes": "Early/Late (Close/Mid (Aerial)/Mid (Grounded)/Far)",
          "notes": "Autocancels on frame 45 onward. Advantage uses Total Frames"
        },
        {
          "name": "Neutral B (Robo Beam)",
          "section": "special",
          "startup": "25",
          "active": "25—27 (melee), 25—43 (small beam), 25—66 (large beam)",
          "total": "49",
          "damage": "7.0/4.5/11.5, 7.0/15.0/22.0",
          "advantage": "-17/-16/-17, -17/-6/-10",
          "shieldLag": "7/5/7, 7/13/13",
          "shieldStun": "7/3/7, 7/5/14",
          "hitboxes": "Small Beam Close/Far/farther, Large Beam Melee/beam/both",
          "notes": "Melee attack and projectile generate on same frame"
        },
        {
          "name": "Side B (Arm Rotor)",
          "section": "special",
          "startup": "13...",
          "active": "13/14—21/22—37/44",
          "total": "85",
          "endlag": "41",
          "damage": "1.5/3.0",
          "advantage": "-37",
          "shieldLag": "4/12",
          "shieldStun": "3/4",
          "hitboxes": "Multi/Final",
          "notes": "Multihits have no hitlag but do have shieldlag. Reflects on frame 13-35. Mashing extends the duration of the multihits."
        },
        {
          "name": "Side B (Arm Rotor, Mashing)",
          "section": "special",
          "startup": "13/18/23/28/33/38/ 43/48/53/58/66",
          "total": "107",
          "damage": "1.5/3.0",
          "advantage": "-37",
          "shieldLag": "4/12",
          "shieldStun": "3/4",
          "hitboxes": "Multi/Final",
          "notes": "Multihits have no hitlag but do have shieldlag. Reflects on frame 13-60"
        },
        {
          "name": "Up B (Robo Burner)",
          "section": "special",
          "notes": "Invulnerable on frame 2-4 on the ground. Ungrabbable on frames 1-24. Can act on frame 25. Fuel lasts up to 143 frames."
        },
        {
          "name": "Down B (Gyro)",
          "section": "special",
          "startup": "3(+6), 9",
          "total": "36, 42",
          "damage": "3.6—10.7, 10.7",
          "advantage": "-26 to -21, -21",
          "shieldLag": "5—8, 8",
          "shieldStun": "2—4, 4",
          "hitboxes": "Normal, Full Charge",
          "notes": "3 startup from charging state. 6 frames to enter charging state. Reaches full charge on frame 98. Damage depends on current item velocity."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "6",
          "active": "6—7",
          "total": "37",
          "endlag": "30"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "9",
          "active": "9—10",
          "total": "45",
          "endlag": "35"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "10",
          "active": "10—11",
          "total": "40",
          "endlag": "29"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "1",
          "total": "18",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "11",
          "total": "23",
          "damage": "8.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "12",
          "total": "26",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "58",
          "total": "81",
          "damage": "12.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "50",
          "total": "75",
          "damage": "5.0",
          "notes": "Buries"
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
          "total": "50",
          "landingLag": "10",
          "notes": "Intangible on frame 3-27"
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
          "total": "75",
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
          "total": "100",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "111",
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
    "url": "https://ultimateframedata.com/rob",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
