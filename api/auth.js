const {authSecret} = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password){
            return res.status(400).send('Informe usuário e senha!')
        }

        const user = await app.db('users_school')
            .where({email: req.body.email})
            .first()

        if(!user) return res.status(400).send('Usuário não encontrado!');

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if(!isMatch) return res.status(401).send('Email/Senha inválidos')

        const now = Math.floor(Date.now()/1000);

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            type: user.type,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret),
            message: 'Autenticação bem sucedida!'
        })

        
    }
    const validateToken = async (req, res) => {
        const userData = req.body || null
        try{
            if(userData){
                const token = jwt.decode(userData.token, authSecret);
                if(new Date(token.exp * 1000) > new Date()){
                    return res.send(true)
                }
            }
        }catch(e){

        }

        res.send(false)
    }

    return {signin, validateToken}
}

// const db = require('../../config/db.js');
// const express = require('express');
// const router = express.Router();

// router.post('/login', (req, res) => {
//     const {email, password} = req.body;

//     db.query(
//         'SELECT * FROM users_school WHERE email = ? AND password = ?',
//         [email, password],
//         (err, results) => {
//             if(err){
//                 console.log(err);
//                 res.status(500).json({message: 'Erro interno do servidor'},{login:false})
//             }else if(results){
//                 res.json({message: 'Autenticação bem sucedida'},{login:true});
//             }else{
//                 res.status(401).json({message: 'Credenciais inválidas'},{login:false});
//             }
//         }
//     )
// })

// module.exports = router;