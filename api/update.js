module.exports = app => {

    const updateProfessor = (req, res) => {
        dados = req.body;
        app.db('professores')
        .update(dados)
        .where({id: req.params.id})
        .then(res.status(200).json({message: 'Professor atualizado com sucesso!'}))
        .catch(error => {
            res.status(500).json({error: 'Ocorreu um erro ao atualizar os dados.'})
        })
    }
    
    return {updateProfessor}
}