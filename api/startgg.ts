import * as link from './_routes/startgg/link.js';
import * as placements from './_routes/startgg/placements.js';
import { dispatcher } from './_lib/dispatch.js';

/**
 * /api/startgg/{link,placements} als eine Function.
 * Warum gebündelt: api/_lib/dispatch.ts, Rewrite in vercel.json. Die Logik steht in api/_routes/startgg/.
 */
const routes = dispatcher({ link, placements });

export const GET = routes.GET;
export const POST = routes.POST;
export const PUT = routes.PUT;
export const PATCH = routes.PATCH;
export const DELETE = routes.DELETE;
