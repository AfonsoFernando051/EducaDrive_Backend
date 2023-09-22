const db = require('../database/db.js');
const express = require('express');
const router = express.Router();

router.put("/professores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {nome, veiculo1, veiculo2} = req.body;
    console.log(nome, veiculo1, veiculo2);
    db.query(
        'UPDATE professores SET nome = ?,veiculo1 = ?,veiculo2 = ? WHERE id = ?',
        [nome, veiculo1, veiculo2, id],
        (err, results) => {
            if(err){
                console.log(err);
                res.status(500).json({message: 'Erro interno do servidor', id})
            }else if(results){
                res.json(results);
            }else{
                res.status(401).json({message: 'Credenciais inválidas'});
            }
        }
    )
})

module.exports = router;