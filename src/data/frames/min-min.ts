// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "min-min",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinJab1.gif"
          ],
          "startup": "5",
          "active": "5—6",
          "total": "24",
          "endlag": "18",
          "damage": "2.5",
          "advantage": "-15",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Startup and total frames assumes player presses and releases A/B in one frame, or buffers the attack. Transitions to jab 2 on frame 10"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinJab2.gif"
          ],
          "startup": "8",
          "active": "8—9",
          "total": "31",
          "endlag": "22",
          "damage": "2.0",
          "advantage": "-20",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Transitions to rapid jab on frame 14 or jab 3 on frame 15"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinJab3.gif"
          ],
          "startup": "6",
          "active": "6—7",
          "total": "35",
          "endlag": "28",
          "damage": "5.5",
          "advantage": "-23",
          "shieldLag": "14",
          "shieldStun": "6"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinJabRapid.gif"
          ],
          "startup": "6/8/10...",
          "active": "6/8/10...",
          "damage": "0.5",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinJabRapidFinisher.gif"
          ],
          "startup": "7",
          "active": "6—7",
          "total": "41",
          "endlag": "34",
          "damage": "5.0",
          "advantage": "-28",
          "shieldLag": "15",
          "shieldStun": "6"
        },
        {
          "name": "Forward Tilt, Dragon",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinDragonJab.gif",
            "hitboxes/minmin/MinMinDragonAerialTilt.gif"
          ],
          "startup": "14",
          "active": "Ground: 14(15—24) // Air: 14(15—22)",
          "total": "58 (53 air)",
          "endlag": "36",
          "damage": "8.0",
          "advantage": "-31",
          "shieldLag": "7",
          "shieldStun": "8",
          "notes": "Endlag on hit is 28. Endlag on block is 39. Can fire other arm beginning on frame 17. Min Min can move and jump at any point of the animation"
        },
        {
          "name": "Forward Tilt, Power Dragon",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinPowerDragonJab.gif",
            "hitboxes/minmin/MinMinPowerDragonAerialTilt.gif"
          ],
          "startup": "14",
          "active": "Ground: 14(15—24) // Air: 14(15—22)",
          "total": "58",
          "endlag": "36",
          "damage": "9.2",
          "advantage": "-29",
          "shieldStun": "9"
        },
        {
          "name": "Forward Tilt, Ramram",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinRamRamJab.gif",
            "hitboxes/minmin/MinMinRamRamAerialTilt.gif"
          ],
          "startup": "14",
          "active": "Ground: 14(15—21/22—29) // Air: 14(15—19/20—24)",
          "total": "51 (47 air)",
          "endlag": "27",
          "damage": "5.0",
          "advantage": "-31",
          "shieldLag": "6/5",
          "shieldStun": "6/2",
          "notes": "Can fire other arm beginning on frame 17. Projectile does not launch if blocked. Endlag is 37 if blocked."
        },
        {
          "name": "Forward Tilt, Megawatt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinMegawattJab.gif",
            "hitboxes/minmin/MinMinMegawattAerialTilt.gif"
          ],
          "startup": "14",
          "active": "Ground: 14(15—32) // Air: 14(15—27)",
          "total": "67 (59 air)",
          "endlag": "40",
          "damage": "11.0",
          "advantage": "-30 — -34",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Can fire other arm beginning on frame 17. Endlag on hit is 22-29 depending on how far the arm must retract. Endlag on block is 40-44 depending on how far the arm must retract."
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinUTilt.gif"
          ],
          "startup": "5",
          "active": "(5-6/7-11)(6-9/10-15)",
          "total": "41",
          "endlag": "26",
          "damage": "(Clean) 5.0/7.0 // (Late) 4.0/6.0",
          "advantage": "-31/-30/-29",
          "shieldLag": "5/6/6/7",
          "shieldStun": "5/6/6/7",
          "hitboxes": "(Left Leg)(Right Leg)",
          "notes": "Sweetspots are Min Min's feet, legs are sourspots."
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinDTilt.gif"
          ],
          "startup": "10",
          "active": "10-14/15-19",
          "total": "34",
          "endlag": "15",
          "damage": "7.0/5.0(5.5/3.5)",
          "advantage": "-18/-17",
          "shieldLag": "6/7/6",
          "shieldStun": "6/7/6",
          "hitboxes": "Early/Late",
          "notes": "leg intangibility on frame 10-14"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinDashAttack.gif"
          ],
          "startup": "7",
          "active": "7—10/11—16",
          "total": "38",
          "endlag": "22",
          "damage": "10.0/8.0",
          "advantage": "-23",
          "shieldLag": "7/10/7",
          "shieldStun": "8/10/8",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash, Dragon (Laser)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinDragonFSmash.gif",
            "hitboxes/minmin/MinMinDragonFSmashCharged.gif",
            "hitboxes/minmin/MinMinDragonAerialSmash.gif"
          ],
          "startup": "16 (40)",
          "active": "16(17—19/20—24/25—29) (40—50)",
          "total": "65 (87)",
          "endlag": "15",
          "damage": "12.0/16.0/13.0 (7.0)",
          "advantage": "-32/-29/-30 (-35)",
          "shieldLag": "9/10/9 (7)",
          "shieldStun": "8/11/9 (3)",
          "hitboxes": "Early/Middle/Late (Laser)",
          "notes": "Charge hold frame 8. Can fire other arm beginning on frame 17. Endlag on hit is 30. Endlag on block is 40-41 depending on how far the arm must retract. You cannot fire the beam if you already made contact with a shield or clanked"
        },
        {
          "name": "Forward Smash, Power Dragon (Laser)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinPowerDragonFSmash.gif",
            "hitboxes/minmin/MinMinPowerDragonAerialSmash.gif"
          ],
          "startup": "16 (40)",
          "active": "Ground: 16(17—19/20—24/25—29) (40—50) // Air: 16(17—19/20—23/24—28) (40—50)",
          "total": "65 (87)",
          "endlag": "15",
          "damage": "15.0/20.0/16.25 (12.0)",
          "advantage": "-31/-31/-29 (-34)",
          "shieldStun": "11/13/11 (4)",
          "hitboxes": "Early/Middle/Late (Laser)"
        },
        {
          "name": "Forward Smash, Ramram",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinRamRamFSmashUncharged.gif",
            "hitboxes/minmin/MinMinRamRamFSmashCharged.gif",
            "hitboxes/minmin/MinMinRamRamAerialSmash.gif"
          ],
          "startup": "16 (26)",
          "active": "Ground: 16(17—18/19—25/26—35) // Air: 16(17—18/19—24/25—32)",
          "total": "57 (55 air)",
          "endlag": "25",
          "damage": "10.0/12.0 (2.5)",
          "advantage": "-32/-31",
          "shieldLag": "8/9/5",
          "shieldStun": "7/8/2",
          "hitboxes": "Normal/Late (Chakram)",
          "notes": "Can fire other arm beginning on frame 17. Projectile does not launch if blocked. Endlag is 39 if blocked. Charge hold frame 8."
        },
        {
          "name": "Forward Smash, Megawatt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinMegawattFSmashUncharged.gif",
            "hitboxes/minmin/MinMinMegawattFSmashCharged.gif",
            "hitboxes/minmin/MinMinMegawattAerialSmash.gif"
          ],
          "startup": "16",
          "active": "Ground: 16(17—19/20—31/32—38) // Air: 16(17—19/20—29/30—36)",
          "total": "75 (70 air)",
          "endlag": "39",
          "damage": "19.0/21.0/19.0",
          "advantage": "-28 — -34",
          "shieldLag": "12/14/12",
          "shieldStun": "13/14/13",
          "hitboxes": "Early/Middle/Late",
          "notes": "Charge hold frame 8. Can fire other arm beginning on frame 17. Endlag on hit is 22-31 depending on how far the arm must retract. Endlag on block is 41-47 depending on how far the arm must retract."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinUSmash.gif"
          ],
          "startup": "8",
          "active": "8-10/11-13/14-16",
          "total": "53",
          "endlag": "37",
          "damage": "16.0/14.0",
          "advantage": "-35/-34",
          "shieldLag": "10/11/10/9",
          "shieldStun": "10/11/10/8",
          "hitboxes": "early close/far late close/far",
          "notes": "leg intangibility on frame 7-15. Reflects on frame 6-15. Charge hold frame 2"
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/minmin/MinMinDSmash.gif"
          ],
          "startup": "6",
          "active": "6—8",
          "total": "48",
          "endlag": "40",
          "damage": "15.0/13.0",
          "advantage": "-33/-32",
          "shieldLag": "9/10",
          "shieldStun": "9/10",
          "hitboxes": "Left Leg/Right Leg",
          "notes": "leg intangibility on frame 6-8. Charge hold frame 2"
        },
        {
          "name": "Neutral Air, Dragon",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/minmin/MinMinNAirDragonLeft.gif",
            "hitboxes/minmin/MinMinNAirDragonRight.gif"
          ],
          "startup": "10",
          "active": "10—23",
          "total": "37",
          "endlag": "14",
          "landingLag": "12",
          "damage": "8.5",
          "advantage": "-8",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "arm intangible on frame 10-23. autocancels on frame 1-3 and 37 onward"
        },
        {
          "name": "Neutral Air, Power Dragon",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/minmin/MinMinNAirPowerDragon.gif"
          ],
          "startup": "10",
          "active": "10—23",
          "total": "37",
          "endlag": "14",
          "landingLag": "12",
          "damage": "9.775",
          "advantage": "-6",
          "shieldStun": "4"
        },
        {
          "name": "Neutral Air, Ramram",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/minmin/MinMinNAirRamRam.gif"
          ],
          "startup": "8",
          "active": "8—18",
          "total": "28",
          "endlag": "10",
          "landingLag": "12",
          "damage": "6.0",
          "advantage": "-9",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "arm intangible on frame 8-18. autocancels on frame 1-3 and 28 onward"
        },
        {
          "name": "Neutral Air, Megawatt",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/minmin/MinMinNAirMegawatt.gif"
          ],
          "startup": "14",
          "active": "14—32",
          "total": "50",
          "endlag": "18",
          "landingLag": "12",
          "damage": "12.0",
          "advantage": "-7",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "arm intangible on frame 14-32. autocancels on frame 1-5 and 50 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/minmin/MinMinUAir.gif"
          ],
          "startup": "7",
          "active": "7—13",
          "total": "38",
          "endlag": "25",
          "landingLag": "8",
          "damage": "6.5/4.5",
          "advantage": "-5",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "autocancels on frame 29 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/minmin/MinMinDAir.gif",
            "hitboxes/minmin/MinMinDAirLanding.gif"
          ],
          "startup": "15",
          "active": "15—18/19—33/1—3",
          "total": "54",
          "endlag": "21",
          "landingLag": "25",
          "damage": "11.0/9.0/3.0",
          "advantage": "*/*/-20",
          "shieldLag": "8/7/5",
          "shieldStun": "4/4/4",
          "hitboxes": "Early/Late/Landing",
          "notes": "landing hit on frame 1 of landing. Autocancels on frame 41 onward"
        },
        {
          "name": "Up B (Arms Jump)",
          "section": "special",
          "total": "25/37(held)",
          "shieldLag": "7",
          "shieldStun": "9",
          "notes": "Invulnerable 8—13 normally and 18—25 when held."
        },
        {
          "name": "Up B (Arms Hook)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/minmin/MinMinARMSHookDragonGrounded.gif",
            "hitboxes/minmin/MinMinARMSHookDragonAerial.gif",
            "hitboxes/minmin/MinMinARMSHookPowerDragonGrounded.gif",
            "hitboxes/minmin/MinMinARMSHookPowerDragonAerial.gif"
          ],
          "startup": "12",
          "active": "12—20",
          "total": "54",
          "endlag": "34",
          "damage": "9.0",
          "advantage": "-31",
          "shieldLag": "7",
          "shieldStun": "9",
          "notes": "Tethers to ledge on frame 5. Endlag on hit is 22-32 depending on how far the arm must restract. Endlag on block is 40-42 depending on how far the arm must restract."
        },
        {
          "name": "Down B (Arms Change)",
          "section": "special",
          "startup": "1",
          "total": "1",
          "notes": "Instantaneous."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/minmin/MinMinGrab.gif"
          ],
          "startup": "18",
          "active": "18—24",
          "total": "56",
          "endlag": "32",
          "notes": "ARMS don't have hurtboxes on frames 18-38"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/minmin/MinMinDashGrab.gif"
          ],
          "startup": "18",
          "active": "18—24",
          "total": "56",
          "endlag": "32",
          "notes": "ARMS don't have hurtboxes on frames 18-38"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/minmin/MinMinPivotGrab.gif"
          ],
          "startup": "18",
          "active": "18—24",
          "total": "56",
          "endlag": "32",
          "notes": "ARMS don't have hurtboxes on frames 18-38"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/minmin/MinMinPummel.gif"
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
            "hitboxes/minmin/MinMinFThrow.gif"
          ],
          "startup": "13",
          "total": "29",
          "damage": "9.0",
          "notes": "Hits on frame 12, throws on frame 13."
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/minmin/MinMinBThrow.gif"
          ],
          "startup": "31",
          "total": "49",
          "damage": "14.0",
          "notes": "Hits on frame 27, throws on frame 31."
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/minmin/MinMinUThrow.gif"
          ],
          "startup": "11",
          "total": "54",
          "damage": "10.0",
          "notes": "Hits on frame 10, throws on frame 11."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/minmin/MinMinDThrow.gif"
          ],
          "startup": "16",
          "total": "45",
          "damage": "8.0",
          "notes": "Hits on frame 15, throws on frame 16."
        },
        {
          "name": "Spot Dodge",
          "section": "dodge",
          "total": "20/25",
          "notes": "Intangible on frame 3—17."
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
          "total": "39",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30."
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "71",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "78",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "85",
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
          "total": "107",
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
            "ledgehangs/MinMinLedgeHang.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/minmin/minminGetupAttackU.gif",
            "hitboxes/minmin/minminGetupAttackD.gif",
            "hitboxes/minmin/minminTripAttack.gif",
            "hitboxes/minmin/minminLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/min_min",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
