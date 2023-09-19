const db = require('../database/db');
const express = require('express');
const router = express.Router();

router.post('/sign-up', (req, res)=> {
    const {username, email, password} = req.body;
    console.log('teste');
    db.query(
        'INSERT INTO users_school(name, email, password) VALUES (?,?,?)',
        [username, email, password],
        (err, results) => {
            if(err){
                console.log(err);
                res.status(500).json({message: 'Erro interno do servidor'})
            }else if(results.length ===1){
                res.json({message: 'Usuário criado com Sucesso!'});
            }else{
                res.status(401).json({message: 'Credenciais inválidas'});
            }
        }
    )
})
module.exports = router;