// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "falco",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoJab1.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "22",
          "endlag": "20",
          "damage": "1.5",
          "advantage": "-17",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 5."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoJab2.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "25",
          "endlag": "21",
          "damage": "1.5",
          "advantage": "-19",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to Rapid Jab as early as frame 7."
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoJabRapid.gif"
          ],
          "startup": "5/7/9/...",
          "damage": "0.3",
          "shieldLag": "4",
          "shieldStun": "3"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoJabRapidEnd.gif"
          ],
          "startup": "5",
          "active": "5-6",
          "total": "40",
          "endlag": "34",
          "damage": "3.0",
          "advantage": "-31",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoFTilt.gif",
            "hitboxes/falco/FalcoFTiltUp.gif",
            "hitboxes/falco/FalcoFTiltDown.gif"
          ],
          "startup": "6",
          "active": "6-8",
          "total": "24",
          "endlag": "16",
          "damage": "6.0",
          "advantage": "-11",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoUTilt.gif"
          ],
          "startup": "5/12",
          "active": "5(6-9)/12(13-16)",
          "total": "29",
          "endlag": "13",
          "damage": "3.5/2.7/4.0",
          "advantage": "-12",
          "shieldLag": "5/5/8",
          "shieldStun": "4/4/5",
          "hitboxes": "first (early/late)/second"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoDTilt.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "total": "29",
          "endlag": "19",
          "damage": "13.0/12.0/10.5",
          "advantage": "-9/-10/-11",
          "shieldLag": "9/9/8",
          "shieldStun": "12/11/10",
          "hitboxes": "Close/far/farthest"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoDashAttack.gif"
          ],
          "startup": "8",
          "active": "8-11(12-18)",
          "total": "39",
          "endlag": "21",
          "damage": "9.0/6.0",
          "advantage": "-21",
          "shieldLag": "8/6",
          "shieldStun": "10/6",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoFSmash.gif"
          ],
          "startup": "17",
          "active": "17-19(20)",
          "total": "48",
          "endlag": "28",
          "damage": "16.0/12.0",
          "advantage": "-20",
          "shieldLag": "10",
          "shieldStun": "11",
          "hitboxes": "Early/Late",
          "notes": "Charge hold is frame 9"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoUSmash.gif"
          ],
          "startup": "7/13",
          "active": "7(8-12)/13-20",
          "total": "49",
          "endlag": "29",
          "damage": "4.0/13.0",
          "advantage": "-27",
          "shieldLag": "5/12",
          "shieldStun": "4/9",
          "notes": "Leg intangibility on frame 7-18. Charge hold is frame 3"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/falco/FalcoDSmash.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "total": "46",
          "endlag": "36",
          "damage": "15.0/12.0",
          "advantage": "-27",
          "shieldLag": "10",
          "shieldStun": "11",
          "hitboxes": "Far/Close",
          "notes": "Leg intangibility on frame 3-8. Charge hold is frame 1"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/falco/FalcoNAir.gif"
          ],
          "startup": "3/6/10/17",
          "active": "3-5/6-9/10-13/17-18",
          "total": "46",
          "endlag": "28",
          "landingLag": "9",
          "damage": "3.0/2.0/4.0",
          "advantage": "-7/-6",
          "shieldLag": "5/4/11",
          "shieldStun": "2/2/3",
          "hitboxes": "First/Multi/Final",
          "notes": "Autocancels on frame 1-2 and 43"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/falco/FalcoFAir.gif",
            "hitboxes/falco/FalcoFAirLanding.gif"
          ],
          "startup": "7...",
          "active": "7-25(rehit: 4)/26-27",
          "total": "49",
          "endlag": "22",
          "landingLag": "15",
          "damage": "1.0/4.0/3.0",
          "advantage": "-10",
          "shieldLag": "4/14/10",
          "shieldStun": "2/3/4",
          "hitboxes": "Multi/Final/Landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-4 and 42 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/falco/FalcoBAir.gif"
          ],
          "startup": "9",
          "active": "9-10(11-16)",
          "total": "37",
          "endlag": "21",
          "landingLag": "13",
          "damage": "13.0/7.0",
          "advantage": "-8/-10",
          "shieldLag": "9/7",
          "shieldStun": "5/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-3 and 20 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/falco/FalcoUAir.gif"
          ],
          "startup": "7",
          "active": "7-11",
          "total": "33",
          "endlag": "22",
          "landingLag": "9",
          "damage": "9.0",
          "advantage": "-5",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-3 and 23 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/falco/FalcoDAir.gif"
          ],
          "startup": "10",
          "active": "10-14/15-24",
          "total": "43",
          "endlag": "19",
          "landingLag": "11",
          "damage": "13.0/8.0",
          "advantage": "-6/-7",
          "shieldLag": "12/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/late",
          "notes": "Autocancels on frame 1-3 and 30 onward"
        },
        {
          "name": "Neutral B (Blaster)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/falco/FalcoBlaster.gif"
          ],
          "startup": "8/7",
          "active": "8-34/7-33",
          "total": "41/38",
          "endlag": "7",
          "damage": "3.0",
          "advantage": "-24/-22",
          "shieldLag": "7",
          "shieldStun": "2",
          "hitboxes": "Ground/Air",
          "notes": "Fire rate of one shot per 26 frames (23 frames in the air)."
        },
        {
          "name": "Side B (Falco Phantasm)",
          "section": "special",
          "startup": "13/18",
          "active": "(13-18/17-22)/(18-27)",
          "total": "50/66",
          "endlag": "23",
          "landingLag": "16",
          "damage": "7.0",
          "advantage": "-20/-14",
          "shieldLag": "10/7",
          "shieldStun": "3/3",
          "hitboxes": "Ground/Air",
          "notes": "A frame 18 hit is impossible unless unnaturally inside of an opponent. Endlag is 31 when blocked on the ground, and 24 from the air. At lowest possible altitude Falco does not suffer hitlag from this attack. *Hitboxes actually trail behind the character and are not actually on Falco.*"
        },
        {
          "name": "Up B (Fire Bird)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/falco/FalcoFirebird.gif"
          ],
          "startup": "20/22/24/26/28/30/32/43-46/47/49/51/53/55/57/59/61",
          "active": "20/22/24/26/28/30/32/43-46/47/49/51/53/55/57/59/61",
          "total": "85",
          "endlag": "24",
          "landingLag": "18",
          "damage": "2.0/3.0",
          "advantage": "-21",
          "shieldLag": "4",
          "shieldStun": "3",
          "notes": "Starts traveling on 44. That hit is the only one that deals 3 damage. Total frames assumes travel along the ground"
        },
        {
          "name": "Down B (Reflector)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/falco/FalcoReflector.gif"
          ],
          "startup": "5",
          "active": "5-14",
          "total": "44",
          "endlag": "30",
          "damage": "5.0",
          "advantage": "-33",
          "shieldLag": "9",
          "shieldStun": "6",
          "notes": "Reflects on frame 1-33"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/falco/FalcoGrab.gif"
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
            "hitboxes/falco/FalcoDashGrab.gif"
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
            "hitboxes/falco/FalcoPivotGrab.gif"
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
            "hitboxes/falco/FalcoPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "landingLag": "Total frames includes 13 frames of hitlag.",
          "damage": "1.3"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/falco/FalcoFThrow.gif"
          ],
          "startup": "10/12",
          "total": "33",
          "damage": "4.0/3.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/falco/FalcoBThrow.gif"
          ],
          "startup": "9",
          "total": "41",
          "damage": "6.0/3.0",
          "notes": "Victim thrown at 9. Shoots blaster on 18."
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/falco/FalcoUThrow.gif"
          ],
          "startup": "7",
          "total": "38",
          "damage": "4.0/4.0",
          "notes": "Victim thrown at 7. Shoots blaster on 18."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/falco/FalcoDThrow.gif"
          ],
          "startup": "26/33",
          "total": "43",
          "damage": "2.0/3.0"
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
          "total": "43",
          "landingLag": "10",
          "notes": "Intangible on frame 2-27."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "61",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-20."
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "67",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-20."
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "73",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-20."
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-20."
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "94",
          "landingLag": "11-19",
          "notes": "Intangible on frame 2-20."
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/falco/falcoGetupAttackU.gif",
            "hitboxes/falco/falcoGetupAttackD.gif",
            "hitboxes/falco/falcoTripAttack.gif",
            "hitboxes/falco/falcoLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/falco",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
