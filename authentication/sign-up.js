const db = require('../database/db.js');
const express = require('express');
const router = express.Router();

router.post('/sign-up', (req, res)=> {
    query = 'INSERT INTO users_school(name, email, password) VALUES (?,?,?)';
    const {username, email, password} = req.body;
    db.query(
        query,
        [username, email, password],
        (err, results) => {
            if(err){
                console.log(err);
                res.status(500).json({message: 'Erro interno do servidor'})
            }else if(results){
                res.json({message: 'Usuário criado com Sucesso!'});
            }else{
                res.status(401).json({message: 'Credenciais inválidas'});
            }
        }
    )
})

module.exports = router;