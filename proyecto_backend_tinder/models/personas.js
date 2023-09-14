const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getPersonas = () => {
    return database('personas');
};

const getPersona = (idPersona) => {
    return database('personas')
        .where( { id: idPersona })
        .first();
};

const insertPersona = (persona) => {
    return database('persona')
        .insert(persona);
};


module.exports = {
    getPersonas,
    getPersona,
    insertPersona
}