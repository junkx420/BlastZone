import * as blocks from './_routes/community/blocks.js';
import * as directory from './_routes/community/directory.js';
import * as inbox from './_routes/community/inbox.js';
import * as matchups from './_routes/community/matchups.js';
import * as me from './_routes/community/me.js';
import * as messages from './_routes/community/messages.js';
import * as player from './_routes/community/player.js';
import { dispatcher } from './_lib/dispatch.js';

/**
 * /api/community/{player,directory,me,messages,inbox,blocks} als eine Function.
 * Hier landen auch kommende Social-Endpunkte (Pinnwand), damit das Budget von 12
 * Functions hält. Warum gebündelt: api/_lib/dispatch.ts, Rewrite in vercel.json.
 */
const routes = dispatcher({ blocks, directory, inbox, matchups, me, messages, player });

export const GET = routes.GET;
export const POST = routes.POST;
export const PUT = routes.PUT;
export const PATCH = routes.PATCH;
export const DELETE = routes.DELETE;
