import { FIGHTERS } from '../data/fighters';
import { searchFighters } from '../data/search';
import { TIER_BY_SLUG } from '../data/tiers';
import type { Fighter } from '../data/types';
import { accentVars } from '../lib/color';
import { html, mount, qs } from '../lib/dom';
import { t } from '../i18n';
import { lockScroll } from '../lib/motion';
import { link } from '../lib/router';
import { faceThumb } from './fighterTile';
import { ICONS } from './icons';
import { tierBadge } from './tierBadge';

const LIMIT = 8;

/** Global fighter jump: "/" or Ctrl/Cmd+K from anywhere. */
export function initPalette(): { open: (query?: string) => void } {
  const dialog = document.createElement('dialog');
  dialog.className = 'palette';
  dialog.setAttribute('aria-labelledby', 'palette-title');
  dialog.setAttribute('data-lenis-prevent', '');
  mount(
    dialog,
    html`<div class="palette__panel">
      <h2 class="vh" id="palette-title">${t('palette.title')}</h2>
      <div class="palette__field">
        ${ICONS.search}
        <label class="vh" for="palette-input">${t('palette.inputLabel')}</label>
        <input id="palette-input" class="palette__input" type="text" role="combobox" aria-expanded="true"
          aria-controls="palette-list" aria-autocomplete="list" autocomplete="off" spellcheck="false"
          placeholder="${t('palette.placeholder')}" />
        <button class="palette__close" type="button" data-close>Esc<span class="vh">${t('palette.close')}</span></button>
      </div>
      <ul id="palette-list" class="palette__list" role="listbox" aria-label="${t('palette.results')}"></ul>
      <p class="palette__empty" hidden>${t('palette.empty')}</p>
    </div>`,
  );
  document.body.append(dialog);

  const input = qs<HTMLInputElement>('.palette__input', dialog)!;
  const list = qs<HTMLUListElement>('.palette__list', dialog)!;
  const empty = qs<HTMLElement>('.palette__empty', dialog)!;
  let results: Fighter[] = [];
  let active = 0;

  const render = (): void => {
    results = (input.value.trim() ? searchFighters(input.value) : searchFighters('', FIGHTERS)).slice(0, LIMIT);
    active = Math.min(active, Math.max(0, results.length - 1));
    empty.hidden = results.length > 0;
    mount(
      list,
      html`${results.map(
        (f, i) => html`<li id="palette-opt-${f.slug}" class="palette__opt" role="option" aria-selected="${i === active ? 'true' : 'false'}"
            data-slug="${f.slug}" style="${accentVars(f.colors)}">
            ${faceThumb(f, 'palette__face')}
            <span class="palette__name">${f.name}</span>
            <span class="palette__series">${f.series}</span>
            ${tierBadge(TIER_BY_SLUG.get(f.slug))}
          </li>`,
      )}`,
    );
    const current = results[active];
    if (current) input.setAttribute('aria-activedescendant', `palette-opt-${current.slug}`);
    else input.removeAttribute('aria-activedescendant');
    qs(`#palette-opt-${current?.slug ?? ''}`, list)?.scrollIntoView({ block: 'nearest' });
  };

  const close = (): void => dialog.close();
  const go = (slug: string): void => {
    close();
    location.hash = link(`/fighter/${slug}`);
  };

  input.addEventListener('input', () => {
    active = 0;
    render();
  });
  input.addEventListener('keydown', (e) => {
    if (!results.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      active = (active + (e.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length;
      render();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const pick = results[active];
      if (pick) go(pick.slug);
    }
  });
  list.addEventListener('click', (e) => {
    const option = (e.target as Element).closest<HTMLElement>('[data-slug]');
    if (option?.dataset.slug) go(option.dataset.slug);
  });
  qs('[data-close]', dialog)?.addEventListener('click', close);
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) close();
  });
  dialog.addEventListener('close', () => lockScroll(false));

  const open = (query = ''): void => {
    if (dialog.open) return;
    input.value = query;
    active = 0;
    render();
    dialog.showModal();
    lockScroll(true);
    input.focus();
  };

  document.addEventListener('keydown', (e) => {
    const typing = (e.target as Element | null)?.closest('input, textarea, select, [contenteditable="true"]');
    const slash = e.key === '/' && !typing;
    const combo = e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey);
    if (slash || combo) {
      e.preventDefault();
      open();
    }
  });

  return { open };
}
