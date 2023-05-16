const userControllers = require('../controllers/user.controllers.js');
const express = require('express');
const {isLogged} = require('../middleware/isLogged.js');

const router = express.Router();

router.post('/signIn', userControllers.signIn);
router.post('/signUp', userControllers.signUp);

router.use(isLogged);
router.get('/', userControllers.get);
router.put('/update', userControllers.update);

module.exports = {
    router
};