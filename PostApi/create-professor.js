const db = require('../database/db.js');
const express = require('express');
const router = express.Router();

router.post('/professor', (req, res)=> {
    query = 'INSERT INTO professores(nome, veiculo1, veiculo2) VALUES (?,?,?)';
    const {nome, veiculo1, veiculo2} = req.body;
    db.query(
        query,
        [nome, veiculo1, veiculo2],
        (err, results) => {
            if(err){
                console.log(err);
                res.status(500).json({message: 'Erro interno do servidor'})
            }else if(results){
                res.json({message: 'Professor inserido com sucesso!'});
            }else{
                res.status(401).json({message: 'Credenciais inválidas'});
            }
        }
    )
})

module.exports = router;