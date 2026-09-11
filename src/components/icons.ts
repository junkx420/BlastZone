import { raw, type Markup } from '../lib/dom';

const stroke = (body: string): Markup =>
  raw(
    `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`,
  );

const fill = (body: string): Markup =>
  raw(`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">${body}</svg>`);

export const ICONS = {
  play: fill('<path d="M8 5.2v13.6L19 12z"/>'),
  pause: fill('<path d="M7 5h3.6v14H7zM13.4 5H17v14h-3.6z"/>'),
  replay: stroke('<path d="M3 12a9 9 0 1 0 2.8-6.5"/><path d="M3 4v5h5"/>'),
  skip: fill('<path d="M6 5.2v13.6L15 12zM16 5h2.6v14H16z"/>'),
  search: stroke('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>'),
  close: stroke('<path d="M6 6l12 12M18 6 6 18"/>'),
  chevronLeft: stroke('<path d="m15 18-6-6 6-6"/>'),
  chevronRight: stroke('<path d="m9 18 6-6-6-6"/>'),
  combo: fill('<path d="M13.5 2.5 5 13.5h5.6L9.5 21.5 19 10h-5.8z"/>'),
  external: stroke('<path d="M14 4h6v6"/><path d="M20 4 10.5 13.5"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
  reset: stroke('<path d="M4 4v6h6"/><path d="M5.5 15a7.5 7.5 0 1 0 1.3-8.3L4 10"/>'),
  burst: fill('<path d="M12 1.5 13.9 8.6 21 6 15.8 12 21.8 16.5 14.3 15 12 22.5 9.9 15 2.2 17.3 7.4 12 3 6 9.9 8.6z"/>'),
} satisfies Record<string, Markup>;
