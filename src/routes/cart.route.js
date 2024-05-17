const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');

const cartController = require('../Controllers/CartController');

router.post('/getcart', fetchUser, cartController.getCart);
router.post('/addtocart', fetchUser, cartController.addToCart);
router.delete('/removefromcart', fetchUser, cartController.removeFromCart);

module.exports = router;
