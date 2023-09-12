const servicioModel = require('../models/servicio');


const getServicio = (req, res) => {
    const { id } = req.params 

    servicioModel 
        .getServicio (id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertServicio = (req, res) =>  {
    const { costo, tiempo_trabajo, fecha_entrega, anticipo } =req.body

    if (costo !== '' && anticipo != '') {
        servicioModel
            .insertServicio({ costo, tiempo_trabajo, fecha_entrega, anticipo })
            .then(results => res.status(201).json({message: 'Servicio agregado exitosamente.'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Costo o anticipo invalido'})
    }
}

const updateServicio = (req, res) =>  {
    const { id } = req.params 
    const {  costo, tiempo_trabajo, fecha_entrega, anticipo } =req.body

    if (costo !== '' && anticipo != '') {
        servicioModel
            .updateServicio(id,{  costo, tiempo_trabajo, fecha_entrega, anticipo })
            .then(results => res.status(201).json({message: 'Servicio actualizado exitosamente'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Serivicio invalido'})
    }
}

module.exports = {
    getServicio,
    insertServicio,
    updateServicio
};
