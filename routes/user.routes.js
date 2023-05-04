import * as userControllers from '../controllers/user.controllers.js';
import * as express from 'express';
import {isLogged} from '../middleware/isLogged.js';

const router = express.Router();

router.post('/signIn', userControllers.signIn);
router.post('/signUp', userControllers.signUp);

router.use(isLogged);
router.get('/', userControllers.get);
router.put('/update', userControllers.update);

export {router};