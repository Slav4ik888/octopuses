import Router from 'koa-router';
import * as ui from '../../controllers/ui.js';
import * as u from '../../controllers/users.js';
import { mustBeAuthenticated } from '../../libs/verifications/must-be-authenticated.js';
import FBAuth from '../../firebase/fb-auth.js';


const router = new Router({ prefix: '/api' });


// UI
router.get(`/getPolicy`, ui.getPolicy);

// USERS
router.post(`/userSignup`, u.userSignup);
router.post(`/sendPasswordResetEmail`, u.sendPasswordResetEmail);
router.post(`/userLogin`, u.userLogin);
router.get(`/getAllUserData`, FBAuth, u.getAllUserData);

// Testing
router.get(`/hello`, u.hello);
router.get(`/hello/:id`, u.helloById);

export default router;