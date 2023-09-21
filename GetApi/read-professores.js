const db = require('../database/db.js');
const express = require('express');
const router = express.Router();

router.get("/read-professores", (req, res) => {
    db.query(
        'SELECT * FROM professores',
        [],
        (err, results) => {
            if(err){
                console.log(err);
                res.status(500).json({message: 'Erro interno do servidor'})
            }else if(results){
                res.json(results);
            }else{
                res.status(401).json({message: 'Credenciais inválidas'});
            }
        }
    )
})

module.exports = router;