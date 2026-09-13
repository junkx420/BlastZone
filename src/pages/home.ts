import { comboSteps, meter, playCombo } from '../components/comboPlayer';
import { faceThumb, fighterArt, fighterTile } from '../components/fighterTile';
import { ICONS } from '../components/icons';
import { glyph, inputKeys } from '../components/notation';
import { tierBadge, tierGroup } from '../components/tierBadge';
import { renderArt } from '../data/art';
import { ARCHETYPES, FIGHTER_BY_SLUG, FIGHTERS, WEIGHT_CLASSES, weightClass } from '../data/fighters';
import { GUIDE_SLUGS, loadLateGuides } from '../data/guide-index';
import { SHOWCASE } from '../data/guides';
import { BUTTON_LEGEND, resolveToken } from '../data/notation';
import { matchScore } from '../data/search';
import { TIER_BY_SLUG, TIER_ORDER, TIER_PLACEMENTS, TIER_SOURCE, TIER_TOTAL } from '../data/tiers';
import type { Archetype, Fighter, TierId, WeightClass } from '../data/types';
import { accentVars } from '../lib/color';
import { html, mount, qs, qsa, type Markup } from '../lib/dom';
import { gsap, loadFlip, motionOK, parallax, pointerDepth, reveals, scope, type FlipApi } from '../lib/motion';
import { link, replaceQuery, type Route } from '../lib/router';
import type { PageView } from './types';

const de = (n: number): string => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/* ───────────────────────────── Hero: kill-confirm replay ───────────────────────────── */

function heroSection(): Markup {
  const first = SHOWCASE[0];
  const fighter = first && FIGHTER_BY_SLUG.get(first.slug);
  if (!first || !fighter) return html``;
  return html`<section class="hero" data-hero data-parallax-scope data-parallax-top aria-labelledby="hero-title" style="${accentVars(fighter.colors)}">
    <div class="hero__stage" aria-hidden="true">
      <div class="hero__art" data-parallax="0.2">
        <div class="hero__art-host" data-hero-art><div class="hero__art-layer">${fighterArt(fighter, 'hero')}</div></div>
      </div>
    </div>
    <div class="container hero__layout">
      <div class="hero__copy">
        <h1 class="hero__title" id="hero-title"><span class="hero__line">Vom ersten Treffer</span> <span class="hero__line">bis zum KO.</span></h1>
        <p class="hero__lead">
          Combos, Frame Data und die UltRank-Liste für alle ${FIGHTERS.length} Fighter. Alles mit Quelle, damit du nicht
          raten musst, was wirklich durchgeht.
        </p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="${link('/roster')}">Fighter finden</a>
          <a class="btn btn--ghost" href="${link('/tiers')}">Tier-Liste ansehen</a>
        </div>
      </div>

      <aside class="hud glass" data-hud aria-label="Kill-Confirm-Replay">
        <header class="hud__head">
          <p class="hud__count" data-hud-count>Kill-Confirm 1 von ${SHOWCASE.length}</p>
          <div class="hud__who">
            <span class="hud__id">
              <span data-hud-face>${faceThumb(fighter, 'hud__face')}</span>
              <a class="hud__name" data-hud-name href="${link(`/fighter/${first.slug}`)}">${fighter.name}</a>
            </span>
            <span data-hud-tier>${tierBadge(TIER_BY_SLUG.get(first.slug))}</span>
          </div>
          <p class="hud__title" data-hud-title>${first.combo.title}</p>
        </header>
        <div class="hud__steps" data-hud-steps>${comboSteps(first.combo)}</div>
        <div class="hud__bottom combo__hud">
          <div data-hud-meter>${meter(first.combo.start, true)}</div>
          <div class="hud__controls">
            <button class="btn btn--icon" type="button" data-hud-toggle aria-pressed="false" aria-label="Replay pausieren">${ICONS.pause}</button>
            <button class="btn btn--icon" type="button" data-hud-next aria-label="Nächster Kill-Confirm">${ICONS.skip}</button>
          </div>
        </div>
      </aside>
    </div>
  </section>`;
}

function mountHero(root: HTMLElement): () => void {
  const hero = qs<HTMLElement>('[data-hero]', root);
  const hud = qs<HTMLElement>('[data-hud]', root);
  const artHost = qs<HTMLElement>('[data-hero-art]', root);
  if (!hero || !hud || !artHost || !SHOWCASE.length) return () => {};

  const part = <T extends HTMLElement = HTMLElement>(sel: string): T => qs<T>(sel, hud)!;
  const toggle = part<HTMLButtonElement>('[data-hud-toggle]');

  let index = 0;
  let timeline: gsap.core.Timeline | null = null;
  let advance: gsap.core.Tween | null = null;
  let userPaused = !motionOK();
  let holding = false;
  let inView = true;

  const canRun = (): boolean => !userPaused && !holding && inView;

  const syncToggle = (): void => {
    toggle.setAttribute('aria-pressed', String(userPaused));
    toggle.setAttribute('aria-label', userPaused ? 'Replay fortsetzen' : 'Replay pausieren');
    mount(toggle, userPaused ? ICONS.play : ICONS.pause);
  };

  const scheduleNext = (): void => {
    advance?.kill();
    if (canRun()) advance = gsap.delayedCall(2.6, () => show(index + 1));
  };

  // Renders are large; warm the cache for the next fighter while the current combo plays.
  const preloadNext = (): void => {
    const upcoming = SHOWCASE[(index + 1) % SHOWCASE.length];
    const fighter = upcoming && FIGHTER_BY_SLUG.get(upcoming.slug);
    if (!fighter) return;
    const img = new Image();
    img.referrerPolicy = 'no-referrer';
    img.src = renderArt(fighter);
  };

  const swapArt = (fighter: Fighter): void => {
    const layer = document.createElement('div');
    layer.className = 'hero__art-layer';
    mount(layer, fighterArt(fighter, 'hero'));
    const old = Array.from(artHost.children) as HTMLElement[];
    artHost.append(layer);
    if (!motionOK()) {
      old.forEach((o) => o.remove());
      return;
    }
    gsap.fromTo(layer, { autoAlpha: 0, scale: 1.08, x: 40 }, { autoAlpha: 1, scale: 1, x: 0, duration: 1.1, ease: 'expo.out' });
    gsap.to(old, { autoAlpha: 0, scale: 0.96, x: -30, duration: 0.45, ease: 'power2.in', onComplete: () => old.forEach((o) => o.remove()) });
  };

  const show = (next: number, initial = false): void => {
    index = (next + SHOWCASE.length) % SHOWCASE.length;
    const entry = SHOWCASE[index];
    const fighter = entry && FIGHTER_BY_SLUG.get(entry.slug);
    if (!entry || !fighter) return;

    if (!initial) {
      hero.setAttribute('style', accentVars(fighter.colors));
      part('[data-hud-count]').textContent = `Kill-Confirm ${index + 1} von ${SHOWCASE.length}`;
      const name = part<HTMLAnchorElement>('[data-hud-name]');
      name.textContent = fighter.name;
      name.href = link(`/fighter/${entry.slug}`);
      mount(part('[data-hud-face]'), faceThumb(fighter, 'hud__face'));
      mount(part('[data-hud-tier]'), tierBadge(TIER_BY_SLUG.get(entry.slug)));
      part('[data-hud-title]').textContent = entry.combo.title;
      mount(part('[data-hud-steps]'), comboSteps(entry.combo));
      mount(part('[data-hud-meter]'), meter(entry.combo.start, true));
      swapArt(fighter);
    }
    preloadNext();

    timeline?.kill();
    advance?.kill();
    timeline = playCombo(hud, entry.combo, 0.7);
    if (motionOK()) timeline.eventCallback('onComplete', scheduleNext);
    else scheduleNext();
  };

  toggle.addEventListener('click', () => {
    userPaused = !userPaused;
    syncToggle();
    if (userPaused) {
      timeline?.pause();
      advance?.kill();
    } else if (timeline && timeline.progress() < 1) timeline.resume();
    else scheduleNext();
  });
  part('[data-hud-next]').addEventListener('click', () => show(index + 1));

  const hold = (on: boolean): void => {
    holding = on;
    if (on) advance?.kill();
    else if (!timeline || timeline.progress() >= 1) scheduleNext();
  };
  hud.addEventListener('pointerenter', () => hold(true));
  hud.addEventListener('pointerleave', () => hold(false));
  hud.addEventListener('focusin', () => hold(true));
  hud.addEventListener('focusout', (e) => {
    if (!hud.contains(e.relatedTarget as Node | null)) hold(false);
  });

  const observer = new IntersectionObserver(([entry]) => {
    inView = entry?.isIntersecting ?? true;
    if (!inView) {
      timeline?.pause();
      advance?.kill();
    } else if (!userPaused) {
      if (timeline && timeline.progress() < 1) timeline.resume();
      else scheduleNext();
    }
  });
  observer.observe(hero);

  syncToggle();
  const removeDepth = pointerDepth(hero, [[artHost, 36]]);

  let intro: gsap.core.Timeline | null = null;
  if (motionOK()) {
    intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
    intro
      .fromTo(artHost, { autoAlpha: 0, scale: 1.14 }, { autoAlpha: 1, scale: 1, duration: 1.6 }, 0)
      .fromTo(
        qsa('.hero__line', hero),
        { clipPath: 'polygon(0% 0%, 0% 0%, -14% 100%, -14% 100%)', x: -32 },
        { clipPath: 'polygon(0% 0%, 114% 0%, 100% 100%, -14% 100%)', x: 0, duration: 1.1, stagger: 0.14, clearProps: 'clipPath' },
        0.1,
      )
      .fromTo(qsa('.hero__lead, .hero__actions', hero), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 }, 0.5)
      .fromTo(hud, { autoAlpha: 0, x: 48 }, { autoAlpha: 1, x: 0, duration: 1 }, 0.35)
      .call(() => show(0, true), [], 1);
  } else {
    show(0, true);
  }

  return () => {
    intro?.kill();
    timeline?.kill();
    advance?.kill();
    observer.disconnect();
    removeDepth();
  };
}

/* ───────────────────────────── Top of the meta ───────────────────────────── */

function topSection(): Markup {
  const top = TIER_PLACEMENTS.filter((p) => p.tier === 'S+');
  return html`<section class="section top" aria-labelledby="top-title">
    <div class="container">
      <div class="section-head">
        <h2 id="top-title" data-reveal="wipe">Die Spitze des Metas</h2>
        <p data-reveal>
          ${top.length} Fighter teilen sich S+, so viele wie nie zuvor neben Steve. Stand: ${TIER_SOURCE.name} vom
          ${TIER_SOURCE.published}.
        </p>
        <a class="link section-head__aside" href="${link('/tiers')}">Alle ${TIER_TOTAL} Ränge</a>
      </div>
      <ol class="top__list" role="list">
        ${top.map((p, i) => {
          const f = FIGHTER_BY_SLUG.get(p.slug);
          if (!f) return '';
          return html`<li class="top__item" style="${accentVars(f.colors)}" data-reveal data-reveal-delay="${(i * 0.06).toFixed(2)}">
            <a class="top__link" href="${link(`/fighter/${f.slug}`)}">
              <span class="top__art" aria-hidden="true">${fighterArt(f, i === 0 ? 'hero' : 'tile')}</span>
              <span class="top__rank" aria-hidden="true">${p.rank}</span>
              <span class="top__body">
                <span class="top__name">${f.name}</span>
                <span class="top__score"><span class="vh">Rang ${p.rank}, </span>Panel-Wertung ${de(p.score)}</span>
              </span>
            </a>
          </li>`;
        })}
      </ol>
    </div>
  </section>`;
}

/* ───────────────────────────── Roster ───────────────────────────── */

type Sort = 'rank' | 'no' | 'name' | 'weight';

interface Filters {
  q: string;
  tiers: Set<TierId>;
  arch: Archetype | '';
  weight: WeightClass | '';
  sort: Sort;
  guides: boolean;
}

const SORTS: Array<[Sort, string]> = [
  ['rank', 'Tier-Rang'],
  ['no', 'Fighter-Nummer'],
  ['name', 'Name A bis Z'],
  ['weight', 'Gewicht, schwer zuerst'],
];

function readFilters(query: URLSearchParams): Filters {
  const tiers = (query.get('tier') ?? '').split(',').filter((t): t is TierId => (TIER_ORDER as string[]).includes(t));
  const arch = query.get('archetyp') ?? '';
  const weight = query.get('gewicht') ?? '';
  const sort = query.get('sort') ?? '';
  return {
    q: query.get('q') ?? '',
    tiers: new Set(tiers),
    arch: arch in ARCHETYPES ? (arch as Archetype) : '',
    weight: weight in WEIGHT_CLASSES ? (weight as WeightClass) : '',
    sort: SORTS.some(([s]) => s === sort) ? (sort as Sort) : 'rank',
    guides: query.get('routen') === '1',
  };
}

function writeFilters(f: Filters): void {
  const p = new URLSearchParams();
  if (f.q) p.set('q', f.q);
  if (f.tiers.size) p.set('tier', [...f.tiers].join(','));
  if (f.arch) p.set('archetyp', f.arch);
  if (f.weight) p.set('gewicht', f.weight);
  if (f.sort !== 'rank') p.set('sort', f.sort);
  if (f.guides) p.set('routen', '1');
  replaceQuery(p);
}

const isFiltered = (f: Filters): boolean => Boolean(f.q || f.tiers.size || f.arch || f.weight || f.guides);
const rankOf = (f: Fighter): number => TIER_BY_SLUG.get(f.slug)?.rank ?? 999;

const SORTERS: Record<Sort, (a: Fighter, b: Fighter) => number> = {
  rank: (a, b) => rankOf(a) - rankOf(b) || a.order - b.order,
  no: (a, b) => a.order - b.order,
  name: (a, b) => a.name.localeCompare(b.name, 'de'),
  weight: (a, b) => b.weight - a.weight || a.order - b.order,
};

function visibleFighters(f: Filters): Fighter[] {
  return FIGHTERS.filter((x) => {
    if (f.q && matchScore(x, f.q) === 0) return false;
    const placement = TIER_BY_SLUG.get(x.slug);
    if (f.tiers.size && (!placement || !f.tiers.has(placement.tier))) return false;
    if (f.arch && x.archetype !== f.arch) return false;
    if (f.weight && weightClass(x.weight) !== f.weight) return false;
    if (f.guides && !GUIDE_SLUGS.has(x.slug)) return false;
    return true;
  }).sort((a, b) => (f.q ? matchScore(b, f.q) - matchScore(a, f.q) : 0) || SORTERS[f.sort](a, b));
}

function rosterSection(): Markup {
  return html`<section class="section roster" id="roster" aria-labelledby="roster-title">
    <div class="container">
      <div class="section-head">
        <h2 id="roster-title" data-reveal="wipe">Roster</h2>
        <p>Alle ${FIGHTERS.length} Slots vom Auswahlbildschirm. Such nach Name, Serie oder Spitzname. ZSS, Pummeluff und Aegis gehen auch.</p>
        <p class="roster__count section-head__aside" data-count aria-live="polite">${FIGHTERS.length} Fighter</p>
      </div>

      <div class="filters glass" data-filters>
        <div class="filters__row">
          <div class="field filters__search">
            ${ICONS.search}
            <label class="vh" for="roster-q">Fighter suchen</label>
            <input id="roster-q" class="input" type="search" placeholder="Name, Serie oder Spitzname" autocomplete="off" spellcheck="false" data-q />
          </div>
          <div class="select-wrap">
            <label class="control-label" for="roster-arch">Archetyp</label>
            <select id="roster-arch" class="select" data-arch>
              <option value="">Alle</option>
              ${Object.entries(ARCHETYPES).map(([value, label]) => html`<option value="${value}">${label}</option>`)}
            </select>
          </div>
          <div class="select-wrap">
            <label class="control-label" for="roster-weight">Gewicht</label>
            <select id="roster-weight" class="select" data-weight>
              <option value="">Alle</option>
              ${Object.entries(WEIGHT_CLASSES).map(([value, w]) => html`<option value="${value}">${w.label} (${w.range})</option>`)}
            </select>
          </div>
          <div class="select-wrap">
            <label class="control-label" for="roster-sort">Sortierung</label>
            <select id="roster-sort" class="select" data-sort>
              ${SORTS.map(([value, label]) => html`<option value="${value}">${label}</option>`)}
            </select>
          </div>
        </div>
        <div class="filters__row filters__row--chips">
          <div class="filters__tiers" role="group" aria-label="Nach Tier filtern">
            ${TIER_ORDER.map((t) => html`<button type="button" class="chip" data-tier="${tierGroup(t)}" data-tier-id="${t}" aria-pressed="false">${t}</button>`)}
          </div>
          <button type="button" class="chip chip--guides" data-guides aria-pressed="false">${ICONS.combo}Mit Combos</button>
          <button type="button" class="btn btn--sm btn--ghost filters__reset" data-reset hidden>${ICONS.reset}Filter zurücksetzen</button>
        </div>
      </div>

      <ul class="roster__grid" role="list" data-grid>${FIGHTERS.map((f) => fighterTile(f))}</ul>

      <div class="empty" data-empty hidden>
        <h3>Kein Fighter passt zu diesen Filtern.</h3>
        <p>Lockere die Tier-Auswahl oder such nach einer Serie wie Fire Emblem.</p>
        <button class="btn btn--sm" type="button" data-reset>${ICONS.reset}Filter zurücksetzen</button>
      </div>
    </div>
  </section>`;
}

function mountRoster(root: HTMLElement, route: Route): () => void {
  const section = qs<HTMLElement>('#roster', root);
  if (!section) return () => {};
  const grid = qs<HTMLElement>('[data-grid]', section)!;
  const input = qs<HTMLInputElement>('[data-q]', section)!;
  const arch = qs<HTMLSelectElement>('[data-arch]', section)!;
  const weight = qs<HTMLSelectElement>('[data-weight]', section)!;
  const sort = qs<HTMLSelectElement>('[data-sort]', section)!;
  const guides = qs<HTMLButtonElement>('[data-guides]', section)!;
  const count = qs<HTMLElement>('[data-count]', section)!;
  const empty = qs<HTMLElement>('[data-empty]', section)!;
  const tierChips = qsa<HTMLButtonElement>('[data-tier-id]', section);
  const resets = qsa<HTMLButtonElement>('[data-reset]', section);
  const tiles = new Map(qsa<HTMLElement>('.tile', grid).map((el) => [el.dataset.slug ?? '', el]));

  const state = readFilters(route.query);
  let flip: gsap.core.Timeline | null = null;
  let debounce = 0;

  // Warms the later tiers while the roster is on screen, so opening a profile feels instant.
  void loadLateGuides();

  // The filter animation loads on first contact with the controls; until then filtering just snaps.
  let Flip: FlipApi | null = null;
  const primeFlip = (): void => void loadFlip().then((api) => (Flip = api));
  (['pointerenter', 'pointerdown', 'focusin'] as const).forEach((type) =>
    section.addEventListener(type, primeFlip, { once: true, passive: true }),
  );

  const syncControls = (): void => {
    if (document.activeElement !== input) input.value = state.q;
    arch.value = state.arch;
    weight.value = state.weight;
    sort.value = state.sort;
    guides.setAttribute('aria-pressed', String(state.guides));
    tierChips.forEach((chip) => chip.setAttribute('aria-pressed', String(state.tiers.has(chip.dataset.tierId as TierId))));
  };

  const apply = (animate: boolean): void => {
    const order = visibleFighters(state);
    const shown = new Set(order.map((f) => f.slug));
    flip?.progress(1).kill();
    const before = Flip && animate && motionOK() ? Flip.getState([...tiles.values()]) : null;

    order.forEach((f) => {
      const el = tiles.get(f.slug);
      if (!el) return;
      el.classList.remove('is-out');
      grid.append(el);
    });
    tiles.forEach((el, slug) => {
      if (shown.has(slug)) return;
      el.classList.add('is-out');
      grid.append(el);
    });

    if (before && Flip) {
      flip = Flip.from(before, {
        duration: 0.6,
        ease: 'expo.out',
        absolute: true,
        stagger: { amount: 0.12 },
        onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, scale: 0.85 }, { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'expo.out' }),
        onLeave: (els) => gsap.to(els, { autoAlpha: 0, scale: 0.85, duration: 0.22, ease: 'power2.in' }),
      });
    }

    const total = FIGHTERS.length;
    count.textContent = order.length === total ? `${total} Fighter` : `${order.length} von ${total} Fightern`;
    empty.hidden = order.length > 0;
    resets.forEach((b) => (b.hidden = !isFiltered(state)));
    syncControls();
  };

  const update = (): void => {
    writeFilters(state);
    apply(true);
  };

  input.addEventListener('input', () => {
    window.clearTimeout(debounce);
    debounce = window.setTimeout(() => {
      state.q = input.value.trim();
      update();
    }, 140);
  });
  arch.addEventListener('change', () => {
    state.arch = arch.value as Archetype | '';
    update();
  });
  weight.addEventListener('change', () => {
    state.weight = weight.value as WeightClass | '';
    update();
  });
  sort.addEventListener('change', () => {
    state.sort = sort.value as Sort;
    update();
  });
  guides.addEventListener('click', () => {
    state.guides = !state.guides;
    update();
  });
  tierChips.forEach((chip) =>
    chip.addEventListener('click', () => {
      const tier = chip.dataset.tierId as TierId;
      if (state.tiers.has(tier)) state.tiers.delete(tier);
      else state.tiers.add(tier);
      update();
    }),
  );
  resets.forEach((b) =>
    b.addEventListener('click', () => {
      Object.assign(state, { q: '', arch: '', weight: '', guides: false });
      state.tiers.clear();
      input.value = '';
      update();
      input.focus();
    }),
  );

  apply(false);

  return () => {
    window.clearTimeout(debounce);
    flip?.kill();
  };
}

/* ───────────────────────────── Notation guide ───────────────────────────── */

const NOTATION_GROUPS: Array<{ title: string; tokens: string[] }> = [
  { title: 'Bewegung', tokens: ['sh', 'fh', 'dj', 'dash', 'ff'] },
  { title: 'Bodenangriffe', tokens: ['jab', 'ftilt', 'utilt', 'dtilt', 'da'] },
  { title: 'Smash-Angriffe', tokens: ['fsmash', 'usmash', 'dsmash'] },
  { title: 'Aerials', tokens: ['nair', 'fair', 'bair', 'uair', 'dair', 'zair'] },
  { title: 'Specials', tokens: ['nb', 'sb', 'ub', 'db'] },
  { title: 'Griffe und Würfe', tokens: ['grab', 'pummel', 'fthrow', 'bthrow', 'uthrow', 'dthrow'] },
  { title: 'Command-Inputs', tokens: ['236b', '214b', '623b'] },
];

function notationSection(): Markup {
  return html`<section class="section notation" id="notation" aria-labelledby="notation-title">
    <div class="container notation__layout">
      <div class="notation__intro">
        <h2 id="notation-title" data-reveal="wipe">Inputs lesen</h2>
        <h3 class="legend__title">Legende der Inputs:</h3>
        <ul class="legend" role="list">
          ${BUTTON_LEGEND.map((b) => html`<li class="legend__item">${glyph({ t: 'btn', b: b.b })}<span>${b.name}</span></li>`)}
          <li class="legend__item">${glyph({ t: 'dir', d: 'f' })}<span>Richtung</span></li>
          <li class="legend__item">${glyph({ t: 'btn', b: 'A', smash: true })}<span>Smash</span></li>
          <li class="legend__item">${glyph({ t: 'btn', b: 'X', hold: true })}<span>Fullhop</span></li>
          <li class="legend__item">${glyph({ t: 'btn', b: 'X', tap: true })}<span>Shorthop</span></li>
        </ul>
      </div>
      <div class="notation__groups">
        ${NOTATION_GROUPS.map(
          (group) => html`<div class="token-group" data-reveal>
            <h3>${group.title}</h3>
            <ul class="token-list" role="list">
              ${group.tokens.map((key) => {
                const token = resolveToken(key);
                return html`<li class="token">
                  <span class="token__short">${token.short}</span>
                  ${inputKeys(key)}
                  <span class="token__name">${token.name}</span>
                </li>`;
              })}
            </ul>
          </div>`,
        )}
      </div>
    </div>
  </section>`;
}

/* ───────────────────────────── Page ───────────────────────────── */

export function homePage(route: Route): PageView {
  return {
    title: 'Blastzone | Combos, Frame Data und Tier-Liste für Smash Ultimate',
    anchor: route.name === 'roster' ? '#roster' : route.name === 'notation' ? '#notation' : undefined,
    markup: html`<div class="page page--flush page--home">${heroSection()}${topSection()}${rosterSection()}${notationSection()}</div>`,
    mount(root) {
      const cleanups: Array<() => void> = [];
      cleanups.push(
        scope(root, () => {
          reveals(root);
          parallax(root);
        }),
      );
      cleanups.push(mountHero(root));
      cleanups.push(mountRoster(root, route));
      return () => cleanups.forEach((fn) => fn());
    },
  };
}
