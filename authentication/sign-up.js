const db = require('../database/db');
const express = require('express');
const router = express.Router();

router.post('/sign-up', (req, res)=> {
    query = 'INSERT INTO users_school(name, email, password) VALUES (?,?,?)';
    const {username, email, password} = req.body;
    console.log('teste');
    db.query(
        query,
        [username, email, password],
        (err, results) => {
            if(err){
                console.log(err);
                res.status(500).json({message: 'Erro interno do servidor'})
            }else if(results.length ===1){
                res.json({message: 'Usuário criado com Sucesso!'});
            }else{
                console.log(query);

                console.log(username, email, password);

                res.status(401).json({message: 'Credenciais inválidas'});
            }
        }
    )
})

module.exports = router;