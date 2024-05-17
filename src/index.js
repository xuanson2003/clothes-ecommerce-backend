const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 4000;
const db = require('./config/db');
const route = require('./routes/index.route');

db.connect();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
