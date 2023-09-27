const express = require('express');
const app = express();
const port = 3000;
const consign = require('consign');
const db = require('./config/db.js')

app.db = db;

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/passport.js')
    .then('./config/routes.js')
    .into(app);

app.listen(port, () => {
    console.log('Server listening on port ${port}');
})