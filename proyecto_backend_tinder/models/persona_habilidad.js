const connection = require("../knexfile")['development'];
const database = require('knex')(connection);


const getPersonaHabilidad = (idpPersona_habilidad) => {
    return database('persona_habilidad')
        .where( { id: idpPersona_habilidad })
        .first();
};

module.exports = {
    getPersonaHabilidad,
}