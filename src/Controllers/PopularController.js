const Product = require('../models/Product');

class Poppular {
    // [GET] /poppularinwomen
    async getPoppularInWomen(req, res) {
        let products = await Product.find({ category: 'women' });
        let popular_in_women = products.slice(0, 4);
        console.log('popular in women fetched');
        res.send(popular_in_women);
    }
}

module.exports = new Poppular();
