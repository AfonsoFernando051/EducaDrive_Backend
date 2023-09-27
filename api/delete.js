module.exports = app => {

    const removeProfessor = (req, res) => {
        app.db('professores')
        .where({id: req.params.id})
        .del()
        .then(res.status(200).json({message: 'Professor excluído com sucesso!'}))
        .catch(error => {
            res.status(500).json({error: 'Ocorreu um erro ao excluir os dados.'})
        })
    }
    
    return {removeProfessor}
}