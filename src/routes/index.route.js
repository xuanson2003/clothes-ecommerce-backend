const express = require('express');

const uploadRoute = require('./upload.route');

function route(app) {
    app.use('/images', express.static('./src/upload/images'));
    app.use('/upload', uploadRoute);
}

module.exports = route;
