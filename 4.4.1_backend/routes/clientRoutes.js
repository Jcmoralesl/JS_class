const express = require ('express');
const router = express.Router();
//const clientController = require ('./../controllers/clientController')

const { clientController } = require('./../controllers');

// obtenemos todos los clientes
router.get('/', clientController.getClients);

// insertamos un solo cliente
router.post('/', clientController.insertClient)

//actualizar un cliente
router.put('/:id', clientController.updateClient)

// eliminar un cliente 
router.delete('/:id', clientController.deleteClient)

// obtener un solo cliente
router.get('/:id', clientController.getClient)




module.exports = router;

