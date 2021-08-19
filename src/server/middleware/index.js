import bodyParser from 'koa-bodyparser';
import router from './router/index.js';

export default function (app) {
  app.use(bodyParser());
  app.use(router.routes());
}
