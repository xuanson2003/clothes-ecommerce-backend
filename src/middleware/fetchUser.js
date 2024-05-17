const jwt = require('jsonwebtoken');

// creating middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.headers['auth-token'];
    if (!token) {
        res.status(401).send({ errors: 'Please authenticate using valid token' });
    } else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: 'please authenticate using a valid token' });
        }
    }
};

module.exports = fetchUser;
