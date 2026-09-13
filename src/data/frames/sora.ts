// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "sora",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "5",
          "active": "5—12",
          "total": "36",
          "endlag": "24",
          "damage": "2.8",
          "advantage": "-22",
          "shieldLag": "5",
          "shieldStun": "8",
          "notes": "The blade is only hitting directly above at frame 5. Transitions to jab 2 as early as frame 19."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "7",
          "active": "7—10",
          "total": "37",
          "endlag": "27",
          "damage": "2.6",
          "advantage": "-22",
          "shieldLag": "5",
          "shieldStun": "8",
          "notes": "Transitions to Jab 3 as early as frame 18"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "10",
          "active": "10—17",
          "total": "45",
          "endlag": "28",
          "damage": "4.2",
          "advantage": "-23",
          "shieldLag": "5",
          "shieldStun": "12"
        },
        {
          "name": "Forward Tilt (Strong/Single)",
          "section": "ground",
          "startup": "13",
          "active": "13—17",
          "total": "41",
          "endlag": "24",
          "damage": "7.2",
          "advantage": "-12",
          "shieldLag": "7",
          "shieldStun": "15"
        },
        {
          "name": "FTilt 1 > FTilt 2 Combo",
          "section": "ground",
          "startup": "13, 7",
          "active": "13—17, 7—10",
          "total": "40, 35",
          "endlag": "27",
          "damage": "5.2, 3.6",
          "advantage": "-17",
          "shieldLag": "5, 5",
          "shieldStun": "14, 10",
          "hitboxes": "First Hit, Second Hit"
        },
        {
          "name": "Forward Tilt 3",
          "section": "ground",
          "startup": "10",
          "active": "10—14",
          "total": "45",
          "endlag": "31",
          "damage": "6.4",
          "advantage": "-23",
          "shieldLag": "6",
          "shieldStun": "14"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "8/12/16/20/24/28/33",
          "active": "8—9/12—13/16—17/20—21/24—25/28—29/33—36",
          "total": "53",
          "endlag": "17",
          "damage": "0.8/1.2/4.6",
          "advantage": "-13",
          "shieldLag": "4/4/6",
          "shieldStun": "2/2/5"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "9",
          "active": "9—10",
          "total": "31",
          "endlag": "21",
          "damage": "5.2",
          "advantage": "-16",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "7",
          "active": "7—12(13—18/19—24)",
          "total": "47",
          "endlag": "23",
          "damage": "9.6/7.6/7.2",
          "advantage": "-21",
          "shieldLag": "8/7",
          "shieldStun": "18/15",
          "hitboxes": "Early/Late",
          "notes": "Lower leg intangibility on 7-18. Extra hurtbox between Sora's legs on 22-39."
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "16",
          "active": "16—17(18—20)",
          "total": "52",
          "endlag": "32",
          "damage": "13.8/15.4",
          "advantage": "-16",
          "shieldLag": "12",
          "shieldStun": "19",
          "hitboxes": "Early/Late",
          "notes": "Charge hold on frame 5."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "11/16",
          "active": "11—12/16—19",
          "total": "52",
          "endlag": "33",
          "damage": "0.6/14.6",
          "advantage": "-26",
          "shieldLag": "0/10",
          "shieldStun": "3/10",
          "notes": "Charge hold on frame 6."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "20",
          "active": "20—23(20—22)",
          "total": "55",
          "endlag": "32",
          "damage": "15.2/14.2",
          "advantage": "-24",
          "shieldLag": "10/10",
          "shieldStun": "10/10",
          "hitboxes": "Close/Far",
          "notes": "Fully intangible on frame 3-6. Lower body intangibility on frame 7-10. Charge hold on frame 2."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "8",
          "active": "8—20",
          "total": "41",
          "endlag": "21",
          "landingLag": "9",
          "damage": "3.8",
          "advantage": "-6",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to N-air 2 as early as frame 23. Autocancels on frame 30 onward."
        },
        {
          "name": "Neutral Air 2",
          "section": "aerial",
          "startup": "6",
          "active": "6—10",
          "total": "33",
          "endlag": "23",
          "landingLag": "10",
          "damage": "3.5",
          "advantage": "-8",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Transitions to N-air 3 as early as frame 20. Autocancels on frame 28 onward"
        },
        {
          "name": "Neutral Air 3",
          "section": "aerial",
          "startup": "8",
          "active": "9—13",
          "total": "41",
          "endlag": "28",
          "landingLag": "11",
          "damage": "6.8",
          "advantage": "-8",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Autocancels on frame 36 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "10",
          "active": "10—15",
          "total": "43",
          "endlag": "28",
          "landingLag": "12",
          "damage": "4.8",
          "advantage": "-9",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Transitions to F-air 2 as early as frame 23. Autocancels on frame 1-2 and 38 onward"
        },
        {
          "name": "Forward Air 2",
          "section": "aerial",
          "startup": "6",
          "active": "6—10",
          "total": "33",
          "endlag": "23",
          "landingLag": "13",
          "damage": "4.0",
          "advantage": "-10",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to F-Air 3 as early as frame 20. Autocancels on frame 28 onward"
        },
        {
          "name": "Forward Air 3",
          "section": "aerial",
          "startup": "8",
          "active": "9—13",
          "total": "41",
          "endlag": "28",
          "landingLag": "14",
          "damage": "6.8",
          "advantage": "-11",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Autocancels on frame 36 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "13",
          "active": "13—15",
          "total": "37",
          "endlag": "22",
          "landingLag": "11",
          "damage": "13.2",
          "advantage": "-6",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-4 and 37 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "10",
          "active": "10—18",
          "total": "41",
          "endlag": "23",
          "landingLag": "10",
          "damage": "12.2",
          "advantage": "-5",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 32 onward. Scoop active 10-11."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "15",
          "active": "15—44",
          "total": "57",
          "endlag": "13",
          "landingLag": "28",
          "damage": "9.8/5.5",
          "advantage": "-21",
          "shieldLag": "8/6",
          "shieldStun": "11/6",
          "hitboxes": "Falling/Landing",
          "notes": "Landing hit on frames 1-2. Autocancels on frame 46 onward."
        },
        {
          "name": "Neutral B (Firaga)",
          "section": "special",
          "startup": "16",
          "active": "16—25/26—35/36—55",
          "total": "41",
          "damage": "5.6/5.2/4.8",
          "advantage": "-14",
          "shieldLag": "6/6/6",
          "shieldStun": "6/6/6",
          "hitboxes": "Early/Late/Latest",
          "notes": "Can fire additional shots every 36 frames. Windbox on frames 14—15."
        },
        {
          "name": "Neutral B (Thundaga)",
          "section": "special",
          "startup": "30/44/58",
          "active": "Ground: 30—52/44—66/58—80 Air: 29—52/43—66/58—80",
          "total": "69",
          "damage": "5.2",
          "shieldLag": "9",
          "shieldStun": "3",
          "notes": "Startup refers to when the lightning bolts become active."
        },
        {
          "name": "Neutral B (Blizzaga)",
          "section": "special",
          "startup": "15...",
          "active": "... see notes :)",
          "total": "55",
          "damage": "2.4/3.6/1.8",
          "advantage": "-17",
          "shieldLag": "*/*/5",
          "shieldStun": "*/*/2",
          "hitboxes": "Shard/Final Shard/Final",
          "notes": "Windbox starts on 13. Active frame notes: each line is a different ice shard. First line is Windbox/Final, the shards are Early/Mid/Late (except last one). Only size and knockback changes. 13-14/35-36 15-17/18-20/21-27 18-20/21-23/24-30 20-22/23-25/26-32 23-25/26-28/29-35 25-27/28-30/31-37 28-30/31-33/34-40 30-32/33-35/36-42 33-37/38-47"
        },
        {
          "name": "Side B (Sonic Blade)",
          "section": "special",
          "startup": "17/45/73",
          "total": "48/88/120",
          "landingLag": "20",
          "damage": "5.2 (5.2/3.0)",
          "advantage": "-25/-39/-43",
          "shieldLag": "6/5/5",
          "shieldStun": "6/4/4",
          "hitboxes": "First/Second/Third",
          "notes": "Total frames refers to travel along the ground. Second and third lunges are voluntary. Hit 1 always does 5.2 damage, hit 2/3 do 5.2 if homing or 3.0 when manually aiming."
        },
        {
          "name": "Up B (Aerial Sweep)",
          "section": "special",
          "startup": "9...",
          "active": "(9/10-11)/17-19/20-22/24-26/27-29/31-33/41-43",
          "landingLag": "21",
          "damage": "3.8/2.1/4.6",
          "shieldLag": "5/4/6",
          "shieldStun": "5/3/5",
          "hitboxes": "First/Multi/Final",
          "notes": "Can cancel into Sonic Blade on frame 50"
        },
        {
          "name": "Down B (Counterattack)",
          "section": "special",
          "startup": "7",
          "active": "7—25 (counter)",
          "total": "51",
          "notes": "Full intangibility on frames 7-8. Counters on frames 8—25. Sora must be facing the attacker."
        },
        {
          "name": "Down B (Counterattack, Success)",
          "section": "special",
          "startup": "25",
          "active": "25—29",
          "total": "49",
          "endlag": "20",
          "notes": "Full intangibility on frame 1-29 (not including freeze frames). When countering a projectile, the first 22 frames of startup are skipped. When turning around, is active on frames 31—35 with 55 total frames and full intangibility on 1-35."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "7",
          "active": "7—8",
          "total": "35",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "10",
          "active": "10—11",
          "total": "41",
          "endlag": "30"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "11",
          "active": "11—12",
          "total": "37",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "1",
          "total": "18",
          "landingLag": "Total frames includes 13 frames of hitlag.",
          "damage": "1.3"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "15/16",
          "total": "41",
          "damage": "5.0/3.0",
          "notes": "Hitbox/Throw"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "11",
          "total": "57",
          "damage": "11.8",
          "notes": "Collateral hitbox on frames 11—31."
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "13",
          "total": "37",
          "damage": "6.8"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "19",
          "total": "39",
          "damage": "4.6"
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
          "total": "54",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "74",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "83",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "92",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "111",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "119",
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
    "url": "https://ultimateframedata.com/sora",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
