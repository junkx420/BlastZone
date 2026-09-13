// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "captain-falcon",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconJab1.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "17",
          "endlag": "14",
          "damage": "1.5",
          "advantage": "-11",
          "shieldLag": "7",
          "shieldStun": "3",
          "notes": "Transition to Jab 2 as early as frame 5."
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconJab2.gif"
          ],
          "startup": "5",
          "active": "5",
          "total": "18",
          "endlag": "13",
          "damage": "1.5",
          "advantage": "-10",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Jab 3 or Rapid Jab as early as frame 8."
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconJab3.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "32",
          "endlag": "25",
          "damage": "5.0",
          "advantage": "-20",
          "shieldLag": "12",
          "shieldStun": "6"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconJabRapid.gif"
          ],
          "startup": "5/7/9",
          "damage": "0.6",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconJabRapidEnd.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "49",
          "endlag": "42",
          "damage": "3.0",
          "advantage": "-39",
          "shieldLag": "10",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconFTilt.gif",
            "hitboxes/captain_falcon/CaptainFalconFTiltUp.gif",
            "hitboxes/captain_falcon/CaptainFalconFTiltDown.gif"
          ],
          "startup": "7",
          "active": "7-10",
          "total": "29",
          "endlag": "19",
          "damage": "8.0/9.0",
          "advantage": "-14/-13",
          "shieldLag": "7/7",
          "shieldStun": "8/9",
          "hitboxes": "Close/Far",
          "notes": "Damage and shieldstun increases by 1.0 when angled"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconUTilt.gif"
          ],
          "startup": "14",
          "active": "14-17",
          "total": "36",
          "endlag": "19",
          "damage": "11.0",
          "advantage": "-11",
          "shieldLag": "9",
          "shieldStun": "11",
          "notes": "Right foot intangible frames 14-17."
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconDTilt.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "34",
          "endlag": "22",
          "damage": "10.0",
          "advantage": "-13",
          "shieldLag": "8",
          "shieldStun": "10"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconDashAttack.gif"
          ],
          "startup": "7",
          "active": "7-9(10-16)",
          "total": "34",
          "endlag": "18",
          "damage": "10.0/6.0",
          "advantage": "-13",
          "shieldLag": "10/8",
          "shieldStun": "14/9",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconFSmash.gif",
            "hitboxes/captain_falcon/CaptainFalconFSmashUp.gif",
            "hitboxes/captain_falcon/CaptainFalconFSmashDown.gif"
          ],
          "startup": "19",
          "active": "19-22",
          "total": "59",
          "endlag": "37",
          "damage": "19.0/20.0",
          "advantage": "-27",
          "shieldLag": "12/12",
          "shieldStun": "13/13",
          "hitboxes": "No Angle/Angled",
          "notes": "Charge hold is frame 11"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconUSmash.gif"
          ],
          "startup": "22/28",
          "active": "22(23)/28-29",
          "total": "45",
          "endlag": "16",
          "damage": "(7.0%/12.0%)/(14.0%/13.0%)",
          "advantage": "-17/-7",
          "shieldLag": "7/9/10",
          "shieldStun": "6/8/10",
          "hitboxes": "(Hit 1 (Scoop/Leg)/Hit 2 (Leg/Butt))",
          "notes": "Right foot is invincible frames 22-23, left foot intangible frames 28-29. Charge hold is frame 8."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconDSmash.gif"
          ],
          "startup": "19/29",
          "active": "19-20/29-30",
          "total": "48",
          "endlag": "18",
          "damage": "14.0/18.0",
          "advantage": "-19/-7",
          "shieldLag": "10/11",
          "shieldStun": "10/12",
          "notes": "Charge hold is frame 11"
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconNAir.gif"
          ],
          "startup": "7/13",
          "active": "7-8/13-15",
          "total": "39",
          "endlag": "24",
          "landingLag": "7",
          "damage": "4.0/6.0",
          "advantage": "-4/-4",
          "shieldLag": "5/6",
          "shieldStun": "3/3",
          "notes": "Autocancels on frame 1-3 and 32 onward"
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconFAir.gif"
          ],
          "startup": "14",
          "active": "14(15-30)",
          "total": "45",
          "endlag": "15",
          "landingLag": "18",
          "damage": "22.0/6.0/3.0",
          "advantage": "-10/-15",
          "shieldLag": "24/5",
          "shieldStun": "8/2",
          "hitboxes": "Early Far/Early Close/Late",
          "notes": "Autocancels on frame 1-4 and 42 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconBAir.gif"
          ],
          "startup": "10",
          "active": "10-11(12-15)",
          "total": "35",
          "endlag": "20",
          "landingLag": "10",
          "damage": "13.0/8.0",
          "advantage": "-5/-6",
          "shieldLag": "9/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-4 and 19 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconUAir.gif"
          ],
          "startup": "7",
          "active": "7-10(11-12)",
          "total": "31",
          "endlag": "19",
          "landingLag": "10",
          "damage": "10.0/9.0/8.0",
          "advantage": "-6/-6/-6",
          "shieldLag": "8/7/7",
          "shieldStun": "4/4/4",
          "hitboxes": "Close/Far/Late",
          "notes": "Autocancels on frame 24 onward"
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconDAir.gif"
          ],
          "startup": "16",
          "active": "16-18",
          "total": "44",
          "endlag": "26",
          "landingLag": "12",
          "damage": "14.0",
          "advantage": "-7",
          "shieldLag": "10",
          "shieldStun": "5",
          "notes": "Autocancels on frame 1-3 and 39 onward"
        },
        {
          "name": "Neutral B (Falcon Punch)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconFalconPunchG.gif",
            "hitboxes/captain_falcon/CaptainFalconFalconPunchGR.gif",
            "hitboxes/captain_falcon/CaptainFalconFalconPunchA.gif",
            "hitboxes/captain_falcon/CaptainFalconFalconPunchAR.gif"
          ],
          "startup": "53/62",
          "active": "53-57/62-66",
          "total": "103/117",
          "endlag": "37",
          "damage": "25.0/28.0/22.0/25.0",
          "advantage": "-28/-30",
          "shieldLag": "17/25",
          "shieldStun": "22/25",
          "hitboxes": "Grounded/Grounded Reversed/Aerial/Aerial Reversed"
        },
        {
          "name": "Side B (Raptor Boost)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconRaptorBoostHitG.gif",
            "hitboxes/captain_falcon/CaptainFalconRaptorBoostG.gif"
          ],
          "startup": "5(+10)",
          "total": "27/71",
          "damage": "10.0",
          "advantage": "-12",
          "shieldLag": "12",
          "shieldStun": "10",
          "notes": "Startup is 6 upon reaching target. On hit total frames is 28. Proximity sensor is active starting on 10. Total frames on a miss is 71. The damage-based armor activates on frame 1 of reaching a target, frames 1-4 for 12 in 1v1."
        },
        {
          "name": "Side B, Air (Raptor Boost, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconRaptorBoostHitA.gif",
            "hitboxes/captain_falcon/CaptainFalconRaptorBoostA.gif"
          ],
          "startup": "5(+19)",
          "total": "44",
          "landingLag": "22",
          "damage": "10.0",
          "shieldLag": "12",
          "shieldStun": "10",
          "notes": "39 endlag on hit. Startup is 5 upon reaching a target. Proximity sensor active starting on 19. Can grab ledges on frame 26 or 8 after proximity sensor activates."
        },
        {
          "name": "Up B (Falcon Dive)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconFalconDiveG.gif",
            "hitboxes/captain_falcon/CaptainFalconFalconDiveA.gif",
            "hitboxes/captain_falcon/CaptainFalconFalconDiveCatch.gif"
          ],
          "startup": "14",
          "active": "14-30",
          "landingLag": "24",
          "damage": "5.0/13.0",
          "hitboxes": "Hit 1/Throw",
          "notes": "54 frames endlag when successful."
        },
        {
          "name": "Down B (Falcon Kick)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconFalconKickG.gif"
          ],
          "startup": "13",
          "active": "13-16(17-23/24-33)",
          "total": "68/65",
          "endlag": "35",
          "damage": "15.0/11.0/7.0",
          "advantage": "-41/-40/-37",
          "shieldLag": "10/8/7",
          "shieldStun": "14/10/7",
          "hitboxes": "Early/late/later",
          "notes": "Total frames is 68 on the ground or 65 if you go over an edge."
        },
        {
          "name": "Down B, Air (Falcon Kick, Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconFalconKickA.gif",
            "hitboxes/captain_falcon/CaptainFalconFalconKickALanding.gif"
          ],
          "startup": "14",
          "active": "14-18(19-24/25-27)/1-2",
          "total": "56",
          "endlag": "29",
          "landingLag": "35",
          "damage": "15.0/12.0/9.0/9.0",
          "advantage": "-25",
          "shieldLag": "12/7",
          "shieldStun": "14/9",
          "hitboxes": "Early/Mid/Late/Landing",
          "notes": "Landing hit on frame 1."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconGrab.gif"
          ],
          "startup": "6",
          "active": "6-7",
          "total": "35",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "43",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "38",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconPummel.gif"
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
            "hitboxes/captain_falcon/CaptainFalconFThrow.gif"
          ],
          "startup": "11/13",
          "total": "32",
          "damage": "3.5/4.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconBThrow.gif"
          ],
          "startup": "12/13",
          "total": "45",
          "damage": "3.5/4.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconUThrow.gif"
          ],
          "startup": "12/14",
          "total": "37",
          "damage": "4.0/5.0"
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/captain_falcon/CaptainFalconDThrow.gif"
          ],
          "startup": "21",
          "total": "39",
          "damage": "6.0"
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
          "total": "42",
          "landingLag": "10",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "62",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "66",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "72",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "85",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "94",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/captain_falcon/captainfalconGetupAttackU.gif",
            "hitboxes/captain_falcon/captainfalconGetupAttackD.gif",
            "hitboxes/captain_falcon/captainfalconTripAttack.gif",
            "hitboxes/captain_falcon/captainfalconLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/captain_falcon",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
