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

// const authRouterLogin = require('./api-sistema-interno/auth.js');
// const authRouterSignUp = require('./api-sistema-interno/sign-up.js');
// const readProfessores = require('./GetApi/read-professores');
// const insertProfessores = require('./PostApi/create-professor');
// const readProfessoresbyId = require('./GetApi/read-professor-id');
// const updateProfessoresbyId = require('./UpdateApi/update-professor');
// const deleteProfessor = require('./api-sistema-interno/delete-professor.js')

// app.use(express.json());

// app.use('/auth', authRouterLogin);
// app.use('/auth', authRouterSignUp);
// app.use('/read', readProfessores);
// app.use('/insert', insertProfessores);
// app.use('/read', readProfessoresbyId);
// app.use('/update', updateProfessoresbyId);
// app.use('/delete', deleteProfessor);

app.listen(port, () => {
    console.log('Server listening on port ${port}');
})