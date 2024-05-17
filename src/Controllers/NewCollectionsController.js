const Product = require('../models/Product');

class NewCollectionsController {
    // [GET] /newcollections
    async getNewCollections(req, res) {
        let products = await Product.find({});
        let newcollectiond = products.slice(1).slice(-8);
        console.log('New collection fetched');
        res.send(newcollectiond);
    }
}

module.exports = new NewCollectionsController();
