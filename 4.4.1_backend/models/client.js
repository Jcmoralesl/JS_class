const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllClients = () => {
    return database('clients');
};

const getClient = (idClient) => {
    return database('clients')
        .where( { id: idClient })
        .first();
};

const insertClient = (client) => {
    return database('clients')
        .insert(client);
};

const updateClient = (idClient, client) => {
    return database ('clients')
        .where('id', '=', idClient)
        .update(client);
    }

const deleteClient = (idClient) => {
    return database('clients')
        .where ('id', '=', idClient)
        .del ()  
}

module.exports = {
    getAllClients,
    getClient,
    insertClient,
    updateClient,
    deleteClient
}