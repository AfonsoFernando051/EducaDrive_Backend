const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const authRouterLogin = require('./authentication/auth');
const authRouterSignUp = require('./authentication/sign-up');

app.use(cors());
app.use(express.json());

app.use('/auth', authRouterLogin);
app.use('/auth', authRouterSignUp);

app.listen(port, () => {
    console.log('Server listening on port ${port}');
})