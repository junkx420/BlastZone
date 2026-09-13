import type { FighterFrames } from './frame-types';

/**
 * Zugriff auf die Frame-Daten – bewusst verzögert.
 *
 * Die 86 Dateien unter `frames/` sind zusammen deutlich größer als das gesamte
 * bisherige Startbundle. Sie gehören deshalb nicht ins Startbundle, sondern
 * werden erst geladen, wenn jemand auf einer Fighter-Seite den Frame-Data-Tab
 * öffnet. `import.meta.glob` ohne `eager` macht aus jeder Datei einen eigenen
 * Chunk – geladen wird immer nur der eine Fighter, den man gerade ansieht.
 *
 * Kein handgepflegtes Verzeichnis: Eine Liste mit 86 Einträgen würde
 * auseinanderlaufen, sobald jemand eine Datei umbenennt. Der Glob findet, was da
 * ist, und `hasFrames()` sagt der UI, ob der Tab überhaupt angeboten wird.
 */
const MODULE = import.meta.glob<{ FRAMES: FighterFrames }>('./frames/*.ts');

const pfad = (slug: string): string => `./frames/${slug}.ts`;

/** Gibt es für diesen Fighter Frame-Daten? Ohne Netzwerkzugriff beantwortbar. */
export const hasFrames = (slug: string): boolean => pfad(slug) in MODULE;

/** Anzahl der vorhandenen Datensätze – für den Datencheck. */
export const FRAME_SLUGS: ReadonlySet<string> = new Set(
  Object.keys(MODULE).map((p) => p.replace('./frames/', '').replace('.ts', '')),
);

const cache = new Map<string, FighterFrames>();

/** Lädt die Frame-Daten eines Fighters. Wiederholte Aufrufe treffen den Cache. */
export async function loadFrames(slug: string): Promise<FighterFrames | undefined> {
  const vorhanden = cache.get(slug);
  if (vorhanden) return vorhanden;

  const laden = MODULE[pfad(slug)];
  if (!laden) return undefined;

  const modul = await laden();
  cache.set(slug, modul.FRAMES);
  return modul.FRAMES;
}
