const express = require ('express');
const router = express.Router();
//const clientController = require ('./../controllers/clientController')

const { saleController } = require('./../controllers');

// obtenemos todos los clientes
router.get('/', saleController.getSales);

// insertamos un solo cliente
router.post('/', saleController.insertSale)

//actualizar un cliente
router.put('/:id', saleController.updateSale)

// eliminar un cliente 
router.delete('/:id', saleController.deleteSale)

// obtener un solo cliente
router.get('/:id', saleController.getSale)




module.exports = router;
