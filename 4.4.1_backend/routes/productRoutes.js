const express = require ('express');
const router = express.Router();
//const clientController = require ('./../controllers/clientController')

const { productController } = require('./../controllers');

// obtenemos todos los clientes
router.get('/', productController.getProducts);

// insertamos un solo cliente
router.post('/', productController.insertProduct)

//actualizar un cliente
router.put('/:id', productController.updateProduct)

// eliminar un cliente 
router.delete('/:id', productController.deleteProduct)

// obtener un solo cliente
router.get('/:id', productController.getProduct)




module.exports = router;
