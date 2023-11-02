const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port =  3001;
const consign = require('consign');
const db = require('./config/db.js')

app.db = db;

dotenv.config();

consign()
    .then('./config/middlewares.js')
    .then('./src/api/validation.js')
    .then('./src/api')
    .then('./config/passport.js')
    .then('./config/routes.js')
    .into(app);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})