// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "kazuya",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "misc",
          "startup": "6",
          "active": "6—7",
          "total": "22",
          "endlag": "15",
          "damage": "3.0",
          "advantage": "-11",
          "shieldLag": "5",
          "shieldStun": "5",
          "notes": "Transitions to Jab 2 as early as frame 9 if it doesn't connect"
        },
        {
          "name": "Jab 2",
          "section": "misc",
          "startup": "7",
          "active": "7—8",
          "total": "26",
          "endlag": "18",
          "damage": "3.0",
          "advantage": "-15",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Transitions to Jab 3 as early as frame 9 if it doesn't connect"
        },
        {
          "name": "Jab 3",
          "section": "misc",
          "startup": "7",
          "active": "7",
          "total": "30",
          "endlag": "23",
          "damage": "2.0",
          "advantage": "-20",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to jab 4 as early as frame 8 if it doesn't connect"
        },
        {
          "name": "Jab 4",
          "section": "misc",
          "startup": "10",
          "active": "11—12",
          "total": "39",
          "endlag": "27",
          "damage": "3.0",
          "advantage": "-25",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Transitions to Jab 5 as early as frame 12 if it doesn't connect"
        },
        {
          "name": "Jab 5",
          "section": "misc",
          "startup": "12",
          "active": "12",
          "total": "39",
          "endlag": "27",
          "damage": "3.0",
          "advantage": "-23",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Transitions to Jab 6 as early as frame 14 if it doesn't connect"
        },
        {
          "name": "Jab 6",
          "section": "misc",
          "startup": "23",
          "active": "24—25",
          "total": "52",
          "endlag": "27",
          "damage": "4.0",
          "advantage": "-24",
          "shieldLag": "5",
          "shieldStun": "5",
          "notes": "Transitions to Jab 7 as early as frame 24 if it doesn't connect"
        },
        {
          "name": "Jab 7",
          "section": "misc",
          "startup": "15",
          "active": "14",
          "total": "42",
          "endlag": "28",
          "damage": "1.5",
          "advantage": "-24",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to Jab 8 as early as frame 16 if it doesn't connect"
        },
        {
          "name": "Jab 8",
          "section": "misc",
          "startup": "18",
          "active": "18",
          "total": "46",
          "endlag": "28",
          "damage": "1.5",
          "advantage": "-25",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to Jab 9 as early as frame 18 if it doesn't connect"
        },
        {
          "name": "Jab 9",
          "section": "misc",
          "startup": "16",
          "active": "16",
          "total": "48",
          "endlag": "32",
          "damage": "5.0",
          "advantage": "-26",
          "shieldLag": "6",
          "shieldStun": "6",
          "notes": "Transitions to Jab 10 as early as frame 17 if it doesn't connect"
        },
        {
          "name": "Jab 10",
          "section": "misc",
          "startup": "29",
          "active": "29",
          "total": "70",
          "endlag": "41",
          "damage": "12.0",
          "advantage": "Unblockable",
          "shieldLag": "Unblockable",
          "shieldStun": "Unblockable",
          "notes": "Unblockable"
        },
        {
          "name": "Flash Punch Combo (Final Hit)",
          "section": "misc",
          "startup": "7",
          "active": "7—10",
          "total": "36",
          "endlag": "26",
          "damage": "9.0",
          "advantage": "-20",
          "shieldLag": "7",
          "shieldStun": "9",
          "notes": "First two hits are Jab 1 and Jab 2. Inputting the third A press on frame 10 of Jab 2 is the earliest possible that you get this. Windbox active on frames 2-6."
        },
        {
          "name": "Forward Tilt (Oni Front Kick)",
          "section": "misc",
          "startup": "12",
          "active": "12—16",
          "total": "40",
          "endlag": "24",
          "damage": "14.5",
          "advantage": "-17",
          "shieldLag": "10",
          "shieldStun": "11",
          "notes": "Leg intangible on frame 12-16"
        },
        {
          "name": "Down-Forward Tilt (Tsunami Kick)",
          "section": "misc",
          "startup": "10/26",
          "active": "10—11/14—16",
          "total": "36/54",
          "endlag": "20",
          "damage": "7.0/10.5",
          "advantage": "-19/-14",
          "shieldLag": "7/8",
          "shieldStun": "7/14",
          "notes": "Second number is only if you press the button again. Leg intangible on frame 8-11 and 26-28 for the axe kick. Second kick's first active frame technically ignores shields, but hits aerial oppenents only (yes, this is weird)."
        },
        {
          "name": "Down Tilt (Neijiri Uraken)",
          "section": "misc",
          "startup": "16",
          "active": "16—18",
          "total": "45",
          "endlag": "27",
          "damage": "15.0",
          "advantage": "-15",
          "shieldLag": "10",
          "shieldStun": "14",
          "notes": "Invulnerable on frame 13-15"
        },
        {
          "name": "Down-Back Tilt (Stature Smash)",
          "section": "misc",
          "startup": "13",
          "active": "13—15",
          "total": "39",
          "endlag": "24",
          "damage": "9.0",
          "advantage": "-12",
          "shieldLag": "7",
          "shieldStun": "14",
          "notes": "Leg intangible on frame 13-15"
        },
        {
          "name": "Back Tilt (Flash Tornado)",
          "section": "misc",
          "startup": "11",
          "active": "11—13",
          "total": "34",
          "endlag": "21",
          "damage": "15.0",
          "advantage": "-9",
          "shieldLag": "10",
          "shieldStun": "14",
          "notes": "Upper body and leg intangibility on frame 7-13"
        },
        {
          "name": "Up-Back Tilt (Jump Side Kick)",
          "section": "misc",
          "startup": "14",
          "active": "14—17",
          "total": "39",
          "endlag": "22",
          "damage": "13.5",
          "advantage": "-13",
          "shieldLag": "9",
          "shieldStun": "12",
          "notes": "Front leg intangible on frames 7-17, back leg on frames 7-21. Can autocancel on frame 24 to make the move +2 on shield on backward slants."
        },
        {
          "name": "Up Tilt (Twin Pistons)",
          "section": "misc",
          "startup": "9/24",
          "active": "9—10/14—16",
          "total": "29/52",
          "endlag": "13",
          "damage": "6.0/10.0",
          "advantage": "-14/-18",
          "shieldLag": "6/8",
          "shieldStun": "6/10",
          "notes": "Second number is only if you press the button again. Upper body intangible on frame 4-10, or 4-24 if you input the second hit and arm intangibility lasts until 26."
        },
        {
          "name": "Up-Forward Tilt (Roundhouse to Triple Spin Kicks...)",
          "section": "misc",
          "startup": "14/30/49/67",
          "active": "14—16/11—12/16—17/14—16",
          "total": "42/64/81/100",
          "endlag": "25",
          "damage": "6.0/3.0/10.5",
          "advantage": "-22/-28/-26/-23",
          "shieldLag": "6/5/8",
          "shieldStun": "6/6/10",
          "hitboxes": "first/multi/final",
          "notes": "Legs intangible on frame 4-16"
        },
        {
          "name": "Demon's Wrath (Side Taunt)",
          "section": "misc",
          "startup": "18/31/47/62",
          "active": "7—10",
          "total": "89",
          "endlag": "79",
          "damage": "6.0/3.0/6.0",
          "advantage": "-21",
          "shieldLag": "6/5/6",
          "shieldStun": "6/4/6",
          "hitboxes": "first/multi/final"
        },
        {
          "name": "*Crouching* Down-Forward Tilt (Tombstone Crusher)",
          "section": "misc",
          "startup": "14",
          "active": "14—16",
          "total": "50",
          "endlag": "34",
          "damage": "16.5",
          "advantage": "-20",
          "shieldLag": "10",
          "shieldStun": "16",
          "notes": "Invulnerable on frame 5-14, leg and arm intangible on frame 5-19. Kazuya must be crouching for at least six frames to access this move"
        },
        {
          "name": "*Crouching* Down Tilt (Crouch Jab)",
          "section": "misc",
          "startup": "7",
          "active": "7—8",
          "total": "26",
          "endlag": "18",
          "damage": "5.0",
          "advantage": "-13",
          "shieldLag": "6",
          "shieldStun": "6",
          "notes": "Lower hitbox only hits downed opponents. Arm intangible on frame 6-8. Can transition to another Crouch Jab on frame 16. Kazuya must be crouching for at least six frames to access this move."
        },
        {
          "name": "*Crouching* Down-Back Tilt (Crouch Spin Kick)",
          "section": "misc",
          "startup": "11",
          "active": "11—16",
          "total": "35",
          "endlag": "19",
          "damage": "11.0",
          "advantage": "-9",
          "shieldLag": "8",
          "shieldStun": "15",
          "notes": "Leg intangible on frame 11-16. Kazuya must be crouching for at least six frames to access this move."
        },
        {
          "name": "Double Dash Attack (Left Splits Kick)",
          "section": "misc",
          "startup": "13",
          "active": "13—15",
          "total": "40",
          "endlag": "25",
          "damage": "18.0",
          "advantage": "-10",
          "shieldLag": "10",
          "shieldStun": "17",
          "notes": "Leg intangible on frame 7-15. Reflects on frames 7-17."
        },
        {
          "name": "Dash Attack",
          "section": "misc",
          "startup": "15",
          "active": "15—16(17—19)",
          "total": "47",
          "endlag": "28",
          "damage": "14.0/16.0",
          "advantage": "-19",
          "shieldLag": "10/10",
          "shieldStun": "13/14",
          "hitboxes": "Close/Far",
          "notes": "Legs intangible on frame 4-7. Back leg intangible on frame 13-19"
        },
        {
          "name": "Forward Smash",
          "section": "misc",
          "startup": "25",
          "active": "25—26",
          "total": "67",
          "endlag": "41",
          "damage": "23.0/26.0",
          "advantage": "-16/-13",
          "shieldLag": "13/14",
          "shieldStun": "25/28",
          "hitboxes": "Close/Far",
          "notes": "10.0% Damage based Armor on frame 7-24. Charge hold on frame 5."
        },
        {
          "name": "Up Smash",
          "section": "misc",
          "startup": "12",
          "active": "12—13(14—16)",
          "total": "47",
          "endlag": "31",
          "damage": "19.0/15.0",
          "advantage": "-22",
          "shieldLag": "11/10",
          "shieldStun": "13/10",
          "hitboxes": "Early/Late",
          "notes": "Arm intangible on frame 12-17. 6.0% damage based Armor on frame 7-11. Charge hold on frame 5."
        },
        {
          "name": "Down Smash",
          "section": "misc",
          "startup": "17",
          "active": "17—18(19)",
          "total": "46",
          "endlag": "27",
          "damage": "17.0/15.0/13.0/11.0",
          "advantage": "-16",
          "shieldLag": "10",
          "shieldStun": "13",
          "hitboxes": "Clean Hand, Late Grounded Hand / Clean Arm, Late Grounded Arm / Late Aerial Hand / Late Aerial Arm",
          "notes": "Arm intangible on frame 17-19. 6.0% damage basedArmor on frame 7-15. Charge hold on frame 2."
        },
        {
          "name": "Demon God Fist (Uncrouching Attack)",
          "section": "misc",
          "startup": "13",
          "active": "13—14",
          "total": "40",
          "endlag": "26",
          "damage": "12.0",
          "advantage": "-16",
          "shieldLag": "21",
          "shieldStun": "11",
          "notes": "Upper body intangible on frame 2-6 and arm intangible on frame 13-14. Press Neutral A within 19 frames of releasing crouch for this move to come out."
        },
        {
          "name": "Wind God Fist",
          "section": "misc",
          "startup": "8",
          "active": "8—11",
          "total": "35",
          "endlag": "24",
          "damage": "13.5",
          "advantage": "-13",
          "shieldLag": "9",
          "shieldStun": "14",
          "notes": "Upper body intangible on frame 1-7. Arm intangible on frame 8-11. Deals .5% less damage (13%) to airborne opponents."
        },
        {
          "name": "Electric Wind God Fist",
          "section": "misc",
          "startup": "8",
          "active": "8—11",
          "total": "35",
          "endlag": "24",
          "damage": "14.5",
          "shieldLag": "10",
          "notes": "Invulnerable on frame 1-8. Intangible on 1-3 upper body, 4-8 full body, and 9-12 arm. When blocked, the opponent is forcibly pushed out of their shield, but takes no damage. Deals .5% less damage (14%) to airborne opponents."
        },
        {
          "name": "Dragon Uppercut",
          "section": "misc",
          "startup": "5+15",
          "active": "15(16/17/18-20)",
          "total": "47",
          "endlag": "27",
          "damage": "22.0/18.0/16.0/14.0",
          "advantage": "-22",
          "shieldLag": "19",
          "shieldStun": "10",
          "hitboxes": "Early/Mid/Late/Latest",
          "notes": "5 frames of WGF/EWGF precede this move's startup. Invulnerable on frame 1-5. Upper body intangible on frame 7-11. Invulnerable on frame 12-19. Upper body intangible on frame 20-22."
        },
        {
          "name": "Spinning Demon to Left Hook",
          "section": "misc",
          "startup": "10/34",
          "active": "10—12/34—36",
          "total": "66",
          "endlag": "30",
          "damage": "7.0/14.5",
          "advantage": "-19",
          "shieldLag": "7/10",
          "shieldStun": "7/13",
          "notes": "Invulnerable on frame 4-9"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "8",
          "active": "8—9(10—16)",
          "total": "28",
          "landingLag": "7",
          "damage": "11.0/9.0/8.0/6.0",
          "advantage": "-3/-3/-4",
          "shieldLag": "8/7/6",
          "shieldStun": "4/4/3",
          "hitboxes": "Clean Spike / Clean Hand / Clean Arm / Late",
          "notes": "Autocancels on frame 25 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "8",
          "active": "8—9(10—14)",
          "total": "30",
          "landingLag": "10",
          "damage": "13.0/10.0",
          "advantage": "-5/-6",
          "shieldLag": "9/8",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 25 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "11",
          "active": "11—13(14—18)",
          "total": "45",
          "landingLag": "10",
          "damage": "16.0/14.0/10.0",
          "advantage": "-4/-6",
          "shieldLag": "10/8",
          "shieldStun": "6/4",
          "hitboxes": "Clean Sweet / Clean Sour / Late",
          "notes": "Autocancels on frame 1-4 and 35 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "4",
          "active": "4—6(7—9)",
          "total": "33",
          "landingLag": "8",
          "damage": "12.0(9.0)",
          "advantage": "-3",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Leg intangible on frame 4-9. Autoacancels on frame 30 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "17/19",
          "active": "17—18/19—39/1—2",
          "total": "57",
          "landingLag": "35",
          "damage": "6.0/15.0/10.0",
          "advantage": "-30",
          "shieldLag": "6/10",
          "shieldStun": "*/5",
          "hitboxes": "First/Second/Landing",
          "notes": "Autocancels on frame 50 onward"
        },
        {
          "name": "Neutral B (Devil Blaster)",
          "section": "special",
          "startup": "27",
          "active": "27—43",
          "total": "82",
          "damage": "11.0 / 12.0 / 10.0",
          "advantage": "-31/-30/-33",
          "shieldLag": "13/13/12",
          "shieldStun": "11/12/10",
          "hitboxes": "normal/up/down",
          "notes": "Shieldstun is 4 on all types of lasers when not blocked at point blank range."
        },
        {
          "name": "Devil Blaster, Air",
          "section": "special",
          "startup": "27",
          "active": "27—43",
          "total": "67",
          "damage": "10.0 / 11.0 / 9.0",
          "advantage": "-18/-16/-20",
          "shieldLag": "12/13/11",
          "shieldStun": "10/11/9",
          "hitboxes": "normal/up/down",
          "notes": "Shieldstun is 4 on all types of lasers when not blocked at point blank range."
        },
        {
          "name": "Side B (Devil Fist)",
          "section": "special",
          "startup": "16",
          "active": "16/17—22",
          "total": "66 (68 Air)",
          "damage": "11.0/6.0",
          "advantage": "-32?? to -39??",
          "shieldLag": "8/6",
          "shieldStun": "10/6",
          "hitboxes": "close/far",
          "notes": "Invulnerable on frame 6-9. Kazuya does not suffer hitlag from this attack, but does suffer shieldlag. Hitting a shield stops him and forces 38-45 endlag, it seems that close hits suffer less endlag."
        },
        {
          "name": "Up B (Devil Wings)",
          "section": "special",
          "startup": "12",
          "total": "66",
          "landingLag": "24",
          "damage": "18.0 / 16.0 / 13.0 / 10.0 / 7.0",
          "advantage": "-38",
          "shieldLag": "10...7",
          "shieldStun": "16...7",
          "hitboxes": "early...latest",
          "notes": "Endlag can be cancelled if you land prematurely (like going up to the top battlefield platform)"
        },
        {
          "name": "Down B (Heaven's Door)",
          "section": "special",
          "startup": "14",
          "total": "49 (59 in air)",
          "damage": "17.0",
          "notes": "10% damage based Armor on frame 5-13. 39 endlag from a successful ground slam, or 40 if you land on the same ground."
        },
        {
          "name": "Rage Drive (Non Input)",
          "section": "special",
          "startup": "14",
          "active": "14—15",
          "total": "57 (42 throw)",
          "damage": "12.6 / 14.3",
          "notes": "Replaces Down-B during rage effect. 39 endlag from a successful ground slam, or 40 if you land on the same ground. Intangible frames 1—4, Super Armor frames 5—13."
        },
        {
          "name": "Rage Drive (Input)",
          "section": "special",
          "startup": "10",
          "active": "10—13",
          "total": "54 (42 throw)",
          "notes": "39 endlag from a successful ground slam, or 40 if you land on the same ground. Intangible frames 1—3, Super Armor frames 4—10."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "7",
          "active": "7—8",
          "total": "39"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "9",
          "active": "9—10",
          "total": "43"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "10",
          "active": "10—11",
          "total": "43"
        },
        {
          "name": "Gates of Hell (Gates of Hell, Success)",
          "section": "throw",
          "startup": "7 (32/80/81)",
          "active": "7—8",
          "total": "36 (104)",
          "damage": "-- (10.0/13.0/1.0)",
          "notes": "Input sequence is \"Down-Forward > Down > Down-Forward > Grab\""
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "5",
          "total": "33",
          "damage": "3.4",
          "notes": "Total frames includes 17 frames of hitlag (plus one in 1v1)"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "11/39/42",
          "total": "75",
          "damage": "5.0/5.0/2.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "46",
          "total": "83",
          "damage": "14.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "14",
          "total": "65",
          "damage": "2.0/10.0",
          "notes": "Fires Blaster on frame 40"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "34/35",
          "total": "54",
          "damage": "7.0/1.0"
        },
        {
          "name": "Crouch Dash",
          "section": "dodge",
          "total": "19",
          "notes": "Upper body intangible on frame 1-12. Fully intangible on frames 2-4. Does not stale other dodge options. Can be cancelled into both Wind God Fists, Dragon Uppercut, or Spinning Demon. You can cancel Crouch Dash with Jump on Frame 3 via a 6231 input, more information here . You can cancel Crouch Dash on Frame 2 by reseting the stick to neutral, more information here ."
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
          "total": "47",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "64",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "72",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "78",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "90",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "100",
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
    "url": "https://ultimateframedata.com/kazuya",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
