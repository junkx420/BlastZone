import * as authorize from './_routes/startgg/authorize.js';
import * as callback from './_routes/startgg/callback.js';
import * as link from './_routes/startgg/link.js';
import * as placements from './_routes/startgg/placements.js';
import * as tournaments from './_routes/startgg/tournaments.js';
import * as verify from './_routes/startgg/verify.js';
import { dispatcher } from './_lib/dispatch.js';

/**
 * /api/startgg/{link,placements,tournaments,authorize,callback,verify} als eine Function.
 * Warum gebündelt: api/_lib/dispatch.ts, Rewrite in vercel.json. Die Logik steht in api/_routes/startgg/.
 */
const routes = dispatcher({ authorize, callback, link, placements, tournaments, verify });

export const GET = routes.GET;
export const POST = routes.POST;
export const PUT = routes.PUT;
export const PATCH = routes.PATCH;
export const DELETE = routes.DELETE;
