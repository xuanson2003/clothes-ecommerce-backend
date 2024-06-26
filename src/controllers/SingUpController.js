const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

class SignUpController {
    // [POST] /signup
    async signup(req, res) {
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.json({ success: false, errorField: 'email' });
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
                id: user._id,
            },
        };

        const token = jwt.sign(data, SECRET_KEY);
        res.json({
            success: true,
            token,
        });
    }
}

module.exports = new SignUpController();
