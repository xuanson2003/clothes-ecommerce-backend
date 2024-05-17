const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const uploadController = require('../Controllers/UploadController');

router.post('/', upload.single('product'), uploadController.upload);

module.exports = router;
