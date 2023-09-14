const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getEmpresas = () => {
    return database('empresa');
};

const getEmpresa = (idEmpresa) => {
    return database('empresa')
        .where( { id: idEmpresa })
        .first();
};

const insertEmpresa = (empresa) => {
    return database('empresa')
        .insert(empresa);
};


module.exports = {
    getEmpresas,
    getEmpresa,
    insertEmpresa
}