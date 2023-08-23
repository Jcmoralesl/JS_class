const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllSales = () => {
    return database('sales');
};

const getSale = (idSale) => {
    return database('sales')
        .where( { id: idSale })
        .first();
};

const insertSale = (sale) => {
    return database('sales')
        .insert(sale);
};

const updateSale = (idSale, sale) => {
    return database ('sales')
        .where('id', '=', idSale)
        .update(sale);
    }

const deleteSale = (idSale) => {
    return database('sales')
        .where ('id', '=', idSale)
        .del ()  
}

module.exports = {
    getAllSales,
    getSale,
    insertSale,
    updateSale,
    deleteSale
}