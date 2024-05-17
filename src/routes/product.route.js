const express = require('express');
const router = express.Router();

const productController = require('../Controllers/ProductController');

router.get('/allproducts', productController.allProducts);
router.post('/addproduct', productController.addProduct);
router.delete('/removeproduct', productController.removeProduct);

module.exports = router;
