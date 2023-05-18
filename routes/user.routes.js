const userControllers = require('../controllers/user.controllers.js');
const express = require('express');
const {isLogged} = require('../middleware/isLogged.js');
const { isValidForm } = require('../middleware/isValidForm.js');

const router = express.Router();

router.post('/signIn', isValidForm, userControllers.signIn);
router.post('/signUp', isValidForm, userControllers.signUp);

router.use(isLogged);
router.get('/', userControllers.get);
router.put('/update', userControllers.update);

module.exports = {
    router
};