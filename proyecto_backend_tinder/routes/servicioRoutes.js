const express = require ('express');
const router = express.Router();


const { servicioController } = require('./../controllers');


// insertamos un servicio
router.post('/', servicioController.insertServicio)


// obtener un servicio 
router.get('/:id', servicioController.getServicio)

//actualizar un servicio
router.put('/:id', servicioController.updateServicio)

module.exports = router;