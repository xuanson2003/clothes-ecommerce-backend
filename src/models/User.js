const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    cartData: { type: Object },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);
