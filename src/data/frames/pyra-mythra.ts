// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "pyra-mythra",
  "sets": [
    {
      "label": "Pyra",
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraJab1.gif"
          ],
          "startup": "3",
          "active": "3-5",
          "total": "21",
          "endlag": "16",
          "damage": "3.0",
          "advantage": "-14",
          "shieldLag": "6",
          "shieldStun": "4",
          "notes": "transitions to jab 2 on frame 7"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraJab2.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "31",
          "endlag": "25",
          "damage": "2.0",
          "advantage": "-23",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 on frame 14 or Rapid on 13"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraJab3.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "35",
          "endlag": "28",
          "damage": "5.0",
          "advantage": "-24",
          "shieldLag": "9",
          "shieldStun": "6"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraJabRapid.gif"
          ],
          "startup": "9/13/17...",
          "active": "9/13/17...",
          "damage": "0.6",
          "shieldLag": "4",
          "shieldStun": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraJabRapidFinisher.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "37",
          "endlag": "30",
          "damage": "5.0",
          "advantage": "-25",
          "shieldLag": "11",
          "shieldStun": "6"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraFTilt.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "37",
          "endlag": "24",
          "damage": "11.5",
          "advantage": "-10/-9",
          "shieldLag": "10",
          "shieldStun": "15",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraUTilt.gif",
            "hitboxes/Pyra/PyraUTiltInterpolated.gif"
          ],
          "startup": "11",
          "active": "11-16",
          "total": "39",
          "endlag": "23",
          "damage": "9.5",
          "advantage": "-19",
          "shieldLag": "10",
          "shieldStun": "9"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraDTilt.gif"
          ],
          "startup": "9",
          "active": "9-11",
          "total": "26",
          "endlag": "15",
          "damage": "6.0/8.0",
          "advantage": "-11/-9",
          "shieldLag": "8/9",
          "shieldStun": "6/8",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraDashAttack.gif"
          ],
          "startup": "17",
          "active": "17-18",
          "total": "52",
          "endlag": "34",
          "damage": "10.5/12.5",
          "advantage": "-18",
          "shieldLag": "*/10",
          "shieldStun": "*/17",
          "hitboxes": "Closest/Far"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraFSmash.gif",
            "hitboxes/Pyra/PyraFSmashInterpolated.gif"
          ],
          "startup": "20",
          "active": "20-23",
          "total": "67",
          "endlag": "44",
          "damage": "20.0",
          "advantage": "-34",
          "shieldLag": "16",
          "shieldStun": "13",
          "notes": "charge hold on frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraUSmash.gif"
          ],
          "startup": "15/17",
          "active": "15-16/17-23/24-33",
          "total": "66",
          "endlag": "33",
          "damage": "3.5/13.5/12.0",
          "advantage": "-47/-40",
          "shieldLag": "5/10",
          "shieldStun": "4/9",
          "hitboxes": "hit 1/early hit 2/late hit 2",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Pyra/PyraDSmash.gif"
          ],
          "startup": "12/18",
          "active": "12-14/18-20",
          "total": "47",
          "endlag": "27",
          "damage": "11.0/13.5/8.0/10.0",
          "advantage": "-26/-28/-20/-22",
          "shieldLag": "10/11/9/10",
          "shieldStun": "8/9/6/7",
          "hitboxes": "blade close/far / leg close/far",
          "notes": "Charge hold on frame 2. Blade and leg can both hit the same shield. Third and fourth advantage assume this scenario, first and second are single, far hits."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/Pyra/PyraNAir.gif"
          ],
          "startup": "11",
          "active": "11-16(17-22)",
          "total": "56",
          "endlag": "34",
          "landingLag": "15",
          "damage": "10.0/8.0",
          "advantage": "-11/-11",
          "shieldLag": "10/9",
          "shieldStun": "4/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-10 and 41 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/Pyra/PyraFAir.gif"
          ],
          "startup": "11",
          "active": "11-14",
          "total": "48",
          "endlag": "34",
          "landingLag": "14",
          "damage": "12.0",
          "advantage": "-9",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "autocancels on frame 1-2 and 46 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/Pyra/PyraBAir.gif"
          ],
          "startup": "16",
          "active": "16-17(18)",
          "total": "49",
          "endlag": "31",
          "landingLag": "14",
          "damage": "14.0/12.0",
          "advantage": "-9",
          "shieldLag": "11",
          "shieldStun": "5",
          "hitboxes": "Early/Late",
          "notes": "autocancels on frame 1-5 and 38 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/Pyra/PyraUAir.gif"
          ],
          "startup": "13",
          "active": "13-17",
          "total": "57",
          "endlag": "40",
          "landingLag": "8",
          "damage": "10.0",
          "advantage": "-4",
          "shieldLag": "10",
          "shieldStun": "4",
          "notes": "autocancels on frame 25 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/Pyra/PyraDAir.gif",
            "hitboxes/Pyra/PyraDAirInerpolated.gif"
          ],
          "startup": "17",
          "active": "17/18/19-20",
          "total": "65",
          "endlag": "45",
          "landingLag": "14",
          "damage": "12.0/14.0/12.0",
          "advantage": "-9/-9",
          "shieldLag": "10/11",
          "shieldStun": "5/5",
          "hitboxes": "Early/Clean/Late",
          "notes": "autocancels on frame 1-4 and 34 onward"
        },
        {
          "name": "Neutral B (Flame Nova)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/Pyra/PyraFlameNova1.gif",
            "hitboxes/Pyra/PyraFlameNova2.gif",
            "hitboxes/Pyra/PyraFlameNova3.gif"
          ],
          "startup": "13/27/33-56/68/78/87/94",
          "active": "... FN1) 4-6/12-14/18-20/26-32 FN2) 7-9/14-16/20-22/25-27/30-32/38-44 FN3) 7-9/13-15/19-21/24-26/29-31/34-36/38-40/45-52",
          "total": "58-117 FN1) 49 from release FN2) 61 from release FN3) 69 from release",
          "endlag": "6",
          "damage": "FN1) 3.0/7.0 FN2) 4.0/10.0 FN3) 5.0/13.0",
          "advantage": "-18 - -11",
          "shieldLag": "5/7 - 6/10",
          "shieldStun": "4/7 - 6/12",
          "hitboxes": "multihit/final"
        },
        {
          "name": "Side B (Blazing End)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/Pyra/PyraBlazingEndStart.gif",
            "hitboxes/Pyra/PyraBlazingEnd.gif"
          ],
          "startup": "14/16...74",
          "total": "55 ground, 50 air",
          "damage": "8.0/1.5/0.8/10.0",
          "shieldLag": "*/4/4/10",
          "shieldStun": "*/2/2/4",
          "hitboxes": "wrist/early multi/late multi/final",
          "notes": "Pyra has a hitbox on startup from 14-15 before throwing the sword. Sword catch animation is 14 frames, but can be avoided by dodging, in shield, etc. The sword exerperiences its own hitlag at irregular intervals. There are technically as many startup values on the way to the final hit as there are ways to hit somebody. If the blade hits nothing, the final hit is always on 74, and begins returning on 101."
        },
        {
          "name": "Up B (Prominence Revolt)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/Pyra/PyraProminenceRevolt.gif"
          ],
          "startup": "13/41",
          "active": "13-15/41-...",
          "landingLag": "54",
          "damage": "4.0 / 5.0 / 2.0 / 9.0",
          "advantage": "-48",
          "shieldLag": "8/6/*/7",
          "shieldStun": "5/6/*/4",
          "hitboxes": "rising/falling/landing",
          "notes": "Landing hits are 1/2-6/7-11 (sword/clean flame pillar/late flame pillar). Late hits of flame pillar do 5.0/4.0% damage."
        },
        {
          "name": "Down B (Swap to Mythra)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/Pyra/PyraSwapToMythra.gif"
          ],
          "total": "32",
          "notes": "Invulnerable on frame 6-18."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Pyra/PyraGrab.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "37",
          "endlag": "29"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Pyra/PyraDashGrab.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "44",
          "endlag": "31"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Pyra/PyraPivotGrab.gif"
          ],
          "startup": "13",
          "active": "13-14",
          "total": "39",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Pyra/PyraPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.5",
          "notes": "total frames includes 14 frames of hitlag (plus one in 1v1)"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Pyra/PyraFThrow.gif"
          ],
          "startup": "10/11",
          "total": "27",
          "damage": "3.5/5.5"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Pyra/PyraBThrow.gif"
          ],
          "startup": "15/17",
          "total": "35",
          "damage": "3.0/4.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Pyra/PyraUThrow.gif"
          ],
          "startup": "9",
          "total": "29",
          "damage": "5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Pyra/PyraDThrow.gif"
          ],
          "startup": "20/28",
          "total": "48",
          "damage": "4.0/4.0"
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
          "total": "49",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "68",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "75",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "83",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "97",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "109",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/PyraLedgehang.gif",
            "ledgerolls/Pyra.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/pyra/pyraGetupAttackU.gif",
            "hitboxes/pyra/pyraGetupAttackD.gif",
            "hitboxes/pyra/pyraTripAttack.gif",
            "hitboxes/pyra/pyraLedgeAttack.gif"
          ]
        }
      ]
    },
    {
      "label": "Mythra",
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraJab1.gif"
          ],
          "startup": "2",
          "active": "2-4",
          "total": "20",
          "endlag": "16",
          "damage": "2.0",
          "advantage": "-15",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "transitions to jab 2 on frame 5"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraJab2.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "30",
          "endlag": "25",
          "damage": "2.0",
          "advantage": "-23",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 on frame 13 or Rapid on 12"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraJab3.gif"
          ],
          "startup": "4",
          "active": "4-6",
          "total": "29",
          "endlag": "23",
          "damage": "4.0",
          "advantage": "-20",
          "shieldLag": "8",
          "shieldStun": "5"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraJabRapid.gif"
          ],
          "startup": "8/12/16...",
          "active": "8/12/16...",
          "damage": "0.4",
          "shieldLag": "4",
          "shieldStun": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraJabRapidFinisher.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "37",
          "endlag": "30",
          "damage": "3.0",
          "advantage": "-27",
          "shieldLag": "7",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraFTilt.gif"
          ],
          "startup": "8",
          "active": "8-9",
          "total": "25",
          "endlag": "16",
          "damage": "5.5",
          "advantage": "-11",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraUTilt.gif",
            "hitboxes/Mythra/MythraUTiltInterpolated.gif"
          ],
          "startup": "7",
          "active": "7-12",
          "total": "26",
          "endlag": "14",
          "damage": "4.0",
          "advantage": "-14",
          "shieldLag": "5",
          "shieldStun": "5"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraDTilt.gif"
          ],
          "startup": "5",
          "active": "5-7",
          "total": "20",
          "endlag": "13",
          "damage": "3.0/4.0",
          "advantage": "-11/-10",
          "shieldLag": "5/5",
          "shieldStun": "4/5",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraDashAttack.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "39",
          "endlag": "29",
          "damage": "7.0/8.5",
          "advantage": "-22",
          "shieldLag": "*/7",
          "shieldStun": "*/8",
          "hitboxes": "Closest/Far"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraFSmash.gif",
            "hitboxes/Mythra/MythraFSmashInterpolated.gif"
          ],
          "startup": "14",
          "active": "14-17",
          "total": "49",
          "endlag": "32",
          "damage": "13.5",
          "advantage": "-26",
          "shieldLag": "9",
          "shieldStun": "9",
          "notes": "charge hold on frame 3"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraUSmash.gif"
          ],
          "startup": "9/12/17/22/26",
          "active": "9-10/11-24(rehit: 5)/26-27",
          "total": "52",
          "endlag": "25",
          "damage": "2.0/1.5/6.0",
          "advantage": "-40/-21",
          "shieldLag": "4/4/6",
          "shieldStun": "3/2/5",
          "hitboxes": "launcher/multihits/final hit",
          "notes": "charge hold on frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/Mythra/MythraDSmash.gif"
          ],
          "startup": "8/14",
          "active": "8-10/14-16",
          "total": "44",
          "endlag": "28",
          "damage": "9.0 / 10.5 / 6.0 / 7.5",
          "advantage": "-28/-30/-22/-24",
          "shieldLag": "7/8/6/7",
          "shieldStun": "*/8/5/6",
          "hitboxes": "blade close/far / leg close/far",
          "notes": "Charge hold on frame 2. Blade and leg can both hit the same shield. Third and fourth advantage assume this scenario, first and second are single, far hits."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/Mythra/MythraNAir.gif",
            "hitboxes/Mythra/MythraNAirLanding.gif"
          ],
          "startup": "8",
          "active": "8-13(rehit: 3)(14-19)",
          "total": "50",
          "endlag": "31",
          "landingLag": "13",
          "damage": "2.0/3.0/2.0",
          "advantage": "-10",
          "shieldLag": "7",
          "shieldStun": "3",
          "hitboxes": "Multi/Final/Landing",
          "notes": "autocancels on frame 1-7 and 38 onward. Landing hitbox on frame 1."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/Mythra/MythraFAir.gif"
          ],
          "startup": "8",
          "active": "8-11",
          "total": "37",
          "endlag": "26",
          "landingLag": "10",
          "damage": "7.0",
          "advantage": "-7",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "autocancels on frame 1-3 and 36 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/Mythra/MythraBAir.gif"
          ],
          "startup": "10",
          "active": "10-11(12)",
          "total": "33",
          "endlag": "21",
          "landingLag": "10",
          "damage": "7.5/6.5",
          "advantage": "-7",
          "shieldLag": "7",
          "shieldStun": "3",
          "hitboxes": "Early/Late",
          "notes": "autocancels on frame 1-3 and 26 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/Mythra/MythraUAir.gif"
          ],
          "startup": "9",
          "active": "9-13",
          "total": "30",
          "endlag": "17",
          "landingLag": "8",
          "damage": "6.0",
          "advantage": "-5",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "autocancels on frame 16 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/Mythra/MythraDAir.gif",
            "hitboxes/Mythra/MythraDAirInterpolated.gif"
          ],
          "startup": "13",
          "active": "13-15(16)",
          "total": "40",
          "endlag": "24",
          "landingLag": "11",
          "damage": "8.0/6.0",
          "advantage": "-7",
          "shieldLag": "7",
          "shieldStun": "4",
          "hitboxes": "Early/Late",
          "notes": "autocancels on frame 1-4 and 29 onward"
        },
        {
          "name": "Neutral B (Lightning Buster)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/Mythra/MythraLightningBusterCharge.gif",
            "hitboxes/Mythra/MythraLightningBuster.gif",
            "hitboxes/Mythra/MythraLightningBusterMax.gif",
            "hitboxes/Mythra/MythraLightningBusterAerial.gif",
            "hitboxes/Mythra/MythraLightningBusterAerial2.gif"
          ],
          "startup": "9/20/30/40-69/80/90/99/109",
          "total": "67-132",
          "damage": "2.0/6.0/4.0/17.0",
          "advantage": "-21 - -8",
          "shieldLag": "4/6 - 5/10",
          "shieldStun": "5/6 - 8/15",
          "hitboxes": "multihit/final",
          "notes": "startup is 5 from release, intangibility on on 3-8 for standard and 1-8/12-16 for Max (both are after release)"
        },
        {
          "name": "Side B (Photon Edge)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/Mythra/MythraPhotonEdge.gif",
            "hitboxes/Mythra/MythraPhotonEdge2.gif",
            "hitboxes/Mythra/MythraPhotonEdgeMod.gif"
          ],
          "startup": "18/25/32/39/46/54",
          "active": "18-19/25/32/39/46/54",
          "total": "100",
          "endlag": "46",
          "landingLag": "18 (see notes)",
          "damage": "2.5 / 2.5 / 7.0",
          "advantage": "-47",
          "shieldLag": "0/5 (4 self) / 8 (12 self)",
          "shieldStun": "4/2/3",
          "hitboxes": "First/Multi/Final",
          "notes": "If you land before the animation has finished, the remaining total frames elapse. If you land after, you incur 18 frames of landing lag. First hit has no hitlag, while the later hits have different shieldlag for Mythra. Thanks to @jayblu_ on Twitter for the visual with hurtboxes visible and for creating the mod it came from!"
        },
        {
          "name": "Up B (Ray of Punishment)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/Mythra/MythraUpSpecial.gif",
            "hitboxes/Mythra/MythraRayOfPunishment.gif"
          ],
          "startup": "10/40",
          "active": "10-12/40-56",
          "landingLag": "15",
          "damage": "7.0/2.0/4.5",
          "shieldLag": "8/*/5",
          "shieldStun": "7/*/2",
          "hitboxes": "Slash/Projectile/Explosion",
          "notes": "Ray explodes the next frame after hitting something"
        },
        {
          "name": "Chroma Dust",
          "section": "special",
          "hitboxImages": [
            "hitboxes/Mythra/MythraUpSpecial.gif",
            "hitboxes/Mythra/MythraChromaDustInterpolated.gif"
          ],
          "startup": "10...",
          "active": "10-12/41-56/42-57/43-58/44-59/45-60",
          "landingLag": "20",
          "damage": "7.0/2.5",
          "shieldLag": "8/5",
          "shieldStun": "7/2",
          "hitboxes": "Slash/Projectile"
        },
        {
          "name": "Down B (Swap to Pyra)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/Mythra/MythraSwapToPyra.gif"
          ],
          "total": "32",
          "notes": "Invulnerable on frame 6-18."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Mythra/MythraGrab.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "36",
          "endlag": "29"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Mythra/MythraDashGrab.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "43",
          "endlag": "31"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Mythra/MythraPivotGrab.gif"
          ],
          "startup": "12",
          "active": "12-13",
          "total": "38",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Mythra/MythraPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.5",
          "notes": "total frames includes 14 frames of hitlag (plus one in 1v1)"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Mythra/MythraFThrow.gif"
          ],
          "startup": "10/11",
          "total": "27",
          "damage": "3.0/2.5"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Mythra/MythraBThrow.gif"
          ],
          "startup": "15/17",
          "total": "35",
          "damage": "3.0/2.5"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Mythra/MythraUThrow.gif"
          ],
          "startup": "9",
          "total": "29",
          "damage": "4.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/Mythra/MythraDThrow.gif"
          ],
          "startup": "20/28",
          "total": "48",
          "damage": "4.0/3.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "25/31",
          "notes": "Foresight on frame 2-6. Intangible on frame 7-21. Foresight damage received multiplier: 0.5x, slowdown effect speed: 10, slowdown duration: 36 frames."
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "35",
          "notes": "Foresight on frame 2-6. Intangible on frame 7-18. Foresight damage received multiplier: 0.5x, slowdown effect speed: 10, slowdown duration: 36 frames."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "38",
          "notes": "Foresight on frame 2-7. Intangible on frame 8-19. Foresight damage received multiplier: 0.5x, slowdown effect speed: 10, slowdown duration: 36 frames."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "44",
          "notes": "Foresight on frame 2-5. Intangible on frame 6-33. Foresight damage received multiplier: 0.5x, slowdown effect speed: 10, slowdown duration: 36 frames."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "59",
          "notes": "Foresight on frame 2-5. Intangible on frame 6-24. Foresight damage received multiplier: 0.5x, slowdown effect speed: 10, slowdown duration: 36 frames."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "66",
          "notes": "Foresight on frame 2-5. Intangible on frame 6-24. Foresight damage received multiplier: 0.5x, slowdown effect speed: 10, slowdown duration: 36 frames."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "73",
          "notes": "Foresight on frame 2-5. Intangible on frame 6-24. Foresight damage received multiplier: 0.5x, slowdown effect speed: 10, slowdown duration: 36 frames."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "85",
          "notes": "Foresight on frame 2-5. Intangible on frame 6-24. Foresight damage received multiplier: 0.5x, slowdown effect speed: 10, slowdown duration: 36 frames."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "95",
          "notes": "Foresight on frame 2-5. Intangible on frame 6-24. Foresight damage received multiplier: 0.5x, slowdown effect speed: 10, slowdown duration: 36 frames."
        },
        {
          "name": "Ledge Grab",
          "section": "misc"
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/MythraLedgehang.gif",
            "ledgerolls/Mythra.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/mythra/mythraGetupAttackU.gif",
            "hitboxes/mythra/mythraGetupAttackD.gif",
            "hitboxes/mythra/mythraTripAttack.gif",
            "hitboxes/mythra/mythraLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/pyra",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
