const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getServicio = (idServicio) => {
    return database('servicio')
        .where( { id: idServicio })
        .first();
};

const insertServicio = (servicio) => {
    return database('servicio')
        .insert(servicio);
};

const updateServicio = (idServicio, servicio) => {
    return database ('servicio')
        .where('id', '=', idServicio)
        .update(servicio);
    }

module.exports = {
    getServicio,
    insertServicio,
    updateServicio
}