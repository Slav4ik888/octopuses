import Router from 'koa-router';
import * as ui from '../../controllers/ui.js';
import * as u from '../../controllers/users.js';

// import cookie from 'koa-cookie';
// router.use(cookie());


const router = new Router({ prefix: '/api' });


// UI
router.get(`/getPolicy`, ui.getPolicy);

// USERS
router.post(`/userSignup`, u.userSignup);
router.post(`/sendPasswordResetEmail`, u.sendPasswordResetEmail);
router.post(`/userLogin`, u.userLogin);

// Testing
router.get(`/hello`, u.hello);
router.get(`/hello/:id`, u.helloById);

export default router;