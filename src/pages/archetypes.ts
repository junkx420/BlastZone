import { faceThumb } from '../components/fighterTile';
import { archetypeColor, membersOf, miniPyramid, pyramidGraphic } from '../components/pyramid';
import { ARCHETYPE_INFO, ARCHETYPE_ORDER, ERGAENZT } from '../data/archetypes';
import { FIGHTER_BY_SLUG, FIGHTERS } from '../data/fighters';
import type { Archetype } from '../data/types';
import { accentVars } from '../lib/color';
import { html, qs, qsa } from '../lib/dom';
import { reveals, scope, scrollToTarget } from '../lib/motion';
import { link, replaceQuery, type Route } from '../lib/router';
import type { PageView } from './types';

const isArchetype = (v: string | null): v is Archetype => v !== null && v in ARCHETYPE_INFO;

function card(typ: Archetype, active: boolean): ReturnType<typeof html> {
  const info = ARCHETYPE_INFO[typ];
  const members = membersOf(typ);
  return html`<li class="archcard glass${active ? ' is-active' : ''}" id="typ-${typ}" data-typ="${typ}" style="--typ:${archetypeColor(typ)}" data-reveal>
    <div class="archcard__head">
      ${miniPyramid(typ, 'archcard__mini')}
      <h3 class="archcard__title">${info.label}</h3>
      <span class="archcard__count">${members.length} Fighter</span>
    </div>
    <p class="archcard__text">${info.text}</p>
    <ul class="archcard__fighters" role="list">
      ${members.map((f) => {
        const added = ERGAENZT.has(f.slug);
        return html`<li>
          <a class="archchip${added ? ' is-added' : ''}" href="${link(`/fighter/${f.slug}`)}" style="${accentVars(f.colors)}"${added ? html` title="Nicht auf der ursprünglichen Pyramide, von uns eingeordnet"` : ''}>
            ${faceThumb(f, 'archchip__face')}
            <span class="archchip__name">${f.name}</span>${added ? html`<span class="vh"> (von uns eingeordnet)</span>` : ''}
          </a>
        </li>`;
      })}
    </ul>
  </li>`;
}

export function archetypesPage(route: Route): PageView {
  const typ = route.query.get('typ');
  const active = isArchetype(typ) ? typ : null;
  const meSlug = route.query.get('fighter');
  const me = meSlug ? FIGHTER_BY_SLUG.get(meSlug) : undefined;

  return {
    title: 'Archetypen | Blastzone',
    anchor: me ? '#pyramide' : active ? `#typ-${active}` : undefined,
    markup: html`<div class="page arch-page">
      <header class="container page-head">
        <h1 data-reveal="wipe">Archetypen</h1>
        <p>
          Alle ${FIGHTERS.length} Fighter in 16 Feldern zwischen drei Spielstilen: Rushdown oben, Zoner links, Bait & Punish rechts. Je näher ein
          Feld an einer Ecke liegt, desto stärker prägt dieser Stil den Fighter.
        </p>
      </header>

      <section class="container arch-stage" id="pyramide" aria-labelledby="pyr-title">
        <h2 class="vh" id="pyr-title">Pyramide</h2>
        ${me
          ? html`<p class="arch-stage__me" style="${accentVars(me.colors)}">
              <a class="link" href="${link(`/fighter/${me.slug}`)}">${me.name}</a> steht bei ${ARCHETYPE_INFO[me.archetype].label}.
            </p>`
          : ''}
        <div class="arch-stage__frame">${pyramidGraphic({ active, me: me?.slug })}</div>
        <p class="arch-stage__note">
          <span class="arch-stage__key" aria-hidden="true"></span>
          Die ursprüngliche Pyramide kennt die Miis und die meisten DLC-Fighter noch nicht. Diese ${ERGAENZT.size} sind gestrichelt umrandet und von uns eingeordnet.
        </p>
      </section>

      <section class="container arch-list" aria-labelledby="arch-list-title">
        <h2 class="vh" id="arch-list-title">Alle 16 Archetypen</h2>
        <ol class="archgrid" role="list">
          ${ARCHETYPE_ORDER.map((t) => card(t, t === active))}
        </ol>
      </section>
    </div>`,
    mount(root) {
      const setActive = (next: Archetype): void => {
        qsa('[data-cell]', root).forEach((el) => el.classList.toggle('is-active', el.getAttribute('data-cell') === next));
        qsa('.archcard', root).forEach((el) => el.classList.toggle('is-active', el.dataset.typ === next));
      };

      // Klick auf ein Feld: zur Karte darunter, ohne die Seite neu aufzubauen.
      const onClick = (e: Event): void => {
        const area = (e.target as Element | null)?.closest('[data-cell-link]');
        if (!area) return;
        const next = area.getAttribute('data-cell-link');
        if (!isArchetype(next)) return;
        e.preventDefault();
        setActive(next);
        replaceQuery(new URLSearchParams({ typ: next }));
        const target = qs<HTMLElement>(`#typ-${next}`, root);
        if (target) scrollToTarget(target);
      };

      // Karte unter dem Zeiger: ihr Feld in der Grafik mit anzeigen.
      const onOver = (e: Event): void => {
        const typ = (e.target as Element | null)?.closest<HTMLElement>('.archcard')?.dataset.typ ?? '';
        qsa('[data-cell]', root).forEach((el) => el.classList.toggle('is-hot', el.getAttribute('data-cell') === typ));
      };

      root.addEventListener('click', onClick);
      const list = qs('.archgrid', root);
      list?.addEventListener('pointerover', onOver);
      list?.addEventListener('pointerleave', onOver);
      const undo = scope(root, () => reveals(root));
      return () => {
        root.removeEventListener('click', onClick);
        list?.removeEventListener('pointerover', onOver);
        list?.removeEventListener('pointerleave', onOver);
        undo();
      };
    },
  };
}
