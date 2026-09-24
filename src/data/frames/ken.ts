// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "ken",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1 (Light)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenJab1.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "15",
          "endlag": "12",
          "damage": "1.5",
          "advantage": "-10",
          "shieldLag": "9",
          "shieldStun": "3",
          "notes": "Special Cancellable"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenJab2.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "27",
          "endlag": "23",
          "damage": "1.5",
          "advantage": "-21",
          "shieldLag": "9",
          "shieldStun": "3",
          "notes": "Special Cancellable"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenJab3.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "total": "35",
          "endlag": "25",
          "damage": "5.0",
          "advantage": "-21",
          "shieldLag": "9",
          "shieldStun": "3"
        },
        {
          "name": "Jab (Heavy, Close)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenJabProximity.gif"
          ],
          "startup": "7",
          "active": "7(8-11)",
          "total": "37",
          "endlag": "26",
          "damage": "12.0/8.0",
          "advantage": "-19",
          "notes": "Head, chest and arms invincible: frames 4-10. Special Cancellable."
        },
        {
          "name": "Jab (Heavy, Far)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenJabHeavy.gif"
          ],
          "startup": "9/16",
          "active": "9-12/16-17",
          "total": "32",
          "endlag": "15",
          "damage": "6.0/10.0",
          "advantage": "-10/-6",
          "shieldLag": "7/12",
          "shieldStun": "6/10"
        },
        {
          "name": "Forward Tilt (Light, Close)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenFTiltProximity.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "29",
          "endlag": "25",
          "damage": "6.0",
          "advantage": "-20",
          "shieldLag": "9",
          "shieldStun": "6",
          "notes": "Special Cancellable"
        },
        {
          "name": "Forward Tilt (Light, Far)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenFTiltLight.gif"
          ],
          "startup": "8",
          "active": "8-11",
          "total": "23",
          "endlag": "12",
          "damage": "6.8",
          "advantage": "-8",
          "shieldLag": "10",
          "shieldStun": "7",
          "notes": "Leg intangibility on frame 6-11"
        },
        {
          "name": "Forward Tilt (Heavy)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenFTiltHeavy.gif"
          ],
          "startup": "10",
          "active": "10-13",
          "total": "34",
          "endlag": "21",
          "damage": "5.0/10.0",
          "advantage": "-18/-14",
          "shieldLag": "9/12",
          "shieldStun": "6/10",
          "hitboxes": "close/far"
        },
        {
          "name": "Up Tilt (Light)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenUTiltLight.gif"
          ],
          "startup": "3",
          "active": "3-6",
          "total": "14",
          "endlag": "8",
          "damage": "2.0",
          "advantage": "-8",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Special Cancellable"
        },
        {
          "name": "Up Tilt (Heavy)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenUTiltHeavy.gif"
          ],
          "startup": "7",
          "active": "7(8-11)",
          "total": "37",
          "endlag": "26",
          "damage": "12.0",
          "advantage": "-19",
          "shieldLag": "13",
          "shieldStun": "11",
          "notes": "Special Cancellable. Upper body intangibility on frame 4-10."
        },
        {
          "name": "Down Tilt (Light)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenDTiltLight.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "14",
          "endlag": "11",
          "damage": "1.6",
          "advantage": "-9",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Special Cancellable"
        },
        {
          "name": "Down Tilt (Heavy)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenDTiltHeavy.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "27",
          "endlag": "20",
          "damage": "7.0/5.5",
          "advantage": "-15",
          "shieldLag": "9",
          "shieldStun": "6",
          "hitboxes": "Sweet/Sour",
          "notes": "Special Cancellable"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenDashAttack.gif"
          ],
          "startup": "7",
          "active": "7-9(10-15)",
          "total": "40",
          "endlag": "25",
          "damage": "12.0/8.0",
          "advantage": "-22",
          "shieldLag": "13/11",
          "shieldStun": "11/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenFSmash.gif"
          ],
          "startup": "13",
          "active": "13-15",
          "total": "45",
          "endlag": "30",
          "damage": "12.0/16.0",
          "advantage": "-24/-21",
          "shieldLag": "9/16",
          "shieldStun": "8/11",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenUSmash.gif"
          ],
          "startup": "9",
          "active": "9(10-12)",
          "total": "44",
          "endlag": "32",
          "damage": "17.0/13.5",
          "advantage": "-24",
          "shieldLag": "17/14",
          "shieldStun": "11/9",
          "hitboxes": "Early/Late",
          "notes": "Arm intangibility on frame 9-12. Charge hold is frame 6"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ken/KenDSmash.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "41",
          "endlag": "35",
          "damage": "16.0/12.0",
          "advantage": "-25",
          "shieldLag": "16(13)",
          "shieldStun": "11(8)",
          "hitboxes": "Sweet/Sour",
          "notes": "Special Cancellable. Charge hold is frame 2."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ken/KenNAir.gif"
          ],
          "startup": "6",
          "active": "6-8(9-17)",
          "total": "27",
          "endlag": "10",
          "landingLag": "5",
          "damage": "6.5/4.0",
          "advantage": "-2/-2, -1/-2",
          "shieldLag": "10/8, 11/10",
          "shieldStun": "3/3, 4/3",
          "hitboxes": "Early/Late Foot, Early/Late Knee",
          "notes": "Special Cancellable. Autocancels on frame 28 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ken/KenFAir.gif"
          ],
          "startup": "8",
          "active": "8-9(10-14)",
          "total": "36",
          "endlag": "22",
          "landingLag": "11",
          "damage": "9.0/14.0, 8.0/12.0",
          "advantage": "-7/-6, -7/-6",
          "shieldLag": "15/11, 13/11",
          "shieldStun": "5/4, 5/4",
          "hitboxes": "Early foot/knee, Late foot/knee",
          "notes": "Special Cancellable. Autocancels on frame 1-2 and 38 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ken/KenBAir.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "41",
          "endlag": "32",
          "landingLag": "10",
          "damage": "16.0/13.0",
          "advantage": "-4/-5",
          "shieldLag": "16/14",
          "shieldStun": "6/5",
          "hitboxes": "Close/Far",
          "notes": "Special Cancellable. Autocancels on frame 25 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ken/KenUAir.gif"
          ],
          "startup": "5",
          "active": "5-9",
          "total": "35",
          "endlag": "26",
          "landingLag": "11",
          "damage": "6.5",
          "advantage": "-8",
          "shieldLag": "10",
          "shieldStun": "3",
          "notes": "Special Cancellable. Autocancels on frame 19 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ken/KenDAir.gif"
          ],
          "startup": "8",
          "active": "8-12",
          "total": "45",
          "endlag": "33",
          "landingLag": "15",
          "damage": "12.0",
          "advantage": "-10",
          "shieldLag": "13",
          "shieldStun": "5",
          "notes": "Special Cancellable. Autocancels on frame 1-2 and 33 onward"
        },
        {
          "name": "Neutral B (Hadouken)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenHadokenWeak.gif",
            "hitboxes/ken/KenHadokenMeidum.gif",
            "hitboxes/ken/KenHadokenHeavy.gif"
          ],
          "startup": "13",
          "active": "13-19(20-87) / 13-18(19-79) / 13-17(18-72)",
          "total": "57",
          "damage": "Light: 4.5 // Medium: 5.0 // Heavy: 5.5",
          "advantage": "-35/-34",
          "shieldLag": "8-8, 9-9",
          "shieldStun": "3-3, 3-3",
          "hitboxes": "Normal, True"
        },
        {
          "name": "Side B (Tatsumaki Senpukyaku)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenTatsumakiSenpukyakuStart.gif",
            "hitboxes/ken/KenTatsumakiSenpukyakuWeakGrounded.gif",
            "hitboxes/ken/KenTatsumakiSenpukyakuStrongGrounded.gif"
          ],
          "startup": "8/13-38",
          "active": "8-9(13-14/18-19/23-24/28-29/33-34/38-39)",
          "total": "32/62/62",
          "damage": "3.0/3.0, 3.4/3.4",
          "advantage": "-25 to -30",
          "shieldLag": "7/5, 8/5",
          "shieldStun": "4/4, 4/4",
          "hitboxes": "normal early/late, true early/late",
          "notes": "Wind-up active 8-9, standard hitbox begins on frame 13. Hits on alternating sides of him every five frames from 13 up to 38. Leg intangibility added in 7.0.0."
        },
        {
          "name": "Side B, Air (Tatsumaki Senpukyaku, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenTatsumakiSenpukyakuWeakAerial.gif",
            "hitboxes/ken/KenTatsumakiSenpukyakuStrongAerial.gif"
          ],
          "startup": "8/13/18/23/28/33/38",
          "active": "8-9(13-14/18-19/23-24/28-29/33-34/38-39)",
          "total": "77",
          "endlag": "38",
          "damage": "3.0/2.0, 3.4/2.3",
          "advantage": "-36",
          "shieldLag": "7/4, 8/5",
          "shieldStun": "4/3, 4/3",
          "hitboxes": "normal early/late, true early/late",
          "notes": "Leg intangibility on frames 13-42"
        },
        {
          "name": "Up B (Shoryuken)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenShoryukenLight.gif",
            "hitboxes/ken/KenShoryukenMedium.gif"
          ],
          "startup": "6",
          "active": "6-8(9-19)",
          "landingLag": "12",
          "damage": "13.0/7.0",
          "shieldLag": "14/8",
          "shieldStun": "12/7",
          "hitboxes": "Early/Late",
          "notes": "Invulnerable on frame 5"
        },
        {
          "name": "True Shoryuken",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenShoryukenLightInput.gif",
            "hitboxes/ken/KenShoryukenMediumInput.gif"
          ],
          "startup": "6",
          "active": "6-8(9-19)",
          "landingLag": "8",
          "damage": "15.6/8.4",
          "shieldLag": "16/9",
          "shieldStun": "14/8",
          "hitboxes": "Early/Late",
          "notes": "Invulnerable on frame 4-6. Arm intangible on frame 1-14"
        },
        {
          "name": "Up B (Flame Shoryuken)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenShoryukenHeavy.gif"
          ],
          "startup": "5/6/9",
          "active": "5/6-8/9-19",
          "landingLag": "18",
          "damage": "2.2/8.0/6.5",
          "shieldLag": "10/9/9",
          "shieldStun": "-/8/7",
          "notes": "Invulnerable on frame 5"
        },
        {
          "name": "True Flame Shoryuken",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenShoryukenHeavyInput.gif"
          ],
          "startup": "5/6/9",
          "active": "5/6-8/9-19",
          "landingLag": "12",
          "damage": "2.6/9.6/7.8",
          "shieldLag": "10/10/10",
          "shieldStun": "-/9/8",
          "notes": "Invulnerable on frame 4-6. Arm intangible on frame 1-14"
        },
        {
          "name": "Down B (Focus Attack)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenFocusAttackLv1.gif",
            "hitboxes/ken/KenFocusAttackLv2.gif",
            "hitboxes/ken/KenFocusAttackLv3.gif"
          ],
          "startup": "12 (+21), 12(+31), 12(+59)",
          "active": "32-33/42-43/70-71",
          "total": "55",
          "damage": "12.0, 10.0, 17.0",
          "advantage": "-32, -33, unblockable",
          "shieldLag": "17, 19, unblockable",
          "shieldStun": "11, 10, unblockable",
          "hitboxes": "Stage 1, Stage 2, Stage 3",
          "notes": "Stage 1: Can dash from frame 26 of entering charge or immediately after a successful hit Stage 2: Focus armor begins on frame 1 and lasts until the 12 frames of the kick Stage 3: This stage is unblockable Damage-bsed armor notes: Armor starts at 16.8% and ends at 33.6% in Stage 3, going up 0.289% per frame held."
        },
        {
          "name": "Focus Attack, Dash Cancel",
          "section": "special",
          "total": "19/19",
          "advantage": "-8/-9",
          "notes": "First advantage is on stage 1 hit, second advantage is on stage 2 hit"
        },
        {
          "name": "Nata Otoshi Geri (Input Command)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenNataOtoshiGeri.gif"
          ],
          "startup": "12/15",
          "active": "12/15-16",
          "total": "28",
          "endlag": "12",
          "damage": "5.0/5.0",
          "advantage": "-7",
          "shieldLag": "9/9",
          "shieldStun": "6/6",
          "hitboxes": "first/second",
          "notes": "Input: Forward, Down-Forward, Down+A."
        },
        {
          "name": "HELD Nata Otoshi Geri",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenNataOtoshiGeriHeld.gif"
          ],
          "startup": "12/20",
          "active": "12/20-22",
          "total": "51",
          "endlag": "29",
          "damage": "5.0/12.0",
          "advantage": "-17",
          "shieldLag": "9/6",
          "shieldStun": "9/6",
          "hitboxes": "first/inazuma kick",
          "notes": "Input: Forward, Down-Forward, Down+A (then HOLD A)"
        },
        {
          "name": "Oosoto Mawashi Geri (Input Command)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenOosotoMawashiGeri.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "32",
          "endlag": "22",
          "damage": "12.0",
          "advantage": "-12",
          "shieldLag": "13",
          "shieldStun": "11",
          "hitboxes": "normal/inazuma",
          "notes": "Input: Back, Down-back, Down, Down-forward, Forward+A. Leg intangible on frame 9-10. Holding A causes second kick. hitting on 17 instead and is 48 total frames"
        },
        {
          "name": "HELD Oosoto Mawashi Geri",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ken/KenOosotoMawashiGeriHeld.gif"
          ],
          "startup": "9/17",
          "active": "9-10/17-19",
          "total": "48",
          "endlag": "29",
          "damage": "12.0/12.0",
          "advantage": "-17",
          "shieldLag": "13/14",
          "shieldStun": "11/14",
          "hitboxes": "normal/inazuma",
          "notes": "Input: Back, Down-back, Down, Down-forward, Forward+A (then HOLD A). Leg intangible on frame 9-10."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ken/KenGrab.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "34",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ken/KenDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "42",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ken/KenPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "37",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ken/KenPummel.gif"
          ],
          "startup": "1",
          "total": "16",
          "damage": "1.3",
          "notes": "Total frames includes 10 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ken/KenFThrow.gif"
          ],
          "startup": "16",
          "total": "41"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ken/KenBThrow.gif"
          ],
          "startup": "41",
          "total": "69"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ken/KenUThrow.gif"
          ],
          "startup": "18/27",
          "total": "46",
          "notes": "Kicks on frame 27. Leg intangible 27-32."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ken/KenDThrow.gif"
          ],
          "startup": "18/19",
          "total": "44"
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
          "notes": "Intangible on frame 4-15."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "35",
          "notes": "Intangible on frame 5-16."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "49",
          "landingLag": "10",
          "notes": "Intangible on frame 3-27."
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
          "total": "80",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "89",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "102",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/ken/kenGetupAttackU.gif",
            "hitboxes/ken/kenGetupAttackD.gif",
            "hitboxes/ken/kenTripAttack.gif",
            "hitboxes/ken/kenLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/ken",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
