/**
 * Guide-Videos pro Fighter.
 *
 * Regeln wie bei den Combo-Quellen: Jede `id` stammt aus einem echten Suchtreffer,
 * nichts wird geraten – eine erfundene ID ergibt einen toten Player oder, schlimmer,
 * ein fremdes Video. `creator` und `title` stehen so da, wie der Treffer sie nennt,
 * damit sich jeder Eintrag nachprüfen lässt.
 *
 * Eingebettet wird erst beim Klick (siehe components/videoEmbed.ts): Die Seite lädt
 * dadurch weiterhin ohne einen einzigen Request an Dritte.
 */

export interface FighterVideo {
  /** YouTube-Video-ID, elf Zeichen. */
  id: string;
  title: string;
  /**
   * Nur gesetzt, wenn der Treffer den Kanal tatsächlich benennt – entweder im Titel
   * oder in der Trefferbeschreibung. Mehrere gute Guides laufen unter Reihentiteln
   * wie „How To Play X In Smash Ultimate", ohne dass die Suche den Kanal nennt;
   * dort bleibt das Feld leer, statt eine Zuschreibung zu erfinden.
   */
  creator?: string;
}

export const VIDEOS: Record<string, FighterVideo> = {
  kazuya: { id: 'UMSXxFZNps0', title: 'How to Play Kazuya in Smash Ultimate (LIKE RIDDLES!)', creator: 'Riddles' },
  steve: { id: 'fKQ0sjvDQN0', title: 'Steve’s Beginner Guide', creator: 'ESAM' },
  sonic: { id: 'xrrfB-Sh9Y8', title: 'Smash Ultimate: Art of Sonic', creator: 'Izaw' },
  corrin: { id: 'M172F_U6DQk', title: 'Smash Ultimate: Art of Corrin', creator: 'Izaw' },
  sephiroth: { id: 'dndykqb1xVA', title: 'Smash Ultimate: How to Sephiroth', creator: 'Izaw' },
  byleth: { id: 'x36t8ddVixI', title: 'Smash Ultimate: How to Byleth', creator: 'Izaw' },
  'mr-game-and-watch': { id: 'KKdpNmT4v40', title: 'Smash Ultimate: Art of Mr. Game & Watch', creator: 'Izaw' },
  peach: { id: 'oUrertW84UI', title: 'How to Play PEACH in Smash Ultimate: The Basics!', creator: 'Beefy Smash Doods' },
  // Daisy spielt sich identisch zu Peach – dasselbe Video, wie schon bei den Combo-Routen über echoGuide.
  daisy: { id: 'oUrertW84UI', title: 'How to Play PEACH in Smash Ultimate: The Basics!', creator: 'Beefy Smash Doods' },
  snake: { id: 'MOSi3kG6H60', title: 'Smash Ultimate: Art of Snake', creator: 'Izaw' },
  bowser: { id: 'J7whNfvG5QE', title: 'Smash Ultimate: Art of Bowser', creator: 'Izaw' },
  kirby: { id: 'ZLNX2uLYX7M', title: 'Smash Ultimate: Art of Kirby', creator: 'Izaw' },
  incineroar: { id: '8msImwrdEnU', title: 'Smash Ultimate: Art of Incineroar', creator: 'Izaw' },
  'pyra-mythra': { id: 'z-USn9YQg7E', title: 'Smash Ultimate: How to Pyra & Mythra', creator: 'Izaw' },
  // Izaw behandelt nur Ivysaur – für den Trainer der beste verfügbare Treffer, aber eben nur ein Drittel.
  'pokemon-trainer': { id: 'ohYVPYbXP2E', title: 'Smash Ultimate: Art of Ivysaur', creator: 'Izaw' },
  mario: { id: 'vKBM9B8CEBw', title: 'Smash Ultimate: Art of Mario', creator: 'Izaw' },
  rob: { id: 'vPn1AcdmCJg', title: 'Smash Ultimate: Art of R.O.B.', creator: 'Izaw' },
  roy: { id: 'FPYpz1haD44', title: 'Smash Ultimate: Art of Roy', creator: 'Izaw' },
  ike: { id: 'c_p-aiD1gTw', title: 'Smash Ultimate: Art of Ike', creator: 'Izaw' },
  hero: { id: 'eL0knWidMgs', title: 'Smash Ultimate: Art of Hero', creator: 'Izaw' },
  wolf: { id: 'Km7MSZU4gTg', title: 'Smash Ultimate: Art of Wolf', creator: 'Izaw' },
  fox: { id: 'xVbrtGvncd8', title: 'Smash Ultimate: Art of Fox', creator: 'Izaw' },
  falco: { id: 'YsLJssA01b4', title: 'Smash Ultimate: Art of Falco', creator: 'Izaw' },
  cloud: { id: 'dc3w_8r0seI', title: 'Smash Ultimate: Art of Cloud', creator: 'Izaw' },
  link: { id: 'VlKkv5HSYVA', title: 'Smash Ultimate: Art of Link', creator: 'Izaw' },
  'young-link': { id: 'WSep92_Z4CU', title: 'Smash Ultimate: Art of Young Link', creator: 'Izaw' },
  zelda: { id: 'Ilb1Q_Cso8E', title: 'Smash Ultimate: Art of Zelda', creator: 'Izaw' },
  inkling: { id: 'rZjPU3FtRQU', title: 'Smash Ultimate: Art of Inkling', creator: 'Izaw' },
  pikachu: { id: '8TEYez3_OFk', title: 'Smash Ultimate: Art of Pikachu', creator: 'Izaw' },
  palutena: { id: '6w7N3Pn8wNU', title: 'Smash Ultimate: Art of Palutena', creator: 'Izaw' },
  'donkey-kong': { id: 'Rl2UEKlIQ2k', title: 'Smash Ultimate: Art of Donkey Kong', creator: 'Izaw' },
  'captain-falcon': { id: 'xzE8m7gAs7E', title: 'Smash Ultimate: Art of Falcon', creator: 'Izaw' },
  joker: { id: 'OcaLqUH3Nq4', title: 'Smash Ultimate: How to Joker', creator: 'Izaw' },
  greninja: { id: '_9LR4LzdAgE', title: 'Smash Ultimate: Art of Greninja', creator: 'Izaw' },
  'mega-man': { id: 'KHEm8OgGqX0', title: 'Smash Ultimate: Art of Mega Man', creator: 'Izaw' },
  samus: { id: 'nW9AedeMeFw', title: 'Smash Ultimate: Art of Samus', creator: 'Izaw' },
  'zero-suit-samus': { id: 'xs9dqqKJXio', title: 'Smash Ultimate: Art of Zero Suit Samus', creator: 'Izaw' },
  yoshi: { id: 'zbel6sAHzDM', title: 'Smash Ultimate: Art of Yoshi', creator: 'Izaw' },
  luigi: { id: 'E7e7fYu2pdM', title: 'Smash Ultimate: Art of Luigi', creator: 'Izaw' },
  ganondorf: { id: '6VslXPCG0gs', title: 'Fatality’s Ultimate Ganondorf Guide', creator: 'Fatality' },
  'min-min': { id: 'IxeattPscpI', title: 'Smash Ultimate: How to Min Min', creator: 'Izaw' },
  'banjo-and-kazooie': { id: 'CKQqsXOkAgU', title: 'Smash Ultimate: How to Banjo & Kazooie', creator: 'Izaw' },
  terry: { id: 'px5dugK9Kc8', title: 'Smash Ultimate: How to Terry', creator: 'Izaw' },
  'duck-hunt': { id: 'yv2IqXu8fdI', title: 'Smash Ultimate: Art of Duck Hunt', creator: 'Izaw' },
  'meta-knight': { id: '81H83GAmi70', title: 'Smash Ultimate: Art of Meta Knight', creator: 'Izaw' },
  'ice-climbers': { id: 'Y2uVdqAVoUQ', title: 'Smash Ultimate: Ice Climbers – How to Desync #1', creator: 'Izaw' },
  pichu: { id: 'Q_r9_FveHzU', title: 'Void’s Guide to Play Pichu in Smash Bros Ultimate', creator: 'Void' },

  // Ab hier ohne Creator: echte, passende Guides, deren Kanal die Suche nicht benennt.
  shulk: { id: 'hLPTy_tasVg', title: 'How To Play Shulk In Smash Ultimate' },
  ridley: { id: 'rwQHGyZMXwY', title: 'How To Play Ridley In Smash Ultimate' },
  mewtwo: { id: '3NATzGs1jxw', title: 'How To Play Mewtwo In Smash Ultimate' },
  bayonetta: { id: 'G6mImBgLhg0', title: 'How To Play Bayonetta In Smash Ultimate' },
  'king-k-rool': { id: 'MSXG2QfCBqM', title: 'How To Play King K. Rool In Smash Ultimate' },
  wario: { id: 'gEWCZ0biCkY', title: 'How To Play Wario – Smash Ultimate Beginner Guide' },
  ness: { id: '0ZfO83n4IVo', title: 'How To Play Ness In Smash Ultimate' },
  lucas: { id: 'VH9I996e8A4', title: 'How To Play Lucas In Smash Ultimate' },
  sheik: { id: 't9UmdEia_uw', title: 'Ultimate Sheik Guide: Neutral, Combos, Kill Confirms and More' },
  'piranha-plant': { id: 'vZn8vAy0wMI', title: 'How To Play Piranha Plant In Smash Ultimate' },
  isabelle: { id: 'StFqikxVFZo', title: 'How To Play Isabelle In Smash Ultimate' },
  rosalina: { id: 'Hd-W9O_bbks', title: '[Smash Ultimate] Rosalina and Luma Guide (Teil 1/3)' },
  'wii-fit-trainer': { id: '8JtNQ0grUhY', title: 'How To Wii Fit Trainer: Smash Ultimate Character Breakdown' },
  villager: { id: 'ytRWrxzJEns', title: 'Ultimate Villager Guide (No-BS Villager Guide)' },
  robin: { id: 'A36gItW5gLA', title: 'Getting Started with Robin in Super Smash Bros Ultimate (101 Guide)' },
  'pac-man': { id: 'TKdqJoaIBBM', title: 'How To Play Pac-Man In Smash Ultimate' },
  'toon-link': { id: 'POt8ciSaWgA', title: 'Smash Ultimate: Toon Link Competitive Tutorial' },
  olimar: { id: 'X8yT-yz3EuY', title: 'No-BS Olimar / Alph Guide' },
  lucario: { id: 'cas6oUdSe0g', title: 'How to play Lucario in Smash Ultimate (Basic & Advanced Guide)' },
  'dr-mario': { id: 'RWXGW1j-ucs', title: 'Dr. Mario Combos & Neutral Guide: Super Smash Bros. Ultimate' },
  'bowser-jr': { id: 'KBb56hp3Rd4', title: 'Bowser Jr. Super Smash Bros Ultimate Guide' },
  'king-dedede': { id: 'uz-xXmOQoTk', title: 'How To Play King Dedede In Smash Ultimate' },
  jigglypuff: { id: 'N-MwsmEjVuw', title: 'Jigglypuff Smash Ultimate Advanced Guide' },
  sora: { id: 'nqNF0YUD2wE', title: 'Smash Bros Ultimate: Sora Combo Guide (How to Play Sora)' },
  'mii-brawler': { id: 'DXUnfL77wng', title: 'Smash Ultimate: Art of Mii Brawler', creator: 'Izaw' },
  'mii-swordfighter': { id: 'WWqKhHk-byc', title: 'The Definitive Mii Swordfighter Guide – Smash Ultimate' },
  'mii-gunner': { id: '3Om_7_g28BU', title: 'Smash Ultimate Mii Gunner Guide – 2025 Meta' },
  ryu: { id: 'TWGP4Rz5huY', title: 'Smash Ultimate Ryu Guide: Hadoken/Shaku Pressure' },
  ken: { id: 'NT4_UKOYsjU', title: 'Smash Ultimate: Ken Beginner’s Guide (Specials/Inputs/Combos)' },
  chrom: { id: 'syAGbtMzKmU', title: 'Chrom Guide: Tips and Tricks For Playing Chrom in Smash Ultimate' },
  'little-mac': { id: '36UsOjOdR8k', title: 'How To Play Little Mac In Smash Ultimate' },
  // Ein Video für beide, wie bei Marth/Lucina und Simon/Richter.
  pit: { id: 'oENDX1kOAx4', title: 'Smash Ultimate: How to Play Pit and Dark Pit' },
  'dark-pit': { id: 'oENDX1kOAx4', title: 'Smash Ultimate: How to Play Pit and Dark Pit' },
  // Dark Samus spielt sich identisch zu Samus – dasselbe Video, wie Daisy bei Peach.
  'dark-samus': { id: 'nW9AedeMeFw', title: 'Smash Ultimate: Art of Samus', creator: 'Izaw' },
  // Ein Video für beide – wie bei Marth und Lucina behandelt der Guide sie gemeinsam.
  simon: { id: 'hjFp-K17ysw', title: 'How To Richter / Simon Belmont – Guide + Tutorial' },
  richter: { id: 'hjFp-K17ysw', title: 'How To Richter / Simon Belmont – Guide + Tutorial' },
  'diddy-kong': { id: '3oAbjiR-Bj0', title: 'Tweek Diddy Kong Guide', creator: 'Tweek' },
  // Ein Video für beide: Izaw behandelt Marth und Lucina gemeinsam.
  marth: { id: 'WBTHnHqh3qk', title: 'Smash Ultimate: Art of Marth & Lucina', creator: 'Izaw' },
  lucina: { id: 'WBTHnHqh3qk', title: 'Smash Ultimate: Art of Marth & Lucina', creator: 'Izaw' },
};

export const videoFor = (slug: string): FighterVideo | undefined => VIDEOS[slug];

export const VIDEO_COUNT = (): number => Object.keys(VIDEOS).length;
