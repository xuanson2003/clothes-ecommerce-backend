const Product = require('../models/Product');

class Poppular {
    // [GET] /poppularinwomen
    async getPoppular(req, res) {
        let products = await Product.find({ category: req.body.category });
        let popular_in_women = products.slice(0, 4);
        console.log('popular in women fetched');
        res.send(popular_in_women);
    }
}

module.exports = new Poppular();
