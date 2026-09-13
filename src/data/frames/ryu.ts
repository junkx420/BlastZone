// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "ryu",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1 (Light)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuJab1.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "15",
          "endlag": "12",
          "damage": "1.5",
          "advantage": "-10",
          "shieldLag": "9",
          "shieldStun": "3",
          "notes": "Special Cancellable. Transitions to jab 2 as early as frame 6"
        },
        {
          "name": "Jab (Heavy, Close)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuJabHeavyClose.gif"
          ],
          "startup": "7",
          "active": "7(8-11)",
          "total": "37",
          "endlag": "26",
          "damage": "12.0/8.0",
          "advantage": "-19",
          "shieldLag": "13",
          "shieldStun": "11",
          "notes": "Head, chest and arms invincible: frames 4-10. Special Cancellable."
        },
        {
          "name": "Jab (Heavy, Far)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuJabHeavy.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "32",
          "endlag": "22",
          "damage": "10.0",
          "advantage": "-13",
          "shieldLag": "12",
          "shieldStun": "10"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuJab2.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "27",
          "endlag": "23",
          "damage": "1.5",
          "advantage": "-21",
          "shieldLag": "9",
          "shieldStun": "3",
          "notes": "Special Cancellable. Transitions to jab 3 as early as frame 6"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuJab3.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "total": "35",
          "endlag": "25",
          "damage": "5.0",
          "advantage": "-21",
          "shieldLag": "12",
          "shieldStun": "6"
        },
        {
          "name": "Forward Tilt (Light, Close)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuFTiltLightClose.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "29",
          "endlag": "25",
          "damage": "6.0",
          "advantage": "-20",
          "shieldLag": "9",
          "shieldStun": "6",
          "notes": "Special Cancellable. Can't seem to perform this unless within range"
        },
        {
          "name": "Forward Tilt (Light, Far)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuFTiltLight.gif"
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
            "hitboxes/ryu/RyuFTiltHeavy.gif"
          ],
          "startup": "15/17",
          "active": "15/17-18",
          "total": "36",
          "endlag": "18",
          "damage": "3.0/6.0",
          "advantage": "-13",
          "shieldLag": "7/9",
          "shieldStun": "-/6"
        },
        {
          "name": "Up Tilt (Light)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuUTiltLight.gif"
          ],
          "startup": "3",
          "active": "3-6",
          "total": "14",
          "endlag": "8",
          "damage": "2.0",
          "advantage": "-8",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Special Cancellable. Transitions to another Utilt as early as frame 8"
        },
        {
          "name": "Up Tilt (Heavy)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuUTiltHeavy.gif"
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
            "hitboxes/ryu/RyuDTiltLight.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "14",
          "endlag": "11",
          "damage": "1.6",
          "advantage": "-9",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Special Cancellable. Transitions to another Dtilt as early as frame 8"
        },
        {
          "name": "Down Tilt (Heavy)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuDTiltHeavy.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "27",
          "endlag": "20",
          "damage": "7.0/5.5",
          "advantage": "-15",
          "shieldLag": "10/9",
          "shieldStun": "7/6",
          "hitboxes": "Strong/Weak",
          "notes": "Special Cancellable"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuDashAttack.gif"
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
            "hitboxes/ryu/RyuFSmash.gif"
          ],
          "startup": "15",
          "active": "15-17",
          "total": "45",
          "endlag": "28",
          "damage": "16.0/17.5",
          "advantage": "-19/-18",
          "shieldLag": "16/17",
          "shieldStun": "11/12",
          "hitboxes": "Close/Far",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/ryu/RyuUSmash.gif"
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
            "hitboxes/ryu/RyuDSmash.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "41",
          "endlag": "35",
          "damage": "16.0/12.0",
          "advantage": "-25",
          "shieldLag": "16/13",
          "shieldStun": "11/8",
          "hitboxes": "Sweet/Sour",
          "notes": "Special Cancellable. Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ryu/RyuNAir.gif"
          ],
          "startup": "4",
          "active": "4-6(7-31)",
          "total": "35",
          "endlag": "4",
          "landingLag": "5",
          "damage": "8.0/4.5",
          "advantage": "-1/-2",
          "shieldLag": "11/8",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Special Cancellable. Autocancels on frame 34 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ryu/RyuFAir.gif"
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
            "hitboxes/ryu/RyuBAir.gif"
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
            "hitboxes/ryu/RyuUAir.gif"
          ],
          "startup": "6/9",
          "active": "6-7/9-11",
          "total": "35",
          "endlag": "24",
          "landingLag": "11",
          "damage": "5.0/6.0",
          "advantage": "-8/-8",
          "shieldLag": "9/9",
          "shieldStun": "3/3",
          "notes": "Special Cancellable. Arm intangibility on frame 6-10. Autocancels on frame 18 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/ryu/RyuDAir.gif"
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
            "hitboxes/ryu/RyuHadokenWeak.gif",
            "hitboxes/ryu/RyuHadokenMeidum.gif",
            "hitboxes/ryu/RyuHadokenHeavy.gif"
          ],
          "startup": "12",
          "active": "12-18(19-93) / 12-17(18-78) / 12-16(17-61)",
          "total": "57",
          "damage": "9.0/9.5/10.0, 11.25/11.875/12.5",
          "advantage": "-27/-28/-28, -26/-25/-25",
          "shieldLag": "9/10/10, 10/11/11",
          "shieldStun": "8/8/8, 10/10/10",
          "hitboxes": "Normal Light/Medium/Heavy, True Light/Medium/Heavy"
        },
        {
          "name": "Shakunetsu Hadouken",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ryu/RyuShakunetsuHadokenWeak.gif",
            "hitboxes/ryu/RyuShakunetsuHadokenMeidum.gif",
            "hitboxes/ryu/RyuShakunetsuHadokenHeavy.gif"
          ],
          "startup": "12",
          "active": "12-21(22-79) / 12-20(21-72) / 12-19(20-66)",
          "total": "56",
          "damage": "1.1/9.3",
          "advantage": "-23/-23/-27",
          "shieldLag": "10",
          "shieldStun": "3",
          "hitboxes": "Light/Medium/Heavy",
          "notes": "Hits on frame 1,2,3, and 4 with a final hit on frame 7. Rehit rate for light/medium is 2, rehit rate for heavy is 1."
        },
        {
          "name": "Side B (Tatsumaki Senpukyaku)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ryu/RyuTatsumakiSenpukyakuStart.gif",
            "hitboxes/ryu/RyuTatsumakiSenpukyakuLightGrounded.gif",
            "hitboxes/ryu/RyuTatsumakiSenpukyakuMediumGrounded.gif",
            "hitboxes/ryu/RyuTatsumakiSenpukyakuHeavyGrounded.gif"
          ],
          "startup": "8",
          "active": "8-9, 13-15, 29-31, and 45-47",
          "total": "58-90",
          "endlag": "11",
          "damage": "11.0/11.0/12.0/13.0, 12.76/12.76/13.92/15.08",
          "advantage": "-40--72/-35/-67/-65, -38--70/-33/-64/-63",
          "shieldLag": "10/13/13/14, 14/14/15/15",
          "shieldStun": "10/10/11/12, 12/12/13/14",
          "hitboxes": "normal initial/light/medium/heavy, true initial/light/medium/heavy",
          "notes": "Wind-up active 8-9, later hits 29-30 and 45-46 (medium/heavy only). Total frames depends on distance traveled. Leg intangibility added in 7.0.0. The active frames listed are the front hitboxes only, and only one set of hitboxes can connect with an opponent."
        },
        {
          "name": "Side B, Air (Tatsumaki Senpukyaku, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ryu/RyuTatsumakiSenpukyakuLightAerial.gif",
            "hitboxes/ryu/RyuTatsumakiSenpukyakuMediumAerial.gif",
            "hitboxes/ryu/RyuTatsumakiSenpukyakuHeavyAerial.gif"
          ],
          "startup": "8",
          "active": "8-9/**",
          "total": "79",
          "damage": "11.0/10.0/11.0/12.0, 12.76/11.6/12.76/13.92",
          "advantage": "-62 to -61, -61 to -60",
          "shieldLag": "13/12/13/13, 14/13/14/15",
          "shieldStun": "10/10/10/11, 12/11/12/13",
          "hitboxes": "normal initial/light/medium/heavy, true initial/light/medium/heavy",
          "notes": "Leg intangibility on frame 13-44"
        },
        {
          "name": "Up B (Shoryuken)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ryu/RyuShoryukenLight.gif",
            "hitboxes/ryu/RyuShoryukenMedium.gif",
            "hitboxes/ryu/RyuShoryukenHeavy.gif"
          ],
          "startup": "6",
          "active": "6(7-8/9-19)",
          "landingLag": "22",
          "damage": "13.0-15.0/7.0",
          "shieldLag": "19/20/21/10",
          "shieldStun": "12/13/14/7",
          "hitboxes": "Light/Medium/Heavy/Late",
          "notes": "Invulnerable on frame 5"
        },
        {
          "name": "True Shoryuken",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ryu/RyuShoryukenLightInput.gif",
            "hitboxes/ryu/RyuShoryukenMediumInput.gif",
            "hitboxes/ryu/RyuShoryukenHeavyInput.gif"
          ],
          "startup": "6",
          "active": "6(7-8/9-19)",
          "landingLag": "15",
          "damage": "15.6-18.0/8.4",
          "shieldLag": "21/22/23/11",
          "shieldStun": "14/15/16/8",
          "hitboxes": "Light/Medium/Heavy/Late",
          "notes": "Arm intangibility on frame 1-14 Completely Invulnerable on frame 4-6."
        },
        {
          "name": "Down B (Focus Attack)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/ryu/RyuFocusAttackLvl1.gif",
            "hitboxes/ryu/RyuFocusAttackLvl2.gif",
            "hitboxes/ryu/RyuFocusAttackLvl3.gif"
          ],
          "startup": "11 (+21), 11(+31), 11(+59)",
          "active": "32-33/42-43/70-71",
          "total": "55, 55, 114",
          "damage": "12.0, 10.0, 17.0",
          "advantage": "-33, -34, unblockable",
          "shieldLag": "18, 20, unblockable",
          "shieldStun": "11, 10, unblockable",
          "hitboxes": "Stage 1, Stage 2, Stage 3",
          "notes": "Stage 1: Can dash from frame 26 of entering charge or immediately after a successful hit Stage 2: Focus armor begins on frame 1 and lasts until the 11 frames of the punch Stage 3: This stage is unblockable Damage-bsed armor notes: Armor starts at 16.8% and ends at 33.6% in Stage 3, going up 0.289% per frame held."
        },
        {
          "name": "Focus Attack, Dash Cancel",
          "section": "special",
          "total": "19/19",
          "advantage": "-8/-9",
          "notes": "First advantage is on stage 1 hit, second advantage is on stage 2 hit"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ryu/RyuGrab.gif"
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
            "hitboxes/ryu/RyuDashGrab.gif"
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
            "hitboxes/ryu/RyuPivotGrab.gif"
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
            "hitboxes/ryu/RyuPummel.gif"
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
            "hitboxes/ryu/RyuFThrow.gif"
          ],
          "startup": "16",
          "total": "41",
          "damage": "9.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ryu/RyuBThrow.gif"
          ],
          "startup": "23",
          "total": "49",
          "damage": "12.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ryu/RyuUThrow.gif"
          ],
          "startup": "18/25",
          "total": "46",
          "damage": "8.0",
          "notes": "Kicks on frame 25. Leg intangible 25-30."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/ryu/RyuDThrow.gif"
          ],
          "startup": "18/19",
          "total": "44",
          "damage": "3.0/6.0"
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
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Ryu Ledgehang.gif",
            "ledgerolls/Ryu.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/ryu/ryuGetupAttackU.gif",
            "hitboxes/ryu/ryuGetupAttackD.gif",
            "hitboxes/ryu/ryuTripAttack.gif",
            "hitboxes/ryu/ryuLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/ryu",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
