const saleModel = require('../models/sale');

const getSales = (req, res) =>  {
    saleModel 
        .getAllSales ()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const getSale = (req, res) => {
    const { id } = req.params 

    clientModel 
        .getSale (id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertSales = (req, res) =>  res.status(200).send({
    message:"Client"
});

const insertSale = (req, res) =>  {
    const { first_name, last_name, active } =req.body

    if (first_name !== '' && last_name != '') {
        saleModel
            .insertSale({ first_name, last_name, active })
            .then(results => res.status(201).json({message: 'Venta agregado exitosamente.'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Nombre invalido'})
    }
}

const updateSale = (req, res) =>  {
    const { id } = req.params 
    const { first_name, last_name, active } =req.body

    if (first_name !== '' && last_name != '') {
        saleModel
            .updateSale(id,{ first_name, last_name, active })
            .then(results => res.status(201).json({message: 'Venta actualizado exitosamente'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Nombre invalido'})
    }
}

const deleteSale = (req,res) => {
    const { id } = req.params 

    clientModel
        .deleteSale(id)
        .then(results => res.status(201).json({message: 'Venta eliminado exitosamente.'}))
        .catch(error => res.status(500).json(error));
}


module.exports = {
    getSales,
    getSale,
    insertSales,
    insertSale,
    updateSale,
    deleteSale,
};
