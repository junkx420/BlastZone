// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "bowser",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser/BowserJab1.gif"
          ],
          "startup": "7",
          "active": "7-8",
          "total": "25",
          "endlag": "17",
          "damage": "4.0",
          "advantage": "-13",
          "shieldLag": "8",
          "shieldStun": "5",
          "notes": "Transitions to Jab 2 as early as frame 10. Arm intangibility on frame 7-8"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser/BowserJab2.gif"
          ],
          "startup": "9",
          "active": "9-11",
          "total": "25",
          "endlag": "14",
          "damage": "7.0",
          "advantage": "-9",
          "shieldLag": "12",
          "shieldStun": "7",
          "notes": "Arm intangibility on frame 9-11"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser/BowserFTilt.gif",
            "hitboxes/bowser/BowserFTiltUp.gif",
            "hitboxes/bowser/BowserFTiltDown.gif"
          ],
          "startup": "10",
          "active": "10-14",
          "total": "37",
          "endlag": "23",
          "damage": "13.0",
          "advantage": "-15",
          "shieldLag": "9",
          "shieldStun": "12",
          "notes": "Damage based heavy armor (4%) on frame 7-9. Arm intangibility on frame 10-14"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser/BowserUTilt.gif"
          ],
          "startup": "11",
          "active": "11-16",
          "total": "40",
          "endlag": "24",
          "damage": "11.0",
          "advantage": "-19",
          "shieldLag": "8",
          "shieldStun": "10",
          "notes": "Damage based heavy armor (4%) on frame 8-10. Arm intangibility on frame 11-16"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser/BowserDTilt.gif"
          ],
          "startup": "10/15",
          "active": "10-12/15-17",
          "total": "45",
          "endlag": "28",
          "damage": "7.0/8.0",
          "advantage": "-22",
          "shieldLag": "7/7",
          "shieldStun": "-/8",
          "notes": "Damage based heavy armor (4%) on frame 7-9. Arm intangibility on frame 10-12 and 15-17"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser/BowserDashAttack.gif"
          ],
          "startup": "11",
          "active": "11-14/15-20",
          "total": "55",
          "endlag": "35",
          "damage": "12.0/10.0",
          "advantage": "-33",
          "shieldLag": "9/8",
          "shieldStun": "11/10",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser/BowserFSmash.gif"
          ],
          "startup": "22",
          "active": "22-23(24-27)",
          "total": "69",
          "endlag": "42",
          "damage": "(23.0%/20.0%)/(17.0%/14.0%)",
          "advantage": "-32",
          "shieldLag": "14",
          "shieldStun": "15",
          "hitboxes": "(Clean/Late both split Far/Close)",
          "notes": "Damage based heavy armor (10%) frame 17-19. Leg Invincible 20-25. Charge hold frame 3"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser/BowserUSmash.gif"
          ],
          "startup": "16/37",
          "active": "16-23/37",
          "total": "57",
          "endlag": "20",
          "damage": "22.0/16.0/12.0",
          "advantage": "-27/-30/-12",
          "shieldLag": "13/10/9",
          "shieldStun": "14/11/8",
          "hitboxes": "Sweet/sour/landing hit",
          "notes": "Damage based heavy armor (8%) frame 11-13 and 28-31. Invincible 14-27. Charge hold frame 9"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/bowser/BowserDSmash.gif"
          ],
          "startup": "12/28",
          "active": "12-14/28-30",
          "total": "72",
          "endlag": "42",
          "damage": "16.0/15.0",
          "advantage": "-49/-34",
          "shieldLag": "10/10",
          "shieldStun": "11/10",
          "notes": "Damage based heavy armor (8%) frame 5-11. Charge hold is frame 4"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bowser/BowserNAir.gif"
          ],
          "startup": "8/14/18/?",
          "active": "8-29/14-29/18-29/18-29",
          "total": "47",
          "endlag": "18",
          "landingLag": "15",
          "damage": "6.0",
          "advantage": "-12",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Autocancels on frame 1-3 and 41 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bowser/BowserFAir.gif"
          ],
          "startup": "11",
          "active": "11-14",
          "total": "41",
          "endlag": "27",
          "landingLag": "14",
          "damage": "13.0%/12.0%/11.0%",
          "advantage": "-9/-10",
          "shieldLag": "9/8",
          "shieldStun": "5/4",
          "hitboxes": "(Far/Mid/Close)",
          "notes": "Autocancels on frame 1-3 and 31 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bowser/BowserBAir.gif"
          ],
          "startup": "9",
          "active": "9-11",
          "total": "44",
          "endlag": "33",
          "landingLag": "24",
          "damage": "19.0",
          "advantage": "-17",
          "shieldLag": "12",
          "shieldStun": "7",
          "notes": "Autocancels on frame 1-2 and 31 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bowser/BowserUAir.gif"
          ],
          "startup": "9",
          "active": "9-13",
          "total": "44",
          "endlag": "31",
          "landingLag": "17",
          "damage": "15.0",
          "advantage": "-12",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Head intangibility on frame 3-13. Autocancels on frame 1-2 and 40 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/bowser/BowserDAir.gif",
            "hitboxes/bowser/BowserDAirLanding.gif"
          ],
          "startup": "17",
          "active": "17-24/25-49/1-6",
          "total": "77",
          "endlag": "28",
          "landingLag": "34",
          "damage": "16.0/?/2.0",
          "advantage": "-30",
          "shieldLag": "10/4",
          "shieldStun": "6/3",
          "hitboxes": "Normal/late/landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-13 and 70 onward. Leg/Arm/Head intangible from frames 14-60."
        },
        {
          "name": "Neutral B (Fire Breath)",
          "section": "special",
          "startup": "23/30/37/44...",
          "active": "23/30/37/44...",
          "total": "77",
          "endlag": "33",
          "damage": "1.8",
          "shieldLag": "4",
          "shieldStun": "2",
          "notes": "Total frames is minimum usage. Endlag is 31 frames on release."
        },
        {
          "name": "Side B (Flying Slam)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser/BowserFlyingSlamGrabG.gif",
            "hitboxes/bowser/BowserFlyingSlamGrabA.gif",
            "hitboxes/bowser/BowserFlyingSlam.gif"
          ],
          "startup": "6",
          "active": "6",
          "total": "52",
          "endlag": "46",
          "notes": "40 frames endlag after a slam, but can be cancelled by landing on a platform. 23 frames of invulnerability after a successful grab. Whether Bowser or his opponent has more control over the direction of the slam is determined by whoever has less damage."
        },
        {
          "name": "Up B (Whirling Fortress)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser/BowserWhirlingFortressG.gif"
          ],
          "startup": "6...",
          "active": "6-38/39 (rehit: 5)",
          "total": "81",
          "endlag": "42",
          "landingLag": "18",
          "damage": "1.0/6.0",
          "advantage": "-36",
          "shieldLag": "4/6",
          "shieldStun": "2/6",
          "hitboxes": "Multi/Final"
        },
        {
          "name": "Up B, Air (Whirling Fortress, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser/BowserWhirlingFortressA.gif"
          ],
          "startup": "6...",
          "active": "6-7/8-11/12-15/16-19/20-23/24-27/28-31/32-35/36-39/40-43/44-47/48-51 (rehit: 5)",
          "landingLag": "36",
          "damage": "7.0/1.0/2.0",
          "shieldLag": "7/3/6",
          "shieldStun": "-/2/3",
          "hitboxes": "First/multi/final",
          "notes": "Mash special button for more height"
        },
        {
          "name": "Down B (Bowser Bomb)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser/BowserBowserBombG.gif"
          ],
          "startup": "11/37.../1",
          "active": "11/37.../1-2",
          "total": "66",
          "endlag": "29",
          "damage": "4.0/20.0/11.0",
          "shieldLag": "5/12/8",
          "shieldStun": "5/18/-",
          "hitboxes": "Rise/fall/landing",
          "notes": "Landing hit on frame 1."
        },
        {
          "name": "Down B, Air (Bowser Bomb, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/bowser/BowserBowserBombLanding.gif"
          ],
          "startup": "31.../1",
          "active": "31.../1-2",
          "landingLag": "55",
          "damage": "20.0/11.0",
          "shieldLag": "12/8",
          "shieldStun": "18/-",
          "hitboxes": "Fall/landing",
          "notes": "Landing hit on frame 1."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser/BowserGrab.gif"
          ],
          "startup": "8",
          "active": "8-10",
          "total": "40",
          "endlag": "30"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser/BowserDashGrab.gif"
          ],
          "startup": "11",
          "active": "11-13",
          "total": "48",
          "endlag": "35"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser/BowserPivotrGrab.gif"
          ],
          "startup": "12",
          "active": "12-14",
          "total": "43",
          "endlag": "29"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser/BowserPummel.gif"
          ],
          "startup": "2",
          "total": "21",
          "damage": "1.6",
          "notes": "Total frames include 14 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser/BowserFThrow.gif"
          ],
          "startup": "36",
          "total": "58",
          "damage": "12.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser/BowserBThrow.gif"
          ],
          "startup": "19",
          "total": "38",
          "damage": "12.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser/BowserUThrow.gif"
          ],
          "startup": "21/25/29/33/37/41/45/49/57",
          "total": "74",
          "damage": "0.5/2.0/6.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/bowser/BowserDThrow.gif"
          ],
          "startup": "35/37",
          "total": "84",
          "damage": "10.0/4.0"
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "23/28",
          "notes": "Intangible on frame 3-18"
        },
        {
          "name": "Forward Roll",
          "section": "dodge",
          "total": "32",
          "notes": "Intangible on frame 4-16"
        },
        {
          "name": "Backward Roll",
          "section": "dodge",
          "total": "37",
          "notes": "Intangible on frame 5-17"
        },
        {
          "name": "Neutral Air Dodge",
          "section": "dodge",
          "total": "46",
          "landingLag": "10",
          "notes": "Intangible on frame 4-32"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "63",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "67",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "75",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "88",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "95",
          "landingLag": "11-19",
          "notes": "Intangible on frame 4-22"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/bowser/bowserGetupAttackU.gif",
            "hitboxes/bowser/bowserGetupAttackD.gif",
            "hitboxes/bowser/bowserTripAttack.gif",
            "hitboxes/bowser/bowserLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/bowser",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
