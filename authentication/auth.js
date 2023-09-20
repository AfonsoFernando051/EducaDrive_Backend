const db = require('../database/db.js');
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const {email, password} = req.body;

    db.query(
        'SELECT * FROM users_school WHERE email = ? AND password = ?',
        [email, password],
        (err, results) => {
            if(err){
                console.log(err);
                res.status(500).json({message: 'Erro interno do servidor'})
            }else if(results){
                res.json({message: 'Autenticação bem sucedida'});
            }else{
                res.status(401).json({message: 'Credenciais inválidas'});
            }
        }
    )
})

module.exports = router;