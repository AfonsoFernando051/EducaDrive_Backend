const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const authRouterLogin = require('./authentication/auth');
const authRouterSignUp = require('./authentication/sign-up');
const readProfessores = require('./GetApi/read-professores');
const insertProfessores = require('./PostApi/create-professor');
const readProfessoresbyId = require('./GetApi/read-professor-id');
const updateProfessoresbyId = require('./UpdateApi/update-professor');

app.use(cors());
app.use(express.json());

app.use('/auth', authRouterLogin);
app.use('/auth', authRouterSignUp);
app.use('/read', readProfessores);
app.use('/insert', insertProfessores);
app.use('/read', readProfessoresbyId);
app.use('/update', updateProfessoresbyId);


app.listen(port, () => {
    console.log('Server listening on port ${port}');
})