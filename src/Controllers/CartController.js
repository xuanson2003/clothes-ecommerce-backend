const User = require('../models/User');

class CartController {
    // [POST] /cart/getcart
    async getCart(req, res) {
        console.log('Get cart');
        let userData = await User.findOne({ _id: req.user.id });
        res.json(userData.cartData);
    }

    // [POST] /cart/addtocart
    async addToCart(req, res) {
        console.log('added', req.body.itemId);
        let userData = await User.findOne({ _id: req.user.id });
        userData.cartData[req.body.itemId] += 1;
        await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.send('Added');
    }

    // [DELETE] /cart/removefromcart
    async removeFromCart(req, res) {
        console.log('removed', req.body.itemId);
        let userData = await User.findOne({ _id: req.user.id });
        if (userData.cartData[req.body.itemId] > 0) {
            userData.cartData[req.body.itemId] -= 1;
            await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        }
        res.send('Removed');
    }
}

module.exports = new CartController();
