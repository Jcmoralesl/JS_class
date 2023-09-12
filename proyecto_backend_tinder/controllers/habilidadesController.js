const habilidadesModel = require('../models/empresa');

const getHabilidades = (req, res) =>  {
    habilidadesModel 
        .getEmpresas ()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const getHabilidad = (req, res) => {
    const { id } = req.params 

    habilidadesModel 
        .getHabilidad (id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertHabilidad= (req, res) =>  {
    const { id , nombre } =req.body

    if (id !== '' && nombre!= '') {
        habilidadesModel
            .insertHabilidad({ id, nombre, descripcion })
            .then(results => res.status(201).json({message: 'Habilidad agregada exitosamente.'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Nombre o id invalido'})
    }
}


module.exports = {
    getHabilidades,
    getHabilidad,
    insertHabilidad
};