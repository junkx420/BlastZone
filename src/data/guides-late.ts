import { A_MINUS_GUIDES } from './guides-a-minus';
import { A_GUIDES } from './guides-a';
import { A_PLUS_GUIDES } from './guides-a-plus';
import { B_MINUS_GUIDES } from './guides-b-minus';
import { B_PLUS_GUIDES } from './guides-b-plus';
import { C_MINUS_GUIDES } from './guides-c-minus';
import { C_PLUS_GUIDES } from './guides-c-plus';
import type { FighterGuide } from './types';

/**
 * Tier A+ downwards. Import this module *dynamically only* (see guide-index.ts) –
 * it is the bulk of the guide data and must stay out of the initial bundle.
 * S− stays in guides.ts because the home page replay resolves one of its combos.
 */
export const LATE_GUIDES: FighterGuide[] = [
  ...A_PLUS_GUIDES,
  ...A_GUIDES,
  ...A_MINUS_GUIDES,
  ...B_PLUS_GUIDES,
  ...B_MINUS_GUIDES,
  ...C_PLUS_GUIDES,
  ...C_MINUS_GUIDES,
];
