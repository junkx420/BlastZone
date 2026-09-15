import type { FighterFrames, FrameMove, FrameSection } from '../data/frame-types';
import { loadFrames } from '../data/frames-index';
import { dateFormat, t } from '../i18n';
import { html, mount, qs, qsa, raw, type Markup } from '../lib/dom';

/**
 * Frame-Daten eines Fighters als Tabelle, nach Kategorie aufgeteilt.
 *
 * Zwei Dinge sind hier bewusst so gebaut:
 *
 * **Eigene Tab-Leiste, nicht die der Combo-Routen.** Die dortige Leiste schreibt
 * `?routen=` in die Adresse und startet die Combo-Wiedergabe – beides ergibt für
 * eine Frame-Tabelle keinen Sinn. Die Stile (`.tabs`, `.tab`, `.tabpanel`) teilen
 * sich beide, das Verhalten nicht.
 *
 * **Nachladen erst beim Heranscrollen.** Die 86 Datensätze sind zusammen 1,3 MB.
 * Wer eine Fighter-Seite nur wegen der Combos öffnet, soll dafür nichts laden.
 * Ein IntersectionObserver holt den Datensatz, sobald der Abschnitt in die Nähe
 * des Sichtfelds kommt – ohne dass jemand etwas anklicken muss.
 */

const LABELS: Record<FrameSection, string> = {
  ground: t('frames.ground'),
  aerial: t('frames.aerial'),
  special: t('frames.special'),
  throw: t('frames.throw'),
  dodge: t('frames.dodge'),
  misc: t('frames.misc'),
};

/** Reihenfolge der Tabs – dieselbe wie auf der Quellseite. */
const REIHENFOLGE: FrameSection[] = ['ground', 'aerial', 'special', 'throw', 'dodge', 'misc'];

/**
 * Erste Zahl aus einem UFD-Wert. „16/17—20/21" ergibt 16, „-12/-12/-13" ergibt -12.
 * Mehrfachwerte gehören zu verschiedenen Hitboxen; für die Einfärbung zählt die
 * erste, weil sie die übliche ist.
 */
const ersteZahl = (wert: string | undefined): number | undefined => {
  if (!wert) return undefined;
  const treffer = /-?\d+(?:\.\d+)?/.exec(wert);
  return treffer ? Number(treffer[0]) : undefined;
};

/**
 * Ordnet einen Wert einer Stufe der Prozent-Hitze zu – demselben Motiv, das auf
 * der ganzen Seite Schaden und Tiers einfärbt: weiß ist harmlos, rot ist
 * extrem.
 *
 * Das ist eine **Lesehilfe, keine Lehrmeinung.** Ob ein Move mit 9 Frames
 * Startup „gut" ist, hängt von Reichweite, Schaden und Charakter ab. Die
 * Einfärbung macht die Tabelle überfliegbar, sie bewertet nicht.
 */
const stufe = (zahl: number | undefined, grenzen: readonly number[]): string => {
  if (zahl === undefined) return '';
  const index = grenzen.findIndex((g) => zahl <= g);
  return ` frame--h${index === -1 ? grenzen.length : index}`;
};

/** Startup in Frames: klein ist schnell. */
const START_GRENZEN = [4, 7, 11, 17] as const;
/** Schildvorteil: 0 und besser ist sicher, stark negativ ist ein freier Punish. */
const SCHILD_GRENZEN = [-24, -14, -8, -3] as const;

interface Spalte {
  kopf: string;
  hinweis: string;
  wert(move: FrameMove): string | undefined;
  klasse?(move: FrameMove): string;
}

/**
 * Die Wertspalten. Welche davon erscheinen, entscheidet sich pro Abschnitt:
 * Landing Lag gibt es nur bei Luftangriffen, Endlag fuehrt UFD bei Specials oft
 * gar nicht. Vorher stand in diesen Spalten zeilenweise ein Platzhalter, also
 * eine komplette Spalte ohne einen einzigen Wert. Weniger Spalten heisst auch
 * weniger seitliches Scrollen auf dem Telefon.
 */
const SPALTEN: Spalte[] = [
  {
    kopf: t('frames.startup'),
    hinweis: t('frames.startupHint'),
    wert: (m) => m.startup,
    klasse: (m) => `frame__zahl${stufe(ersteZahl(m.startup), START_GRENZEN)}`,
  },
  { kopf: t('frames.active'), hinweis: t('frames.activeHint'), wert: (m) => m.active },
  { kopf: t('frames.total'), hinweis: t('frames.totalHint'), wert: (m) => m.total },
  { kopf: t('frames.endlag'), hinweis: t('frames.endlagHint'), wert: (m) => m.endlag },
  { kopf: t('frames.landing'), hinweis: t('frames.landingHint'), wert: (m) => m.landingLag },
  { kopf: t('frames.damage'), hinweis: t('frames.damageHint'), wert: (m) => m.damage },
  {
    kopf: t('frames.shield'),
    hinweis: t('frames.shieldHint'),
    wert: (m) => m.advantage,
    // Gespiegelt: Beim Schild ist der kleinste Wert der schlechteste.
    klasse: (m) => {
      const s = stufe(ersteZahl(m.advantage), SCHILD_GRENZEN);
      return `frame__zahl${s ? ` frame--h${4 - Number(s.slice(-1))}` : ''}`;
    },
  },
];

function zeile(move: FrameMove, spalten: Spalte[]): Markup {
  return html`<tr>
    <th scope="row">
      <span class="frame__name">${move.name}</span>
      ${move.hitboxes ? html`<span class="frame__spalten">${move.hitboxes}</span>` : ''}
      ${move.notes ? html`<span class="frame__notiz">${move.notes}</span>` : ''}
      ${move.hitboxImages?.length
        ? html`<button class="frame__hitbox" type="button" data-hitbox="${move.hitboxImages.join('|')}" data-hitbox-move="${move.name}">
            ${t('frames.hitbox')}
          </button>`
        : ''}
    </th>
    ${spalten.map((s) => html`<td class="${(s.klasse?.(move) ?? '').trim()}">${s.wert(move) ?? ''}</td>`)}
  </tr>`;
}

function tabelle(moves: FrameMove[], titel: string): Markup {
  const spalten = SPALTEN.filter((s) => moves.some((m) => s.wert(m) !== undefined));
  return html`<div class="frame__scroll">
    <table class="frame">
      <caption class="vh">${titel}</caption>
      <thead>
        <tr>
          <th scope="col">${t('frames.move')}</th>
          ${spalten.map((s) => html`<th scope="col" title="${s.hinweis}">${s.kopf}</th>`)}
        </tr>
      </thead>
      <tbody>
        ${moves.map((m) => zeile(m, spalten))}
      </tbody>
    </table>
  </div>`;
}

/** Baut die Tabs samt Tabellen für einen geladenen Datensatz. */
function inhalt(daten: FighterFrames): Markup {
  // Mehrere Sätze (Pokémon-Trainer, Pyra/Mythra) werden untereinander gezeigt,
  // jeder mit eigener Überschrift – Tabs über zwei Achsen wären unübersichtlich.
  return html`${daten.sets.map((satz) => {
    const vorhanden = REIHENFOLGE.filter((s) => satz.moves.some((m) => m.section === s));
    const id = satz.label ? satz.label.toLowerCase().replace(/[^a-z]/g, '') : 'alle';
    return html`<div class="fframes__satz">
      ${satz.label ? html`<h3 class="fframes__label">${satz.label}</h3>` : ''}
      <div class="tabs" role="tablist" aria-label="${t('frames.tablist')}${satz.label ? `, ${satz.label}` : ''}">
        ${vorhanden.map(
          (s, i) => html`<button class="tab" type="button" role="tab" id="ftab-${id}-${s}" aria-controls="fpanel-${id}-${s}"
            aria-selected="${String(i === 0)}" tabindex="${i === 0 ? '0' : '-1'}">
            ${LABELS[s]}<span class="tab__count">${satz.moves.filter((m) => m.section === s).length}</span>
          </button>`,
        )}
        <span class="tabs__ink" aria-hidden="true"></span>
      </div>
      ${vorhanden.map(
        (s, i) => html`<div class="tabpanel" role="tabpanel" id="fpanel-${id}-${s}" aria-labelledby="ftab-${id}-${s}" tabindex="0" ${i === 0 ? '' : raw('hidden')}>
          ${tabelle(
            satz.moves.filter((m) => m.section === s),
            `${LABELS[s]}${satz.label ? `, ${satz.label}` : ''}`,
          )}
        </div>`,
      )}
    </div>`;
  })}`;
}

/** Der Abschnitt, wie er zunächst im Markup steht – noch ohne Daten. */
export function framesSection(fighterName: string): Markup {
  return html`<section class="container fframes" id="frames" aria-labelledby="frames-title" data-frames>
    <div class="section-head">
      <h2 id="frames-title" data-reveal="wipe">Frame Data</h2>
      <p>${t('frames.intro', { fighter: fighterName })}</p>
    </div>
    <div class="fframes__body" data-frames-body>
      <p class="fframes__laden" role="status">${t('frames.loading')}</p>
    </div>
  </section>`;
}

/** Verdrahtet Nachladen und Tabs. Gibt die Aufräumfunktion zurück. */
export function wireFrames(root: HTMLElement, slug: string): () => void {
  const host = qs<HTMLElement>('[data-frames]', root);
  const body = host && qs<HTMLElement>('[data-frames-body]', host);
  if (!host || !body) return () => {};

  let abgebrochen = false;
  const aufraeumen: Array<() => void> = [];

  const tabsVerdrahten = (): void => {
    // Bewusst auf diesen Abschnitt eingeschränkt: Die Combo-Routen haben eine
    // eigene Leiste auf derselben Seite, die hier nichts zu suchen hat.
    for (const leiste of qsa<HTMLElement>('.tabs', host)) {
      const tabs = qsa<HTMLButtonElement>('[role="tab"]', leiste);
      const panels = tabs
        .map((t) => qs<HTMLElement>(`#${CSS.escape(t.getAttribute('aria-controls') ?? '')}`, host))
        .filter((p): p is HTMLElement => p !== null);
      const ink = qs<HTMLElement>('.tabs__ink', leiste);

      const waehlen = (tab: HTMLButtonElement, fokus = false): void => {
        tabs.forEach((t) => {
          const an = t === tab;
          t.setAttribute('aria-selected', String(an));
          t.tabIndex = an ? 0 : -1;
        });
        panels.forEach((p) => (p.hidden = p.id !== tab.getAttribute('aria-controls')));
        if (ink) {
          ink.style.transform = `translateX(${tab.offsetLeft}px)`;
          ink.style.width = `${tab.offsetWidth}px`;
        }
        if (fokus) tab.focus();
      };

      tabs.forEach((tab, i) => {
        const klick = (): void => waehlen(tab);
        const taste = (e: KeyboardEvent): void => {
          const ziel =
            e.key === 'ArrowRight' ? (i + 1) % tabs.length
            : e.key === 'ArrowLeft' ? (i - 1 + tabs.length) % tabs.length
            : e.key === 'Home' ? 0
            : e.key === 'End' ? tabs.length - 1
            : -1;
          const naechster = tabs[ziel];
          if (!naechster) return;
          e.preventDefault();
          waehlen(naechster, true);
        };
        tab.addEventListener('click', klick);
        tab.addEventListener('keydown', taste);
        aufraeumen.push(() => {
          tab.removeEventListener('click', klick);
          tab.removeEventListener('keydown', taste);
        });
      });

      const erster = tabs[0];
      if (erster) waehlen(erster);
    }
  };

  const laden = async (): Promise<void> => {
    const daten = await loadFrames(slug);
    if (abgebrochen) return;
    if (!daten) {
      mount(body, html`<p class="fframes__laden">${t('frames.none')}</p>`);
      return;
    }
    mount(
      body,
      html`${inhalt(daten)}
        <p class="fframes__quelle">
          ${t('frames.sourcePrefix')} <a href="${daten.source.url}" target="_blank" rel="noopener">Ultimate Frame Data</a>,
          ${t('frames.sourceSuffix', { date: dateFormat({ dateStyle: 'medium' }).format(new Date(`${daten.source.fetched}T12:00:00Z`)) })}
        </p>`,
    );
    tabsVerdrahten();
  };

  /*
   * Klick auf „Hitbox ansehen" – erst hier entsteht überhaupt eine Anfrage an
   * ultimateframedata.com. Delegiert am Abschnitt, weil die Tabellen zum
   * Zeitpunkt des Verdrahtens noch gar nicht im DOM stehen; ein Listener je
   * Knopf müsste nach jedem Nachladen erneut gesetzt werden.
   *
   * Der Knopf wird durch das Bild ersetzt: einmal geholt, bleibt es stehen.
   */
  const hitboxKlick = (e: Event): void => {
    const knopf = (e.target as Element | null)?.closest<HTMLButtonElement>('[data-hitbox]');
    if (!knopf || !host.contains(knopf)) return;
    const pfade = (knopf.dataset.hitbox ?? '').split('|').filter(Boolean);
    if (!pfade.length) return;
    const name = knopf.dataset.hitboxMove ?? 'Move';

    const figur = document.createElement('figure');
    figur.className = 'frame__figur';
    for (const pfad of pfade) {
      const bild = document.createElement('img');
      bild.src = `https://ultimateframedata.com/${pfad}`;
      bild.alt = t('frames.hitboxAlt', { move: name });
      bild.loading = 'lazy';
      figur.append(bild);
    }
    const beschriftung = document.createElement('figcaption');
    beschriftung.textContent = t('frames.hitboxCaption');
    figur.append(beschriftung);
    knopf.replaceWith(figur);
  };
  host.addEventListener('click', hitboxKlick);
  aufraeumen.push(() => host.removeEventListener('click', hitboxKlick));

  // 400 px Vorlauf: Die Daten stehen bereit, bevor der Abschnitt sichtbar wird.
  const beobachter = new IntersectionObserver(
    (eintraege) => {
      if (!eintraege.some((e) => e.isIntersecting)) return;
      beobachter.disconnect();
      void laden();
    },
    { rootMargin: '400px' },
  );
  beobachter.observe(host);

  return () => {
    abgebrochen = true;
    beobachter.disconnect();
    aufraeumen.forEach((fn) => fn());
  };
}
