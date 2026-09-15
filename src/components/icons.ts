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
  user: stroke('<circle cx="12" cy="8" r="4"/><path d="M4 21c1.2-4 4.3-6 8-6s6.8 2 8 6"/>'),
  sun: stroke('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  moon: stroke('<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/>'),
  bookmark: stroke('<path d="M6 3.5h12v17l-6-4.2-6 4.2z"/>'),
  bookmarkFilled: fill('<path d="M5 2.5h14v19.3l-7-4.9-7 4.9z"/>'),
  logout: stroke('<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 17l-5-5 5-5"/><path d="M5 12h11"/>'),
  trash: stroke('<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6.5 7l1 13h9l1-13"/>'),
  check: stroke('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
  dot: fill('<circle cx="12" cy="12" r="3.5"/>'),
  lock: stroke('<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>'),
  globe: stroke('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9s1.3-6.4 3.8-9z"/>'),
  mail: stroke('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 7 8.5-7"/>'),
} satisfies Record<string, Markup>;
