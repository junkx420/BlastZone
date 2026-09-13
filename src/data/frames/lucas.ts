// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "lucas",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucas/LucasJab1.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "19",
          "endlag": "17",
          "damage": "2.5",
          "advantage": "-13",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Transitions to Jab 2 as early as frame 5"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucas/LucasJab2.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "19",
          "endlag": "16",
          "damage": "1.5",
          "advantage": "-13",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 as early as frame 5"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucas/LucasJab3.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "29",
          "endlag": "22",
          "damage": "3.5",
          "advantage": "-19",
          "shieldLag": "11",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucas/LucasFTilt.gif",
            "hitboxes/lucas/LucasFTiltUp.gif",
            "hitboxes/lucas/LucasFTiltDown.gif"
          ],
          "startup": "7",
          "active": "7—9",
          "total": "25",
          "endlag": "16",
          "damage": "7.5/11.0",
          "advantage": "-10/-8",
          "shieldLag": "7/13",
          "shieldStun": "8/10",
          "hitboxes": "Cose/far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucas/LucasUTilt.gif"
          ],
          "startup": "4/7",
          "active": "4/7—10(11—14/15—16)",
          "total": "33",
          "endlag": "17",
          "damage": "1.5/8.0/5.0",
          "advantage": "-18",
          "shieldLag": "7/11/9",
          "shieldStun": "-/8/6",
          "hitboxes": "first/second/late"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucas/LucasDTilt.gif"
          ],
          "startup": "3",
          "active": "3—4",
          "total": "15",
          "endlag": "11",
          "damage": "5.0",
          "advantage": "-6",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucas/LucasDashAttack.gif"
          ],
          "startup": "13",
          "active": "13—17",
          "total": "37",
          "endlag": "20",
          "damage": "9.0/13.0",
          "advantage": "-15/-12",
          "shieldLag": "11/15",
          "shieldStun": "9/12",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucas/LucasFSmash.gif"
          ],
          "startup": "14",
          "active": "14—15",
          "total": "45",
          "endlag": "30",
          "damage": "14.0/15.0",
          "advantage": "-21",
          "shieldLag": "10/12",
          "shieldStun": "10/10",
          "hitboxes": "Close/far",
          "notes": "Reflects on frame 11-19. Charge hold is frame 7"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucas/LucasUSmash.gif"
          ],
          "startup": "28/30",
          "active": "28/30—32(33—37/38—42/43—47/48—52/53—54)",
          "total": "98",
          "endlag": "44",
          "damage": "2.0/21.0[20.0/18.0/16.0/14.0]",
          "advantage": "-54",
          "shieldLag": "4/16",
          "shieldStun": "-/14",
          "hitboxes": "Launcher/Main Hit[diminishing over time]",
          "notes": "Invincible on frame 1-7. Head intangibility on frame 15-29. Charge hold is frame 4. **Invincibility during the first 4 frames of charging (but goes away after the initial 4), upon release you gain the other 3 frames immediately."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/lucas/LucasDSmash.gif"
          ],
          "startup": "20/29/39",
          "active": "20—22/29—31/39—41",
          "total": "59",
          "endlag": "18",
          "damage": "17.0/14.0/11.0",
          "advantage": "-12",
          "shieldLag": "15/15/13",
          "shieldStun": "-/-/8",
          "notes": "Charge hold is frame 5. Shield damage: -10.0/-8.0/-6.0."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucas/LucasNAir.gif"
          ],
          "startup": "7.../26",
          "active": "7—21 (rehit: 5) / 26",
          "total": "44",
          "endlag": "23",
          "landingLag": "12",
          "damage": "2.0/4.0",
          "advantage": "-10/-9",
          "shieldLag": "7/10",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 37 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucas/LucasFAir.gif"
          ],
          "startup": "9",
          "active": "9—10/11—12",
          "total": "41",
          "endlag": "29",
          "landingLag": "7",
          "damage": "9.0/12.5",
          "advantage": "-3/-2",
          "shieldLag": "7/15",
          "shieldStun": "4/5",
          "hitboxes": "Close/Far",
          "notes": "Autocancels on frame 34 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucas/LucasBAir.gif"
          ],
          "startup": "15",
          "active": "15—19(19—22)",
          "total": "39",
          "endlag": "17",
          "landingLag": "9",
          "damage": "9.0 / 12.0 / 7.0",
          "advantage": "-5/-4/-6",
          "shieldLag": "11/13/10",
          "shieldStun": "4/5/3",
          "hitboxes": "Close/medium/far",
          "notes": "Autocancels on frame 1-2 and 34 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucas/LucasUAir.gif"
          ],
          "startup": "7",
          "active": "7—10",
          "total": "31",
          "endlag": "21",
          "landingLag": "7",
          "damage": "11.0",
          "advantage": "-3",
          "shieldLag": "9",
          "shieldStun": "4",
          "notes": "Autocancels on frame 34 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucas/LucasDAir.gif"
          ],
          "startup": "10/18/26/34",
          "active": "10—12/18—20/26—28/34—35",
          "total": "56",
          "endlag": "21",
          "landingLag": "16",
          "damage": "3.5/5.0",
          "advantage": "-14/-13",
          "shieldLag": "8/9",
          "shieldStun": "2/3",
          "hitboxes": "Multi/Final",
          "notes": "Autocancels on frame 47 onward"
        },
        {
          "name": "Z Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/lucas/LucasZAir.gif"
          ],
          "startup": "9",
          "active": "9—12(13—21)",
          "total": "51",
          "endlag": "30",
          "landingLag": "8",
          "damage": "5.0/3.0",
          "advantage": "-2",
          "shieldLag": "6",
          "shieldStun": "6",
          "notes": "Tethers on frame 7."
        },
        {
          "name": "Neutral B (PK Freeze)",
          "section": "special",
          "startup": "40-92",
          "active": "40—43(92—95)",
          "total": "66-118",
          "damage": "10.0—23.0",
          "advantage": "-14 to -5",
          "shieldLag": "8—14",
          "shieldStun": "4—7",
          "notes": "From charge release, startup is 5 and total frames is 31"
        },
        {
          "name": "Side B (PK Fire)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucas/LucasPKFireG.gif",
            "hitboxes/lucas/LucasPKFireA.gif"
          ],
          "startup": "21",
          "active": "21—38(1—19)",
          "total": "52",
          "endlag": "14",
          "landingLag": "19",
          "damage": "3.0/7.0/4.0",
          "advantage": "-24",
          "shieldLag": "5",
          "shieldStun": "2",
          "hitboxes": "Spark/Burst Close/Burst Far",
          "notes": "Explosion 1 frame after projectile hits something. Does not erupt on shields. PK Fire Burst is frames 1-20."
        },
        {
          "name": "Up B (PK Thunder)",
          "section": "special",
          "startup": "20",
          "active": "20—**",
          "damage": "2.5/0.7",
          "shieldLag": "5",
          "shieldStun": "2",
          "hitboxes": "Head/Tail",
          "notes": "Hits every six frames as it passes through somebody. 44 endlag when projectile ends"
        },
        {
          "name": "Up B, Self-hit (PK Thunder 2)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucas/LucasPKThunder2.gif"
          ],
          "startup": "1/4/6/8/10/12/14/17/20/23/26/29",
          "active": "1—2/4—5/6—7/8—9/10—11/12—13/14—15/17—19/20—21/23—24/26—27/29—30",
          "total": "60",
          "endlag": "30",
          "landingLag": "30",
          "damage": "5.0/2.0/1.5/10.0",
          "advantage": "-21",
          "shieldLag": "9/7/7/15",
          "shieldStun": "-/-/-10",
          "hitboxes": "First/early/late/final",
          "notes": "Total frames refers to travel along the ground. Intangibility on frames 1-9."
        },
        {
          "name": "Down B (PSI Magnet)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/lucas/LucasPSIMagnet.gif"
          ],
          "startup": "19 (7 is start of absorb)",
          "active": "19",
          "total": "27",
          "endlag": "8",
          "damage": "8.0",
          "advantage": "+0",
          "shieldLag": "11",
          "shieldStun": "8",
          "notes": "Absorbs as early as frame 7. On release, startup is 1 with 9 total frames"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/lucas/LucasGrab.gif"
          ],
          "startup": "12",
          "active": "12—17",
          "total": "46",
          "endlag": "29"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/lucas/LucasDashGrab.gif"
          ],
          "startup": "14",
          "active": "14—19",
          "total": "54",
          "endlag": "35"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/lucas/LucasPivotGrab.gif"
          ],
          "startup": "15",
          "active": "15—20",
          "total": "49",
          "endlag": "29"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/lucas/LucasPummel.gif"
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
            "hitboxes/lucas/LucasFThrow.gif"
          ],
          "startup": "23",
          "total": "52",
          "damage": "10.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/lucas/LucasBThrow.gif"
          ],
          "startup": "20",
          "total": "52",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/lucas/LucasUThrow.gif"
          ],
          "startup": "25",
          "total": "55",
          "damage": "10.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/lucas/LucasDThrow.gif"
          ],
          "startup": "41",
          "total": "57",
          "damage": "11.0"
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
          "total": "56",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "75",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "95",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "117",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "126",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/lucas/lucasGetupAttackU.gif",
            "hitboxes/lucas/lucasGetupAttackD.gif",
            "hitboxes/lucas/lucasTripAttack.gif",
            "hitboxes/lucas/lucasLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/lucas",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
