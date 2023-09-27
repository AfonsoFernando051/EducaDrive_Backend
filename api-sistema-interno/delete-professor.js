const router = require('../GetApi/read-professor-id');
const db = require('../config/db');
const express = require('express');
const app = express();
const route = express.Router();

router.delete('/professor/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    db.query(
        "DELETE FROM professores WHERE id = ?",
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