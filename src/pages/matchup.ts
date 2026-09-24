import { faceThumb } from '../components/fighterTile';
import { bindErrorState, errorState } from '../components/states';
import { ARCHETYPE_INFO } from '../data/archetypes';
import { FIGHTER_BY_SLUG, FIGHTERS } from '../data/fighters';
import { loadFrames } from '../data/frames-index';
import type { FighterFrames } from '../data/frame-types';
import { setProfil, vorteil, ZEILEN, type Kennzahl, type SetProfil } from '../data/matchup';
import type { Fighter } from '../data/types';
import { dateFormat, formatNumber, locale, t, tn } from '../i18n';
import { accentVars } from '../lib/color';
import { html, mount, qs, type Markup } from '../lib/dom';
import { link, replaceQuery, type Route } from '../lib/router';
import { ApiError } from '../services/api';
import { currentUser } from '../services/auth';
import { getMatchupVotes, rateMatchup, unrateMatchup, type MatchupVotes } from '../services/db';
import type { PageView } from './types';

/**
 * #/matchup: Zwei Fighter nebeneinander, gerechnet aus den Frame-Daten.
 *
 * Die Seite wertet nichts: Sie stellt die Zahlen gegenüber, die bei Ultimate
 * Frame Data stehen, und sagt pro Zeile, wer besser dasteht. Wer ein Matchup
 * gewinnt, entscheidet das nicht, und genau das steht auch auf der Seite.
 *
 * Die Frame-Daten liegen als eigener Chunk pro Fighter (frames-index.ts).
 * Geladen werden immer nur die beiden ausgewählten.
 */

const SORTIERT = (): Fighter[] => [...FIGHTERS].sort((a, b) => a.name.localeCompare(b.name, locale));

/** Auswahlfeld mit allen Fightern. Ein natives select bedient jedes Gerät und tippt sich auch mit 86 Einträgen schnell. */
function auswahl(seite: 'a' | 'b', label: string, gewaehlt: string): Markup {
  return html`<p class="mu-pick">
    <label class="mu-pick__label" for="mu-${seite}">${label}</label>
    <select class="mu-pick__select" id="mu-${seite}" data-seite="${seite}">
      <option value="">${t('mu.pick')}</option>
      ${SORTIERT().map((f) => html`<option value="${f.slug}" ${f.slug === gewaehlt ? 'selected' : ''}>${f.name}</option>`)}
    </select>
  </p>`;
}

/** Kopf einer Seite: Bild, Name, Grunddaten. */
function kopf(f: Fighter): Markup {
  return html`<div class="mu-head" style="${accentVars(f.colors)}">
    <a class="mu-head__link" href="${link(`/fighter/${f.slug}`)}" title="${t('mu.openFighter', { name: f.name })}">
      ${faceThumb(f, 'mu-head__face')}
      <span class="mu-head__name">${f.name}</span>
    </a>
    <dl class="mu-facts">
      <div><dt>${t('mu.weight')}</dt><dd>${formatNumber(f.weight)}</dd></div>
      <div><dt>${t('mu.mobility')}</dt><dd>${formatNumber(f.mobility)}/5</dd></div>
      <div><dt>${t('mu.archetype')}</dt><dd>${ARCHETYPE_INFO[f.archetype].label}</dd></div>
    </dl>
  </div>`;
}

/** Schalter für Fighter mit mehreren Move-Sätzen (Pokémon-Trainer, Pyra/Mythra). */
function satzwahl(seite: 'a' | 'b', frames: FighterFrames, aktiv: number): Markup {
  if (frames.sets.length < 2) return html``;
  return html`<fieldset class="mu-sets" data-sets="${seite}">
    <legend class="vh">${t('mu.setHint')}</legend>
    ${frames.sets.map(
      (satz, i) => html`<button class="mu-sets__btn${i === aktiv ? ' is-active' : ''}" type="button" data-satz="${i}" aria-pressed="${String(i === aktiv)}">
        ${satz.label ?? `${t('mu.set')} ${i + 1}`}
      </button>`,
    )}
  </fieldset>`;
}

const zahl = (k: Kennzahl | null, alsVorteil: boolean): string =>
  k === null ? t('mu.missing') : alsVorteil ? t('mu.framesAdv', { n: formatNumber(k.wert) }) : t('mu.frames', { n: formatNumber(k.wert) });

/** Eine Vergleichszeile: Überschrift, Erklärung, beide Werte nebeneinander. */
function zeile(id: (typeof ZEILEN)[number]['id'], besserGross: boolean, a: Fighter, b: Fighter, pa: SetProfil, pb: SetProfil): Markup {
  const ka = pa[id];
  const kb = pb[id];
  const wer = vorteil(ka, kb, besserGross);
  const zelle = (f: Fighter, k: Kennzahl | null, seite: 'a' | 'b'): Markup => html`<div
    class="mu-cell${wer === seite ? ' is-better' : ''}"
    style="${accentVars(f.colors)}"
  >
    <span class="vh">${f.name}: </span>
    <span class="mu-cell__value">${zahl(k, besserGross)}</span>
    <span class="mu-cell__move">${k ? k.move : ''}</span>
    ${wer === seite ? html`<span class="mu-cell__flag">${t('mu.advantage', { name: f.name })}</span>` : ''}
  </div>`;

  return html`<section class="mu-row" data-reveal>
    <h3 class="mu-row__title">${t(`mu.row.${id}`)}</h3>
    <p class="mu-row__hint">${t(`mu.row.${id}Hint`)}</p>
    <div class="mu-row__sides">${zelle(a, ka, 'a')}${zelle(b, kb, 'b')}</div>
  </section>`;
}

/** Kurzfassung in Sätzen: nur, wo es einen Unterschied gibt. */
function fazit(a: Fighter, b: Fighter, pa: SetProfil, pb: SetProfil): Markup {
  const saetze: string[] = [];
  const diff = (ka: Kennzahl | null, kb: Kennzahl | null, schluessel: 'mu.verdictFaster' | 'mu.verdictOos' | 'mu.verdictShield', besserGross: boolean): void => {
    const wer = vorteil(ka, kb, besserGross);
    if (!wer || !ka || !kb) return;
    saetze.push(t(schluessel, { name: wer === 'a' ? a.name : b.name, n: formatNumber(Math.abs(ka.wert - kb.wert)) }));
  };

  diff(pa.boden, pb.boden, 'mu.verdictFaster', false);
  diff(pa.oos, pb.oos, 'mu.verdictOos', false);
  diff(pa.schild, pb.schild, 'mu.verdictShield', true);
  if (a.weight !== b.weight) {
    const schwerer = a.weight > b.weight ? a : b;
    saetze.push(t('mu.verdictWeight', { name: schwerer.name, n: formatNumber(Math.abs(a.weight - b.weight)) }));
  }

  return html`<section class="mu-verdict glass" data-reveal>
    <h2 class="mu-verdict__title">${t('mu.verdictTitle')}</h2>
    ${saetze.length ? html`<ul class="mu-verdict__list">${saetze.map((s) => html`<li>${s}</li>`)}</ul>` : html`<p>${t('mu.verdictEven')}</p>`}
    <p class="mu-verdict__caveat">${t('mu.caveat')}</p>
  </section>`;
}

const STUFEN = [
  { wert: -2, key: 'mu.r-2' },
  { wert: -1, key: 'mu.r-1' },
  { wert: 0, key: 'mu.r0' },
  { wert: 1, key: 'mu.r1' },
  { wert: 2, key: 'mu.r2' },
] as const;

/** Bewertung als Wort. Für den Durchschnitt auf die nächste Stufe gerundet. */
const stufenText = (wert: number): string => t((STUFEN.find((s) => s.wert === Math.round(wert)) ?? STUFEN[2]).key);

/**
 * Die Stimmen der Community. Alles aus Sicht des linken Fighters.
 * `null` heißt: wird gerade geladen.
 */
function stimmenBlock(a: Fighter, v: MatchupVotes | null, angemeldet: boolean): Markup {
  if (!angemeldet) return html`<p class="mu-votes__hint">${t('mu.voteGuest')}</p>`;
  if (!v) return html`<p class="mu-votes__hint">${t('mu.voteLoading')}</p>`;

  const ergebnis =
    v.average !== null
      ? html`<p class="mu-votes__result">${t('mu.voteResult', { label: stufenText(v.average), name: a.name })}</p>
          <p class="mu-votes__meta">${tn('mu.voteMetaOne', 'mu.voteMeta', v.votes, { avg: formatNumber(v.average, { signDisplay: 'exceptZero', maximumFractionDigits: 2 }) })}</p>`
      : v.votes === 0
        ? html`<p class="mu-votes__meta">${t('mu.voteNone')}</p>`
        : html`<p class="mu-votes__meta">${tn('mu.voteFewOne', 'mu.voteFew', v.votes)}</p>`;

  return html`${ergebnis}
    <fieldset class="mu-votes__scale" style="${accentVars(a.colors)}">
      <legend class="vh">${t('mu.voteLegend', { name: a.name })}</legend>
      ${STUFEN.map(
        (stufe) => html`<label class="mu-votes__opt${v.mine === stufe.wert ? ' is-mine' : ''}">
          <input type="radio" name="mu-vote" value="${stufe.wert}" ${v.mine === stufe.wert ? 'checked' : ''} />
          <span>${t(stufe.key)}</span>
        </label>`,
      )}
    </fieldset>
    <p class="mu-votes__foot">
      <span data-vote-status>${v.mine === null ? '' : t('mu.voteMine', { label: stufenText(v.mine) })}</span>
      ${v.mine === null ? '' : html`<button class="link" type="button" data-vote-clear>${t('mu.voteClear')}</button>`}
    </p>`;
}

/** Quellenzeile mit dem Abrufdatum beider Seiten. */
function quelle(fa: FighterFrames, fb: FighterFrames): Markup {
  const fmt = dateFormat({ day: '2-digit', month: 'long', year: 'numeric' });
  const datum = (iso: string): string => fmt.format(new Date(`${iso}T00:00:00Z`));
  const text =
    fa.source.fetched === fb.source.fetched
      ? t('mu.sourceOne', { a: datum(fa.source.fetched) })
      : t('mu.source', { a: datum(fa.source.fetched), b: datum(fb.source.fetched) });
  return html`<p class="mu-source">
    ${text} <a class="link" href="${fa.source.url}" rel="noopener noreferrer" target="_blank">${fa.source.url.replace('https://', '')}</a>
  </p>`;
}

export function matchupPage(route: Route): PageView {
  const gueltig = (slug: string | null): string => (slug && FIGHTER_BY_SLUG.has(slug) ? slug : '');
  let slugA = gueltig(route.query.get('a')) || gueltig(currentUser()?.mainFighter ?? null);
  let slugB = gueltig(route.query.get('b'));

  return {
    title: `${t('mu.title')} | Blastzone`,
    markup: html`<div class="page mu-page">
      <header class="container page-head">
        <h1 data-reveal="wipe">${t('mu.title')}</h1>
        <p>${t('mu.lead')}</p>
      </header>

      <section class="container mu-picks" aria-label="${t('mu.pick')}">
        <div class="mu-picks__grid">
          <div data-pick="a">${auswahl('a', t('mu.you'), slugA)}</div>
          <button class="btn mu-swap" type="button" data-swap aria-label="${t('mu.swap')}" title="${t('mu.swap')}">⇄</button>
          <div data-pick="b">${auswahl('b', t('mu.opponent'), slugB)}</div>
        </div>
      </section>

      <div class="container mu-out" data-out aria-live="polite"></div>
    </div>`,

    mount(root) {
      const out = qs<HTMLElement>('[data-out]', root)!;
      let satzA = 0;
      let satzB = 0;
      let lauf = 0;

      const adresse = (): void => {
        const query = new URLSearchParams();
        if (slugA) query.set('a', slugA);
        if (slugB) query.set('b', slugB);
        replaceQuery(query);
      };

      const zeichne = async (): Promise<void> => {
        const meine = ++lauf;
        const a = slugA ? FIGHTER_BY_SLUG.get(slugA) : undefined;
        const b = slugB ? FIGHTER_BY_SLUG.get(slugB) : undefined;

        if (!a || !b) return mount(out, html`<p class="mu-note">${t('mu.empty')}</p>`);
        if (a.slug === b.slug) return mount(out, html`<p class="mu-note">${t('mu.same')}</p>`);

        mount(out, html`<p class="mu-note">${t('mu.loading')}</p>`);

        let fa: FighterFrames | undefined;
        let fb: FighterFrames | undefined;
        try {
          [fa, fb] = await Promise.all([loadFrames(a.slug), loadFrames(b.slug)]);
        } catch {
          fa = undefined;
        }
        // Zwischenzeitlich wurde erneut gewählt: dieses Ergebnis ist veraltet.
        if (meine !== lauf) return;

        if (!fa || !fb) {
          mount(out, errorState(t('mu.failed'), t('mu.retry')));
          bindErrorState(out, () => void zeichne());
          return;
        }

        satzA = Math.min(satzA, fa.sets.length - 1);
        satzB = Math.min(satzB, fb.sets.length - 1);
        const pa = setProfil(fa.sets[satzA]!);
        const pb = setProfil(fb.sets[satzB]!);

        mount(
          out,
          html`<div class="mu-board">
            <div class="mu-board__heads">
              <div>${kopf(a)}${satzwahl('a', fa, satzA)}</div>
              <div>${kopf(b)}${satzwahl('b', fb, satzB)}</div>
            </div>
            <div class="mu-rows">${ZEILEN.map((z) => zeile(z.id, z.besserGross, a, b, pa, pb))}</div>
            <section class="mu-votes glass" aria-labelledby="mu-votes-title" data-reveal>
              <h2 class="mu-verdict__title" id="mu-votes-title">${t('mu.voteTitle')}</h2>
              <p class="mu-votes__lead">${t('mu.voteLead', { name: a.name })}</p>
              <div data-votes></div>
            </section>
            ${fazit(a, b, pa, pb)} ${quelle(fa, fb)}
            <p class="mu-weightnote">${t('mu.weightNote')}</p>
          </div>`,
        );
        void stimmen(a, b);
      };

      /**
       * Die Stimmen kommen nach dem Brett, damit der Vergleich nicht auf das
       * Netz wartet. Ein zwischenzeitlicher Wechsel verwirft das Ergebnis.
       */
      const stimmen = async (a: Fighter, b: Fighter): Promise<void> => {
        const host = qs<HTMLElement>('[data-votes]', out);
        if (!host) return;
        const passt = (): boolean => slugA === a.slug && slugB === b.slug;
        /*
         * Kein currentUser()-Test: Beim ersten Aufruf ist die Sitzungsprüfung oft
         * noch unterwegs, und die Seite hielte ein angemeldetes Konto für einen Gast.
         * Wir fragen einfach an; 401 heißt dann Gast.
         */
        mount(host, stimmenBlock(a, null, true));
        try {
          const v = await getMatchupVotes(a.slug, b.slug);
          if (passt()) mount(host, stimmenBlock(a, v, true));
        } catch (err) {
          if (!passt()) return;
          const gast = err instanceof ApiError && err.status === 401;
          mount(host, gast ? stimmenBlock(a, null, false) : html`<p class="mu-votes__hint">${err instanceof ApiError ? err.message : t('mu.voteFailed')}</p>`);
        }
      };

      /** Bewertung setzen oder zurücknehmen, danach den Block neu zeichnen. */
      const stimmeSchreiben = async (schreiben: () => Promise<MatchupVotes>): Promise<void> => {
        const host = qs<HTMLElement>('[data-votes]', out);
        const a = slugA ? FIGHTER_BY_SLUG.get(slugA) : undefined;
        if (!host || !a) return;
        const status = qs<HTMLElement>('[data-vote-status]', host);
        if (status) status.textContent = t('profile.saving');
        try {
          mount(host, stimmenBlock(a, await schreiben(), true));
          const neu = qs<HTMLElement>('[data-vote-status]', host);
          if (neu) neu.textContent = t('mu.voteSaved');
        } catch (err) {
          const neu = qs<HTMLElement>('[data-vote-status]', host);
          if (neu) neu.textContent = err instanceof ApiError ? err.message : t('profile.notSaved');
        }
      };

      const aufSelect = (e: Event): void => {
        const ziel = e.target as HTMLSelectElement;
        if (ziel.name === 'mu-vote' && slugA && slugB) {
          void stimmeSchreiben(() => rateMatchup(slugA, slugB, Number(ziel.value)));
          return;
        }
        if (!ziel.dataset.seite) return;
        if (ziel.dataset.seite === 'a') {
          slugA = ziel.value;
          satzA = 0;
        } else {
          slugB = ziel.value;
          satzB = 0;
        }
        adresse();
        void zeichne();
      };

      const aufKlick = (e: Event): void => {
        if ((e.target as HTMLElement).closest('[data-vote-clear]') && slugA && slugB) {
          void stimmeSchreiben(() => unrateMatchup(slugA, slugB));
          return;
        }
        const ziel = (e.target as HTMLElement).closest('[data-satz]');
        if (!ziel) return;
        const gruppe = ziel.closest<HTMLElement>('[data-sets]');
        const index = Number(ziel.getAttribute('data-satz'));
        if (!gruppe || !Number.isInteger(index)) return;
        if (gruppe.dataset.sets === 'a') satzA = index;
        else satzB = index;
        void zeichne();
      };

      const tauschen = (): void => {
        [slugA, slugB] = [slugB, slugA];
        [satzA, satzB] = [satzB, satzA];
        qs<HTMLSelectElement>('#mu-a', root)!.value = slugA;
        qs<HTMLSelectElement>('#mu-b', root)!.value = slugB;
        adresse();
        void zeichne();
      };

      root.addEventListener('change', aufSelect);
      out.addEventListener('click', aufKlick);
      const swap = qs<HTMLButtonElement>('[data-swap]', root)!;
      swap.addEventListener('click', tauschen);

      void zeichne();

      return () => {
        lauf += 1;
        root.removeEventListener('change', aufSelect);
        out.removeEventListener('click', aufKlick);
        swap.removeEventListener('click', tauschen);
      };
    },
  };
}
