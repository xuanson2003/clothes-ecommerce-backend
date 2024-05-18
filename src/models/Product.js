const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Product = new mongoose.Schema(
    {
        _id: { type: Number },
        name: { type: String, require: true },
        image: { type: String, require: true },
        category: { type: String, require: true },
        new_price: { type: Number, require: true },
        old_price: { type: Number, require: true },
        date: { type: Date, default: Date.now },
        avilable: { type: Boolean, default: true },
    },
    {
        _id: false,
    },
);

Product.plugin(AutoIncrement);

module.exports = mongoose.model('Product', Product);
