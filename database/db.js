const myqsl = require('mysql2');

const db = myqsl.createConnection({
    host: 'localhost',
    user: 'AfonsoFernando',
    password: 'F3rn@nd0',
    database: 'EducaDrive'
})

module.exports = db;
