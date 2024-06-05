const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authorization = require('../utils/auth');
router.post('/login',userController.login);

router.post('/register',userController.register);

router.get('/list',authorization,userController.listUsers);


module.exports = router;
