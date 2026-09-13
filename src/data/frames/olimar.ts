// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "olimar",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "4",
          "active": "4(5)",
          "total": "19",
          "endlag": "14",
          "damage": "3.0 / 4.0",
          "advantage": "-11/-10",
          "shieldLag": "8/9",
          "shieldStun": "4/5",
          "hitboxes": "Early/Late",
          "notes": "Transitions to Jab 2 as early as frame 7"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "4",
          "active": "4—5",
          "total": "17",
          "endlag": "12",
          "damage": "3.0/4.0",
          "advantage": "-9/-8",
          "shieldLag": "5/5",
          "shieldStun": "4/5",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "15",
          "active": "15—17",
          "total": "35",
          "endlag": "18",
          "damage": "11.0",
          "advantage": "-10",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "6/8/10/12/14/16",
          "active": "6/8/10/12/14/16",
          "total": "38",
          "endlag": "22",
          "damage": "0.6/4.0",
          "advantage": "-17",
          "shieldLag": "4/5",
          "shieldStun": "2/5",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—12",
          "total": "29",
          "endlag": "17",
          "damage": "6.0",
          "advantage": "-17",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "8/11",
          "active": "8—10/11—14",
          "total": "37",
          "endlag": "23",
          "damage": "7.0 / 4.0",
          "advantage": "-21",
          "shieldLag": "7/5",
          "shieldStun": "-/5"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "11",
          "active": "11—13(14-19/20—29) Purple: 11—13(14—18/19—24)",
          "total": "39",
          "endlag": "10",
          "damage": "Early: 20.3",
          "shieldLag": "Early: 12",
          "shieldStun": "Early: 6",
          "notes": "Charge hold is frame 6. Olimar does not suffer hitlag from this attack. But Pikmin do."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "12",
          "active": "12—13(14—16/17—22)",
          "total": "39",
          "endlag": "17",
          "damage": "Early: 18.2",
          "shieldLag": "Early: 11",
          "shieldStun": "Early: 6",
          "notes": "Charge hold is frame 4. Olimar does not suffer hitlag from this attack. But Pikmin do."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "10",
          "active": "10—13/14—18 Purple: 10—13/14—15",
          "total": "38",
          "endlag": "20",
          "damage": "Early: 15.4",
          "shieldLag": "Early: 10",
          "shieldStun": "Early: 5",
          "notes": "Charge hold is frame 6. Olimar does not suffer hitlag from this attack. But Pikmin do."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "7/11/15/19/23",
          "active": "7—8/11—12/15—16/19—20/23—24",
          "total": "53",
          "endlag": "29",
          "landingLag": "13",
          "damage": "1.5/2.0",
          "advantage": "-11/-11",
          "shieldLag": "4/4",
          "shieldStun": "2/2",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-2 and 34 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "7",
          "active": "7—9",
          "total": "42",
          "endlag": "33",
          "landingLag": "9",
          "damage": "11.9",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-5 and 31 onward GIF Notes: Red Pikmin counts for Blue, White and Purple. The Pikmin should be bigger during the active frames. Olimar should be holding them just below the leaf/bud/flower. Hitbox is accurate nonetheless."
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "10",
          "active": "10—13",
          "total": "48",
          "endlag": "35",
          "landingLag": "9",
          "damage": "15.1",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-5 and 36 onward GIF Notes: Red Pikmin counts for Blue, White and Purple. The Pikmin should be bigger during the active frames. Olimar should be holding them just below the leaf/bud/flower. Hitbox is accurate nonetheless."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "8",
          "active": "8—15",
          "total": "34",
          "endlag": "19",
          "landingLag": "18",
          "damage": "12.6",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-5 and 31 onward GIF Notes: Red Pikmin counts for Blue, White and Purple. The Pikmin should be bigger during the active frames. Olimar should be holding them just below the leaf/bud/flower. Hitbox is accurate nonetheless."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "9",
          "active": "9—10(11—16)",
          "total": "51",
          "endlag": "35",
          "landingLag": "18",
          "damage": "12.6",
          "shieldLag": "9",
          "shieldStun": "5",
          "hitboxes": "Clean/Late",
          "notes": "Autocancels on frame 1-5 and 31 onward. Spikes 9—10, does not spike 11—16. GIF Notes: Red Pikmin counts for Blue, White and Purple. The Pikmin should be bigger during the active frames. Olimar should be holding them just below the leaf/bud/flower. Hitbox is accurate nonetheless."
        },
        {
          "name": "Neutral B (Pikmin Pluck)",
          "section": "special",
          "active": "1",
          "total": "8",
          "endlag": "7",
          "notes": "32 frame failure animation when your squad is full."
        },
        {
          "name": "Side B (Pikmin Throw)",
          "section": "special",
          "startup": "9",
          "active": "9—128(9—108)",
          "total": "24",
          "damage": "Purple: 6.0",
          "advantage": "Purple: -6",
          "shieldLag": "Purple: 6",
          "shieldStun": "Purple: 3",
          "notes": "A latched pikmin hits on frame 18, then every 36 frames after that (counting Pikmin's hitlag)"
        },
        {
          "name": "Up B (Winged Pikmin)",
          "section": "special",
          "landingLag": "30/19",
          "notes": "30 landing lag if the pikmin let go of you. Frame 30 is the earliest you can cancel the move."
        },
        {
          "name": "Down B (Pikmin Order/Whistle)",
          "section": "special",
          "startup": "2 (Start of Super Armor)",
          "active": "2—7 (armor)",
          "total": "17",
          "notes": "Super armor on frame 2-7"
        },
        {
          "name": "Red/Blue/Yellow Grabs",
          "section": "throw",
          "startup": "12",
          "active": "12—23",
          "total": "41/47/56",
          "endlag": "18",
          "notes": "Total frames depends on having one/two/three pikmin"
        },
        {
          "name": "White Grabs",
          "section": "throw",
          "startup": "12",
          "active": "12—23",
          "total": "41/47/56",
          "notes": "Total frames depends on having one/two/three pikmin"
        },
        {
          "name": "Purple Grabs",
          "section": "throw",
          "startup": "12",
          "active": "12—23",
          "total": "41/47/56",
          "notes": "Total frames depends on having one/two/three pikmin."
        },
        {
          "name": "Grab Range Comparison",
          "section": "throw",
          "startup": "12",
          "active": "12—23",
          "total": "41/47/56",
          "notes": "Grabs have increased range when standing right at the ledge. The increase in range, which is proportional to the number of Pikmin, makes P3 outrage RBY1. Total frames depends on having one/two/three pikmin."
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "startup": "12",
          "active": "12—23",
          "total": "49/57/68",
          "notes": "Total frames depends on having one/two/three pikmin"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "startup": "12",
          "active": "12—23",
          "total": "44/51/60",
          "notes": "Total frames depends on having one/two/three pikmin"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "1",
          "total": "16",
          "damage": "1.0",
          "notes": "Total frames includes 10 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "19",
          "total": "35",
          "damage": "5.6/7.0/11.9/7.0/7.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "22",
          "total": "39",
          "damage": "7.2/9.0/15.3/9.0/9.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "22/23",
          "total": "49",
          "damage": "6.4/8.0/13.5/8.0/8.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "23/32",
          "total": "41",
          "damage": "6.6/8.0/12.9/7.8/8.6"
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
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "78",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "87",
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
          "total": "118",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "132",
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
    "url": "https://ultimateframedata.com/olimar",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
