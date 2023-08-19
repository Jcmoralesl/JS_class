const productModel = require('../models/product');

const getProducts = (req, res) =>  {
    productModel 
        .getAllProducts ()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const getProduct = (req, res) => {
    const { id } = req.params 

    productModel 
        .getProduct (id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertProducts = (req, res) =>  res.status(200).send({
    message:"Products"
});

const insertProduct = (req, res) =>  {
    const { name, description, price } =req.body

    if (name !== '' && price != '') {
        productModel
            .insertProduct({ name, description, price })
            .then(results => res.status(201).json({message: 'Producto agregado exitosamente.'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Producto invalido'})
    }
}

const updateProduct = (req, res) =>  {
    const { id } = req.params 
    const { name, description, price } =req.body

    if (first_name !== '' && last_name != '') {
        productModel
            .updateProduct(id,{ name, description, price })
            .then(results => res.status(201).json({message: 'Producto actualizado exitosamente'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Producto invalido'})
    }
}

const deleteProduct = (req,res) => {
    const { id } = req.params 

    productModel
        .deleteProduct(id)
        .then(results => res.status(201).json({message: 'Producto eliminado exitosamente.'}))
        .catch(error => res.status(500).json(error));
}


module.exports = {
    getProducts,
    getProduct,
    insertProducts,
    insertProduct,
    updateProduct,
    deleteProduct,
};


