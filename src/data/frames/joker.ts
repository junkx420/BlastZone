// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "joker",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "4",
          "active": "4—5(4—5)",
          "total": "23",
          "endlag": "18",
          "damage": "2.0(2.7)",
          "advantage": "-16",
          "shieldLag": "7/7",
          "shieldStun": "3/3",
          "notes": "Transitions to jab 2 on frame 7"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "3",
          "active": "3—4(3—4)",
          "total": "23",
          "endlag": "19",
          "damage": "1.5(2.2)",
          "advantage": "-17",
          "shieldLag": "7/7",
          "shieldStun": "3/3",
          "notes": "Transitions to jab 3 on frame 11"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "3",
          "active": "3—4(3—4)",
          "total": "34",
          "endlag": "30",
          "damage": "4.0(7.1)",
          "advantage": "-26",
          "shieldLag": "9/10",
          "shieldStun": "5/5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "8/13",
          "active": "8—9/13—15(8—9/13—19)",
          "total": "34",
          "endlag": "15",
          "damage": "3.0/5.0(3.0/10.0)",
          "advantage": "**/-15(**/-11)",
          "shieldLag": "5/6 // 5/10",
          "shieldStun": "4/6 // 4/10",
          "notes": "Down-angled Forward Tilt does the most knockback of the three angles."
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "8/11/14/17/20",
          "active": "8/9(11—19) [Final Hit: 20—23(20—23)]",
          "total": "40",
          "damage": "4.0/1.0/1.0 (4.0/1.7/3.9)",
          "advantage": "-27",
          "shieldLag": "5/4/4 // 5/4/9",
          "shieldStun": "5/2/2 // 5/*/5",
          "hitboxes": "First/Multi/Final",
          "notes": "Rehit rate: 3"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "8",
          "active": "8—9/10—11/12—14(8—9/10—11/12—14)",
          "total": "37",
          "endlag": "23",
          "damage": "6.0(13.0)",
          "advantage": "-22(-19)",
          "shieldLag": "6/10",
          "shieldStun": "6/10"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "6/15",
          "active": "6—7/15—21(--/15—21)",
          "total": "45",
          "endlag": "24",
          "damage": "2.0/6.0 (2.0/12.0)",
          "advantage": "**/-23",
          "shieldLag": "4/6 // 4/10",
          "shieldStun": "3/6 // 3/7"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "16",
          "active": "16—18(16—19)",
          "total": "47",
          "endlag": "28",
          "damage": "14.0(22.0)",
          "advantage": "-21",
          "shieldLag": "10/11",
          "shieldStun": "10/12",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "10",
          "active": "10—14(10—14)",
          "total": "51",
          "endlag": "37",
          "damage": "12.0(17.0)",
          "advantage": "-32(-30)",
          "shieldLag": "9/12",
          "shieldStun": "8/10",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "12/16",
          "active": "12—13/16—17(12—13/16—17)",
          "total": "51",
          "endlag": "34",
          "damage": "12.0(18.0)",
          "advantage": "-24/-20(--/-18)",
          "shieldLag": "9/11",
          "shieldStun": "8/9",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "12",
          "active": "12—27(12—27)",
          "total": "54",
          "endlag": "27",
          "landingLag": "8",
          "damage": "7.0/—(7.0/4.0)",
          "advantage": "-5",
          "shieldLag": "7 // 7/5",
          "shieldStun": "3 // 3/3",
          "hitboxes": "front/back",
          "notes": "Arsene version has a separate hit covering Joker's back. Autocancels on frame 1-4 and 48 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "7/12",
          "active": "7—8/12—14(--/12—14)",
          "total": "47",
          "endlag": "33",
          "landingLag": "12",
          "damage": "2.0/5.0(2.0/13.0)",
          "advantage": "-10/-9",
          "shieldLag": "4/6 // 4/11",
          "shieldStun": "2/3 // 2/4",
          "notes": "Autocancels on frame 1-3 and 42 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—8(7—8)",
          "total": "31",
          "endlag": "23",
          "landingLag": "9",
          "damage": "9.0(16.0)",
          "advantage": "-5",
          "shieldLag": "7/10",
          "shieldStun": "4/4",
          "notes": "Autocancels on frame 1-3 and 30 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "5...",
          "active": "5—18/20—21 (rehit: 4)",
          "total": "39",
          "endlag": "18",
          "landingLag": "14",
          "damage": "0.7/3.0 (0.7/10.0)",
          "advantage": "-12",
          "shieldLag": "4/5 // 4/11",
          "shieldStun": "2/2 // 2/3",
          "hitboxes": "multi/final",
          "notes": "Autocancels on frame 1-4 and 40 onward. Rehit rate: 4"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "13",
          "active": "13—16(15—16)",
          "total": "46",
          "endlag": "30",
          "landingLag": "11",
          "damage": "8.0/—(8.0/8.0)",
          "advantage": "-7",
          "shieldLag": "7 // 7/10",
          "shieldStun": "4 // 4/4",
          "hitboxes": "Knife/Meteor",
          "notes": "Arsene version has separate meteor hit on frame 15. Autocancels on frame 1-3 and 40 onward"
        },
        {
          "name": "Neutral B (Gun)",
          "section": "special",
          "startup": "12/37/65",
          "active": "12",
          "total": "36/61/92",
          "endlag": "24",
          "damage": "5.0/3.0/1.0",
          "shieldLag": "6/0/0",
          "shieldStun": "6/5/3",
          "hitboxes": "Close/Med/Far",
          "notes": "Earliest you can input another shot, dash, or jump is frame 26. Earliest you can input spiral or shoot below is frame 14. Hitstun decreases with range, up to no hitstun at all when far."
        },
        {
          "name": "Gun, Dash Forward",
          "section": "special",
          "startup": "20",
          "active": "20",
          "total": "39",
          "endlag": "19",
          "damage": "6.0/4.0/2.0",
          "shieldLag": "6/0/0",
          "shieldStun": "6/6/4",
          "hitboxes": "Close/Med/Far",
          "notes": "Invulnerable on frame 4-13. Is affected by and contributes to dodge staling. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Gun, Dash Back",
          "section": "special",
          "startup": "22",
          "active": "22",
          "total": "45",
          "endlag": "23",
          "damage": "5.0/3.0/1.0",
          "shieldLag": "0/0/0",
          "shieldStun": "7/5/3",
          "hitboxes": "Close/Med/Far",
          "notes": "Invulnerable on frame 5-14. Is affected by and contributes to dodge staling. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Gun, Jump (From Ground Only)",
          "section": "special",
          "startup": "10/17/24/31",
          "active": "10/17/24/31",
          "total": "59",
          "endlag": "28",
          "landingLag": "14",
          "damage": "3.0/0.8",
          "shieldLag": "5/0",
          "shieldStun": "4/3",
          "hitboxes": "Close/far",
          "notes": "Invulnerable on frame 1-6. Is *not* affected by nor contributes to dodge staling. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Gun, Spiral (From Air Only)",
          "section": "special",
          "startup": "12/15/18/24/27/30/ 36/39/42/48/51/54",
          "active": "12/15/18/24/27/30/ 36/39/42/48/51/54",
          "total": "69",
          "endlag": "15",
          "landingLag": "20",
          "damage": "3.0",
          "shieldLag": "0",
          "shieldStun": "5",
          "notes": "Can be extended for more shots. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Gun, Shoot Below (From Air Only)",
          "section": "special",
          "startup": "7/21/35/44",
          "active": "7/21/35/44",
          "total": "48",
          "endlag": "4",
          "landingLag": "10",
          "damage": "4.0/1.2",
          "shieldLag": "0/0",
          "shieldStun": "6/3",
          "hitboxes": "Close/Far",
          "notes": "Can be extended for more shots. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Neutral B, Arsene (Gun Special, Arsene)",
          "section": "special",
          "startup": "12/18/24",
          "active": "12/18/24",
          "total": "41/**/**",
          "endlag": "17",
          "damage": "6.0/3.0/1.0",
          "shieldLag": "6/0/0/0",
          "shieldStun": "*/4/4/3",
          "hitboxes": "close/med/far/farthest",
          "notes": "Earliest you can input another shot, dash, or jump is frame 34. Earliest you can input spiral or shoot below is frame 15. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Gun Special, Dash Forward",
          "section": "special",
          "startup": "21/27/33",
          "active": "21/27/33",
          "total": "45",
          "endlag": "12",
          "damage": "7.0/4.0/1.5/1.0",
          "shieldLag": "0/0/0/0",
          "shieldStun": "*/4/4/3",
          "hitboxes": "Close/Med/Far/Farthest",
          "notes": "Invulnerable on frame 4-13. Is affected by and contributes to dodge staling. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Gun Special, Dash Back",
          "section": "special",
          "startup": "23/29/35",
          "active": "23/29/35",
          "total": "49",
          "endlag": "14",
          "damage": "5.0/3.0/1.0",
          "shieldLag": "0/0/0",
          "shieldStun": "*/4/3",
          "hitboxes": "Close/Med/Far",
          "notes": "Invulnerable on frame 5-14. Is affected by and contributes to dodge staling. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Gun Special, Jump (From Ground Only)",
          "section": "special",
          "startup": "10/13/17/20/24/27/31",
          "active": "10/13/17/20/24/27/31",
          "total": "59",
          "endlag": "28",
          "landingLag": "14",
          "damage": "3.0/0.8",
          "shieldLag": "5/2",
          "shieldStun": "*/2",
          "hitboxes": "Close/far",
          "notes": "Invulnerable on frame 1-6. Is *not* affected by or contributes to dodge staling. Added shots in Arsene version deal just 1.0 damage. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Gun Special, Spiral (From Air Only)",
          "section": "special",
          "startup": "12/15/18/24/27/30/ 36/39/42/48/51/54",
          "active": "12/15/18/24/27/30/ 36/39/42/48/51/54",
          "total": "69",
          "endlag": "15",
          "landingLag": "20",
          "damage": "4.5",
          "shieldLag": "0",
          "shieldStun": "6",
          "notes": "Can be extended for more shots. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Gun Special, Shoot Below (From Air Only)",
          "section": "special",
          "startup": "7/14/21/28/35/44",
          "active": "7/14/21/28/35/44",
          "total": "48",
          "endlag": "4",
          "landingLag": "10",
          "damage": "4.0/1.6",
          "shieldLag": "0/0",
          "shieldStun": "6/3",
          "hitboxes": "Close/Far",
          "notes": "Can be extended for more shots. Added shots in Arsene version deal just 0.8. Buffering gun maneuvers delays them by 4 frames."
        },
        {
          "name": "Side B (Eiha)",
          "section": "special",
          "startup": "16",
          "active": "16—42/1—19",
          "total": "52",
          "endlag": "10",
          "damage": "1.0/2.0",
          "advantage": "-27",
          "shieldLag": "4",
          "shieldStun": "2",
          "hitboxes": "Contact/Erupt",
          "notes": "Erupts a frame after contact, but won't erupt on shields. Eiha has a Rehit Rate of 45, dealing 1% every 361 frames (additional damage in 1v1)."
        },
        {
          "name": "Side B, Arsene (Eigaon)",
          "section": "special",
          "startup": "16 (1/6/11/16)",
          "active": "16—32(1—15/16—27)",
          "total": "57",
          "endlag": "25",
          "damage": "1.0/0.5/2.5",
          "shieldLag": "4",
          "shieldStun": "2",
          "hitboxes": "Contact/Erupt",
          "notes": "Eruption hits in parenthesis, but won't erupt on shields. Eigaon's Curse has a Rehit Rate of 40, and deals 1.5% each time. Lasts 321 Frames."
        },
        {
          "name": "Up B (Grappling Hook)",
          "section": "special",
          "startup": "20",
          "active": "20—26",
          "total": "59/44",
          "endlag": "33",
          "notes": "Tethers on frame 12. Second total frames is for the air. Does not induce special fall"
        },
        {
          "name": "Air, Grappling Attack",
          "section": "special",
          "startup": "5",
          "active": "5",
          "total": "28",
          "endlag": "23",
          "damage": "11.0",
          "notes": "The air version cannot grab, instead hitting the target for 5.0 damage."
        },
        {
          "name": "Up B, Arsene (Wings of Rebellion)",
          "section": "special",
          "landingLag": "30",
          "notes": "Invulnerable on frame 1-25 (3-25 in air)"
        },
        {
          "name": "Down B (Rebel's Guard)",
          "section": "special",
          "startup": "3 (Start of Block)",
          "total": "52",
          "notes": "Total frames is for minimum usage. 33 endlag for extended usage. Begins blocking on frame 3. Can only counterattack after a block. When hit during Rebel's Guard, Joker will gain Rebellion Gauge units equal to Damage*6.7368*1.3*0.4. Taking 28.6% will fill the meter completely. He will also take 0.4* the damage. This IS affected by the 1v1 Multiplier. Has an inherent 1.1x Hitstun Multiplier, and 1.5x Hitlag Multiplier."
        },
        {
          "name": "Rebel's Guard, Counterattack",
          "section": "special",
          "startup": "8",
          "active": "8—9",
          "total": "30",
          "endlag": "21",
          "damage": "2.4",
          "notes": "Invulnerable on frame 1-14"
        },
        {
          "name": "Down B, Arsene (Tetrakarn/Makarakarn)",
          "section": "special",
          "startup": "4 (Start of Counter)",
          "active": "4—31(Counter/Reflect active)",
          "total": "57",
          "notes": "Invulnerable on frame 3. Counters/reflects on frame 4-31. 1.6* Damage Multiplier with a minimum of 12% and maximum of 50%."
        },
        {
          "name": "Arsene, Tetrakarn Counterattack",
          "section": "special",
          "startup": "4",
          "active": "5—7",
          "total": "38",
          "endlag": "31",
          "notes": "Invulnerable on frame 1-8 in addition to counter freeze frames"
        },
        {
          "name": "Arsene, Makarakarn Reflect",
          "section": "special",
          "active": "1—29",
          "total": "41",
          "endlag": "12",
          "notes": "Arm intangible on frame 1-29"
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
          "startup": "8",
          "active": "8—9",
          "total": "42",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "9",
          "active": "9—10",
          "total": "37",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "1",
          "total": "19",
          "damage": "1.5",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "9",
          "total": "29",
          "damage": "8.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "14",
          "total": "39",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "16",
          "total": "37",
          "damage": "7.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "23",
          "total": "40",
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
          "notes": "Intangible on frame 4-15."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "34",
          "notes": "Intangible on frame 5-16."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "47",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "67",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "73",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "83",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "90",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "100",
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
    "url": "https://ultimateframedata.com/joker",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
