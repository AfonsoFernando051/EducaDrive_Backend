module.exports = app => {
    app.post('/sign-up', app.api.user.save) 
    app.post('/signin', app.api.auth.signin) 
    app.post('/validateToken', app.api.auth.validateToken) 

    app.route('/sign-up')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get);
    app.route('/sign-up/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/read-professores')
        .get(app.api.read.getProfessores)
    app.route('/read-professores/:id')
        .get(app.api.read.getProfessorById)
    app.route('/read-escolas')
        .get(app.api.read.getEscolas)
    app.route('/read-alunos')
        .get(app.api.read.getAlunos)
    app.route('/read-aluno/:id')
        .get(app.api.read.getAlunoById)

    app.route('/insert-professor')
        .post(app.api.create.insertProfessor)
    app.route('/insert-aluno')
        .post(app.api.create.insertAluno)  

    app.route('/delete-professor/:id')
        .delete(app.api.delete.removeProfessor)
    app.route('/delete-aluno/:id')
        .delete(app.api.delete.removeAluno)

    app.route('/update-professor/:id')
        .put(app.api.update.updateProfessor)   
    app.route('/update-aluno/:id')
        .put(app.api.update.updateAluno)


  
}