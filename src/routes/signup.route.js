const express = require('express');
const router = express.Router();

const signupController = require('../Controllers/SingUpController');

router.post('/', signupController.signup);

module.exports = router;
