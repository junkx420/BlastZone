// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "little-mac",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacJab1.gif"
          ],
          "startup": "1",
          "active": "1",
          "total": "16",
          "endlag": "15",
          "damage": "1.5",
          "advantage": "-12",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 5. Meter filled: 0.045 arrows."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacJab2.gif"
          ],
          "startup": "1",
          "active": "1",
          "total": "16",
          "endlag": "15",
          "damage": "1.5",
          "advantage": "-12",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 5. Meter filled: 0.045 arrows."
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacJab3.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "29",
          "endlag": "24",
          "damage": "5.0",
          "advantage": "-19",
          "shieldLag": "12",
          "shieldStun": "6",
          "notes": "Meter filled: 0.15 arrows."
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacJabRapid.gif"
          ],
          "startup": "4/6/8...",
          "damage": "0.5",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "Meter filled: 0.015 arrows."
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacJabRapidEnd.gif"
          ],
          "startup": "5",
          "active": "5",
          "total": "34",
          "endlag": "29",
          "damage": "3.0",
          "advantage": "-25",
          "shieldLag": "13",
          "shieldStun": "4",
          "notes": "Meter filled: 0.09 arrows."
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacFTilt.gif"
          ],
          "startup": "4/12",
          "active": "4-5/12-13",
          "total": "37",
          "endlag": "24",
          "damage": "4.0/8.0",
          "advantage": "-17",
          "shieldLag": "5/9",
          "shieldStun": "5/8",
          "notes": "Meter filled: 0.12/0.24 arrows."
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacUTilt.gif"
          ],
          "startup": "4",
          "active": "4-10",
          "total": "29",
          "endlag": "19",
          "damage": "6.5",
          "advantage": "-18",
          "shieldLag": "6",
          "shieldStun": "7",
          "notes": "Meter filled: 0.195 arrows."
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacDTilt.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "25",
          "endlag": "21",
          "damage": "8.0",
          "advantage": "-14",
          "shieldLag": "7",
          "shieldStun": "8",
          "notes": "Meter filled: 0.24 arrows."
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacDashAttack.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "33",
          "endlag": "24",
          "damage": "10.0",
          "advantage": "-16",
          "shieldLag": "8",
          "shieldStun": "10",
          "notes": "Wind box on frames 1-4. Meter filled: 0.3 arrows."
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacFSmash.gif",
            "hitboxes/little_mac/LittleMacFSmashUp.gif",
            "hitboxes/little_mac/LittleMacFSmashDown.gif"
          ],
          "startup": "14/14/15",
          "active": "14-15/14-15/15",
          "total": "43/43/43",
          "endlag": "28",
          "damage": "20.0/20.0/24.0",
          "advantage": "-16/-16/-13",
          "shieldLag": "15/15/16",
          "shieldStun": "13/13/15",
          "hitboxes": "Normal/Up/Down",
          "notes": "Super armor on frame 8-15 (9-15 for down angled version). Charge hold is frame 4. Meter filled: 0.6/0.84(up or mid min/max), 0.72/1.008(down min/max) arrows."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacUSmash.gif"
          ],
          "startup": "10",
          "active": "10(11-14)",
          "total": "47",
          "endlag": "33",
          "damage": "21.0/15.0",
          "advantage": "-23",
          "shieldLag": "17/14",
          "shieldStun": "14/11",
          "hitboxes": "Early/Late",
          "notes": "Super armor on frame 8-13. Charge hold is frame 6. Meter filled: (early min/max) 0.63/0.882, (late min/max) 0.48/0.672 arrows."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacDSmash.gif"
          ],
          "startup": "10/17",
          "active": "10-11/17-18",
          "total": "42",
          "endlag": "24",
          "damage": "13.0",
          "advantage": "-23/-16",
          "shieldLag": "9",
          "shieldStun": "9",
          "notes": "Super armor on frame 7-10 and 15-17. Charge hold is frame 5. Meter filled: (min/max) 0.39/0.546 arrows."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacNAir.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "15",
          "endlag": "13",
          "landingLag": "10",
          "damage": "2.0",
          "advantage": "-8",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "Autocancels on frame 16 onward. Meter filled: (full/short) 0.06/0.051 arrows."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacFAir.gif"
          ],
          "startup": "10",
          "active": "10-12",
          "total": "36",
          "endlag": "24",
          "landingLag": "13",
          "damage": "5.0",
          "advantage": "-10",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Autocancels on frame 35 onward. Meter filled: (full/short) 0.15/0.1275 arrows."
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacBAir.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "37",
          "endlag": "25",
          "landingLag": "16",
          "damage": "6.0",
          "advantage": "-13",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Autocancels on frame 36 onward. Meter filled: (full/short) 0.18/0.153 arrows."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacUAir.gif"
          ],
          "startup": "5",
          "active": "5-8",
          "total": "41",
          "endlag": "33",
          "landingLag": "13",
          "damage": "5.0",
          "advantage": "-10",
          "shieldLag": "6/5",
          "shieldStun": "3/3",
          "hitboxes": "Strong/Weak",
          "notes": "Autocancels on frame 40 onward. Meter filled: (full/short) 0.15/0.1275 arrows."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacDAir.gif"
          ],
          "startup": "7",
          "active": "7-10",
          "total": "27",
          "endlag": "17",
          "landingLag": "18",
          "damage": "5.0/4.0",
          "advantage": "-15/-15",
          "shieldLag": "6/5",
          "shieldStun": "3/3",
          "hitboxes": "Strong/Weak",
          "notes": "Autocancels on frame 25 onward. Meter filled: (full/short) 0.12/0.102 arrows."
        },
        {
          "name": "Neutral B, Partial Charge (Straight Lunge, Partial Charge)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacStraightLungeG.gif",
            "hitboxes/little_mac/LittleMacStraightLungeA.gif"
          ],
          "startup": "4(+32)",
          "total": "49",
          "damage": "12.0-28.6",
          "advantage": "-34 to -19",
          "shieldLag": "9-17",
          "shieldStun": "11-26",
          "hitboxes": "Uncharged-Charged",
          "notes": "Must charge for 32 frames minimum before you are allowed to punch. Damage-based armor begins on frame 1 of charge and lasts until the punch begins, starts at 8% (9.6% in 1v1) and builds to 14% (16.8% in 1v1) on max charge release. Meter filled: (uncharge, sweet) 0.036, (early uncharged) 0.3, (late uncharged) 0.24 arrows."
        },
        {
          "name": "Neutral B, Full Charge (Straight Lunge, Full Charge)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacStraightLungeMaxG.gif",
            "hitboxes/little_mac/LittleMacStraightLungeMaxA.gif"
          ],
          "startup": "123",
          "total": "231",
          "damage": "30.0",
          "advantage": "-82",
          "shieldLag": "17",
          "shieldStun": "26",
          "hitboxes": "Meter filled: (fully charged) 0.9, (fully charged, reversed) 0.84 arrows."
        },
        {
          "name": "K.O. Punch",
          "section": "special",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacKOPunchG.gif",
            "hitboxes/little_mac/LittleMacKOPunchA.gif"
          ],
          "startup": "9",
          "active": "9-11",
          "total": "76/75",
          "endlag": "65",
          "damage": "35.0/13.0",
          "advantage": "Unblockable/-54",
          "shieldLag": "-/14",
          "shieldStun": "-/12",
          "hitboxes": "Ground/Air",
          "notes": "75 total frames in the air. Super armor on frame 8-9 but only on the ground. Unblockable on the ground. Mac is guaranteed KO Uppercut if he takes 100%. Mac is guaranteed KO Uppercut if he deals 333.33*%, as he has a 0.3x unit filling multiplier. Mac is given 4 seconds before he can lose KO Uppercut. Mac loses KO Uppercut if he is sent into tumble, which requires 80 KB Points to do (this can also be taken as \"when you have to tech\" in layman's terms). For more information on Mac's meter, check Plague von Karma's document . Meter filled: 1.05 arrows."
        },
        {
          "name": "Side B (Jolt Haymaker)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacJoltHaymakerG.gif"
          ],
          "startup": "8/25",
          "active": "8-14/25-31 (windbox: 7-17)",
          "total": "60/77",
          "endlag": "29",
          "damage": "14.00",
          "advantage": "-39 to -36",
          "shieldLag": "12",
          "shieldStun": "13",
          "hitboxes": "Earliest/Latest",
          "notes": "Total frames assumes level ground. Going over an edge applies air total frames. Invulnerable on frame 1-3. Leg intangibility on frame 4-17, or until punch. Meter filled: 0.42 arrows."
        },
        {
          "name": "Side B, Air (Jolt Haymaker, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacJoltHaymakerA.gif"
          ],
          "startup": "8/25",
          "active": "8-14/25-31",
          "total": "53/70",
          "endlag": "22",
          "damage": "14.00",
          "advantage": "-32 to -31",
          "shieldLag": "12",
          "shieldStun": "13",
          "hitboxes": "Earliest/Latest",
          "notes": "If you land, the lag corresponds to the remaining total frames of the ground version. Meter filled: 0.42 arrows."
        },
        {
          "name": "Up B (Rising Uppercut)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacRisingUppercut.gif"
          ],
          "startup": "3...",
          "active": "3/6-21(rehit: 4)/26",
          "landingLag": "30",
          "damage": "3.0/1.0/3.0",
          "shieldLag": "7/4/13",
          "shieldStun": "4/2/4",
          "notes": "Invulnerable on frame 1-3. Meter filled: 0.09/0.03/0.09 arrows."
        },
        {
          "name": "Down B (Slip Counter)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacSlipCounter.gif"
          ],
          "startup": "5 (Start of Counter)",
          "active": "5-27 (counter)",
          "total": "56",
          "notes": "Invulnerable on frames 4-5. Counters on frame 5-27."
        },
        {
          "name": "Slip Counter, Counterattack",
          "section": "special",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacSlipCounterHitG.gif",
            "hitboxes/little_mac/LittleMacSlipCounterHitA.gif"
          ],
          "startup": "16",
          "active": "16-21",
          "total": "49",
          "endlag": "28",
          "notes": "Invulnerable on frame 1-18. Meter filled: (min/max) 0.3/1.26 arrows."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "38",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacDashGrab.gif"
          ],
          "startup": "13",
          "active": "13-14",
          "total": "46",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacPivotGrab.gif"
          ],
          "startup": "14",
          "active": "14-15",
          "total": "41",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacPummel.gif"
          ],
          "startup": "1",
          "total": "15",
          "damage": "1.0",
          "notes": "Total frames includes 10 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacFThrow.gif"
          ],
          "startup": "15/17",
          "total": "44",
          "damage": "4.0/4.0",
          "notes": "Meter filled: 0.12/0.12 arrows."
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacBThrow.gif"
          ],
          "startup": "17/19",
          "total": "47",
          "damage": "4.0/5.0",
          "notes": "Meter filled: 0.12/0.15 arrows."
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacUThrow.gif"
          ],
          "startup": "10/12",
          "total": "40",
          "damage": "4.0/3.0",
          "notes": "Meter filled: 0.12/0.09 arrows."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/little_mac/LittleMacDThrow.gif"
          ],
          "startup": "14/16",
          "total": "44",
          "damage": "4.0/3.0",
          "notes": "Meter filled: 0.12/0.09 arrows."
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "18/23",
          "notes": "Intangible on frame 3-14"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "26",
          "notes": "Intangible on frame 4-12"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "32",
          "notes": "Intangible on frame 4-14"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "49",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "62",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-18"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "64",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-18"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "72",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-18"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "81",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-18"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "89",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-18"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/little_mac/littlemacGetupAttackU.gif",
            "hitboxes/little_mac/littlemacGetupAttackD.gif",
            "hitboxes/little_mac/littlemacTripAttack.gif",
            "hitboxes/little_mac/littlemacLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/little_mac",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
