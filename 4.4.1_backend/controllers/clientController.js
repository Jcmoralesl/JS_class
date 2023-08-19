const clientModel = require('../models/client');

const getClients = (req, res) =>  {
    clientModel 
        .getAllClients ()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
}

const getClient = (req, res) => {
    const { id } = req.params 

    clientModel 
        .getClient (id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const insertClients = (req, res) =>  res.status(200).send({
    message:"Client"
});

const insertClient = (req, res) =>  {
    const { first_name, last_name, active } =req.body

    if (first_name !== '' && last_name != '') {
        clientModel
            .insertClient({ first_name, last_name, active })
            .then(results => res.status(201).json({message: 'Cliente agregado exitosamente.'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Nombre invalido'})
    }
}

const updateClient = (req, res) =>  {
    const { id } = req.params 
    const { first_name, last_name, active } =req.body

    if (first_name !== '' && last_name != '') {
        clientModel
            .updateClient(id,{ first_name, last_name, active })
            .then(results => res.status(201).json({message: 'usuario actualizado exitosamente'}))
            .catch(error => res.status(500).json(error));
    } else {
        res.status(400).send({message: 'Nombre invalido'})
    }
}

const deleteClient = (req,res) => {
    const { id } = req.params 

    clientModel
        .deleteClient(id)
        .then(results => res.status(201).json({message: 'Cliente eliminado exitosamente.'}))
        .catch(error => res.status(500).json(error));
}


module.exports = {
    getClients,
    getClient,
    insertClients,
    insertClient,
    updateClient,
    deleteClient,
};


