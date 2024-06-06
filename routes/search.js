const express = require('express');
const router = express.Router();
// const authorization = require('../utils/auth');
const searchController = require('../controller/searchController')

router.post('/',searchController);

module.exports = router;