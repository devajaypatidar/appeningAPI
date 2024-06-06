const express = require('express');
const router = express.Router();
// const authorization = require('../utils/auth');
const searchController = require('../controller/searchController')

// Route to handle POST requests for searching
router.post('/',searchController);

module.exports = router;