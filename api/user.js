const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{

    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation;

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }
    const save = async (req, res) => {
        const user = {...req.body};
        if(req.params.id) user.id = req.params.id;

        try{
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'Email não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
            equalsOrError(user.password, user.confirmPassword, 'SEnhas não conferem.')

            const userFromDb = await app.db('users_school').where({email: user.email}).first()
            if(!user.id){
                notExistsOrError(userFromDb, 'Usuário já cadastrado');
            }
        }catch(msg){
            return res.status(400).send(msg);
        }

        user.password = encryptPassword(user.password);
        delete user.confirmPassword;

        if(user.id){
            app.db('users_school')
                .update(user)
                .where({id: user.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }else{
            app.db('users_school')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users_school')
            .select('id', 'name', 'email', 'type')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users_school')
            .select('id', 'name', 'email', 'type')
            .where({id: req.params.id})
            .first()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    return {save, get, getById}
}