const db = require('../config/db.js');
const express = require('express');
const router = express.Router();

router.get("/read-professores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    db.query(
        'SELECT * FROM professores WHERE id = ?',
        [id],
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