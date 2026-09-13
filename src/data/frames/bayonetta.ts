// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "bayonetta",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaJab1.gif"
          ],
          "startup": "9",
          "active": "9—12",
          "total": "31",
          "endlag": "19",
          "damage": "1.4",
          "advantage": "-19",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 15"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaJab2.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "31",
          "endlag": "23",
          "damage": "1.4",
          "advantage": "-21",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 as early as frame 14"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaJab3.gif",
            "hitboxes/bayonetta/BayonettaJab3BulletArts.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "39",
          "endlag": "31",
          "damage": "2.2",
          "advantage": "-29",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Transitions to rapid jab as early as frame 17"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaJabRapid.gif",
            "hitboxes/bayonetta/BayonettaJabRapidBulletArts.gif"
          ],
          "startup": "6/10/14",
          "damage": "0.5/0.2",
          "shieldLag": "4",
          "shieldStun": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaJabRapidEnd.gif"
          ],
          "startup": "4/11",
          "active": "4—5/11—12",
          "total": "62",
          "endlag": "50",
          "damage": "5.0",
          "advantage": "-45",
          "shieldLag": "10",
          "shieldStun": "6"
        },
        {
          "name": "Forward Tilt 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaFTilt1.gif"
          ],
          "startup": "12",
          "active": "12",
          "total": "31",
          "endlag": "19",
          "damage": "3.0",
          "advantage": "-15",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Transitions to next hit as early as frame 16"
        },
        {
          "name": "Forward Tilt 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaFTilt2.gif"
          ],
          "startup": "12",
          "active": "12",
          "total": "39",
          "endlag": "27",
          "damage": "3.0",
          "advantage": "-23",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Transitions to next hit as early as frame 16"
        },
        {
          "name": "Forward Tilt 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaFTilt3.gif"
          ],
          "startup": "14",
          "active": "14—15",
          "total": "39",
          "endlag": "24",
          "damage": "7.0",
          "advantage": "-21",
          "shieldLag": "7",
          "shieldStun": "7"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaUTilt.gif"
          ],
          "startup": "7/10/13",
          "active": "7—9(10—12)/13—15",
          "total": "29",
          "endlag": "14",
          "damage": "1.5/6.0",
          "advantage": "-19/-10",
          "shieldStun": "4/9",
          "hitboxes": "3/6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaDTilt.gif",
            "hitboxes/bayonetta/BayonettaDTiltBulletArts.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "28",
          "endlag": "20",
          "damage": "5.0/6.0",
          "advantage": "-15",
          "shieldLag": "6/6",
          "shieldStun": "6/6",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaDashAttack.gif"
          ],
          "startup": "15",
          "active": "15—20(21—26)",
          "total": "42",
          "endlag": "16",
          "damage": "10.0/8.0",
          "advantage": "-17",
          "shieldLag": "8/7",
          "shieldStun": "10/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaFSmash.gif"
          ],
          "startup": "17",
          "active": "17—21",
          "total": "66",
          "endlag": "45",
          "damage": "16.0/14.0",
          "advantage": "-38/-39",
          "shieldLag": "14/10",
          "shieldStun": "11/10",
          "hitboxes": "Far/Close",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaUSmash.gif",
            "hitboxes/bayonetta/BayonettaUSmashBulletArts.gif"
          ],
          "startup": "18",
          "active": "18—19(20—21/22—23)",
          "total": "64",
          "endlag": "41",
          "damage": "17.0/16.0/15.0",
          "advantage": "-35",
          "shieldLag": "11/10/10",
          "shieldStun": "11/11/10",
          "hitboxes": "Early/Late/Later",
          "notes": "Charge hold is frame 6"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaDSmash.gif",
            "hitboxes/bayonetta/BayonettaDSmashStomp.gif",
            "hitboxes/bayonetta/BayonettaDSmashBulletArts.gif"
          ],
          "startup": "17/22",
          "active": "17—18/22(23—25)",
          "total": "65",
          "endlag": "40",
          "damage": "5.0/16.0/15.0",
          "advantage": "-32",
          "shieldLag": "6/13/12",
          "shieldStun": "4/11/10",
          "hitboxes": "Stomp/Early/Late",
          "notes": "First hit refers to Bayonetta's stomp and is ground only. Charge hold is frame 8."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaNAir.gif",
            "hitboxes/bayonetta/BayonettaNAirBulletArts.gif"
          ],
          "startup": "9",
          "active": "9—17(18—25) (full extended 26—66)",
          "total": "32",
          "landingLag": "10/18",
          "damage": "8.0/6.0/3.0",
          "advantage": "-6/-7/-16",
          "shieldLag": "7/6/5",
          "shieldStun": "4/3/2",
          "hitboxes": "Early/Late/Extend",
          "notes": "Second landing lag is extended version. Autocancels on frame 34 onward"
        },
        {
          "name": "Forward Air 1",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaFAir 1.gif"
          ],
          "startup": "7",
          "active": "7—9",
          "total": "37",
          "endlag": "28",
          "landingLag": "12",
          "damage": "4.0",
          "advantage": "-7",
          "shieldLag": "5",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-2 and 30 onward"
        },
        {
          "name": "Forward Air 2",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaFAir2.gif"
          ],
          "startup": "7",
          "active": "7—9",
          "total": "39",
          "endlag": "30",
          "landingLag": "12",
          "damage": "3.3",
          "advantage": "-8",
          "shieldLag": "5",
          "shieldStun": "4",
          "notes": "Autocancels on frame 32 onward"
        },
        {
          "name": "Forward Air 3",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaFAir3.gif",
            "hitboxes/bayonetta/BayonettaFAir3BulletArts.gif"
          ],
          "startup": "12",
          "active": "12—15",
          "total": "46",
          "endlag": "31",
          "landingLag": "12",
          "damage": "7.0",
          "advantage": "-5",
          "shieldLag": "10",
          "shieldStun": "7",
          "notes": "Autocancels on frame 35 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaBAir.gif"
          ],
          "startup": "11",
          "active": "11—14",
          "total": "34",
          "endlag": "20",
          "landingLag": "10",
          "damage": "13.0/10.0",
          "advantage": "-5/-6",
          "shieldLag": "9/8",
          "shieldStun": "5/4",
          "hitboxes": "Far/Close",
          "notes": "Autocancels on frame 29 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaUAir.gif",
            "hitboxes/bayonetta/BayonettaUAirBulletArts.gif"
          ],
          "startup": "9",
          "active": "9—18 (full extended 21—65)",
          "total": "29",
          "landingLag": "8/16",
          "damage": "7.5/3.0",
          "advantage": "-5/-14",
          "shieldLag": "7/5",
          "shieldStun": "3/2",
          "hitboxes": "Normal/Extend",
          "notes": "Second landing lag is extended version. Autocancels on frame 1-2 and 26 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaDAir.gif",
            "hitboxes/bayonetta/BayonettaDAirLanding.gif"
          ],
          "startup": "18",
          "active": "18—24(25—35)/1—2",
          "total": "52",
          "endlag": "17",
          "landingLag": "30",
          "damage": "7.0/8.0/9.0/5.0",
          "advantage": "-23",
          "shieldLag": "7/7/7/6",
          "shieldStun": "3/3/4/6",
          "hitboxes": "Close/Far/Farther/Landing",
          "notes": "Landing hit on frame 1. Autocancels on frames 1-17 and 50 onward"
        },
        {
          "name": "Neutral B (Bullet Climax)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaBulletClimaxFeet.gif",
            "hitboxes/bayonetta/BayonettaBulletClimaxHands.gif"
          ],
          "startup": "17...",
          "active": "17—26, 21—30, 32—41, 36—45...",
          "total": "60",
          "endlag": "29",
          "damage": "1.3",
          "advantage": "-32",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "15 frame startup with 2 frame release, so 17 frames startup. Reaches full charge on 42. Can only shield cancel as early as frame 45. Repeated shots occur on the same pattern. Alternating 10 and 5 frames later."
        },
        {
          "name": "Neutral B, Full Charge (Bullet Climax, Full Charge)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaBulletClimaxFeetMax.gif",
            "hitboxes/bayonetta/BayonettaBulletClimaxHandsMax.gif"
          ],
          "startup": "42/47/57/62...",
          "active": "42—51/47—56/57—66/62—71...",
          "total": "100",
          "damage": "2.7",
          "advantage": "-29",
          "shieldLag": "7",
          "shieldStun": "2",
          "notes": "Repeated shots occur on the same pattern. Alternating 10 and 5 frames later."
        },
        {
          "name": "Side B (Heel Slide)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaHeelSlide.gif",
            "hitboxes/bayonetta/BayonettaHeelSlideEnd.gif"
          ],
          "startup": "15/51",
          "active": "15—16/17—18/19—24/25—39 first // 1—11/20—24 second",
          "total": "66 (first) 67 (second)",
          "endlag": "27",
          "damage": "8.0/7.0/5.0",
          "advantage": "-25/-26/-15",
          "shieldLag": "7/7/6",
          "shieldStun": "8/7/6",
          "hitboxes": "Early/Late/Second",
          "notes": "Second kick occurs only when button is held. Will not occur if first is blocked. 33 endlag when slide is blocked."
        },
        {
          "name": "After Burner Kick",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaAfterburnerKickUp.gif",
            "hitboxes/bayonetta/BayonettaAfterBurnerKickUpBulletArts.gif"
          ],
          "startup": "7",
          "active": "7-9/10-12/13-14/15-19",
          "total": "31",
          "endlag": "12",
          "landingLag": "20",
          "damage": "6.0/7.0/6.0",
          "advantage": "-18",
          "shieldLag": "9/9/9",
          "shieldStun": "6/7/6",
          "hitboxes": "Early/Late/Later"
        },
        {
          "name": "After Burner Kick, Down",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaAfterburnerKickDown.gif",
            "hitboxes/bayonetta/BayonettaAfterburnerKickLanding.gif"
          ],
          "startup": "8",
          "active": "8—25/1",
          "total": "43",
          "endlag": "18",
          "landingLag": "40",
          "damage": "6.5/5.0",
          "advantage": "-14/-33",
          "shieldLag": "8/7",
          "shieldStun": "7/6",
          "hitboxes": "Normal/Landing",
          "notes": "21 endlag on hit. Landing hit occurs on frame 1"
        },
        {
          "name": "Up B (Witch Twist)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaWitchTwistG.gif",
            "hitboxes/bayonetta/BayonettaWitchTwistA.gif",
            "hitboxes/bayonetta/BayonettaWitchTwist1BulletArts.gif",
            "hitboxes/bayonetta/BayonettaWitchTwist2BulletArts.gif"
          ],
          "startup": "6/11...",
          "active": "6/11—25(rehit: 3)/27—28",
          "total": "31",
          "endlag": "3",
          "landingLag": "18",
          "damage": "3.0/0.2/3.0",
          "advantage": "+0",
          "shieldLag": "5/4/5",
          "shieldStun": "4/2/4",
          "hitboxes": "First/Multi/Final",
          "notes": "Both Grounded and Aerial versions are 1.0% weaker when used again."
        },
        {
          "name": "Down B (Witch Time)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaWitchTime.gif"
          ],
          "startup": "8 (start of counter)",
          "active": "8—27 (counter)",
          "total": "66",
          "notes": "Counters on frames 8—27. Intangible on 8—23, Bat Within 24—35 (overlaps with the Counter so 24—27 will trigger both Bat Within AND the slowdown)."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaGrab.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "37",
          "endlag": "29"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaDashGrab.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "45",
          "endlag": "34"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaPivotGrab.gif"
          ],
          "startup": "11",
          "active": "11—12",
          "total": "40",
          "endlag": "28"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaPummel.gif"
          ],
          "startup": "1/13",
          "total": "25",
          "damage": "0.6/0.7",
          "notes": "Startup and Total frames includes 19 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaFThrow.gif"
          ],
          "startup": "14/15",
          "total": "42",
          "damage": "7.0/3.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaBThrow.gif"
          ],
          "startup": "14-15",
          "total": "49",
          "damage": "3.0/6.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaUThrow.gif"
          ],
          "startup": "9/10",
          "total": "35",
          "damage": "3.0/4.5"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bayonetta/BayonettaDThrow.gif"
          ],
          "startup": "20/21",
          "total": "46",
          "damage": "3.0/5.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "20/25",
          "notes": "Intangible on frame 6-17. Bat within on frame 2-5."
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "31",
          "notes": "Intangible on frame 6-15. Bat within on frame 2-5."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "36",
          "notes": "Intangible on frame 7-16. Bat within on frame 3-6."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "45",
          "landingLag": "10",
          "notes": "Intangible on frame 5-31. Bat within on frame 1-4."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "63",
          "landingLag": "11-19",
          "notes": "Intangible on frame 5-21. Bat within on frame 1-4."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "69",
          "landingLag": "11-19",
          "notes": "Intangible on frame 5-21. Bat within on frame 1-4."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "74",
          "landingLag": "11-19",
          "notes": "Intangible on frame 5-21. Bat within on frame 1-4."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 5-21. Bat within on frame 1-4."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "93",
          "landingLag": "11-19",
          "notes": "Intangible on frame 5-21. Bat within on frame 1-4."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/bayonetta/bayonettaGetupAttackU.gif",
            "hitboxes/bayonetta/bayonettaGetupAttackD.gif",
            "hitboxes/bayonetta/bayonettaTripAttack.gif",
            "hitboxes/bayonetta/bayonettaLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/bayonetta",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
