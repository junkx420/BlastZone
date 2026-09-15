import * as confirm from './_routes/auth/confirm.js';
import * as login from './_routes/auth/login.js';
import * as logout from './_routes/auth/logout.js';
import * as resend from './_routes/auth/resend.js';
import * as session from './_routes/auth/session.js';
import * as signup from './_routes/auth/signup.js';
import { dispatcher } from './_lib/dispatch.js';

/**
 * /api/auth/{confirm,login,logout,resend,session,signup} als eine Function.
 * Warum gebündelt: api/_lib/dispatch.ts, Rewrite in vercel.json. Die Logik steht in api/_routes/auth/.
 */
const routes = dispatcher({ confirm, login, logout, resend, session, signup });

export const GET = routes.GET;
export const POST = routes.POST;
export const PUT = routes.PUT;
export const PATCH = routes.PATCH;
export const DELETE = routes.DELETE;
