const express = require('express');
const router = express.Router();

const newCollectionsController = require('../Controllers/NewCollectionsController');

router.get('/', newCollectionsController.getNewCollections);

module.exports = router;
