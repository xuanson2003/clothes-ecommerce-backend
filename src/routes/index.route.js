const express = require('express');

const loginController = require('../controllers/LoginController');
const signupController = require('../controllers/SingUpController');
const productController = require('../controllers/ProductController');
const cartController = require('../controllers/CartController');
const poppularController = require('../controllers/PopularController');
const newCollectionsController = require('../controllers/NewCollectionsController');
const uploadController = require('../controllers/UploadController');

const upload = require('../middleware/upload');
const fetchUser = require('../middleware/fetchUser');

function route(app) {
    app.use('/images', express.static('./src/upload/images'));

    // login
    app.post('/login', loginController.login);

    // signup
    app.post('/signup', signupController.signup);

    // product
    app.get('/product/allproducts', productController.allProducts);
    app.post('/product/addproduct', productController.addProduct);
    app.delete('/product/removeproduct', productController.removeProduct);

    // cart
    app.post('/cart/getcart', fetchUser, cartController.getCart);
    app.post('/cart/addtocart', fetchUser, cartController.addToCart);
    app.delete('/cart/removeOneItem', fetchUser, cartController.removeOneItem);
    app.delete('/cart/removefromcart', fetchUser, cartController.removeFromCart);

    // popular
    app.get('/popular/:category', poppularController.getPoppular);

    // new collections
    app.get('/newcollections', newCollectionsController.getNewCollections);

    // upload
    app.post('/upload', upload.single('product'), uploadController.upload);
}

module.exports = route;
