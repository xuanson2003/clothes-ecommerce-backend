require('dotenv').config();

module.exports = {
    apps: [
        {
            name: 'clothes-ecommerce-backend',
            script: './src/index.js',
            env: {
                NODE_ENV: 'production',
                PORT: process.env.PORT,
            },
        },
    ],
};
