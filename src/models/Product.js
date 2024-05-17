const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    id: { type: Number, require: true },
    name: { type: String, require: true },
    image: { type: String, require: true },
    category: { type: String, require: true },
    new_price: { type: Number, require: true },
    old_price: { type: Number, require: true },
    date: { type: Date, default: Date.now },
    avilable: { type: Boolean, default: true },
});

module.exports = mongoose.model('Product', Product);
