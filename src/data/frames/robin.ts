// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "robin",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "4",
          "active": "4—5",
          "total": "31",
          "endlag": "26",
          "damage": "2.0",
          "advantage": "-24",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 9"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "5",
          "active": "5—6",
          "total": "34",
          "endlag": "28",
          "damage": "1.5",
          "advantage": "-26",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 9 or Rapid Jab on frame 8"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "6",
          "active": "6—7",
          "total": "35",
          "endlag": "28",
          "damage": "5.0",
          "advantage": "-23",
          "shieldLag": "12",
          "shieldStun": "6"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "startup": "4/6/8...",
          "damage": "0.9",
          "shieldLag": "4",
          "shieldStun": "3"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "startup": "5",
          "active": "5—6",
          "total": "47",
          "endlag": "41",
          "damage": "2.0",
          "advantage": "-39",
          "shieldLag": "14",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "9",
          "active": "9—10",
          "total": "32",
          "endlag": "22",
          "damage": "7.5",
          "advantage": "-15",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—14",
          "total": "32",
          "endlag": "18",
          "damage": "6.0",
          "advantage": "-20",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "7",
          "active": "7—8",
          "total": "21",
          "endlag": "13",
          "damage": "6.0",
          "advantage": "-8",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "8",
          "active": "8—10(11—18)",
          "total": "41",
          "endlag": "23",
          "damage": "10.0/6.0",
          "advantage": "-23",
          "shieldLag": "9/7",
          "shieldStun": "10/6",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "16",
          "active": "16—18(19—27)",
          "total": "57",
          "endlag": "30",
          "damage": "16.0/10.0/9.6",
          "advantage": "-30/-34",
          "shieldLag": "15/12/8",
          "shieldStun": "11/7/7",
          "hitboxes": "Early/Late/Bronze",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "12",
          "active": "12,13—16(17—32)",
          "total": "52",
          "endlag": "20",
          "damage": "10.0/15.0/9.0",
          "advantage": "-33/-30/-33",
          "shieldLag": "12/15/7",
          "shieldStun": "7/10/7",
          "hitboxes": "Close/Far/Bronze",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "16",
          "active": "16—17(19—22/23—28)",
          "total": "56",
          "endlag": "28",
          "damage": "15.0/12.0/8.0",
          "advantage": "-28/-34",
          "shieldLag": "15/13/7",
          "shieldStun": "-/8/6",
          "hitboxes": "Sword/spark/bronze",
          "notes": "Sparks generate on frame 20 for levin version. Charge hold is frame 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "7/20",
          "active": "7—10/20—23(24—28)",
          "total": "47",
          "endlag": "19",
          "landingLag": "11",
          "damage": "11.5/6.9",
          "advantage": "-6/-8",
          "shieldLag": "13/7",
          "shieldStun": "5/3",
          "hitboxes": "Levin/Bronze",
          "notes": "Autocancels on frame 1-3 and 32 onward (bronze) or 40 (levin)"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "12",
          "active": "12—15(16—19)",
          "total": "33",
          "endlag": "14",
          "landingLag": "11",
          "damage": "12.5/7.5",
          "advantage": "-6/-8",
          "shieldLag": "14/7",
          "shieldStun": "5/3",
          "hitboxes": "Levin/Bronze",
          "notes": "Autocancels on frame 1-3 and 27 onward (bronze) or 28 (levin)"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "9",
          "active": "9—10(11—16)",
          "total": "39",
          "endlag": "23",
          "landingLag": "11",
          "damage": "15.0/5.0/9.0",
          "advantage": "-6/-8/-7",
          "shieldLag": "15/9/7",
          "shieldStun": "5/3/4",
          "hitboxes": "Early/late/Bronze",
          "notes": "Autocancels on frame 32 onward (either version)"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "10",
          "active": "10—13(14—23)",
          "total": "45",
          "endlag": "22",
          "landingLag": "11",
          "damage": "13.0/5.0/7.8",
          "advantage": "-6/-8/-7",
          "shieldLag": "14/9/7",
          "shieldStun": "5/3/4",
          "hitboxes": "Early/Late/Bronze",
          "notes": "Autocancels on frame 1-4 and 27 onward (bronze) or 28 (levin)"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "13",
          "active": "13—15(16—17/18—24)",
          "total": "59",
          "endlag": "35",
          "landingLag": "16",
          "damage": "11.0/8.0/7.2/6.0",
          "advantage": "-12/-13",
          "shieldLag": "16/11/7/6",
          "shieldStun": "4/4/3/3",
          "hitboxes": "Levin Early/late, Bronze Early/late",
          "notes": "Autocancels on frame 48 onward (either version)"
        },
        {
          "name": "Neutral B (Thunder/Elthunder/Arcthunder)",
          "section": "special",
          "startup": "8/8/8",
          "active": "8—22 / 8—49 / 8—79",
          "total": "32/38/38",
          "damage": "5.5/11.0",
          "advantage": "-12/-13",
          "shieldLag": "9/13",
          "shieldStun": "3/4",
          "hitboxes": "Thunder/Elthunder/Arcthunder",
          "notes": "7 frames to enter charge state. 4 to cancel charge with shield 33 frames to reach Elthunder 73 to reach Arcthunder, 133 to reach Thoron. Empty Tome Thunder has 39 total frames."
        },
        {
          "name": "Arcthunder (Vortex)",
          "section": "special",
          "startup": "1...",
          "active": "1—16(rehit: 4)/17",
          "damage": "6.0/2.4/8.0",
          "advantage": "+0",
          "shieldLag": "-/-/11",
          "shieldStun": "-/-/3",
          "hitboxes": "First/Multi/Final"
        },
        {
          "name": "Thoron",
          "section": "special",
          "startup": "23/27/31/35/39/43/47",
          "active": "23—92(Rehit: 4)",
          "total": "74 (109 air)",
          "damage": "2.6/2.6",
          "advantage": "-20",
          "shieldLag": "-/7",
          "shieldStun": "-/2",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Side B (Arcfire)",
          "section": "special",
          "startup": "17",
          "active": "17—76",
          "total": "63",
          "endlag": "2",
          "damage": "2.0/1.3/4.0",
          "advantage": "+13",
          "shieldLag": "6/4/11",
          "shieldStun": "2/2/2",
          "hitboxes": "First/Multi/Final",
          "notes": "Pillar hits once every eight frames, ending on frame 50."
        },
        {
          "name": "Up B (Elwind)",
          "section": "special",
          "startup": "8/28",
          "active": "8(9—12/13—31) / 28—32(33—55)",
          "landingLag": "25",
          "damage": "7.0/5.0",
          "shieldLag": "7/6",
          "shieldStun": "3/3",
          "hitboxes": "Early/Late",
          "notes": "Hitbox animation note: The blades are relative to Robin's position when he shoots them. In-game, Robin will move after each blade is shot, so they are not relative to each other at all. Visual is default angle. Empty Tome Elwind has 51 total frames."
        },
        {
          "name": "Down B (Nosferatu)",
          "section": "special",
          "startup": "15",
          "active": "15—18",
          "total": "49",
          "endlag": "31",
          "notes": "Invulnerable on frame 15-18. 31 frames animation for releasing victim."
        },
        {
          "name": "Thrown Items",
          "section": "special"
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
          "total": "21",
          "damage": "1.5",
          "notes": "Total frames includes 15 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "16",
          "total": "31",
          "damage": "8.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "25",
          "total": "44",
          "damage": "11.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "15",
          "total": "47",
          "damage": "9.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "16",
          "total": "37",
          "damage": "6.0"
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
          "notes": "Intangible on frame 4-15"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "35",
          "notes": "Intangible on frame 5-16"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "51",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "73",
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
          "total": "86",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "103",
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
    "url": "https://ultimateframedata.com/robin",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
