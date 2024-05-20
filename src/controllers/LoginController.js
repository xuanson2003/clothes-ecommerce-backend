const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

class LoginController {
    // [POST] /login
    async login(req, res) {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            const passCompare = req.body.password === user.password;
            if (passCompare) {
                const data = {
                    user: {
                        id: user._id,
                    },
                };
                const token = jwt.sign(data, SECRET_KEY);
                res.json({ success: true, token });
            } else {
                res.json({ success: false, errors: 'Wrong Password' });
            }
        } else {
            res.json({ success: false, errors: 'Wrong Email Id' });
        }
    }
}

module.exports = new LoginController();
