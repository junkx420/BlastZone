// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "zero-suit-samus",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusJab1.gif"
          ],
          "startup": "1",
          "active": "1",
          "total": "23",
          "endlag": "22",
          "damage": "1.5",
          "advantage": "-19",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 6"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusJab2.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "25",
          "endlag": "23",
          "damage": "1.5",
          "advantage": "-20",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 as early as frame 6"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusJab3.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "34",
          "endlag": "30",
          "damage": "3.0",
          "advantage": "-27",
          "shieldLag": "9",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusFTilt.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusFTiltUp.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusFTiltDown.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "total": "28",
          "endlag": "20",
          "damage": "7.0/8.0",
          "advantage": "-15/-14",
          "shieldLag": "7/7",
          "shieldStun": "7/8",
          "hitboxes": "no angle/angled"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusUTilt.gif"
          ],
          "startup": "3/9",
          "active": "3-4/9-10",
          "total": "45",
          "endlag": "35",
          "damage": "5.0/7.0",
          "advantage": "-36/-29",
          "shieldLag": "7/8",
          "shieldStun": "6/7"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusDTilt.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "29",
          "endlag": "20",
          "damage": "8.0/6.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusDashAttack.gif"
          ],
          "startup": "7",
          "active": "7-9(10-19)",
          "total": "51",
          "endlag": "32",
          "damage": "8.0/5.0",
          "advantage": "-36",
          "shieldLag": "7/6",
          "shieldStun": "8/6",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusFSmash.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusFSmashUp.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusFSmashDown.gif"
          ],
          "startup": "13/26",
          "active": "13-14/26-28",
          "total": "64",
          "endlag": "36",
          "damage": "5.0/11.0/11.0",
          "advantage": "-30",
          "shieldLag": "6/8/14",
          "shieldStun": "4/8/8",
          "hitboxes": "first/second/second far",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusUSmash.gif"
          ],
          "startup": "10/14/17/20/23/26/28",
          "active": "10-11/14/17/20/23/26/28-29",
          "total": "48",
          "endlag": "19",
          "damage": "4.0/0.8/3.0",
          "advantage": "-17",
          "shieldLag": "8/6/7",
          "shieldStun": "4/2/3",
          "hitboxes": "First/multi/Final",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusDSmash.gif"
          ],
          "startup": "20",
          "active": "20-24",
          "total": "41",
          "endlag": "17",
          "damage": "8.0/6.0",
          "advantage": "-15/-16",
          "shieldLag": "7/6",
          "shieldStun": "6/5",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 15"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusNAir.gif"
          ],
          "startup": "10",
          "active": "10-11(15-16)",
          "total": "51",
          "endlag": "35",
          "landingLag": "8",
          "damage": "8.0",
          "advantage": "-4",
          "shieldLag": "11",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-3 and 42 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusFAir.gif"
          ],
          "startup": "6/13",
          "active": "6-7/13-14",
          "total": "46",
          "endlag": "32",
          "landingLag": "10",
          "damage": "5.0/7.0",
          "advantage": "-7/-7",
          "shieldLag": "6/7",
          "shieldStun": "3/3",
          "notes": "Autocancels on frame 1-3 and 38 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusBAir.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "40",
          "endlag": "31",
          "landingLag": "10",
          "damage": "10.0/12.0",
          "advantage": "-6/-5",
          "shieldLag": "8/9",
          "shieldStun": "4/5",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 1-3 and 31 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusUAir.gif"
          ],
          "startup": "6",
          "active": "6-12",
          "total": "34",
          "endlag": "22",
          "landingLag": "5",
          "damage": "6.5",
          "advantage": "-2",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Autocancels on frame 25 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusDAir.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusDAirLanding.gif"
          ],
          "startup": "14",
          "active": "14-49/1-3",
          "total": "67",
          "endlag": "18",
          "landingLag": "24",
          "damage": "6.0/5.0/5.5",
          "advantage": "-17",
          "shieldLag": "6/6",
          "shieldStun": "3/6",
          "hitboxes": "Aerial Opponent/Grounded Opponent/Landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-3 and 50 onward"
        },
        {
          "name": "Z Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusZAir.gif"
          ],
          "startup": "9",
          "active": "9-19",
          "total": "49",
          "endlag": "30",
          "landingLag": "8",
          "damage": "5.0",
          "advantage": "-2",
          "shieldLag": "9",
          "shieldStun": "6",
          "notes": "Tethers on frame 2"
        },
        {
          "name": "Neutral B (Paralyzer)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusParalyzerNoCharge.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusParalyzerMaxCharge.gif"
          ],
          "startup": "21-43",
          "active": "21-44 (no charge) || 43-90 (max charge)",
          "total": "48-70",
          "damage": "4.0-6.0",
          "advantage": "-20 to -18",
          "shieldLag": "5-6",
          "shieldStun": "2-3",
          "notes": "On release, startup is 1 and total frames is 28."
        },
        {
          "name": "Side B (Plasma Whip)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusPlasmaWhip.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusPlasmaWhipUp.gif"
          ],
          "startup": "22/24/26/28/31",
          "active": "22-23/24-25/26-27/28-29/31-35",
          "total": "55",
          "endlag": "20",
          "damage": "2.0/1.2/8.0",
          "advantage": "-15",
          "shieldLag": "7/7/11",
          "shieldStun": "-/3/8",
          "hitboxes": "First/multi/Final",
          "notes": "Tethers on frame 20"
        },
        {
          "name": "Up B (Boost Kick)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusBoostKickG.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusBoostKickA.gif"
          ],
          "startup": "6...",
          "active": "6/12-24(rehit: 4)/28/34-35",
          "landingLag": "30",
          "damage": "5.0/1.3/4.0",
          "shieldLag": "6/4/14",
          "shieldStun": "6/3/5",
          "hitboxes": "First/multi/Final"
        },
        {
          "name": "Down B (Flip Jump)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusFlipJump.gif"
          ],
          "total": "38",
          "damage": "8.0",
          "shieldLag": "13",
          "shieldStun": "8",
          "notes": "Automatic bounce off target has 58 endlag but can end early if you land during it. Invulnerable on frame 3-12. Can transition to Manual kick as early as frame 14."
        },
        {
          "name": "Flip Jump, Kick",
          "section": "special",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusFlipJumpKick.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusFlipJumpFootstool.gif"
          ],
          "startup": "9",
          "active": "9-12",
          "total": "59",
          "endlag": "47",
          "landingLag": "35",
          "damage": "14.0",
          "advantage": "-36",
          "shieldLag": "12",
          "shieldStun": "13",
          "notes": "Landing lag only occurs if you land during 59 frame animation or during the bounce after a hit, which is a 49 frame animation"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusGrab.gif"
          ],
          "startup": "15",
          "active": "15-25",
          "total": "58",
          "endlag": "33",
          "notes": "Hand grab box only active for first 3 frames."
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusDashGrab.gif"
          ],
          "startup": "17",
          "active": "17-26",
          "total": "66",
          "endlag": "40",
          "notes": "Hand grab box only active for first 3 frames."
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusPivotGrab.gif"
          ],
          "startup": "18",
          "active": "18-26",
          "total": "61",
          "endlag": "35",
          "notes": "Hand grab box only active for first 3 frames."
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusPummel.gif"
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
            "hitboxes/zero_suit_samus/ZeroSuitSamusFThrow.gif"
          ],
          "startup": "8/9",
          "total": "25",
          "damage": "5.0/4.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusBThrow.gif"
          ],
          "startup": "9/11",
          "total": "27",
          "damage": "2.0/6.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusUThrow.gif"
          ],
          "startup": "3/5",
          "total": "40",
          "damage": "2.0/8.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusDThrow.gif"
          ],
          "startup": "20/22",
          "total": "51",
          "damage": "4.0/4.0"
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
          "total": "45",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "65",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "73",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "80",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "90",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "98",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19"
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Zero Suit Samus Ledgehang.gif",
            "ledgerolls/ZeroSuitSamus.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/zero_suit_samus/ZeroSuitSamusGetupAttackU.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusGetupAttackD.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusSlipAttack.gif",
            "hitboxes/zero_suit_samus/ZeroSuitSamusLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/zero_suit_samus",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
