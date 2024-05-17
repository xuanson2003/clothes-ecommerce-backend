const User = require('../models/User');
const jwt = require('jsonwebtoken');

class SignUpController {
    // [POST] /signup
    async signup(req, res) {
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: 'existing user found with same email address' });
        }
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }
        const user = new User({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });

        await user.save();

        const data = {
            user: {
                id: user.id,
            },
        };

        const token = jwt.sign(data, 'secret_ecom');
        res.json({
            success: true,
            token,
        });
    }
}

module.exports = new SignUpController();
