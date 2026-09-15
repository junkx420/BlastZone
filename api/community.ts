import * as player from './_routes/community/player.js';
import { dispatcher } from './_lib/dispatch.js';

/**
 * /api/community/{player} als eine Function. Hier landen auch die kommenden
 * Social-Endpunkte (Verzeichnis, Pinnwand, Nachrichten), damit das Budget von
 * 12 Functions hält. Warum gebündelt: api/_lib/dispatch.ts, Rewrite in vercel.json.
 */
const routes = dispatcher({ player });

export const GET = routes.GET;
export const POST = routes.POST;
export const PUT = routes.PUT;
export const PATCH = routes.PATCH;
export const DELETE = routes.DELETE;
