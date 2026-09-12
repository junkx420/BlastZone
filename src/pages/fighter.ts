import { bindComboCards, comboCard, playFirstVisible } from '../components/comboPlayer';
import { faceThumb, fighterArt } from '../components/fighterTile';
import { ICONS } from '../components/icons';
import { tierBadge } from '../components/tierBadge';
import { videoSection, wireVideo } from '../components/videoEmbed';
import { ARCHETYPES, FIGHTER_BY_SLUG, FIGHTERS, WEIGHT_CLASSES, WEIGHT_RANGE, weightClass } from '../data/fighters';
import { GUIDE_COUNT, GUIDE_SLUGS, guideFor, loadLateGuides } from '../data/guide-index';
import { videoFor } from '../data/videos';
import { TIER_BY_SLUG, TIER_TOTAL } from '../data/tiers';
import type { Archetype, Combo, Fighter, FighterGuide } from '../data/types';
import { accentVars } from '../lib/color';
import { html, mount, qs, qsa, raw, type Markup } from '../lib/dom';
import { gsap, motionOK, parallax, pointerDepth, reveals, scope, scrollToTarget } from '../lib/motion';
import { link, parse, replaceQuery, type Route } from '../lib/router';
import { notFoundPage } from './notFound';
import type { PageView } from './types';

const MOBILITY = ['', 'Sehr langsam', 'Langsam', 'Durchschnittlich', 'Schnell', 'Sehr schnell'] as const;

const ARCHETYPE_HINT: Record<Archetype, string> = {
  rushdown: 'Hält Druck mit Tempo und Frame-Vorteil',
  zoner: 'Kontrolliert die Distanz mit Projektilen',
  swordie: 'Gewinnt über Reichweite und Disjoints',
  allrounder: 'Hat für jede Situation ein Werkzeug',
  setplay: 'Baut Situationen mit Items und Fallen',
  grappler: 'Gewinnt über Grabs und Würfe',
  bruiser: 'Viel Gewicht, viel Kill-Power',
  bait: 'Wartet auf Fehler und bestraft hart',
};

const de = (n: number): string => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const rankOf = (f: Fighter): number => TIER_BY_SLUG.get(f.slug)?.rank ?? 999;
const BY_RANK = [...FIGHTERS].sort((a, b) => rankOf(a) - rankOf(b) || a.order - b.order);

function heroSection(f: Fighter): Markup {
  return html`<header class="fhero" data-parallax-scope data-parallax-top>
    <div class="fhero__stage" aria-hidden="true">
      <div class="fhero__art" data-parallax="0.16"><div class="fhero__art-inner" data-depth>${fighterArt(f, 'hero')}</div></div>
    </div>
    <div class="container fhero__content">
      <nav class="crumbs" aria-label="Brotkrumen">
        <ol role="list">
          <li><a href="${link('/roster')}">Roster</a></li>
          <li aria-current="page">${f.name}</li>
        </ol>
      </nav>
      <h1 class="fhero__name" id="fighter-name"><span class="fhero__name-text">${f.name}</span></h1>
      <div class="fhero__badges" data-hero-in>
        ${tierBadge(TIER_BY_SLUG.get(f.slug), 'lg')}
        <span class="tag">${ARCHETYPES[f.archetype]}</span>
        <span class="tag">${f.series}</span>
        <span class="tag">Fighter-Nr. ${f.no}</span>
      </div>
      <p class="fhero__tagline" data-hero-in>${f.tagline}</p>
      <p class="fhero__jump" data-hero-in>
        <button class="btn btn--primary" type="button" data-jump>${ICONS.combo}Zu den Combo-Routen</button>
      </p>
    </div>
  </header>`;
}

function statsSection(f: Fighter): Markup {
  const placement = TIER_BY_SLUG.get(f.slug);
  const weightPct = Math.round(((f.weight - WEIGHT_RANGE.min) / (WEIGHT_RANGE.max - WEIGHT_RANGE.min)) * 100);
  const heatPct = placement ? Math.round(((TIER_TOTAL - placement.rank + 1) / TIER_TOTAL) * 100) : 0;
  return html`<section class="container fstats" aria-labelledby="stats-title">
    <h2 class="vh" id="stats-title">Eigenschaften</h2>
    <dl class="stats">
      <div class="stat" data-reveal>
        <dt>Gewicht</dt>
        <dd>
          <span class="stat__value">${f.weight}</span>
          <span class="stat__meta">${WEIGHT_CLASSES[weightClass(f.weight)].label}${f.weightNote ? `: ${f.weightNote}` : ''}</span>
          <span class="bar" style="--fill:${Math.max(weightPct, 4)}" aria-hidden="true"><span class="bar__fill"></span></span>
        </dd>
      </div>
      <div class="stat" data-reveal data-reveal-delay="0.06">
        <dt>Mobilität</dt>
        <dd>
          <span class="stat__value">${f.mobility}<span class="stat__unit"> von 5</span></span>
          <span class="stat__meta">${MOBILITY[f.mobility]}</span>
          <span class="pips" aria-hidden="true">${[1, 2, 3, 4, 5].map((n) => html`<span class="pip${n <= f.mobility ? ' is-on' : ''}"></span>`)}</span>
        </dd>
      </div>
      <div class="stat" data-reveal data-reveal-delay="0.12">
        <dt>Archetyp</dt>
        <dd>
          <span class="stat__value stat__value--word">${ARCHETYPES[f.archetype]}</span>
          <span class="stat__meta">${ARCHETYPE_HINT[f.archetype]}</span>
        </dd>
      </div>
      <div class="stat" data-reveal data-reveal-delay="0.18">
        <dt>Tier-Platzierung</dt>
        <dd>
          ${placement
            ? html`<span class="stat__value">${placement.tier}</span>
                <span class="stat__meta">Rang ${placement.rank} von ${TIER_TOTAL}, Panel-Wertung ${de(placement.score)}</span>
                <span class="bar bar--heat" style="--fill:${heatPct}" aria-hidden="true"><span class="bar__fill"></span></span>`
            : html`<span class="stat__value stat__value--word">Nicht gelistet</span>`}
        </dd>
      </div>
    </dl>
  </section>`;
}

function metaSection(f: Fighter, guide: FighterGuide | undefined): Markup {
  const parent = f.echoOf ? FIGHTER_BY_SLUG.get(f.echoOf) : undefined;
  const related = parent ? [parent] : FIGHTERS.filter((x) => x.echoOf === f.slug);
  const sharesRank = (other: Fighter): boolean => TIER_BY_SLUG.get(other.slug)?.rank === TIER_BY_SLUG.get(f.slug)?.rank;

  return html`<section class="container fmeta" aria-labelledby="meta-title">
    <div class="fmeta__text">
      <h2 id="meta-title" data-reveal="wipe">Im aktuellen Meta</h2>
      ${(guide?.meta ?? [f.tagline]).map((p) => html`<p data-reveal>${p}</p>`)}
      ${related.map(
        (r) => html`<p class="fmeta__echo">
          ${parent ? 'Echo-Fighter von' : 'Hat einen Echo-Fighter:'}
          <a class="link" href="${link(`/fighter/${r.slug}`)}">${r.name}</a>.
          ${sharesRank(r) ? 'In der UltRank-Liste teilen sich beide einen Rang.' : 'UltRank bewertet beide getrennt.'}
        </p>`,
      )}
      ${guide?.sources.length
        ? html`<p class="fmeta__sources">
            Quellen: ${guide.sources.map((s, i) => html`${i ? ', ' : ''}<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)}
          </p>`
        : ''}
    </div>
    ${guide
      ? html`<div class="fmeta__lists">
          <div class="plusminus" data-reveal>
            <h3>Stärken</h3>
            <ul role="list">${guide.strengths.map((s) => html`<li>${s}</li>`)}</ul>
          </div>
          <div class="plusminus plusminus--minus" data-reveal>
            <h3>Schwächen</h3>
            <ul role="list">${guide.weaknesses.map((s) => html`<li>${s}</li>`)}</ul>
          </div>
        </div>`
      : ''}
  </section>`;
}

type TabId = 'bnb' | 'meta';

function combosSection(f: Fighter, guide: FighterGuide | undefined, active: TabId, pending = false): Markup {
  const head = html`<div class="section-head">
    <h2 id="combos-title" data-reveal="wipe">Combo-Routen</h2>
    <p>Jede Route verlinkt ihre Quelle; Prozentangaben stehen so da, wie die Quelle sie nennt. Schaden aus Ultimate Frame Data, inklusive 1v1-Faktor und gerundet.</p>
  </div>`;

  if (!guide) {
    return html`<section class="container fcombos" id="combos" aria-labelledby="combos-title">
      ${head}
      ${pending
        ? html`<p class="tabpanel__intro">Combo-Routen werden geladen …</p>`
        : html`<div class="empty">
            <h3>Für ${f.name} sind noch keine Combo-Routen erfasst.</h3>
            <p>Tier-Platzierung und Eigenschaften stehen bereits. Combo-Routen gibt es aktuell für ${GUIDE_COUNT} Fighter.</p>
            <a class="btn btn--sm" href="${link('/roster', { routen: '1' })}">${ICONS.combo}Fighter mit Combo-Routen</a>
          </div>`}
    </section>`;
  }

  const groups: Array<{ id: TabId; label: string; intro: string; combos: Combo[] }> = [
    {
      id: 'bnb',
      label: 'Bread & Butter',
      intro: 'Verlässliche Routen für den Match-Alltag: wenig Risiko, hohe Trefferquote.',
      combos: guide.combos.filter((c) => c.kind === 'bnb'),
    },
    {
      id: 'meta',
      label: 'Meta-Routen',
      intro: 'Optimierte Kill- und Schadensrouten, wie Top-Player sie einsetzen.',
      combos: guide.combos.filter((c) => c.kind === 'meta'),
    },
  ];

  return html`<section class="container fcombos" id="combos" aria-labelledby="combos-title">
    ${head}
    <div class="tabs" role="tablist" aria-label="Combo-Kategorie">
      ${groups.map(
        (g) => html`<button class="tab" type="button" role="tab" id="tab-${g.id}" aria-controls="panel-${g.id}"
          aria-selected="${String(g.id === active)}" tabindex="${g.id === active ? '0' : '-1'}" data-tab="${g.id}">
          ${g.label}<span class="tab__count">${g.combos.length}</span>
        </button>`,
      )}
      <span class="tabs__ink" aria-hidden="true"></span>
    </div>
    ${groups.map(
      (g) => html`<div class="tabpanel" role="tabpanel" id="panel-${g.id}" aria-labelledby="tab-${g.id}" tabindex="0" ${g.id === active ? '' : raw('hidden')}>
        <p class="tabpanel__intro">${g.intro}</p>
        <div class="combo-grid">${g.combos.map(comboCard)}</div>
      </div>`,
    )}
  </section>`;
}

function navSection(prev: Fighter, next: Fighter): Markup {
  const item = (f: Fighter, dir: 'prev' | 'next'): Markup => {
    const p = TIER_BY_SLUG.get(f.slug);
    const face = faceThumb(f, 'fnav__face');
    return html`<a class="fnav__link fnav__link--${dir}" href="${link(`/fighter/${f.slug}`)}" style="${accentVars(f.colors)}">
      ${dir === 'prev' ? html`${ICONS.chevronLeft}${face}` : ''}
      <span>
        <span class="fnav__label">${dir === 'prev' ? 'Vorheriger' : 'Nächster'} Rang${p ? `, #${p.rank}` : ''}</span>
        <span class="fnav__name">${f.name}</span>
      </span>
      ${dir === 'next' ? html`${face}${ICONS.chevronRight}` : ''}
    </a>`;
  };
  return html`<nav class="container fnav" aria-label="Fighter nach Tier-Rang">${item(prev, 'prev')}${item(next, 'next')}</nav>`;
}

function mountTabs(root: HTMLElement, combos: Combo[]): () => void {
  const tabs = qsa<HTMLButtonElement>('[role="tab"]', root);
  const panels = qsa<HTMLElement>('[role="tabpanel"]', root);
  const ink = qs<HTMLElement>('.tabs__ink', root);
  let stopAutoplay: () => void = () => {};

  const moveInk = (tab: HTMLElement, animate: boolean): void => {
    if (!ink) return;
    const vars = { x: tab.offsetLeft, width: tab.offsetWidth };
    if (animate && motionOK()) gsap.to(ink, { ...vars, duration: 0.45, ease: 'expo.out' });
    else gsap.set(ink, vars);
  };

  const select = (tab: HTMLButtonElement, opts: { focus?: boolean; animate?: boolean } = {}): void => {
    const { focus = false, animate = true } = opts;
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach((p) => {
      const on = p.id === tab.getAttribute('aria-controls');
      p.hidden = !on;
      if (on && animate && motionOK()) {
        gsap.fromTo(qsa('.combo', p), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'expo.out' });
      }
    });
    moveInk(tab, animate);
    if (focus) tab.focus();

    const query = parse(location.hash).query;
    if (tab.dataset.tab === 'meta') query.set('routen', 'meta');
    else query.delete('routen');
    replaceQuery(query);

    stopAutoplay();
    const panel = panels.find((p) => !p.hidden);
    stopAutoplay = panel ? playFirstVisible(panel, combos) : () => {};
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      const target =
        e.key === 'ArrowRight' ? (i + 1) % tabs.length
        : e.key === 'ArrowLeft' ? (i - 1 + tabs.length) % tabs.length
        : e.key === 'Home' ? 0
        : e.key === 'End' ? tabs.length - 1
        : -1;
      const next = tabs[target];
      if (!next) return;
      e.preventDefault();
      select(next, { focus: true });
    });
  });

  const current = (): HTMLButtonElement | undefined => tabs.find((t) => t.getAttribute('aria-selected') === 'true');
  const initial = current() ?? tabs[0];
  if (initial) select(initial, { animate: false });

  const realign = (): void => {
    const tab = current();
    if (tab) moveInk(tab, false);
  };
  window.addEventListener('resize', realign);
  void document.fonts?.ready.then(realign);

  return () => {
    stopAutoplay();
    window.removeEventListener('resize', realign);
  };
}

export function fighterPage(route: Route): PageView {
  const f = FIGHTER_BY_SLUG.get(route.params.slug ?? '');
  if (!f) return notFoundPage('Fighter-Seite');

  // Tiers from A+ downwards load on demand; until then the sections render as pending.
  const hasGuide = GUIDE_SLUGS.has(f.slug);
  const guide = guideFor(f.slug);
  const video = videoFor(f.slug);
  const active: TabId = route.query.get('routen') === 'meta' ? 'meta' : 'bnb';
  const i = BY_RANK.indexOf(f);
  const prev = BY_RANK[(i - 1 + BY_RANK.length) % BY_RANK.length] ?? f;
  const next = BY_RANK[(i + 1) % BY_RANK.length] ?? f;

  return {
    title: `${f.name}: Combos, Tier und Meta – Blastzone`,
    anchor: route.query.has('routen') ? '#combos' : undefined,
    markup: html`<article class="page page--flush fighter" style="${accentVars(f.colors)}" aria-labelledby="fighter-name">
      ${heroSection(f)} ${statsSection(f)}
      <div data-meta>${metaSection(f, guide)}</div>
      ${video ? videoSection(video, f.name) : ''}
      <div data-combos>${combosSection(f, guide, active, hasGuide && !guide)}</div>
      ${navSection(prev, next)}
    </article>`,
    mount(root) {
      const cleanups: Array<() => void> = [];
      cleanups.push(
        scope(root, () => {
          reveals(root);
          parallax(root);
          if (!motionOK()) return;
          gsap.fromTo('.fhero__name-text', { fontStretch: '125%', autoAlpha: 0, x: -24 }, { fontStretch: '74%', autoAlpha: 1, x: 0, duration: 1.2, ease: 'expo.out' });
          gsap.fromTo('[data-hero-in]', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08, delay: 0.25, ease: 'expo.out' });
          gsap.from('.bar__fill', { scaleX: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: '.stats', start: 'top 90%', once: true } });
        }),
      );

      qs('[data-jump]', root)?.addEventListener('click', () => {
        const target = qs<HTMLElement>('#combos', root);
        if (target) scrollToTarget(target);
      });

      const hero = qs<HTMLElement>('.fhero', root);
      const art = qs<HTMLElement>('[data-depth]', root);
      if (hero && art) cleanups.push(pointerDepth(hero, [[art, 28]]));

      cleanups.push(wireVideo(root));

      let comboCleanups: Array<() => void> = [];
      const wireCombos = (g: FighterGuide): void => {
        comboCleanups.forEach((fn) => fn());
        comboCleanups = [bindComboCards(root, g.combos), mountTabs(root, g.combos)];
      };

      if (guide) wireCombos(guide);
      else if (hasGuide) {
        void loadLateGuides().then(() => {
          const loaded = guideFor(f.slug);
          const host = qs<HTMLElement>('[data-combos]', root);
          if (!loaded || !host?.isConnected) return;
          const metaHost = qs<HTMLElement>('[data-meta]', root);
          if (metaHost) mount(metaHost, metaSection(f, loaded));
          mount(host, combosSection(f, loaded, active));
          wireCombos(loaded);
        });
      }

      cleanups.push(() => comboCleanups.forEach((fn) => fn()));
      return () => cleanups.forEach((fn) => fn());
    },
  };
}
