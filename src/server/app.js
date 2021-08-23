import Koa from 'koa';
import dotenv from './utils/dotenv/index.js';
import middleware from './middleware/index.js';

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  }
  catch (err) {
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

middleware(app);

export default app;
