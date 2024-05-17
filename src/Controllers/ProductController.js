const Product = require('../models/Product');

class ProductController {
    // [GET] /product/allproducts
    async allProducts(req, res) {
        let products = await Product.find({});
        console.log('All Products Fetched');
        res.send(products);
    }

    // [POST] /product/addproduct
    async addProduct(req, res) {
        let products = await Product.find({});
        let id = 1;
        if (products.length > 0) {
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id + 1;
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });
        console.log(product);
        await product.save();
        console.log('Saved success');
        res.json({
            success: true,
            name: req.body.name,
        });
    }

    // [DELETE] /product/removeproduct
    async removeProduct(req, res) {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log('removed');
        res.json({
            success: true,
            name: req.body.name,
        });
    }
}

module.exports = new ProductController();
