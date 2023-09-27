module.exports = app => {

    const get = (req, res) => {
        app.db('professores')
        .select('*')
        .then( rows => {res.json(rows);})
        .catch(error => {
            res.status(500).json({error: 'Ocorreu um erro ao consultar os dados.'})
        })
    }

    const getById = (req, res) => {
        app.db('professores')
        .select('*')
        .where({id: req.params.id})
        .then( rows => {res.json(rows);})
        .catch(error => {
            res.status(500).json({error: 'Ocorreu um erro ao consultar os dados.'})
        })
    }
    
    return {get, getById}
}