const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const db = require('./config/db');
const route = require('./routes/index.route');

db.connect();

const corsOptions = {
    origin: ['http://localhost:3000', 'shopper.xsubuntu.click'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
