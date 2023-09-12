const persona_habilidadModel = require('../models/persona_habilidad');

const getPersonaHabilidad = (req, res) => {
    const { id } = req.params 

    persona_habilidadModel 
        .getPersonaHabilidad (id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};




module.exports = {
    getPersonaHabilidad
};