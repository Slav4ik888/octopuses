import Router from 'koa-router';
// import cookie from 'koa-cookie';
import * as u from '../../controllers/users.js';

const router = new Router({ prefix: '/api' });

// router.use(cookie());


// USERS
router.post(`/userSignup`, u.userSignup);

// Testing
router.get(`/hello`, u.hello);
router.get(`/hello/:id`, u.helloById);

export default router;