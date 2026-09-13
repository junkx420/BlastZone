// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "sephiroth",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab 1",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothJab1.gif"
          ],
          "startup": "5",
          "active": "5—7",
          "total": "28",
          "endlag": "21",
          "damage": "2.5",
          "advantage": "-19 [-19]",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Transitions to jab 2 on frame 10"
        },
        {
          "name": "Jab 2",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothJab2.gif"
          ],
          "startup": "5",
          "active": "5—7",
          "total": "33",
          "endlag": "26",
          "damage": "2.0",
          "advantage": "-25 [-24]",
          "shieldLag": "6",
          "shieldStun": "3",
          "notes": "Transitions to jab 3 on frame 10"
        },
        {
          "name": "Jab 3",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothJab3.gif"
          ],
          "startup": "7",
          "active": "7—9",
          "total": "35",
          "endlag": "26",
          "damage": "4.0",
          "advantage": "-23 [-22]",
          "shieldLag": "8",
          "shieldStun": "6"
        },
        {
          "name": "Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothFTilt.gif",
            "hitboxes/sephiroth/SephirothFTiltUp.gif",
            "hitboxes/sephiroth/SephirothFTiltDown.gif"
          ],
          "startup": "14",
          "active": "14—16",
          "total": "37",
          "endlag": "21",
          "damage": "7.5/12.0/9.0",
          "advantage": "-15/-11/-14 [-13/-8/-12]",
          "shieldLag": "7/10/7",
          "shieldStun": "8/11/9",
          "hitboxes": "close/middle/tip"
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothUTilt.gif"
          ],
          "startup": "10/13",
          "active": "10/13-15(16-25)",
          "total": "37",
          "endlag": "12",
          "damage": "1.0 (Hit 1)/(11.0/12.5/14.0 (Hit 2, Clean))/(7.0/8.5/10.0 (Hit 2, late))",
          "advantage": "-32/-21/-19/-18 [-31/-18/-16/-14]",
          "shieldLag": "4/8 / 10/15",
          "shieldStun": "2/10 / 12/13",
          "hitboxes": "launcher/close/middle/tip",
          "notes": "Arm and upper body intangible on frame 13-15"
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothDTilt.gif"
          ],
          "startup": "9",
          "active": "9—15(16—22)",
          "total": "42",
          "endlag": "20",
          "damage": "8.0/6.0",
          "advantage": "-25",
          "shieldLag": "7/6",
          "shieldStun": "8/6",
          "hitboxes": "early/late"
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothDashAttack.gif"
          ],
          "startup": "14",
          "active": "14—15(16—19)",
          "total": "46",
          "endlag": "27",
          "damage": "13.0/7.0",
          "advantage": "-20(-22) [-16(-19)]",
          "shieldLag": "11",
          "shieldStun": "12"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothFSmash.gif",
            "hitboxes/sephiroth/SephirothFSmashWinged.gif"
          ],
          "startup": "24",
          "active": "24—25",
          "total": "67",
          "endlag": "42",
          "damage": "13.5/20.0./15.0",
          "advantage": "-33/-29/-32 [-31/-26/-30]",
          "shieldLag": "9/15/10",
          "shieldStun": "9/13/10",
          "hitboxes": "close/middle/tip",
          "notes": "Charge hold on frame 8. Armor with Wing on 10—23."
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothUSmash.gif",
            "hitboxes/sephiroth/SephirothUSmashWinged.gif"
          ],
          "startup": "23",
          "active": "23/24-[26]-28",
          "total": "63",
          "endlag": "35",
          "damage": "(15.5/10.5/11.5 Early Hit)/(17.0/13.0/12.0 Clean Hit)",
          "advantage": "(-29/-31 front)/(-23/-25/-24 back) [(-26/-29/-30)/(-21/-23/-25)]",
          "shieldLag": "8/14/9 / 9/14/9",
          "shieldStun": "8/10/8 / 8/11/9",
          "hitboxes": "early close/middle/far / late close/middle/far",
          "notes": "Charge hold on frame 12. Armor with wing on 14—22. Active frames note: Frame in brackets is a coverage hitbox that is active on that frame during the clean hit's active frames."
        },
        {
          "name": "Down Smash (if hitting the ground)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothDSmash.gif",
            "hitboxes/sephiroth/SephirothDSmashWinged.gif"
          ],
          "startup": "21",
          "active": "21—23",
          "total": "53",
          "endlag": "30",
          "damage": "16.5/13.5/10.5/11.5/13.0",
          "advantage": "-20/-22 [-17/-20]",
          "shieldLag": "8/13",
          "shieldStun": "8/11",
          "hitboxes": "Close/Far",
          "notes": "Charge hold on frame 8. Armour with Wing on 10—20."
        },
        {
          "name": "Down Smash (does not hit the ground)",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothDSmashAir.gif",
            "hitboxes/sephiroth/SephirothDSmashAirWinged.gif"
          ],
          "startup": "21",
          "active": "21—22",
          "total": "53",
          "endlag": "31",
          "damage": "10.5/11.5/13.0",
          "advantage": "-24 [-22]",
          "shieldLag": "8/13",
          "shieldStun": "8/11",
          "hitboxes": "Close/Far",
          "notes": "Charge hold on frame 8. Armour with Wing on 10—20."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothNAir.gif"
          ],
          "startup": "9",
          "active": "9—10",
          "total": "33",
          "endlag": "23",
          "landingLag": "9",
          "damage": "8.5",
          "advantage": "-5 [-4]",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Autocancels on frame 1 and 30 onward."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothFAir.gif"
          ],
          "startup": "13",
          "active": "13—14(15—18)",
          "total": "41",
          "endlag": "23",
          "landingLag": "14",
          "damage": "(8.0/10.0/11.0 Clean hit)/(5.5/7.0/8.0 Late hit)",
          "advantage": "-10 [-9]",
          "shieldLag": "7/8/10 / 6/7/7",
          "shieldStun": "4/4/4 / 3/3/4",
          "hitboxes": "early close/middle/far / late close/middle/far",
          "notes": "Autocancels on frame 1-2 and 39 onward."
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothBAir.gif"
          ],
          "startup": "15",
          "active": "15—16",
          "total": "46",
          "endlag": "30",
          "landingLag": "16",
          "damage": "9.5/14.5/11.5",
          "advantage": "-11 [-10]",
          "shieldLag": "8/12/9",
          "shieldStun": "4/5/5",
          "hitboxes": "close/middle/far",
          "notes": "Autocancels on frame 1-4 and 46 onward."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothUAir.gif"
          ],
          "startup": "16",
          "active": "16—21",
          "total": "53",
          "endlag": "32",
          "landingLag": "21",
          "damage": "7.0/11.0/8.5",
          "advantage": "-17 [-17]",
          "shieldLag": "7/9/7",
          "shieldStun": "3/4/4",
          "hitboxes": "close/middle/far",
          "notes": "Autocancels on frame 1-4 and 52 onward."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothDAir.gif",
            "hitboxes/sephiroth/SephirothDAirLanding.gif"
          ],
          "startup": "19",
          "active": "19—23/24—39(1—2)",
          "total": "61",
          "endlag": "22",
          "landingLag": "26",
          "damage": "Normal: (15.0/10.0 Clean hit)/10.0 | Landing: (5.0/7.0)/5.0%",
          "advantage": "Normal: -27 [-25] | Landing: -19 [-18]",
          "shieldLag": "12/8/6",
          "shieldStun": "5/4/6",
          "hitboxes": "early/late/landing",
          "notes": "Autocancels on frame 1-4 and 55 onward. Landing hit on frame 1 of landing, but falling and landing hits cannot seem to hit the same target."
        },
        {
          "name": "Neutral B (Flare)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothFlare.gif"
          ],
          "startup": "41",
          "active": "(22—27/28—34/35—39/40—95)/98—101",
          "total": "65",
          "damage": "3.0 / 10.5",
          "advantage": "-28",
          "shieldLag": "*/8",
          "shieldStun": "*/4",
          "hitboxes": "initial/explode",
          "notes": "Explosion occurs three frames after contact. Can cancel as early as frame 20. Takes 7 frames to cancel with shield. Startup after charge release is 22."
        },
        {
          "name": "Megaflare",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothMegaflare.gif"
          ],
          "startup": "52",
          "active": "21—48/(58—60/61—66/67—68)",
          "total": "73",
          "endlag": "5",
          "damage": "3.5 / 3.7 / 9.0",
          "advantage": "-22",
          "shieldLag": "5/*/7",
          "shieldStun": "2/*/4",
          "hitboxes": "initial/multi/explode",
          "notes": "Must hold for 31 frames to reach this level of charge. Startup after charge release is 21."
        },
        {
          "name": "Gigaflare",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothGigaflare.gif"
          ],
          "startup": "130",
          "active": "130—176/(183—184/185—200/201—202)",
          "total": "181",
          "damage": "6.0 / 3.7 / 11.0",
          "advantage": "-13",
          "shieldLag": "6/*/10",
          "shieldStun": "*/*/4",
          "hitboxes": "initial/multi/explode"
        },
        {
          "name": "Side B (Shadow Flare)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothShadowFlareMin.gif",
            "hitboxes/sephiroth/SephirothShadowFlareMax.gif",
            "hitboxes/sephiroth/SephirothShadowFlareAMin.gif",
            "hitboxes/sephiroth/SephirothShadowFlareAMax.gif"
          ],
          "startup": "16—42",
          "active": "8-14",
          "total": "38—64",
          "endlag": "24",
          "damage": "1.6—4.5 / 6.5",
          "advantage": "-17 — -15",
          "shieldLag": "4—5/8",
          "shieldStun": "2—3/3",
          "hitboxes": "projectile/explode",
          "notes": "Startup and total frames vary with charge. Startup after charge release is 8—14 frames."
        },
        {
          "name": "Up B, no charge (Blade Dash)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothBladeDash.gif"
          ],
          "startup": "25",
          "active": "25—28",
          "total": "56*",
          "endlag": "28",
          "landingLag": "27",
          "damage": "7.0",
          "advantage": "-27 [-26]",
          "shieldLag": "7",
          "shieldStun": "4",
          "notes": "Total frames assumes travel along the ground."
        },
        {
          "name": "Up B, charge (Octaslash)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothOctaslash.gif"
          ],
          "startup": "36",
          "active": "36/38/40/42/44/46/48/50",
          "total": "104*",
          "endlag": "54",
          "landingLag": "56",
          "damage": "2.3 (Multihits)/(7.0/2.3 Final hit)",
          "advantage": "-63 — -61/-47 [-62 — -60/-45]",
          "shieldLag": "5/15",
          "shieldStun": "*/7",
          "hitboxes": "multi/final",
          "notes": "Total frames assumes travel along the ground."
        },
        {
          "name": "Down B (Scintilla, Miss)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothScintillaMiss.gif"
          ],
          "startup": "38",
          "active": "38—52 (Rehit: 5)/53",
          "total": "86",
          "endlag": "33",
          "damage": "1.0 / 5.0",
          "advantage": "-25 [-25]",
          "shieldLag": "4/6",
          "shieldStun": "*/3",
          "hitboxes": "multi/final",
          "notes": "Detection is 7—27. Counter only activates when something hits the wall, not Sephiroth's body."
        },
        {
          "name": "Down B (Scintilla, Success)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothScintillaHitMin.gif",
            "hitboxes/sephiroth/SephirothScintillaHitMax.gif"
          ],
          "startup": "7",
          "active": "7—21/22",
          "total": "51",
          "endlag": "29",
          "damage": "(2.0/4.0)/(6.5/18.0)",
          "notes": "Data is Upon the counter's activation. Sephiroth does not suffer hitlag. Damage listed is the Max. Intangibility on 1-11."
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothGrab.gif"
          ],
          "startup": "7",
          "active": "7—8",
          "total": "36",
          "endlag": "28"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothDashGrab.gif"
          ],
          "startup": "10",
          "active": "10—11",
          "total": "44",
          "endlag": "33"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothPivotGrab.gif"
          ],
          "startup": "11",
          "active": "11—12",
          "total": "39",
          "endlag": "27"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothPummel.gif"
          ],
          "startup": "1",
          "total": "19",
          "damage": "1.3",
          "notes": "Total frames includes 14 frames of hitlag (plus one in 1v1)"
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothFThrow.gif"
          ],
          "startup": "14",
          "total": "34",
          "damage": "3.0/3.0",
          "notes": "Hits on 14, throws on 15"
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothBThrow.gif"
          ],
          "startup": "18",
          "total": "31",
          "damage": "3.0/3.5",
          "notes": "Hits on 18, throws on 19"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothUThrow.gif"
          ],
          "startup": "13(14)",
          "total": "32",
          "damage": "4.0/3.0",
          "notes": "Hits on 13, late hit on 14. Throws on 14."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/sephiroth/SephirothDThrow.gif"
          ],
          "startup": "40 (throw only)",
          "total": "47",
          "damage": "4.0"
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
          "total": "44",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "61",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "69",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "74",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "86",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "97",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Ledge Grab",
          "section": "misc",
          "hitboxImages": [
            "ledgehangs/sephirothledgehang.gif",
            "ledgerolls/Sephiroth.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/sephiroth/sephirothGetupAttackU.gif",
            "hitboxes/sephiroth/sephirothGetupAttackD.gif",
            "hitboxes/sephiroth/sephirothTripAttack.gif",
            "hitboxes/sephiroth/sephirothLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/sephiroth",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
