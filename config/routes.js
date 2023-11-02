module.exports = app => {
    app.post('/sign-up', app.src.api.user.save) 
    app.post('/signin', app.src.api.auth.signin) 
    app.post('/validateToken', app.src.api.auth.validateToken) 

    app.route('/sign-up')
        .all(app.config.passport.authenticate())
        .post(app.src.api.user.save)
        .get(app.src.api.user.get);
    app.route('/sign-up/:id')
        .all(app.config.passport.authenticate())
        .put(app.src.api.user.save)
        .get(app.src.api.user.getById)

    app.route('/read-professores')
        .get(app.src.api.read.getProfessores)
    app.route('/read-professores/:id')
        .get(app.src.api.read.getProfessorById)
    app.route('/read-escolas')
        .get(app.src.api.read.getEscolas)
    app.route('/read-alunos')
        .get(app.src.api.read.getAlunos)
    app.route('/read-aluno/:id')
        .get(app.src.api.read.getAlunoById)

    app.route('/insert-professor')
        .post(app.src.api.create.insertProfessor)
    app.route('/insert-aluno')
        .post(app.src.api.create.insertAluno)  
    app.route('/book-class')
        .post(app.src.api.booking.bookingClass)

    app.route('/delete-professor/:id')
        .delete(app.src.api.delete.removeProfessor)
    app.route('/delete-aluno/:id')
        .delete(app.src.api.delete.removeAluno)

    app.route('/update-professor/:id')
        .put(app.src.api.update.updateProfessor)   
    app.route('/update-aluno/:id')
        .put(app.src.api.update.updateAluno)


  
}