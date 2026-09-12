import { A_MINUS_GUIDES } from './guides-a-minus';
import { A_GUIDES } from './guides-a';
import { A_PLUS_GUIDES } from './guides-a-plus';
import { S_MINUS_GUIDES } from './guides-s-minus';
import type { FighterGuide } from './types';

/** Profiles added tier by tier, in UltRank order. guides.ts appends them to its base set. */
export const TIER_GUIDES: FighterGuide[] = [...S_MINUS_GUIDES, ...A_PLUS_GUIDES, ...A_GUIDES, ...A_MINUS_GUIDES];
