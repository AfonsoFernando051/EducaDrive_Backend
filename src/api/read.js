module.exports = app => {

    const getProfessores = (req, res) => {
        app.db('professores')
        .select('*')
        .then( rows => {res.json(rows);})
        .catch(error => {
            res.status(500).json({error: 'Ocorreu um erro ao consultar os dados.'})
        })
    }

    const getProfessorById = (req, res) => {
        app.db('professores')
        .select('*')
        .where({id: req.params.id})
        .then( rows => {res.json(rows);})
        .catch(error => {
            res.status(500).json({error: 'Ocorreu um erro ao consultar os dados.'})
        })
    }

    const getEscolas = (req, res) => {
        app.db('users_school')
        .select('*')
        .then( rows => {res.json(rows);})
        .catch(error => {
            res.status(500).json({error: 'Ocorreu um erro ao consultar os dados.'})
        })
    }
    
    const getAlunos = (req, res) => {
        app.db('alunos')
            .select('alunos.*', 'professores.nome as nome_professor')
            .join('professores', 'alunos.professor', 'professores.id')
            .then( rows => {res.json(rows);})
            .catch(error => {
                res.status(500).json({error: 'Ocorreu um erro ao consultar os dados.'})
            })
    }

    const getAlunoById = (req, res) => {
        app.db('alunos')
            .select('alunos.*', 'professores.nome as nome_professor')
            .join('professores', 'alunos.professor', 'professores.id')
            .where('alunos.id',req.params.id)
            .then( rows => {res.json(rows);})
            .catch(error => {
                res.status(500).json({error: 'Ocorreu um erro ao consultar os dados.'})
            })
    }

    return {getProfessores, getProfessorById, getEscolas, getAlunos, getAlunoById}
}