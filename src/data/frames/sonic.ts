// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "sonic",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "startup": "3",
          "active": "3",
          "total": "19",
          "endlag": "16",
          "damage": "2.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 7"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "startup": "2",
          "active": "2",
          "total": "21",
          "endlag": "19",
          "damage": "1.5",
          "advantage": "-16",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 6"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "startup": "4",
          "active": "4—5",
          "total": "35",
          "endlag": "30",
          "damage": "4.0",
          "advantage": "-26",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "startup": "6/8",
          "active": "6/8—11",
          "total": "35",
          "endlag": "24",
          "damage": "4.0/7.0",
          "advantage": "-20",
          "shieldLag": "5/7",
          "shieldStun": "-/7"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "startup": "6(7)/13",
          "active": "6—8(7—8)/13—14",
          "total": "35",
          "endlag": "21",
          "damage": "2.0/6.0",
          "advantage": "-20",
          "shieldLag": "4/6",
          "shieldStun": "3/6",
          "notes": "First hit on frame 6 is ground only, frame 7 if anti air."
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "startup": "6",
          "active": "6—7",
          "total": "27",
          "endlag": "20",
          "damage": "6.0",
          "advantage": "-15",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "startup": "5",
          "active": "5—8(9—20)",
          "total": "49",
          "endlag": "29",
          "damage": "8.0/6.0",
          "advantage": "-38",
          "shieldLag": "6",
          "shieldStun": "6",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "startup": "18",
          "active": "18—20",
          "total": "47",
          "endlag": "27",
          "damage": "14.0",
          "advantage": "-19",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Charge hold is frame 12. Please check this Tweet to see hitboxes with Sonic's fist at a normal size."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "startup": "14...",
          "active": "14/17/19/21/23/25/27/29-30",
          "total": "61",
          "endlag": "31",
          "damage": "5.0/1.0/3.0",
          "advantage": "-29",
          "shieldLag": "6/4/5",
          "shieldStun": "2/-/3",
          "hitboxes": "First/Multi/Final",
          "notes": "Invulnerable on frame 14-18. Charge hold is frame 10"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "startup": "12",
          "active": "12—13",
          "total": "54",
          "endlag": "41",
          "damage": "12.0",
          "advantage": "-34",
          "shieldLag": "9",
          "shieldStun": "8",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "startup": "6",
          "active": "6—9(10—19/20—38)",
          "total": "49",
          "endlag": "11",
          "landingLag": "10",
          "damage": "12.0/8.0/5.0",
          "advantage": "-5/-6/-7",
          "shieldLag": "9/7/6",
          "shieldStun": "5/4/3",
          "hitboxes": "Early/Late/Later",
          "notes": "Autocancels on frame 48 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "startup": "5/7/9/11/13/15",
          "active": "5/7/9/11/13/15",
          "total": "45",
          "endlag": "30",
          "landingLag": "16",
          "damage": "0.8/3.0",
          "advantage": "-14/-14",
          "shieldLag": "4/7",
          "shieldStun": "-/2",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-2 and 34 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "startup": "13",
          "active": "13—14(15—19)",
          "total": "37",
          "endlag": "18",
          "landingLag": "15",
          "damage": "14.0/10.0",
          "advantage": "-10/-11",
          "shieldLag": "12/8",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-4 and 33 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "startup": "5/14",
          "active": "5—7/14—15",
          "total": "39",
          "endlag": "24",
          "landingLag": "13",
          "damage": "3.0/8.0",
          "advantage": "-11/-9",
          "shieldLag": "5/9",
          "shieldStun": "2/4",
          "notes": "Autocancels on frame 1-4 and 16 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "17",
          "active": "17—19/20—32",
          "total": "45",
          "endlag": "13",
          "landingLag": "21",
          "damage": "8.0/7.0",
          "advantage": "-17/-18",
          "shieldLag": "11/7",
          "shieldStun": "4/3",
          "hitboxes": "Meteor/Late",
          "notes": "Autocancels on frame 1-3 and 41 onward"
        },
        {
          "name": "Neutral B (Homing Attack)",
          "section": "special",
          "startup": "17—82",
          "damage": "7.0—20.0",
          "advantage": "-22 to -16",
          "shieldLag": "7—12",
          "shieldStun": "4—10",
          "notes": "26 endlag on hit"
        },
        {
          "name": "Side B (Spin Dash)",
          "section": "special",
          "startup": "17",
          "damage": "5.0/7.0—10.9",
          "advantage": "+6 (hop) +8 (grounded, no charge) +11 (grounded, full charge) +11 (aerial, any)",
          "shieldLag": "6/7—8",
          "shieldStun": "6/7—10",
          "notes": "Invulnerable frame 17-22. Startup is 1 from a charging state with six I-frames. Stops on shields. Endlag for that is 28. Startup/charge cancelable starting f7 into: - vertical spin dash jump - spin hops After release cancels into: -Spin dash jump -double jump (aerial only) Check out this image for more information on Spin Dash and Spin Charge."
        },
        {
          "name": "Spin Dash, Jump",
          "section": "special",
          "startup": "3",
          "advantage": "+4",
          "notes": "Cancelable into: -Up/Neutral special -All aerials -Double jump"
        },
        {
          "name": "Up B (Spring Jump)",
          "section": "special",
          "startup": "4",
          "total": "18",
          "landingLag": "10",
          "damage": "4.0",
          "advantage": "-7",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Invulnerable on frame 5-7. Landing lag state can be overwritten with other actions. No projectile on ground version."
        },
        {
          "name": "Down B (Spin Charge)",
          "section": "special",
          "startup": "15/17/19/21",
          "total": "59",
          "damage": "1.7—2.5/4.0",
          "advantage": "-33",
          "shieldLag": "4—5/5",
          "shieldStun": "-/5",
          "hitboxes": "Multi/Final",
          "notes": "Startup and total frames refer to minimum charge. Startup/charge cancelable starting f7 into: - spin dash jump - double jump (air only) Check out this image for more information on Spin Dash and Spin Charge."
        },
        {
          "name": "Spin Charge, Jump",
          "section": "special",
          "startup": "3",
          "total": "10",
          "damage": "3.0/6.0",
          "advantage": "-1",
          "shieldLag": "5/6",
          "shieldStun": "4/6",
          "notes": "Jumping from an air version generates no hitbox or endlag."
        },
        {
          "name": "Spin Charge, Aerial",
          "section": "special",
          "startup": "3",
          "total": "10",
          "damage": "3.0/6.0",
          "advantage": "-1",
          "shieldLag": "5/6",
          "shieldStun": "4/6",
          "notes": "Jumping from an air version generates no hitbox or endlag."
        },
        {
          "name": "Grab",
          "section": "throw",
          "startup": "7",
          "active": "7—8",
          "total": "37",
          "endlag": "29"
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
          "total": "39",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "startup": "1",
          "total": "19",
          "landingLag": "Total frames includes 13 frames of hitlag.",
          "damage": "1.3"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "startup": "10/11",
          "total": "37",
          "damage": "1.0/6.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "startup": "43",
          "total": "66",
          "damage": "7.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "startup": "22/23",
          "total": "42",
          "damage": "1.0/5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "startup": "18/26/34/42",
          "total": "74",
          "damage": "1.0/5.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "19/24",
          "notes": "Intangible on frame 3-16"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "28",
          "notes": "Intangible on frame 4-14"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "33",
          "notes": "Intangible on frame 4-15"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "50",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "66",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "74",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "81",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "99",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "107",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
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
    "url": "https://ultimateframedata.com/sonic",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
