const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getHabilidades = () => {
    return database('habilidades');
};

const getHabilidad = (idHabilidades) => {
    return database('habilidades')
        .where( { id: idHabilidades })
        .first();
};

const insertHabilidad = (habilidades) => {
    return database('habilidades')
        .insert(habilidades);
};


module.exports = {
    getHabilidades,
    getHabilidad,
    insertHabilidad
}