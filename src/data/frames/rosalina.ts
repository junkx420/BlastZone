// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "rosalina",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaJab1.gif"
          ],
          "startup": "5",
          "active": "5",
          "total": "20",
          "endlag": "15",
          "damage": "2.0",
          "advantage": "-13",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 9"
        },
        {
          "name": "Jab 1 (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaJab1.gif"
          ],
          "startup": "4",
          "active": "4",
          "damage": "1.5",
          "shieldLag": "7(+3)",
          "shieldStun": "2"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaJab2.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "24",
          "endlag": "17",
          "damage": "2.0",
          "advantage": "-16",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 13"
        },
        {
          "name": "Jab 2 (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaJab2.gif"
          ],
          "startup": "6",
          "active": "6",
          "damage": "1.5",
          "advantage": "-16",
          "shieldLag": "4(+1)",
          "shieldStun": "2"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaJab3.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "35",
          "endlag": "27",
          "damage": "3.0",
          "advantage": "-25",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Jab 3 (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaJab3.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "damage": "3.0",
          "shieldLag": "10(+5)",
          "shieldStun": "2"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaJabRapid.gif"
          ],
          "startup": "2/5/8/11...",
          "active": "2/5/8/11...",
          "damage": "0.3",
          "shieldLag": "4",
          "shieldStun": "3"
        },
        {
          "name": "Rapid Jab (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaJabRapid.gif"
          ],
          "startup": "3/6/9/12...",
          "active": "3/6/9/12...",
          "total": "24",
          "endlag": "12",
          "damage": "0.1",
          "shieldLag": "4",
          "shieldStun": "2"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaJabRapidEnd.gif"
          ],
          "startup": "5",
          "active": "6-7",
          "total": "38",
          "endlag": "31",
          "damage": "2.5",
          "advantage": "-30",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Rapid Jab Finisher (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaJabRapidEnd.gif"
          ],
          "startup": "5",
          "active": "6-7",
          "damage": "1.5",
          "advantage": "-30",
          "shieldLag": "8(+4)",
          "shieldStun": "2"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaFTilt.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "37",
          "endlag": "28",
          "damage": "7.5",
          "advantage": "-26",
          "shieldLag": "7",
          "shieldStun": "8"
        },
        {
          "name": "Forward Tilt (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaFTilt.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "damage": "6.7",
          "advantage": "-20",
          "shieldLag": "10(+5)",
          "shieldStun": "3"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaUTilt.gif"
          ],
          "startup": "7",
          "active": "7-10/11-17",
          "total": "40",
          "endlag": "23",
          "damage": "10.0/8.0",
          "advantage": "-22",
          "shieldLag": "8/7",
          "shieldStun": "10/8",
          "hitboxes": "Early/Late",
          "notes": "Head Intangible on frame 4-10"
        },
        {
          "name": "Up Tilt (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaUTilt.gif"
          ],
          "startup": "3",
          "active": "3/4-5/6-10",
          "damage": "12.0/6.0/4.5",
          "advantage": "-26",
          "shieldLag": "12(+4)/6(-2)/5(-1)",
          "shieldStun": "4/3/3",
          "hitboxes": "Early/Late/Later"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaDTilt.gif"
          ],
          "startup": "5",
          "active": "5-8",
          "total": "32",
          "endlag": "24",
          "damage": "5.5",
          "advantage": "-22",
          "shieldLag": "8",
          "shieldStun": "6"
        },
        {
          "name": "Down Tilt (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaDTilt.gif"
          ],
          "startup": "8",
          "active": "8-13",
          "damage": "5.2",
          "advantage": "-26",
          "shieldLag": "9(+5)",
          "shieldStun": "3"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaDashAttack.gif"
          ],
          "startup": "6/17",
          "active": "6-9/17-19",
          "total": "40",
          "endlag": "21",
          "damage": "3.0/4.0",
          "advantage": "-31/-19",
          "shieldLag": "6/7",
          "shieldStun": "4/5"
        },
        {
          "name": "Dash Attack (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaDashAttack.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "damage": "4.5",
          "advantage": "-31/-25",
          "shieldLag": "8(+5)",
          "shieldStun": "2"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaFSmash.gif",
            "hitboxes/rosalina_and_luma/RosalinaFSmashUp.gif",
            "hitboxes/rosalina_and_luma/RosalinaFSmashDown.gif"
          ],
          "startup": "16",
          "active": "16-18",
          "total": "51",
          "endlag": "33",
          "damage": "12.0",
          "advantage": "-36/-32",
          "shieldLag": "11",
          "shieldStun": "8",
          "hitboxes": "Normal/Sour",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Forward Smash (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaFSmash.gif",
            "hitboxes/rosalina_and_luma/LumaFSmashUp.gif",
            "hitboxes/rosalina_and_luma/LumaFSmashDown.gif"
          ],
          "startup": "17",
          "active": "17-18",
          "damage": "10.5",
          "advantage": "-21",
          "shieldLag": "14(+2)",
          "shieldStun": "4",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaUSmash.gif"
          ],
          "startup": "8",
          "active": "8-16",
          "total": "47",
          "endlag": "31",
          "damage": "12.0",
          "advantage": "-34",
          "shieldLag": "9",
          "shieldStun": "8",
          "notes": "Head intangible on frame 7-16. Charge hold is frame 3"
        },
        {
          "name": "Up Smash (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaUSmash.gif"
          ],
          "startup": "10",
          "active": "10-12/13-17",
          "damage": "9.0",
          "advantage": "-34",
          "shieldLag": "11(+4)",
          "shieldStun": "4",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaDSmash.gif"
          ],
          "startup": "6/17",
          "active": "6-7/17-18",
          "total": "41",
          "endlag": "23",
          "damage": "7.0/9.0",
          "advantage": "-30/-18",
          "shieldLag": "10/11",
          "shieldStun": "6/7",
          "notes": "Charge hold is frame 3"
        },
        {
          "name": "Down Smash (Luma)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaDSmash.gif"
          ],
          "startup": "7/19",
          "active": "7-8/19-20",
          "damage": "6.0/7.5",
          "advantage": "-21/-18",
          "shieldLag": "9(+5)/10(+5)",
          "shieldStun": "3/3"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaNAir.gif"
          ],
          "startup": "9",
          "active": "9/10-19/20-31/32/33",
          "total": "43",
          "endlag": "10",
          "landingLag": "8",
          "damage": "10.0/7.0",
          "advantage": "-4/-5",
          "shieldLag": "7/7",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-4 and 33 onward"
        },
        {
          "name": "Neutral Air (Luma)",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaNAir.gif"
          ],
          "startup": "7/13",
          "active": "7-9/13-14",
          "damage": "3.0/3.0",
          "shieldLag": "5(+4)/5(+4)",
          "shieldStun": "3/3"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaFAir.gif"
          ],
          "startup": "10/13/16/19/22",
          "active": "10-20(rehit rate: 3)/22",
          "total": "59",
          "endlag": "37",
          "landingLag": "16",
          "damage": "1.0/4.0",
          "advantage": "-14/-13",
          "shieldLag": "4/8",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 1-3 and 50 onward"
        },
        {
          "name": "Forward Air (Luma)",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaFAir.gif"
          ],
          "startup": "11",
          "active": "11-13",
          "damage": "4.5",
          "shieldLag": "5(-1)",
          "shieldStun": "3"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaBAir.gif"
          ],
          "startup": "9",
          "active": "9-11",
          "total": "54",
          "endlag": "43",
          "landingLag": "10",
          "damage": "11.0",
          "advantage": "-6",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-3 and 50 onward"
        },
        {
          "name": "Back Air (Luma)",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaBAir.gif"
          ],
          "startup": "10",
          "active": "10-15",
          "damage": "6.0",
          "shieldLag": "9(+5)",
          "shieldStun": "3"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaUAir.gif"
          ],
          "startup": "8",
          "active": "8-10/11-14/15-19",
          "total": "49",
          "endlag": "30",
          "landingLag": "11",
          "damage": "10.0/5.0/2.0",
          "advantage": "-7/-8/-9",
          "shieldLag": "8/7/6",
          "shieldStun": "4/3/2",
          "hitboxes": "Early/Late/Later",
          "notes": "Autocancels on frame 45 onward"
        },
        {
          "name": "Up Air (Luma)",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaUAir.gif"
          ],
          "startup": "6",
          "active": "6-11",
          "damage": "4.0",
          "shieldLag": "6(-2)",
          "shieldStun": "3"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaDAir.gif"
          ],
          "startup": "17",
          "active": "17/18-22/23-25/26-32",
          "total": "49",
          "endlag": "17",
          "landingLag": "12",
          "damage": "8.0/6.0/2.0",
          "advantage": "-7/-8/-9",
          "shieldLag": "7/6/4",
          "shieldStun": "4/3/2",
          "hitboxes": "Early/Late/Later",
          "notes": "Autocancels on frame 50 onward"
        },
        {
          "name": "Down Air (Luma)",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaDAir.gif"
          ],
          "startup": "15",
          "active": "15-19",
          "damage": "5.0",
          "shieldLag": "10(+5)",
          "shieldStun": "3"
        },
        {
          "name": "Neutral B (Luma Shot)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaLumaShot.gif"
          ],
          "startup": "10-91",
          "total": "34-115",
          "damage": "5.0-16.0",
          "advantage": "-15 to -9",
          "shieldLag": "6-10",
          "shieldStun": "3-5",
          "notes": "4 startup and 28 total frames from charge state. Takes 6 frames to enter charge state. 87 frames to reach full charge."
        },
        {
          "name": "Luma Recall",
          "section": "special",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaLumaShotCallBack.gif"
          ],
          "total": "21/23",
          "notes": "Second total frames is in the air."
        },
        {
          "name": "Side B (Star Bits)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/LumaStarBits.gif"
          ],
          "startup": "10/16/22",
          "total": "51",
          "damage": "3.0",
          "advantage": "-22",
          "shieldLag": "5",
          "shieldStun": "2"
        },
        {
          "name": "Up B (Launch Star)",
          "section": "special",
          "landingLag": "30"
        },
        {
          "name": "Down B (Gravitational Pull)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaGravitationalPull.gif"
          ],
          "total": "39",
          "notes": "Pulls on frame 4-29"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaGrab.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "39",
          "endlag": "32"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "46",
          "endlag": "36"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "41",
          "endlag": "30"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaPummel.gif"
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
            "hitboxes/rosalina_and_luma/RosalinaFThrow.gif"
          ],
          "startup": "28",
          "total": "37",
          "damage": "9.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaBThrow.gif"
          ],
          "startup": "30",
          "total": "42",
          "damage": "11.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaUThrow.gif"
          ],
          "startup": "13",
          "total": "37",
          "damage": "7.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/RosalinaDThrow.gif"
          ],
          "startup": "13",
          "total": "35",
          "damage": "9.0"
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
          "notes": "Intangible on frame 4-15"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "35",
          "notes": "Intangible on frame 5-16"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "62",
          "landingLag": "10",
          "notes": "Intangible on frame 3-29"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "86",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "94",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "105",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "124",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "144",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Ledge Grab",
          "section": "misc",
          "hitboxImages": [
            "ledgegrabs/Rosalina Ledgegrab 3 (Up-B Ending Animation).gif"
          ]
        },
        {
          "name": "Ledge Hang",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/Rosalina Ledgehang.gif",
            "ledgerolls/Rosalina.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/rosalina_and_luma/rosalinaGetupAttackU.gif",
            "hitboxes/rosalina_and_luma/rosalinaGetupAttackD.gif",
            "hitboxes/rosalina_and_luma/rosalinaTripAttack.gif",
            "hitboxes/rosalina_and_luma/rosalinaLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/rosalina_and_luma",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
