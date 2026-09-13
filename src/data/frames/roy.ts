// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "roy",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/roy/RoyJab.gif",
            "hitboxes/roy/RoyJabInterpolated.gif"
          ],
          "startup": "5",
          "active": "5—7",
          "total": "22",
          "endlag": "15",
          "damage": "7.5/4.8",
          "advantage": "-9/-12",
          "shieldLag": "9/6",
          "shieldStun": "8/5",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/roy/RoyFTilt.gif"
          ],
          "startup": "8",
          "active": "8—10",
          "total": "33",
          "endlag": "23",
          "damage": "12.5/9.0/8.0",
          "advantage": "-13/-16/-17",
          "shieldLag": "12/7/7",
          "shieldStun": "12/9/8",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/roy/RoyUTilt.gif"
          ],
          "startup": "6",
          "active": "6/7—8/9—11",
          "total": "38",
          "endlag": "27",
          "damage": "12.0/7.0",
          "advantage": "-21/-25",
          "shieldLag": "12/7",
          "shieldStun": "11/7",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/roy/RoyDTilt.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "21",
          "endlag": "13",
          "damage": "11.0/6.5",
          "advantage": "-3/-7",
          "shieldLag": "11/6",
          "shieldStun": "10/7",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/roy/RoyDashAttack.gif"
          ],
          "startup": "13",
          "active": "13—16",
          "total": "45",
          "endlag": "29",
          "damage": "13.0/9.0",
          "advantage": "-17/-21",
          "shieldLag": "12/7",
          "shieldStun": "15/11",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/roy/RoyFSmash.gif"
          ],
          "startup": "13",
          "active": "13—14",
          "total": "53",
          "endlag": "39",
          "damage": "20.0/17.0/12.0",
          "advantage": "-27/-29/-32",
          "shieldLag": "15/11/9",
          "shieldStun": "13/11/8",
          "hitboxes": "Close/med/far",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/roy/RoyUSmash.gif"
          ],
          "startup": "12/15/17/19/22",
          "active": "12—13/15/17/19/22—23",
          "total": "58",
          "endlag": "35",
          "damage": "1.0/2.0/10.0",
          "advantage": "-29",
          "shieldLag": "6/7/10",
          "shieldStun": "2/-/7",
          "hitboxes": "First/multi/final",
          "notes": "Forearm intangibility on frame 10-23. Charge hold is frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/roy/RoyDSmash.gif"
          ],
          "startup": "6/21",
          "active": "6—7/21—22",
          "total": "62",
          "endlag": "40",
          "damage": "15.0/10.0/17.0/11.0",
          "advantage": "-46/-49/-30/-33",
          "shieldLag": "13/8/14/8",
          "shieldStun": "10/7/11/8",
          "hitboxes": "first close/far, second close/far",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/roy/RoyNAir.gif"
          ],
          "startup": "6/15",
          "active": "6—7/15—21",
          "total": "45",
          "endlag": "24",
          "landingLag": "9",
          "damage": "6.0/4.0/8.5/5.0",
          "advantage": "-6/-6/-5/-6",
          "shieldLag": "8/5/10/6",
          "shieldStun": "3/3/4/3",
          "hitboxes": "first close/far, second close/far",
          "notes": "Autocancels on frame 47 onward. The second hit uses a fixed weight for all characters . Every character will experience the same knockback at the same %."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/roy/RoyFAir.gif"
          ],
          "startup": "10",
          "active": "10—12",
          "total": "29",
          "endlag": "17",
          "landingLag": "8",
          "damage": "11.0 / 7.0",
          "advantage": "-4/-5",
          "shieldLag": "11/7",
          "shieldStun": "4/3",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 31 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/roy/RoyBAir.gif"
          ],
          "startup": "8",
          "active": "8—10",
          "total": "35",
          "endlag": "25",
          "landingLag": "10",
          "damage": "12.0/9.0",
          "advantage": "-5/-6",
          "shieldLag": "12/7",
          "shieldStun": "5/4",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-2 and 32 onward. Turns the character around."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/roy/RoyUAir.gif"
          ],
          "startup": "5",
          "active": "5—12",
          "total": "41",
          "endlag": "29",
          "landingLag": "8",
          "damage": "9.0/6.0",
          "advantage": "-4/-5",
          "shieldLag": "10/6",
          "shieldStun": "4/3",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-2 and 38 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/roy/RoyDAir.gif"
          ],
          "startup": "16",
          "active": "16—17",
          "total": "51",
          "endlag": "34",
          "landingLag": "14",
          "damage": "15.0/10.0",
          "advantage": "-9/-10",
          "shieldLag": "13/8",
          "shieldStun": "5/4",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-2 and 52 onward"
        },
        {
          "name": "Neutral B (Flare Blade)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyFlareBlade.gif",
            "hitboxes/roy/RoyFlareBladeMax.gif"
          ],
          "startup": "21-260",
          "active": "21—24 (or 10—14 from release)",
          "total": "44-283",
          "endlag": "20",
          "damage": "8.0—50.0",
          "advantage": "-15 to Shieldbreak",
          "shieldLag": "7—22",
          "shieldStun": "8—...",
          "notes": "Startup is 10 from release. 11 frames to enter charge state."
        },
        {
          "name": "Side B, Hit 1 (Double-Edge Dance, Hit 1)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyDoubleEdgedDance1.gif"
          ],
          "startup": "9",
          "active": "9—11",
          "total": "39/29",
          "endlag": "28",
          "damage": "3.0/2.0",
          "advantage": "-26/-16(air)",
          "shieldLag": "5/4",
          "shieldStun": "4/3",
          "hitboxes": "Close/Far",
          "notes": "Second total frames is from the air. Can transition to next slash as early as frame 12."
        },
        {
          "name": "Double-Edge Dance, Hit 2 Neutral",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyDoubleEdgedDance2Side.gif"
          ],
          "startup": "5",
          "active": "5—7",
          "total": "38",
          "endlag": "31",
          "damage": "3.0/2.0",
          "advantage": "-29/-30",
          "shieldLag": "5/4",
          "shieldStun": "4/3",
          "hitboxes": "Close/Far",
          "notes": "Can transition to next slash as early as frame 8."
        },
        {
          "name": "Double-Edge Dance, Hit 3 Neutral",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyDoubleEdgedDance3Side.gif"
          ],
          "startup": "4",
          "active": "4—6",
          "total": "43",
          "endlag": "37",
          "damage": "4.0/3.0",
          "advantage": "-34/-35",
          "shieldLag": "5/5",
          "shieldStun": "5/4",
          "hitboxes": "Close/Far",
          "notes": "Can transition to next slash as early as frame 7."
        },
        {
          "name": "Double-Edge Dance, Hit 4 Neutral",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyDoubledEdgeDance4Side.gif"
          ],
          "startup": "7",
          "active": "7—9",
          "total": "58",
          "endlag": "49",
          "damage": "6.0/4.0",
          "advantage": "-45/-46",
          "shieldLag": "11/5",
          "shieldStun": "6/5",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Double-Edge Dance, Hit 2 Up",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyDoubleEdgedDance2Up.gif"
          ],
          "startup": "4",
          "active": "4—6",
          "total": "38",
          "endlag": "32",
          "damage": "3.0/2.0",
          "advantage": "-34/-35",
          "shieldLag": "5/4",
          "shieldStun": "4/3",
          "notes": "Can transition to next slash as early as frame 8."
        },
        {
          "name": "Double-Edge Dance, Hit 3 Up",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyDoubleEdgedDance3Up.gif"
          ],
          "startup": "5",
          "active": "5—7",
          "total": "43",
          "endlag": "36",
          "damage": "4.0/3.0",
          "advantage": "-33/-34",
          "shieldLag": "5/5",
          "shieldStun": "5/4",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Double-Edge Dance, Hit 4 Up",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyDoubleEdgedDance4Up.gif"
          ],
          "startup": "6",
          "active": "6—10",
          "total": "44",
          "endlag": "34",
          "damage": "7.0/5.0",
          "advantage": "-31/-32",
          "shieldLag": "9/8",
          "shieldStun": "7/6",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Double-Edge Dance, Hit 3 Down",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyDoubleEdgedDance3Down.gif"
          ],
          "startup": "5",
          "active": "5—7",
          "total": "44",
          "endlag": "37",
          "damage": "4.0/3.0",
          "advantage": "-34/-35",
          "shieldLag": "5/5",
          "shieldStun": "5/4",
          "hitboxes": "Close/Far",
          "notes": "Can transition to next slash as early as frame 8"
        },
        {
          "name": "Double-Edge Dance, Hit 4 Down",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyDoubleEdgedDance4Down.gif"
          ],
          "startup": "7/10/13/16/19",
          "active": "7/10/13/16/19—21",
          "total": "71",
          "endlag": "50",
          "damage": "2.0/5.0",
          "advantage": "-46",
          "shieldLag": "4/9",
          "shieldStun": "-/6",
          "hitboxes": "multi/final"
        },
        {
          "name": "Up B (Blazer)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyBlazerG.gif",
            "hitboxes/roy/RoyBlazerA.gif"
          ],
          "startup": "9/11...",
          "active": "9/11—19(rehit: 3) / 20—21",
          "landingLag": "30",
          "damage": "5.5/1.1/8.0",
          "shieldLag": "6/4/15",
          "shieldStun": "-/2/8",
          "hitboxes": "First/multi/final",
          "notes": "Super Armor on frame 4-10 from the ground. Intangible on frame 9."
        },
        {
          "name": "Down B (Counter)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyCounter.gif"
          ],
          "startup": "8 (Start of Counter)",
          "total": "67",
          "notes": "Invulnerable on frames 7-9. Counters on 8-29 from 8-27."
        },
        {
          "name": "Counter, Attack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/roy/RoyCounterHit.gif"
          ],
          "startup": "4",
          "active": "4—5",
          "total": "40",
          "endlag": "35",
          "notes": "Invulnerable on frame 1-5. In addition to counter freeze frames"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/roy/RoyGrab.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "36",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/roy/RoyDashGrab.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "44",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/roy/RoyPivotGrab.gif"
          ],
          "startup": "11",
          "active": "11—12",
          "total": "39",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/roy/RoyPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames includes 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/roy/RoyFThrow.gif"
          ],
          "startup": "15",
          "total": "31",
          "damage": "5.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/roy/RoyBThrow.gif"
          ],
          "startup": "8",
          "total": "44",
          "damage": "5.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/roy/RoyUThrow.gif"
          ],
          "startup": "13",
          "total": "44",
          "damage": "6.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/roy/RoyDThrow.gif"
          ],
          "startup": "16",
          "total": "41",
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
          "total": "44",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "62",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "68",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "74",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "87",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "97",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/roy/royGetupAttackU.gif",
            "hitboxes/roy/royGetupAttackD.gif",
            "hitboxes/roy/royTripAttack.gif",
            "hitboxes/roy/royLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/roy",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
