const usersData = require('../models/UserFakeData')
const users = usersData.module;


module.exports = {
    getUsers: (req, res) => {
        res.status(200).send(users);
    },
    getOneUser: (req, res) => {
        //res.json(req.params.id)
        const idUser = req.params.id
        const user = users.find(element => element.id == idUser)
        if (user) {
            res.status(200).send(user)
        } else {
            res.status(404).send({nessage:'El usuario no existe'})
        }
    },
    createUser: (req, res) => {
        const newUser = req.body
        if(newUser.name.length >2 ) {
            users.push(newUser)
            res.status(200).send({message:'Usuario nuevo creado '})
        } else {
            res.status(400).send({message:'Error al crear el Usuario, el nombre del usuario debe tener mas de 3 caracteres '})
        }
    },
    putUser: (req, res) => {
        const idUser = req.params.id
        const { name, email, password } = req.body

        users[idUser].name = name
        users[idUser].email = email
        users[idUser].password = password

        res.status(200).send({message: 'Usuario modificado'})
    },
    updateUser: (req, res) => {},
    deleteUser: (req, res) => {},
};