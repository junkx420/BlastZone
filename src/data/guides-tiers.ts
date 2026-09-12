import { S_MINUS_GUIDES } from './guides-s-minus';
import type { FighterGuide } from './types';

/**
 * Tier guides that stay in the initial bundle. Only S− qualifies: the home page replay
 * resolves one of its combos (aegis-pyra-dtilt-uair), so it has to be there on first paint.
 * Everything from A+ downwards lives in guides-late.ts and loads on demand – see guide-index.ts.
 */
export const TIER_GUIDES: FighterGuide[] = [...S_MINUS_GUIDES];
