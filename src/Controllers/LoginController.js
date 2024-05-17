const User = require('../models/User');
const jwt = require('jsonwebtoken');

class LoginController {
    // [POST] /login
    async login(req, res) {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            const passCompare = req.body.password === user.password;
            if (passCompare) {
                const data = {
                    user: {
                        id: user.id,
                    },
                };
                const token = jwt.sign(data, 'secret_ecom');
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
