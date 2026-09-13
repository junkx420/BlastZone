// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "kirby",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyJab1.gif"
          ],
          "startup": "2",
          "active": "2",
          "total": "14",
          "endlag": "12",
          "damage": "1.8",
          "advantage": "-9",
          "shieldLag": "8",
          "shieldStun": "3",
          "notes": "Transitions to Jab 2 as early as frame 4"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyJab2.gif"
          ],
          "startup": "3",
          "active": "3",
          "total": "15",
          "endlag": "12",
          "damage": "1.6",
          "advantage": "-9",
          "shieldLag": "5",
          "shieldStun": "3",
          "notes": "Transitions to Rapid Jab as early as frame 5"
        },
        {
          "name": "Rapid Jab",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyJabRapid.gif"
          ],
          "startup": "5/7/9/11...",
          "active": "5/7/9/11...",
          "damage": "0.2",
          "shieldLag": "4"
        },
        {
          "name": "Rapid Jab Finisher",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyJabRapidEnd.gif"
          ],
          "startup": "3",
          "active": "3-4",
          "total": "39",
          "endlag": "35",
          "damage": "3.0",
          "advantage": "-32",
          "shieldLag": "15",
          "shieldStun": "4"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyFTilt.gif",
            "hitboxes/kirby/KirbyFTiltUp.gif",
            "hitboxes/kirby/KirbyFTiltDown.gif"
          ],
          "startup": "5",
          "active": "5-8",
          "total": "23",
          "endlag": "15",
          "damage": "8.0/7.0",
          "advantage": "-10/-11",
          "shieldLag": "7/7",
          "shieldStun": "8/4",
          "hitboxes": "Close/Far"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyUTilt.gif"
          ],
          "startup": "4",
          "active": "4-5/6-10",
          "total": "20",
          "endlag": "10",
          "damage": "5.0/4.0",
          "advantage": "-10/-9",
          "shieldLag": "6/5",
          "shieldStun": "6/5",
          "hitboxes": "Early/Late",
          "notes": "Leg intangibility on frame 4-10. Tipper deals reduced knockback."
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyDTilt.gif"
          ],
          "startup": "4",
          "active": "4-6",
          "total": "20",
          "endlag": "14",
          "damage": "6.0",
          "advantage": "-9",
          "shieldLag": "6",
          "shieldStun": "6"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyDashAttack.gif"
          ],
          "startup": "9",
          "active": "9-17/18-26/27-34",
          "total": "51",
          "endlag": "17",
          "damage": "12.0/9.0/6.0",
          "advantage": "-31",
          "hitboxes": "Early/Late/Latest"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyFSmash.gif",
            "hitboxes/kirby/KirbyFSmashUp.gif",
            "hitboxes/kirby/KirbyFSmashDown.gif"
          ],
          "startup": "13",
          "active": "13-15/16-19",
          "total": "47",
          "endlag": "28",
          "damage": "15.0/11.0",
          "advantage": "-23",
          "shieldLag": "12/8",
          "shieldStun": "10/8",
          "hitboxes": "Early/Late",
          "notes": "Charge hold is frame 4"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyUSmash.gif"
          ],
          "startup": "12",
          "active": "12-14/15-16/17",
          "total": "45",
          "endlag": "28",
          "damage": "(15.0%/14.0%)/(14.0%/13.0%)/(13.0%/12.0%)",
          "advantage": "-22/-24",
          "shieldLag": "10/9/9",
          "shieldStun": "11/9/8",
          "hitboxes": "(Clean/Mid/Late, all split like Close/Tip)",
          "notes": "Leg intangibility on frame 12-17. Charge hold is frame 8."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/kirby/KirbyDSmash.gif"
          ],
          "startup": "7",
          "active": "7-11/12-19",
          "total": "50",
          "endlag": "31",
          "damage": "14.0/10.0",
          "advantage": "-33",
          "shieldLag": "10",
          "shieldStun": "10",
          "notes": "Leg intangibility on frame 2-11. Charge hold is frame 2."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/kirby/KirbyNAir.gif"
          ],
          "startup": "8",
          "active": "8-9/10-13/14-18/19-32",
          "total": "52",
          "endlag": "20",
          "landingLag": "6",
          "damage": "10.0/8.0/6.0/4.0",
          "advantage": "-2/-2/-3/-3",
          "shieldLag": "8/7/6/5",
          "shieldStun": "4/4/3/3",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-3 and 49 onward."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/kirby/KirbyFAir.gif"
          ],
          "startup": "10/17/25",
          "active": "10-11/17-18/25-27",
          "total": "47",
          "endlag": "20",
          "landingLag": "8",
          "damage": "4.0/4.0/6.0",
          "advantage": "-5/-5/-5",
          "shieldLag": "5/5/8",
          "shieldStun": "3/3/3",
          "notes": "Autocancels on frame 1-9 and 41 onward"
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/kirby/KirbyBAir.gif"
          ],
          "startup": "6",
          "active": "6-8/9-12",
          "total": "40",
          "endlag": "28",
          "landingLag": "10",
          "damage": "13.0/8.0",
          "advantage": "-5/-6",
          "shieldLag": "11/7",
          "shieldStun": "5/4",
          "hitboxes": "Early/Late",
          "notes": "Autocancels on frame 1-2 and 32 onward"
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/kirby/KirbyUAir.gif"
          ],
          "startup": "8",
          "active": "8-13",
          "total": "35",
          "endlag": "22",
          "landingLag": "7",
          "damage": "10.0",
          "advantage": "-3",
          "shieldLag": "8",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1-7 and 20 onward."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/kirby/KirbyDAir.gif",
            "hitboxes/kirby/KirbyDAirLanding.gif"
          ],
          "startup": "18/21/24/27/30/34",
          "active": "18-19/21-22/24-25/27-28/30-31/34",
          "total": "54",
          "endlag": "20",
          "landingLag": "16",
          "damage": "1.2/2.0/2.0",
          "advantage": "-12",
          "shieldLag": "4/4/4",
          "shieldStun": "2/3/3",
          "hitboxes": "multi/final/landing",
          "notes": "Landing hit on frame 1. Autocancels on frame 1-17 and 48 onward"
        },
        {
          "name": "Neutral B (Inhale)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/kirby/KirbyInhaleStar.gif",
            "hitboxes/kirby/KirbyInhale.gif"
          ],
          "startup": "10",
          "active": "10-44 (longer if held)",
          "total": "67",
          "notes": "Minimum total frames is 67. Endlag is 19 frames upon release. Can eat projectiles. Projectile eat animation is 51 frames long"
        },
        {
          "name": "Inhale, Copy/Spit",
          "section": "special",
          "startup": "8/8",
          "total": "20/30",
          "damage": "10.0(Swallow)/6.0(Spit)"
        },
        {
          "name": "Side B (Hammer)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/kirby/KirbyHammerFlipG.gif"
          ],
          "startup": "11(+15)",
          "active": "26-27 (11-12 from charge)",
          "total": "54",
          "endlag": "27",
          "damage": "19.0-28.8",
          "advantage": "-26 to -18",
          "shieldLag": "14-16",
          "shieldStun": "17-25",
          "notes": "Startup is 11 from charging state. Takes 15 frames to enter charging state."
        },
        {
          "name": "Hammer, Full Charge",
          "section": "special",
          "hitboxImages": [
            "hitboxes/kirby/KirbyHammerFlipGMax.gif"
          ],
          "startup": "11",
          "active": "11-12",
          "total": "59",
          "endlag": "47",
          "damage": "35.0",
          "advantage": "-17",
          "shieldLag": "30",
          "shieldStun": "31",
          "notes": "If on the ground, invulnerable on frame 2-10 and Super armor on frame 11-17. Reaches full charge on frame 135."
        },
        {
          "name": "Hammer (Air)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/kirby/KirbyHammerFlipA.gif",
            "hitboxes/kirby/KirbyHammerFlipAMax.gif"
          ],
          "startup": "28/42",
          "active": "28-29/42-43",
          "total": "71",
          "endlag": "28",
          "damage": "16.0",
          "advantage": "**/**",
          "shieldLag": "10/10",
          "shieldStun": "14/14"
        },
        {
          "name": "Up B (Final Cutter)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/kirby/KirbyFinalCutter.gif",
            "hitboxes/kirby/KirbyFinalCutterLanding.gif"
          ],
          "startup": "23/(41/50...)/**/**",
          "active": "23-26/(41-49/50...)",
          "landingLag": "30",
          "damage": "5.0/2.0/(5.0/2.0)/6.0",
          "advantage": "--/--/-21/**",
          "shieldLag": "6/4/6/**",
          "shieldStun": "6/3/3/**",
          "hitboxes": "Rising/Falling/Landing/Projectile",
          "notes": "Landing projectile appears on frames 1-2/3-19."
        },
        {
          "name": "Down B (Stone)",
          "section": "special",
          "startup": "11",
          "damage": "14.0",
          "advantage": "-35",
          "shieldLag": "10",
          "shieldStun": "13",
          "notes": "Emerging from stone is a 31 frame animation. Stone armor begins on frame 11. On Shield data assumes release immediately after hit."
        },
        {
          "name": "Down B, Air (Stone, Air)",
          "section": "special",
          "startup": "29",
          "active": "29-47 (**)",
          "damage": "18.0",
          "advantage": "-17",
          "shieldLag": "11",
          "shieldStun": "16",
          "notes": "Stone armor begins on frame 19. Active frames can be longer depending on release timing. On Shield data assumes release immediately after hit."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/kirby/KirbyGrab.gif"
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
            "hitboxes/kirby/KirbyDashGrab.gif"
          ],
          "startup": "9",
          "active": "9-10",
          "total": "41",
          "endlag": "31"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/kirby/KirbyPivotGrab.gif"
          ],
          "startup": "10",
          "active": "10-11",
          "total": "36",
          "endlag": "25"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/kirby/KirbyPummel.gif"
          ],
          "startup": "1",
          "total": "15",
          "damage": "1.0",
          "notes": "Total frames includes 10 frames of hitlag"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/kirby/KirbyFThrow.gif"
          ],
          "startup": "45",
          "total": "58",
          "damage": "2.0/5.0"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/kirby/KirbyBThrow.gif"
          ],
          "startup": "41",
          "total": "49",
          "damage": "8.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/kirby/KirbyUThrow.gif"
          ],
          "startup": "58",
          "total": "86",
          "damage": "10.0",
          "notes": "Startup and total frames assume level ground. Endlag is always 30 after landing. Deals 7.0 damage and knockback to anyone near Kirby on frames 45-53."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/kirby/KirbyDThrow.gif"
          ],
          "startup": "9",
          "total": "87",
          "damage": "1.0/2.0",
          "notes": "Throw releases on 58. Active: 9-10/13-14/17-18/21-22/25-26/29-30/33-34/37-38/41-42/56-57."
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
          "total": "82",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "91",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "102",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "134",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "141",
          "landingLag": "11-19",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/kirby/kirbyGetupAttackU.gif",
            "hitboxes/kirby/kirbyGetupAttackD.gif",
            "hitboxes/kirby/kirbyTripAttack.gif",
            "hitboxes/kirby/kirbyLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/kirby",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
