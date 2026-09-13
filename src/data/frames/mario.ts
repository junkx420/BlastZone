// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "mario",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mario/MarioJab1.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "19",
          "endlag": "16",
          "damage": "2.2",
          "advantage": "-14",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 5"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mario/MarioJab2.gif"
          ],
          "startup": "2",
          "active": "2-3",
          "total": "21",
          "endlag": "18",
          "damage": "1.7",
          "advantage": "-16",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 as early as frame 6"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mario/MarioJab3.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "33",
          "endlag": "29",
          "damage": "4.0",
          "advantage": "-25",
          "shieldLag": "11",
          "shieldStun": "5"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mario/MarioFTilt.gif",
            "hitboxes/mario/MarioFTiltUp.gif",
            "hitboxes/mario/MarioFTiltDown.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "25",
          "endlag": "18",
          "damage": "7.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mario/MarioUTilt.gif"
          ],
          "startup": "5",
          "active": "5-11",
          "total": "29",
          "endlag": "18",
          "damage": "5.5",
          "advantage": "-18",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mario/MarioDTilt.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "27",
          "endlag": "20",
          "damage": "7.0/5.0",
          "advantage": "-15/-16",
          "shieldLag": "7/6",
          "shieldStun": "7/6",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mario/MarioDashAttack.gif"
          ],
          "startup": "6",
          "active": "6-9(10-25)",
          "total": "37",
          "endlag": "12",
          "damage": "8.0/6.0",
          "advantage": "-17",
          "shieldLag": "9/8",
          "shieldStun": "14/11",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mario/MarioFSmash.gif",
            "hitboxes/mario/MarioFSmashUp.gif",
            "hitboxes/mario/MarioFSmashDown.gif"
          ],
          "startup": "15",
          "active": "15-17",
          "total": "47",
          "endlag": "30",
          "damage": "17.7/14.6",
          "advantage": "-22/-20",
          "shieldLag": "11/10",
          "shieldStun": "12/10",
          "hitboxes": "Far/Close",
          "notes": "Charge hold is frame 5."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mario/MarioUSmash.gif"
          ],
          "startup": "9",
          "active": "9-12",
          "total": "39",
          "endlag": "27",
          "damage": "14.0",
          "advantage": "-20",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Head Invulnerability on frame 9-12. Charge hold is frame 6."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/mario/MarioDSmash.gif"
          ],
          "startup": "5/14",
          "active": "5-6/14",
          "total": "43",
          "endlag": "29",
          "damage": "10.0/12.0",
          "advantage": "-30/-20",
          "shieldLag": "8/9",
          "shieldStun": "8/9",
          "hitboxes": "First/Second",
          "notes": "Charge hold is frame 2."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mario/MarioNAir.gif"
          ],
          "startup": "3",
          "active": "3-5(6-27)",
          "total": "45",
          "endlag": "18",
          "landingLag": "6",
          "damage": "8.0/5.0",
          "advantage": "-2/-3/-3/-3",
          "shieldLag": "7/6",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Auto cancels on frame 1-2 and frame 39 onward."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mario/MarioFAir.gif"
          ],
          "startup": "16",
          "active": "16/17-20/21",
          "total": "59",
          "endlag": "38",
          "landingLag": "17",
          "damage": "12.0/14.0/10.0",
          "advantage": "-12/-12/-13",
          "shieldLag": "9/10/8",
          "shieldStun": "5/5/4",
          "hitboxes": "Early/Clean/Late",
          "notes": "Auto cancels on frame 1-2 and frame 43 onward."
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mario/MarioBAir.gif"
          ],
          "startup": "6",
          "active": "6-7(8-10)",
          "total": "33",
          "endlag": "23",
          "landingLag": "6",
          "damage": "10.5/7.0",
          "advantage": "-2/-3/-2/-3",
          "shieldLag": "8/7",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Auto cancels on frame 1-5 and frame 19 onward."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mario/MarioUAir.gif"
          ],
          "startup": "4",
          "active": "4-7",
          "total": "30",
          "endlag": "23",
          "landingLag": "6",
          "damage": "7.0",
          "advantage": "-3",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Auto cancels on frame 17 onward."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/mario/MarioDAir.gif",
            "hitboxes/mario/MarioDAirLanding.gif"
          ],
          "startup": "5/7/9/11/13/23",
          "active": "5/7/9/11/13/23(1-2)",
          "total": "37",
          "endlag": "14",
          "landingLag": "15",
          "damage": "1.3/5.5/2.0",
          "advantage": "-11",
          "shieldLag": "4/6/4",
          "shieldStun": "2/3/3",
          "hitboxes": "Multihit/Final/Landing",
          "notes": "Auto cancels on frame 1-4 and frame 33 onward."
        },
        {
          "name": "Neutral B (Fireball)",
          "section": "special",
          "startup": "17",
          "active": "17-21(22-46/47-86)",
          "total": "49",
          "damage": "5.0/4.0",
          "advantage": "-23",
          "shieldLag": "6/5",
          "shieldStun": "3/2",
          "hitboxes": "Early/Late",
          "notes": "Fireball disappears on frame 88."
        },
        {
          "name": "Side B (Cape)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mario/MarioCape.gif"
          ],
          "startup": "12",
          "active": "12-14",
          "total": "35",
          "endlag": "21",
          "damage": "7.0",
          "advantage": "-16",
          "shieldLag": "7",
          "shieldStun": "7",
          "notes": "Reflects on frame 9-20."
        },
        {
          "name": "Up B (Super Jump Punch)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/mario/MarioSuperJumpPunch.gif"
          ],
          "startup": "3...",
          "active": "3-6/7-16/17-18",
          "landingLag": "30",
          "damage": "5.0 / 0.6 / 3.0",
          "shieldLag": "6/4/5",
          "shieldStun": "6/2/4",
          "hitboxes": "First/multihit/Final",
          "notes": "Invulnerable on frame 3-6. Hits 2-6 rehit rate of 2."
        },
        {
          "name": "Down B (F.L.U.D.D.)",
          "section": "special",
          "startup": "2 (+19)",
          "active": "21-?",
          "total": "48",
          "notes": "Startup is 2 from a charging state. Entering charge state takes 19 frames and is shield cancellable on 20."
        },
        {
          "name": "Down B, Fully Charged (F.L.U.D.D.)",
          "section": "special",
          "startup": "21",
          "active": "21-?",
          "total": "67",
          "notes": "Takes 100 frames to reach full charge."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mario/MarioGrab.gif"
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
            "hitboxes/mario/MarioDashGrab.gif"
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
            "hitboxes/mario/MarioPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "36",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mario/MarioPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "landingLag": "Total frames includes 14 frames of hitlag.",
          "damage": "1.3"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mario/MarioFThrow.gif"
          ],
          "startup": "13",
          "total": "27",
          "damage": "8.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mario/MarioBThrow.gif"
          ],
          "startup": "44",
          "total": "59",
          "damage": "11.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mario/MarioUThrow.gif"
          ],
          "startup": "18",
          "total": "39",
          "damage": "7.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/mario/MarioDThrow.gif"
          ],
          "startup": "18",
          "total": "39",
          "damage": "5.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "20/25",
          "notes": "Intangible on frame 3-17."
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
          "total": "52",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "71",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "77",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "87",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "102",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "116",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/mario/marioGetupAttackU.gif",
            "hitboxes/mario/marioGetupAttackD.gif",
            "hitboxes/mario/marioTripAttack.gif",
            "hitboxes/mario/marioLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/mario",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
