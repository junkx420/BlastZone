// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "fox",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxJab1.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "17",
          "endlag": "15",
          "damage": "1.8",
          "advantage": "-12",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 5."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxJab2.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "20",
          "endlag": "18",
          "damage": "1.0",
          "advantage": "-16",
          "shieldLag": "5",
          "shieldStun": "2",
          "notes": "Transitions to Rapid Jab as early as frame 6."
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxJabRapid.gif"
          ],
          "startup": "5/7/9/...",
          "active": "5/7/9...",
          "damage": "0.6",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxJabRapidEnd.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "38",
          "endlag": "35",
          "damage": "2.0",
          "advantage": "-32",
          "shieldLag": "14",
          "shieldStun": "3"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxFTilt.gif",
            "hitboxes/fox/FoxFTiltUp.gif",
            "hitboxes/fox/FoxFTiltDown.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "total": "23",
          "endlag": "15",
          "damage": "6.0/7.0",
          "advantage": "-10/-10",
          "shieldLag": "6/7",
          "shieldStun": "7/7",
          "hitboxes": "No Angle/Angled",
          "notes": "Deals 1.0 more damage when angled."
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxUTilt.gif"
          ],
          "startup": "3",
          "active": "3-5(6-7)",
          "total": "27",
          "endlag": "20",
          "damage": "(6.0%/7.0%/8.0%)/(5.0%/6.0%)",
          "advantage": "-17/-16",
          "shieldLag": "6/7",
          "shieldStun": "7/8",
          "hitboxes": "(Clean (Leg/Aerial Foot/Grounded Foot)/Late (Leg/Foot))"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxDTilt.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "27",
          "endlag": "19",
          "damage": "8.0/7.0",
          "advantage": "-12/-13",
          "shieldLag": "7/7",
          "shieldStun": "8/7",
          "hitboxes": "Close/far"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxDashAttack.gif"
          ],
          "startup": "4",
          "active": "4-7(8-15)",
          "total": "31",
          "endlag": "16",
          "damage": "6.0/4.0",
          "advantage": "-16",
          "shieldLag": "7/6",
          "shieldStun": "11/7",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxFSmash.gif"
          ],
          "startup": "13",
          "active": "13-14(15-16)",
          "total": "45",
          "endlag": "31",
          "damage": "14.0(11.0)",
          "advantage": "-22",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxUSmash.gif"
          ],
          "startup": "8",
          "active": "8-9/10-11",
          "total": "55",
          "endlag": "44",
          "damage": "16.0/11.0",
          "advantage": "-36",
          "shieldLag": "10/8",
          "shieldStun": "11/8",
          "hitboxes": "Early/Late",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/fox/FoxDSmash.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "52",
          "endlag": "45",
          "damage": "14.0/12.0",
          "advantage": "-36",
          "shieldLag": "10",
          "shieldStun": "10",
          "hitboxes": "Outer/Inner",
          "notes": "Leg intangibility on frame 6-7. Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/fox/FoxNAir.gif"
          ],
          "startup": "4",
          "active": "4-6/7-23",
          "total": "38",
          "endlag": "15",
          "landingLag": "7",
          "damage": "9.0/6.0",
          "advantage": "-3/-4",
          "shieldLag": "8/6",
          "shieldStun": "4/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-3 and 32 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/fox/FoxFAir.gif",
            "hitboxes/fox/FoxFAirLanding.gif"
          ],
          "startup": "7/11/16/21/26",
          "active": "7-8/11-12/16-17/21-22/26-27",
          "total": "43",
          "endlag": "16",
          "landingLag": "18",
          "damage": "1.8/1.2/1.72.7/4.8/2.0",
          "advantage": "-14",
          "shieldLag": "4/4/4/5/12/9",
          "shieldStun": "2/2/2/2/3/3",
          "hitboxes": "Last one is landing hitbox",
          "notes": "Landing hit on frame 1. Autocancels on frame 46 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/fox/FoxBAir.gif"
          ],
          "startup": "9",
          "active": "9-11",
          "total": "48",
          "endlag": "37",
          "landingLag": "9",
          "damage": "13.0",
          "advantage": "-4",
          "shieldLag": "9",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-6 and 18 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/fox/FoxUAir.gif"
          ],
          "startup": "9/12",
          "active": "9-10/12-13",
          "total": "35",
          "endlag": "22",
          "landingLag": "13",
          "damage": "5.0/10.0",
          "advantage": "-10/-9",
          "shieldLag": "6/8",
          "shieldStun": "3/4",
          "hitboxes": "First/Second",
          "notes": "Autocancels on frame 1-8 and 25 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/fox/FoxDAir.gif",
            "hitboxes/fox/FoxDAirLanding.gif"
          ],
          "startup": "5/8/11/14/17/20/23",
          "active": "5-6/8-9/11-12/14-15/17-18/20-21/23/?",
          "total": "49",
          "landingLag": "17",
          "damage": "1.4/3.0/1.0",
          "advantage": "-14",
          "shieldLag": "4/10/8",
          "shieldStun": "2/2/2",
          "hitboxes": "Multi/final/landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-4 and 28 onward"
        },
        {
          "name": "Neutral B (Blaster)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/fox/FoxBlaster.gif"
          ],
          "startup": "11/13/20, 9/11/18",
          "active": "11-12/13-19/20-32, 9-10/11-17/18-30",
          "total": "36, 34",
          "endlag": "6",
          "damage": "3.0/2.0/1.4",
          "advantage": "-18/-19/-19",
          "shieldLag": "5/4/4",
          "shieldStun": "2/2/2",
          "hitboxes": "Ground Early/Normal/Late, Air Early/Normal/Late",
          "notes": "Fire rate is one shot per 10 frames."
        },
        {
          "name": "Side B (Fox Illusion)",
          "section": "special",
          "startup": "25/25",
          "active": "25-29/25-29",
          "total": "55/72",
          "endlag": "24",
          "landingLag": "16",
          "damage": "8.0/5.0",
          "advantage": "-18/-28",
          "shieldLag": "7/6",
          "shieldStun": "3/3",
          "hitboxes": "Ground/Air",
          "notes": "Fox does not suffer hitlag/shieldlag from this attack. Advantage assumes lowest altitude possible. *Hitboxes actually trail behind the character and are not actually on Fox.*"
        },
        {
          "name": "Up B (Fire Fox)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/fox/FoxFireFox.gif"
          ],
          "startup": "20/22/24/26/28/30/32/43/47",
          "active": "20/22/24/26/28/30/32/43-46/47-72",
          "total": "91",
          "endlag": "19",
          "landingLag": "20",
          "damage": "1.7/16.0",
          "advantage": "-34",
          "shieldLag": "4/10",
          "shieldStun": "3/14",
          "hitboxes": "Multi/Final",
          "notes": "Total frames is when traveling along the ground."
        },
        {
          "name": "Down B (Reflector)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/fox/FoxReflectorStart.gif",
            "hitboxes/fox/FoxReflector.gif"
          ],
          "startup": "3",
          "total": "36",
          "damage": "2.0",
          "advantage": "-30",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Invulnerable on frame 2-3 Reflects as early as frame 4."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/fox/FoxGrab.gif"
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
            "hitboxes/fox/FoxDashGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "44",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/fox/FoxPivotGrab.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "39",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/fox/FoxPummel.gif"
          ],
          "startup": "1",
          "total": "15",
          "landingLag": "Total frames includes 10 frames of hitlag.",
          "damage": "1.0"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/fox/FoxFThrow.gif"
          ],
          "startup": "10/11",
          "total": "33",
          "damage": "4.0/3.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/fox/FoxBThrow.gif"
          ],
          "startup": "10/16/19/22",
          "total": "49",
          "damage": "2.0/2.0",
          "notes": "Victim is thrown at 10. Blaster shots at 16, 19, 22."
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/fox/FoxUTHrow.gif"
          ],
          "startup": "7/18/21/24",
          "total": "49",
          "damage": "2.0/2.0",
          "notes": "Victim is thrown at 7. Blaster shots at 18, 21, 24."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/fox/FoxDThrow.gif"
          ],
          "startup": "26/29/32/34",
          "total": "54",
          "damage": "2.0/1.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "18/23",
          "notes": "Intangible on frame 3-14."
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "26",
          "notes": "Intangible on frame 4-12."
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "32",
          "notes": "Intangible on frame 4-14."
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "38",
          "landingLag": "10",
          "notes": "Intangible on frame 2-26."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "54",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "59",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "64",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "70",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "75",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-19."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/fox/foxGetupAttackU.gif",
            "hitboxes/fox/foxGetupAttackD.gif",
            "hitboxes/fox/foxTripAttack.gif",
            "hitboxes/fox/foxLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/fox",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
