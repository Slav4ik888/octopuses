import { admin, db } from './admin.js';
// Functions
import NotAutorized from '../libs/errors/not-authorized.js';
import { loggerAuth } from '../libs/loggers/index.js';
import { getCookies } from '../libs/get-cookies/get-cookies.js';



export default async function (ctx, next) {
  try {
    getCookies(ctx);
    const sessionCookie = ctx.cookie.session || ``;
    loggerAuth.info(`[FBAuth]: ${Boolean(sessionCookie)}`);

    // Verify the session cookie. In this case an additional check is added to detect
    // if the user's Firebase session was revoked, user deleted/disabled, etc.
  
    if (!sessionCookie) throw new NotAutorized(`Не авторизован`)
  
    ctx.state.user = await admin
      .auth()
      .verifySessionCookie(sessionCookie, true /** checkRevoked */);
    
    // console.log('ctx.user: ', ctx.user);
    return next();
  }
  catch(err) {
    // 'auth/id-token-expired'
    loggerAuth.error(`[FBAuth] - oшибка в верификации sessionCookie: ${err.code}`)
    throw new NotAutorized(`Ошибка в верификации сессии`)
  };
}