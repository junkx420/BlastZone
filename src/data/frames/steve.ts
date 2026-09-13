// Erzeugt von scripts/build-frame-data.mjs – nicht von Hand bearbeiten.
import type { FighterFrames } from '../frame-types';

export const FRAMES: FighterFrames = {
  "slug": "steve",
  "sets": [
    {
      "moves": [
        {
          "name": "Jab / Forward Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/steve/SteveJabFTiltWoodStoneIronDiamond.gif",
            "hitboxes/steve/SteveJabFTiltGold.gif",
            "hitboxes/steve/SteveJabFTiltPunch.gif"
          ],
          "startup": "4 (Gold: 3)",
          "active": "4—6 (Gold: 3—5)",
          "total": "16 (Gold: 14)",
          "endlag": "10",
          "damage": "2.7 / 3.4 / 3.7 / 4.0 / 4.5 (Gold: 3.4)",
          "advantage": "-10 / (Gold: -9)",
          "shieldLag": "5/5/5/5/6 (5)",
          "shieldStun": "2/2/2/2/2 (2)",
          "hitboxes": "Fist/wood/stone/iron/diamond (Gold)",
          "notes": "Steve can walk, jump, and double jump during this move."
        },
        {
          "name": "Up Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/steve/SteveUTiltWoodStoneIronDiamond.gif",
            "hitboxes/steve/SteveUTiltGold.gif",
            "hitboxes/steve/SteveUTiltPunch.gif"
          ],
          "startup": "6 (Gold: 4)",
          "active": "6—9 (Gold: 4—7)",
          "total": "16 (Gold: 12)",
          "endlag": "7",
          "damage": "(W/S/I/D/P/G) : 6.5%/7.15%/7.8%/8.775%/5.2%/6.5%",
          "advantage": "Punch -4 | Wood -3 | Stone -3 |Iron -2 | Gold -1 | Diamond -1",
          "shieldLag": "6/6/7/7/7 (6)",
          "shieldStun": "6/7/7/8/9 (7)",
          "hitboxes": "Fist/wood/stone/iron/diamond (Gold)",
          "notes": "Steve can walk, jump, and double jump during this move (but it is NOT the same as Up Air)."
        },
        {
          "name": "Down Tilt",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/steve/SteveDTilt.gif",
            "hitboxes/steve/SteveDTiltGravity.gif"
          ],
          "startup": "12...",
          "active": "12—35(Rehit: 6)/36—39",
          "total": "52",
          "endlag": "13",
          "damage": "0.8 / 6.4",
          "advantage": "+5",
          "shieldLag": "4/6",
          "shieldStun": "2/3",
          "hitboxes": "multi/final",
          "notes": "Flame has a general rehit rate of 6 frames. Flame is affected by Gravity and is absorbable and reflectable."
        },
        {
          "name": "Dash Attack",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/steve/SteveDashAttackWoodStoneIronDiamond.gif",
            "hitboxes/steve/SteveDashAttackGold.gif",
            "hitboxes/steve/SteveDashAttackPunch.gif"
          ],
          "startup": "8 (Gold: 8)",
          "active": "8—10/11—13",
          "total": "31 (Gold: 28)",
          "endlag": "18",
          "damage": "(W/S/I/D/P/G) (Early|Late) : 10.4%|8.4%/11.44%|9.24%/12.48%|10.08%/14.04%|11.34%/8.32%|6.72%/10.4%|8.4%",
          "advantage": "Punch -15 | Wood -13 | Stone -12 | Iron -12 | Gold -10 | Diamond -10",
          "shieldLag": "7/8/9/9/10 (8)",
          "shieldStun": "8/10/11/11/13 (10)",
          "hitboxes": "Early/Late"
        },
        {
          "name": "Forward Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/steve/SteveFSmashWoodStoneIronDiamond.gif",
            "hitboxes/steve/SteveFSmashGold.gif",
            "hitboxes/steve/SteveFSmashPunch.gif"
          ],
          "startup": "13 (Gold: 10)",
          "active": "13—15",
          "total": "43 (Gold: 35)",
          "endlag": "28",
          "damage": "(W/S/I/D/P/G) : 15.0%/16.5%/18.0%/20.25%/12.0%/15.0%",
          "advantage": "Punch -22 | Wood -20 | Stone -19 | Iron -18 | Gold -15 | Diamond -17",
          "shieldLag": "10/10/11/12/13 (10)",
          "shieldStun": "8/10/11/12/13 (10)",
          "hitboxes": "Fist/wood/stone/iron/diamond (Gold)",
          "notes": "Charge hold on frame 5"
        },
        {
          "name": "Up Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/steve/SteveUSmash.gif"
          ],
          "startup": "8...",
          "active": "8—9/8—48/49—50",
          "total": "76",
          "endlag": "26",
          "damage": "1.0%/0.4%/14.0% PICKAXE SOURSPOT (W/S/I/D/G) : 7.4%/8.14%/8.88%/9.99%/7.4%",
          "advantage": "-11",
          "shieldLag": "4/4/10",
          "shieldStun": "2/2/10",
          "hitboxes": "Launcher/Magma Block/Final",
          "notes": "The final hit has a pickaxe sourspot. The sourspot isn't present if Steve has no pickaxe. The move doesn't use durability despite using a pickaxe."
        },
        {
          "name": "Down Smash",
          "section": "ground",
          "hitboxImages": [
            "hitboxes/steve/SteveDSmash.gif",
            "hitboxes/steve/SteveDSmashGravity.gif"
          ],
          "startup": "8...",
          "active": "8—11(Rehit: 2)/12—17 // 26—29(Rehit:2)/30—35",
          "total": "51",
          "endlag": "16",
          "damage": "0.6% (Loop)/14.0%",
          "advantage": "-34/-16",
          "shieldLag": "*/10",
          "shieldStun": "*/10",
          "hitboxes": "front multi/front final/back multi/back final",
          "notes": "Lava is affected by gravity but not much because it has few active frames. Absorbable and reflectable."
        },
        {
          "name": "Neutral Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/steve/SteveNAirWoodStoneIronDiamond.gif",
            "hitboxes/steve/SteveNAirGold.gif",
            "hitboxes/steve/SteveNAirPunch.gif"
          ],
          "startup": "4 (Gold: 3)",
          "active": "4—6 (Gold: 3—5)",
          "total": "17 (Gold: 15)",
          "endlag": "11",
          "damage": "2.7 / 3.4 / 3.7 / 4.0 / 4.5 (Gold: 3.4)",
          "advantage": "-10 (Gold: -9)",
          "hitboxes": "Fist/wood/stone/iron/diamond (Gold)",
          "notes": "Steve can walk, jump, and double jump during this move. Identical to Jab. No autocancel window."
        },
        {
          "name": "Forward Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/steve/SteveFAirPickaxeWoodStoneIronDiamond.gif",
            "hitboxes/steve/SteveFAirPickaxeGold.gif",
            "hitboxes/steve/SteveFAirPunch.gif"
          ],
          "startup": "8",
          "active": "8—9/10—12 (Punch) // 8/9/10—12 (All Pickaxes)",
          "total": "31/28",
          "landingLag": "12",
          "damage": "(W/S/I/D/P/G) (Early|Late) : 10.5%|12.0%/11.55%|13.2%/12.6%|14.4%/14.175%|16.2%/8.4%|9.6%/10.5%|12.0%",
          "advantage": "Punch -8/-8 | Wood -8/-7 | Stone -7/-7 | Iron -7/-7 | Gold -8/-7 | Diamond -7/-6",
          "shieldLag": "Punch 10/11 | Wood 11/12 | Stone 12/13 | Iron 13/14 | Gold 11/12 | Diamond 14/15",
          "shieldStun": "Punch 4/4 | Wood 5/5 | Stone 5/5 | Iron 5/5 | Gold 4/5 | Diamond 5/6",
          "hitboxes": "Early/Late",
          "notes": "Frame 8 is a weak hit, frame 9 is a weak spike, frames 10-11 are a stronger spike. Autocancels on frame 1-2 and 20 onward (Gold autocancels 1-4 and 19 onward)."
        },
        {
          "name": "Sword Forward Air (Short Hop Macro FAir)",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/steve/SteveFAirSwordWoodStoneIronDiamond.gif",
            "hitboxes/steve/SteveFAirSwordGold.gif",
            "hitboxes/steve/SteveFAirSwordPunch.gif"
          ],
          "startup": "4 (Gold: 3)",
          "active": "4—6 (Gold: 3—5)",
          "total": "16 (Gold: 14)",
          "endlag": "10",
          "landingLag": "-- (can only be done rising)",
          "damage": "2.7 / 3.4 / 3.7 / 4.0 / 4.5 (Gold: 3.4)",
          "advantage": "-- (can only be done rising)",
          "shieldLag": "5/5/5/5/6",
          "shieldStun": "2/2/2/2/2",
          "hitboxes": "Fist/wood/stone/iron/diamond (Gold)",
          "notes": "Only occurs out of a short hop macro. Shares frame data with jab but uses a sword instead of a pickaxe. No autocancel window."
        },
        {
          "name": "Back Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/steve/SteveBAirPickaxeWoodStoneIronDiamond.gif",
            "hitboxes/steve/SteveBAirPickaxeGold.gif",
            "hitboxes/steve/SteveBAirPunch.gif"
          ],
          "startup": "12",
          "active": "12—13/14—16",
          "total": "47/41",
          "endlag": "31",
          "landingLag": "12",
          "damage": "(W/S/I/D/P/G) (Early|Late) : 11.5%|13.0%/12.65%|14.3%/13.8%|15.6%/15.525%|17.55%/9.2%|10.4%/11.5%|13.0%",
          "advantage": "Punch -8/-8 | Wood -7/-7 | Stone -7/-7 | Iron -7/-6 | Gold -7/-7 | Diamond -6/-6",
          "shieldLag": "Punch 11/11 | Wood 12/13 | Stone 13/14 | Iron 14/15 | Gold 12/13 | Diamond 15/16",
          "shieldStun": "Punch 4/4 | Wood 5/5 | Stone 5/5 | Iron 5/6 | Gold 5/5 | Diamond 6/6",
          "hitboxes": "Early/Late",
          "notes": "Late hit is stronger. Autocancels on frame 1-4 and 22 onward (Gold autocancels 1-4 and 21 onward)."
        },
        {
          "name": "Sword Back Air (Short Hop Macro BAir)",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/steve/SteveBAirSwordWoodStoneIronDiamond.gif",
            "hitboxes/steve/SteveBAirSwordGold.gif",
            "hitboxes/steve/SteveBAirSwordPunch.gif"
          ],
          "startup": "4 (Gold: 3)",
          "active": "4—6 (Gold: 3—5)",
          "total": "16 (Gold: 14)",
          "endlag": "10",
          "landingLag": "-- (can only be done rising)",
          "damage": "2.7 / 3.4 / 3.7 / 4.0 / 4.5 (Gold: 3.4)",
          "advantage": "-- (can only be done rising)",
          "shieldLag": "5/5/5/5/6",
          "shieldStun": "2/2/2/2/2",
          "hitboxes": "Fist/wood/stone/iron/diamond (Gold)",
          "notes": "Only occurs out of a short hop macro. Shares frame data with jab but uses a sword instead of a pickaxe. No autocancel window."
        },
        {
          "name": "Up Air",
          "section": "aerial",
          "hitboxImages": [
            "hitboxes/steve/SteveUAirWoodStoneIronDiamond.gif",
            "hitboxes/steve/SteveUAirGold.gif",
            "hitboxes/steve/SteveUAirPunch.gif"
          ],
          "startup": "4 (Gold: 4)",
          "active": "4—8",
          "total": "13 (Gold: 11)",
          "endlag": "5",
          "landingLag": "10",
          "damage": "(W/S/I/D/P/G) : 6.5%/7.15%/7.8%/8.775%/5.2%/6.5%",
          "advantage": "Punch -4 | Wood -3 | Stone -3 | Iron -2 | Gold -1 | Diamond -1",
          "shieldLag": "6/6/7/7/7 (6)",
          "shieldStun": "6/7/7/8/9 (7)",
          "hitboxes": "Fist/wood/stone/iron/diamond (Gold)",
          "notes": "Gold is same startup but fewer total frames. Up Air is much faster overall than Up Tilt. This character is weird and makes no sense. Autocancels on frame 1 and 14 onward (Gold autocancels on frame 1 and 12 onward)."
        },
        {
          "name": "Down Air",
          "section": "aerial",
          "startup": "20",
          "total": "59",
          "landingLag": "18",
          "damage": "18.0/10.0",
          "advantage": "-14",
          "hitboxes": "Normal/Projectile",
          "notes": "Frame 25 is the earliest you can jump off (plus a 3 frame jumpsquat). If Steve lacks the materials, he has a 19 frame failure animation instead. Landing hit on frame 1 (whether or not Steve is still standing on it). Landing lag and advantage assumes Steve still is standing on it."
        },
        {
          "name": "Summon Crafting Table",
          "section": "special",
          "total": "7",
          "notes": "Steve can use Crafting Table during shield and this ignores shield drop. Crafting Table's 7 frame startup is all that occurs, so he can effectively have a 7 frame shield drop by doing Crafting Table out of shield."
        },
        {
          "name": "Neutral B (Mine)",
          "section": "special",
          "total": "45 (Diamond: 56)",
          "notes": "Durability of tools: 28(wood)/34(stone)/38(iron)/28(gold)/38(diamond). For a list of durability loss, check Meshima's Tweet . For even more information, check @robthemechon / @Chesometer's tweet for a full overview of mining! . It takes 56 frames to craft diamond, 45 for anything else."
        },
        {
          "name": "Place Block",
          "section": "special",
          "startup": "4",
          "total": "15",
          "notes": "Block Durability Dirt Block, on stage: 400 frames Block, on stage, standing on: 70 frames Block, off stage: 120 frames Block, off stage, standing on: 35 frames Wood Block, on stage: 600 frames Block, on stage, standing on: 95 frames Block, off stage: 190 frames Block, off stage, standing on: 40 frames Stone Block, on stage: 800 frames Block, on stage, standing on: 120 frames Block, off stage: 240 frames Block, off stage, standing on: 50 frames Iron Block, on stage: 1000 frames Block, on stage, standing on: 145 frames Block, off stage: 275 frames Block, off stage, standing on: 55 frames Thanks to A_Vocaloid_Nerd for this Block Durability Info ."
        },
        {
          "name": "Side B (Minecart)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/steve/SteveMinecartFree.gif"
          ],
          "startup": "18",
          "active": "18—...",
          "notes": "If Steve lacks the materials, he has a 15 frame failure animation instead. Damage depends on current speed. If traveling too slow, there's no hitbox. For Bailout, the jumping out animation is 5 frames before Steve can act. On frame 6 is when the cart can grab opponents. Armor notes: the minecart has 8.4HP and Steve himself has 60 knockback armor. The part of the armor that's hitpoint based can't drop to 0 during the first 17 frames."
        },
        {
          "name": "Up B (Elytra)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/steve/SteveElytra.gif"
          ],
          "startup": "28 (Ground) / 23 (Air)",
          "active": "28—37/38—44 (Ground) // 23—32/33—39 (Air)"
        },
        {
          "name": "Down B (TNT)",
          "section": "special",
          "hitboxImages": [
            "hitboxes/steve/SteveTNTPressurePlate.gif",
            "hitboxes/steve/SteveTNT.gif"
          ],
          "damage": "28.0/14.0"
        },
        {
          "name": "Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/steve/SteveGrab.gif"
          ],
          "startup": "13",
          "active": "13—27",
          "total": "56",
          "endlag": "29"
        },
        {
          "name": "Dash Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/steve/SteveDashGrab.gif"
          ],
          "startup": "16",
          "active": "16—30",
          "total": "62",
          "endlag": "32"
        },
        {
          "name": "Pivot Grab",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/steve/StevePivotGrab.gif"
          ],
          "startup": "17",
          "active": "17—31",
          "total": "59",
          "endlag": "28"
        },
        {
          "name": "Pummel",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/steve/StevePummel.gif"
          ],
          "startup": "1",
          "total": "20",
          "damage": "1.5",
          "notes": "Total frames includes 14 frames of hitlag."
        },
        {
          "name": "Forward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/steve/SteveFThrow.gif"
          ],
          "startup": "13(14)",
          "total": "49",
          "damage": "3.0/6.0",
          "notes": "Throw hitbox on 13-14. Throws on 14."
        },
        {
          "name": "Backward Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/steve/SteveBThrow.gif"
          ],
          "startup": "24",
          "total": "34",
          "damage": "10.0"
        },
        {
          "name": "Up Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/steve/SteveUThrow.gif"
          ],
          "startup": "18(19)",
          "total": "47",
          "damage": "3.0/8.0",
          "notes": "Throw hitbox on 18-19. Throws on 19."
        },
        {
          "name": "Down Throw",
          "section": "throw",
          "hitboxImages": [
            "hitboxes/steve/SteveDThrowAnvil.gif",
            "hitboxes/steve/SteveDThrow.gif"
          ],
          "startup": "15(20)",
          "total": "29",
          "damage": "7.0/8.0 (anvil) // (8.0 no anvil)",
          "notes": "Anvil active 15—22 but throws on frame 20. Without iron, the data is identical except for anvil's absense."
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
          "total": "54",
          "notes": "Intangible on frame 3-30"
        },
        {
          "name": "Air Dodge, Down",
          "section": "dodge",
          "total": "75",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Down",
          "section": "dodge",
          "total": "82",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Left/Right",
          "section": "dodge",
          "total": "92",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Diagonally Up",
          "section": "dodge",
          "total": "108",
          "notes": "Intangible on frame 3-21"
        },
        {
          "name": "Air Dodge, Up",
          "section": "dodge",
          "total": "121",
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
            "ledgehangs/SteveLedgeHang.gif",
            "ledgerolls/Steve.gif"
          ]
        },
        {
          "name": "Getup Attacks",
          "section": "misc",
          "hitboxImages": [
            "hitboxes/steve/steveGetupAttackU.gif",
            "hitboxes/steve/steveGetupAttackD.gif",
            "hitboxes/steve/steveTripAttack.gif",
            "hitboxes/steve/steveLedgeAttack.gif"
          ]
        }
      ]
    }
  ],
  "source": {
    "url": "https://ultimateframedata.com/steve",
    "fetched": "2026-09-13"
  }
};

export default FRAMES;
