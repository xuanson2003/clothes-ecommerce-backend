const express = require('express');
const router = express.Router();

const poppular = require('../Controllers/PopularController');

router.get('/women', poppular.getPoppularInWomen);

module.exports = router;
