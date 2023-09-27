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
        .get(app.api.readProfessores.get)
    app.route('/read-professores/:id')
        .get(app.api.readProfessores.getById)

    app.route('/insert-professor')
        .post(app.api.createProfessor.insert)
        
    app.route('/delete-professor/:id')
        .delete(app.api.deleteProfessor.remove)

    app.route('/update-professor/:id')
        .put(app.api.updateProfessor.update)   
}