const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllProducts = () => {
    return database('products');
};

const getProduct = (idProduct) => {
    return database('products')
        .where( { id: idProduct })
        .first();
};

const insertProduct = (product) => {
    return database('products')
        .insert(product);
};

const updateProduct = (idProduct, product) => {
    return database ('products')
        .where('id', '=', idProduct)
        .update(product);
    }

const deleteProduct = (idProduct) => {
    return database('products')
        .where ('id', '=', idProduct)
        .del ()  
}

module.exports = {
    getAllProducts,
    getProduct,
    insertProduct,
    updateProduct,
    deleteProduct
}