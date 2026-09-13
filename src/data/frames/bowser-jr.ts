// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "bowser-jr",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrJab1.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "19",
          "endlag": "14",
          "damage": "2.0",
          "advantage": "-12",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transitions to jab 2 as early as frame 7"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrJab2.gif"
          ],
          "startup": "4",
          "active": "4-5",
          "total": "29",
          "endlag": "24",
          "damage": "2.0",
          "advantage": "-22",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to rapid jab as early as frame 7"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrJabRapid.gif"
          ],
          "startup": "4/7/10...",
          "damage": "0.5",
          "shieldLag": "4",
          "shieldStun": "5"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrJabRapidEnd.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "42",
          "endlag": "35",
          "damage": "3.0",
          "advantage": "-32",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrFTilt.gif",
            "hitboxes/bowser_jr/BowserJrFTiltUp.gif",
            "hitboxes/bowser_jr/BowserJrFTiltDown.gif"
          ],
          "startup": "7",
          "active": "7-9",
          "total": "31",
          "endlag": "22",
          "damage": "6.0/8.0",
          "advantage": "-18/-16",
          "shieldLag": "6/7",
          "shieldStun": "6/8",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrUTilt.gif"
          ],
          "startup": "7",
          "active": "7-14",
          "total": "30",
          "endlag": "16",
          "damage": "6.0",
          "advantage": "-19",
          "shieldLag": "7",
          "shieldStun": "6"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrDTilt.gif"
          ],
          "startup": "4/12/23",
          "active": "4-6/12-14/23-25",
          "total": "40",
          "endlag": "15",
          "damage": "2.0/6.0",
          "advantage": "-11",
          "shieldLag": "4/7",
          "shieldStun": "3/6",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrDashAttack.gif"
          ],
          "startup": "8/11/14/17/20/25",
          "active": "8/11/14/17/20/25-26",
          "total": "47",
          "endlag": "21",
          "damage": "1.8/4.0",
          "advantage": "-17",
          "shieldLag": "4/8",
          "shieldStun": "3/5",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrFSmash.gif",
            "hitboxes/bowser_jr/BowserJrFSmashUp.gif",
            "hitboxes/bowser_jr/BowserJrFSmashDown.gif"
          ],
          "startup": "18/21/24/27/30/35",
          "active": "18/21/24/27/30/35-37",
          "total": "55",
          "endlag": "18",
          "damage": "1.0/11.0",
          "advantage": "-12",
          "shieldLag": "4/13",
          "shieldStun": "2/8",
          "hitboxes": "Multi/Final",
          "notes": "Charge hold is frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrUSmash.gif"
          ],
          "startup": "7/9/12/15/18/22",
          "active": "7-8/9/12/15/18/22-23",
          "total": "53",
          "endlag": "30",
          "damage": "1.0/1.7/1.4/6.0",
          "advantage": "-26",
          "shieldLag": "4/4/11",
          "shieldStun": "-/2/5",
          "hitboxes": "Hit 1/Multihits/Penultimate/Final",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrDSmash.gif"
          ],
          "startup": "12",
          "active": "12-14",
          "total": "59",
          "endlag": "45",
          "damage": "18.0",
          "advantage": "-32",
          "shieldLag": "14",
          "shieldStun": "12",
          "notes": "Charge hold is frame 2"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrNAir.gif"
          ],
          "startup": "7",
          "active": "7-8(9-13/14-19)",
          "total": "43",
          "endlag": "24",
          "landingLag": "9",
          "damage": "6.5/5.5/3.5/8.0/7.0/5.0",
          "advantage": "-6/-7/-7/-5/-6/-6",
          "shieldLag": "6/6/5/7/7/6",
          "shieldStun": "3/3/2/4/3/3",
          "hitboxes": "close early/late/later/far early/late/later",
          "notes": "Autocancels on frame 1-6 and 42 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrFAir.gif",
            "hitboxes/bowser_jr/BowserJrFAirLanding.gif"
          ],
          "startup": "10",
          "active": "10-13(14-17/18-23)/2",
          "total": "43",
          "endlag": "20",
          "landingLag": "16",
          "damage": "11.0/9.0/7.0/5.0/2.0",
          "advantage": "-11",
          "shieldLag": "8/7/9",
          "shieldStun": "4/3/3",
          "hitboxes": "Early Far/Early Close and Mid Far/Mid Close and Late Fair/Late Close/Landing",
          "notes": "Landing hit on frame 2. Autocancels on frame 1-2 and 34 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrBAir.gif"
          ],
          "startup": "12",
          "active": "12-13(14-18)",
          "total": "45",
          "endlag": "27",
          "landingLag": "14",
          "damage": "14.0/10.0/8.0",
          "advantage": "-9/-10",
          "shieldLag": "10/7",
          "shieldStun": "5/4",
          "hitboxes": "Early Far/Late Far/Close",
          "notes": "Autocancels on frame 1-11 and 30 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrUAir.gif"
          ],
          "startup": "6",
          "active": "6-9(10-13)",
          "total": "25",
          "endlag": "12",
          "landingLag": "9",
          "damage": "10.0/6.5",
          "advantage": "-5",
          "shieldLag": "8",
          "shieldStun": "4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 16 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrDAir.gif",
            "hitboxes/bowser_jr/BowserJrDAirLanding.gif"
          ],
          "startup": "15...",
          "active": "15-38 (rehit: 3) / 39",
          "total": "56",
          "endlag": "18",
          "landingLag": "15",
          "damage": "1.5/2.5/2.0",
          "advantage": "-11",
          "shieldLag": "4/10/9",
          "shieldStun": "2/2/3",
          "hitboxes": "multi/final/landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 55 onward"
        },
        {
          "name": "Neutral B (Clown Cannon)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrClownCannon.gif"
          ],
          "startup": "37-97",
          "total": "72-132",
          "damage": "10.0-20.0/7.0-14.0",
          "advantage": "-23 to -17",
          "shieldLag": "8-12/7-10",
          "shieldStun": "4-6/3-5",
          "hitboxes": "Early/Late",
          "notes": "\"late\" hitbox is when the cannonball starts losing altitude"
        },
        {
          "name": "Side B (Clown Kart Dash)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrClownKartDashG.gif",
            "hitboxes/bowser_jr/BowserJrClownKartDashA.gif"
          ],
          "startup": "23",
          "damage": "4.0-7.3",
          "shieldLag": "7-8",
          "shieldStun": "5-7",
          "notes": "Damage based heavy armor begins on frame 20. Kart Jump can be cancelled into any attack on any frame but is otherwise a 33 frame animation. Damage depends on travel speed"
        },
        {
          "name": "Clown Kart Dash (spinout)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrClownKartDashSpinout.gif"
          ],
          "startup": "3",
          "active": "3-14",
          "total": "58",
          "endlag": "44",
          "damage": "16.3-10.0",
          "advantage": "-40",
          "shieldLag": "11-8",
          "shieldStun": "15-10",
          "hitboxes": "Early-Latest",
          "notes": "Damage also depends on travel speed"
        },
        {
          "name": "Up B (Abandon Ship)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrAbandonShip.gif"
          ],
          "startup": "17/56",
          "landingLag": "26",
          "damage": "5.0/13.0",
          "shieldLag": "6/9",
          "shieldStun": "3/5",
          "notes": "Earliest you can hammer or dodge is on frame 26"
        },
        {
          "name": "Abandon Ship (Hammer)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrAbandonShipHammer.gif"
          ],
          "startup": "8/13",
          "active": "8-9/13-14",
          "total": "39",
          "endlag": "25",
          "landingLag": "37",
          "damage": "15.0 (sweet) / 10.0 (sour)",
          "shieldLag": "6/9",
          "shieldStun": "3/5"
        },
        {
          "name": "Down B (Mechakoopa)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrMechakoopa.gif"
          ],
          "total": "67",
          "damage": "4.0",
          "shieldLag": "2",
          "notes": "Mechakoopa activates on frame 48. Explodes 28 frames after latching. Deactivates when contacting a shield"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrGrab.gif"
          ],
          "startup": "11",
          "active": "11-13",
          "total": "40",
          "endlag": "27"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrDashGrab.gif"
          ],
          "startup": "14",
          "active": "14-16",
          "total": "48",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrPivotGrab.gif"
          ],
          "startup": "15",
          "active": "15-17",
          "total": "43",
          "endlag": "26"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames include 13 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrFThrow.gif"
          ],
          "startup": "14/16",
          "total": "34",
          "damage": "3.0/7.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrBThrow.gif"
          ],
          "startup": "24",
          "total": "61",
          "damage": "11.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrUThrow.gif"
          ],
          "startup": "18",
          "total": "37",
          "damage": "7.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser_jr/BowserJrDThrow.gif"
          ],
          "startup": "16/50",
          "total": "77",
          "damage": "1.2/4.0",
          "notes": "Hits 16-49 with rehit of 5. Throws on 50."
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
          "total": "48",
          "landingLag": "10",
          "notes": "Invulnerable on frame 3-30"
        },
        {
          "name": "Abandon Ship Air Dodge",
          "section": "dodge",
          "total": "33",
          "landingLag": "33",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "67",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "77",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "82",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "93",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "108",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/bowser_jr/bowserjrGetupAttackU.gif",
            "hitboxes/bowser_jr/bowserjrGetupAttackD.gif",
            "hitboxes/bowser_jr/bowserjrTripAttack.gif",
            "hitboxes/bowser_jr/bowserjrLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/bowser_jr",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
