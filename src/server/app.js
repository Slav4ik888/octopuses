import Koa from 'koa';
// import cookie from 'koa-cookie';

import dotenv from '../utils/dotenv/index.js';
import middleware from './middleware/index.js';
// Functions
import { loggerServer } from './libs/loggers/index.js';
// Helpers
import { objectFieldsToString } from '../utils/objects/object-fields-to-string/object-fields-to-string.js';


const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  }
  catch (err) {
    loggerServer.error(`loggerServer: ${objectFieldsToString(err)}`);

    if (err.status) {
      ctx.status = err.status;
      ctx.body = {error: err.message};
    }
    else {
      console.error(err);
      ctx.status = 500;
      ctx.body = {error: 'Internal server error'};
    }
  }
});


// app.use(cookie());

middleware(app);

export default app;
