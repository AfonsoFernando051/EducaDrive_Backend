module.exports = app => {

    const bookingClass = (req, res) => {
        const dados = {...req.body};
        if(dados == null){
            return res.status(500).json({error: 'A requisição está vazia.'});
        }
        
        app.db('aulas')
            .insert(dados)
            .then(rows => {
                res.json(rows)
            })
            .catch(error => {
                res.status(500).json({error: 'Ocorreu um erro ao inserir os dados.'})
            })
    }

    return {bookingClass}
}