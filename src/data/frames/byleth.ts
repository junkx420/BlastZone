// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "byleth",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "4",
          "active": "4—5",
          "total": "22",
          "endlag": "17",
          "damage": "1.5",
          "advantage": "-15",
          "shieldLag": "8",
          "shieldStun": "3"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "4",
          "active": "4—5",
          "total": "24",
          "endlag": "19",
          "damage": "2.0",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "3"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "5",
          "active": "5—7",
          "total": "34",
          "endlag": "27",
          "damage": "4.5",
          "advantage": "-22",
          "shieldLag": "12",
          "shieldStun": "5"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "startup": "11",
          "active": "11/14/17/20/23/...",
          "damage": "0.4",
          "shieldLag": "4",
          "shieldStun": "2"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "startup": "6",
          "active": "6—7",
          "total": "50",
          "endlag": "43",
          "damage": "3.5",
          "advantage": "-40",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "8",
          "active": "8—10",
          "total": "34",
          "endlag": "24",
          "damage": "11.0",
          "advantage": "-15",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "9",
          "active": "9—15",
          "total": "34",
          "endlag": "19",
          "damage": "10.0",
          "advantage": "-15",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "13",
          "active": "13—15",
          "total": "35",
          "endlag": "20",
          "damage": "8.0",
          "advantage": "-14",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "9",
          "active": "9—11",
          "total": "44",
          "endlag": "33",
          "damage": "9.0/13.0",
          "advantage": "-26/-23",
          "shieldLag": "7/13",
          "shieldStun": "9/12",
          "hitboxes": "Sour/Sweet"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "23",
          "active": "23—25",
          "total": "63",
          "endlag": "38",
          "damage": "Normal: 12.0/18.0 || Down: 11.5/17.25 || Up: 13.0/19.5",
          "advantage": "-31/-27 || -32/-28 || -32/-28",
          "shieldLag": "9/15 || 9/16 || 9/15",
          "hitboxes": "Normal/Down/Up (Sour/Sweet for each)",
          "notes": "Charge Hold is frame 14. The up-angled version is the most powerful."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "13",
          "active": "13—16(rehit: 7)/17—27(rehit: 4)/28—29",
          "total": "56",
          "endlag": "27",
          "damage": "2.0/2.0/2.0/10.0",
          "advantage": "-22",
          "shieldLag": "5/4/8",
          "shieldStun": "3/3/7",
          "hitboxes": "First/Multi/Final",
          "notes": "Charge hold is frame 7."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "19/29",
          "active": "19—21/29—31",
          "total": "74",
          "endlag": "43",
          "damage": "23.0/23.0",
          "advantage": "-40/-30",
          "shieldLag": "18",
          "shieldStun": "15",
          "hitboxes": "First/Second",
          "notes": "Charge hold is frame 3. 8 Shield Damage."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "6...",
          "active": "6—26(rehit: 7)/28/2",
          "total": "51",
          "endlag": "23",
          "landingLag": "13",
          "damage": "2.5/3.0/1.0",
          "advantage": "-11/-11/-9",
          "shieldLag": "5/7",
          "shieldStun": "2/2",
          "hitboxes": "Multihits/Final/Landing",
          "notes": "Autocancels on frame 1-5 and 39 onward. Landing hitbox on frame 2."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "12",
          "active": "12—13",
          "total": "39",
          "endlag": "26",
          "landingLag": "11",
          "damage": "12.75/8.5",
          "advantage": "-7/-6",
          "shieldLag": "7/11",
          "shieldStun": "4/5",
          "hitboxes": "Sweet/Sour",
          "notes": "Autocancels out of short hop, frame 1—2, and 36 onward."
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "13",
          "active": "13—14(15—17)",
          "total": "46",
          "endlag": "29",
          "landingLag": "13",
          "damage": "15.0/10.0 (7.5/5.0)",
          "advantage": "-9/-8",
          "shieldLag": "8/13",
          "shieldStun": "4/5",
          "hitboxes": "Sweet/Sour Early (Sweet/Sour Late)",
          "notes": "Autocancels frame 1-5 and 40 onward."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "10...",
          "active": "10—19(rehit: 5)/20—23",
          "total": "48",
          "endlag": "25",
          "landingLag": "14",
          "damage": "3.0/5.5",
          "advantage": "-12/-11",
          "shieldLag": "5/7",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-3 and 48 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "22",
          "active": "22—24",
          "total": "59",
          "endlag": "35",
          "landingLag": "28",
          "damage": "19.0",
          "advantage": "-21",
          "shieldLag": "17",
          "shieldStun": "7",
          "notes": "Autocancels on frame 1 and 52 onward. 6 Shield Damage."
        },
        {
          "name": "Neutral B (Failnaught)",
          "section": "special",
          "startup": "45/114",
          "active": "45—61 / 114",
          "total": "80/160",
          "damage": "12.0/29.0",
          "advantage": "-8/-21",
          "shieldLag": "11/16",
          "shieldStun": "12/8",
          "hitboxes": "Normal/Held",
          "notes": "Requires holding from the start, otherwise the same in terms of cancels and turnarounds. Both charged and non-charged arrows can be reflected, but only the fully charged version can be absorbed. Can be shield cancelled from F21. Can input a turnaround from F28."
        },
        {
          "name": "Side B (Areadbhar)",
          "section": "special",
          "startup": "Ground: 20 || Air: 21",
          "active": "Ground: 20/21/22—24 || Air: 21—24",
          "total": "Ground: 65 || Air: 61",
          "endlag": "41",
          "damage": "17.25/11.5",
          "advantage": "Ground: -20/-34 || Air: -16/-35",
          "shieldLag": "13/9",
          "shieldStun": "25/11",
          "hitboxes": "Sweet/Sour",
          "notes": "Sweetspot spawns a frame later than the sourspot for some reason, and gains priority for THAT ONE FRAME, and then loses it a frame later again. In air, landing lag equates to how many total frames remain upon landing"
        },
        {
          "name": "Up B (Sword of the Creator)",
          "section": "special",
          "startup": "9(ground) || 10(air)",
          "active": "9/10—17/46(ground) || 10—17/46(air)",
          "total": "46",
          "damage": "1.0/3.0/6.5",
          "advantage": "-35(ground) || **(air)",
          "hitboxes": "Hit/Grab/Final",
          "notes": "Tethers from F7 up to 3 times. Untechable spike starting from 46%, KB increases with tether grab distance. However, Rage does not appear to affect this, but freshness and staling do(?). Works as a hitgrab, so it can be shielded. Can be used to get Wall Jumps, from ~F8ish(?). No clue how ride up actually works but it recurs until F16. Frame 11 grounded hit does not occur if done in the air."
        },
        {
          "name": "Down B (Aymr)",
          "section": "special",
          "startup": "62",
          "active": "62—67/2—5",
          "total": "133",
          "endlag": "66",
          "damage": "Grounded: 30.0/8.0 (Aerial: 25.0/6.0)",
          "shieldLag": "25/22",
          "hitboxes": "Hit/Shockwave",
          "notes": "Turn Around window is F12-41. Reversal takes 8 frames. Does stuff with air speed F1-50, F53 adds speed, F60-65 forbids landing while forcing Aymr to pierce the ground, F65-117 does more stuff with air speed, F96 goes back to normal fall speed. Damage-based armor on frames 34—63 , but it does not apply when used from the air unless landing on frame 34 or earlier. Damage-based armor takes 36.0% damage in 1v1 and 30% damage in FFA/doubles."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "6",
          "active": "6—7",
          "total": "39",
          "endlag": "32"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "10",
          "active": "10—11",
          "total": "48",
          "endlag": "37"
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
          "total": "22",
          "notes": "Total frames includes 17 frames of hitlag (plus one in 1v1)"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "13",
          "total": "35",
          "damage": "6.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "30",
          "total": "43",
          "damage": "7.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "15",
          "total": "37",
          "damage": "9.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "13",
          "total": "31",
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
          "total": "49",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "68",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "76",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "83",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "97",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "111",
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
    "url": "https://ultimateframedata.com/byleth",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
