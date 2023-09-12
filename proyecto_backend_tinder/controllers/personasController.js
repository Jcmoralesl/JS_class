const personasModel = require('../models/personas');

const getPersonas = (req, res) =>  {
    personasModel 
        .getPersonas ()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const getPersona = (req, res) => {
    const { id } = req.params 

    personasModel 
        .getPersonas (id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertPersona= (req, res) =>  {
    const { id , nombre , descripcion, celular } =req.body

    if (id !== '' && name!= '') {
        personasModel
            .insertPersona({ id, nombre, descripcion, celular })
            .then(results => res.status(201).json({message: 'Persona agregada exitosamente.'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Nombre o id invalido'})
    }
}


module.exports = {
    getPersonas,
    getPersona,
    insertPersona
};