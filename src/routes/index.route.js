const express = require('express');

const signupRoute = require('./signup.route');
const productRoute = require('./product.route');
const cartRoute = require('./cart.route');
const newCollectionsRoute = require('./newCollections.route');
const popularRoute = require('./popular.route');
const uploadRoute = require('./upload.route');

function route(app) {
    app.use('/images', express.static('./src/upload/images'));
    app.use('/signup', signupRoute);
    app.use('/product', productRoute);
    app.use('/cart', cartRoute);
    app.use('/newcollections', newCollectionsRoute);
    app.use('/popular', popularRoute);
    app.use('/upload', uploadRoute);
}

module.exports = route;
