const empresaModel = require('../models/empresa');

const getEmpresas = (req, res) =>  {
    empresaModel 
        .getEmpresas ()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const getEmpresa = (req, res) => {
    const { id } = req.params 

    empresaModel 
        .getEmpresa (id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertEmpresa= (req, res) =>  {
    const { id , nombre } =req.body

    if (id !== '' && nombre!= '') {
        empresaModel
            .insertEmpresa({ id, nombre })
            .then(results => res.status(201).json({message: 'Empresa agregada exitosamente.'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Nombre o id invalido'})
    }
}


module.exports = {
    getEmpresas,
    getEmpresa,
    insertEmpresa
};