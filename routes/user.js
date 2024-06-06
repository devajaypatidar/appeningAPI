const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authorization = require('../utils/auth');

// POST request handler for user login
router.post('/login',userController.login);

// POST request handler for user registration
router.post('/register',userController.register);

// GET request handler for listing users
// Requires authorization using JWT middleware
router.get('/list',authorization,userController.listUsers);


module.exports = router;
