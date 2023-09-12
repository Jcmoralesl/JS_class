const express = require ('express');
const router = express.Router();


const { empresaController } = require('./../controllers');

// obtenemos todas las empresas
router.get('/', empresaController.getEmpresas);

// insertamos una empresa
router.post('/', empresaController.insertEmpresa)


// obtener una empresa
router.get('/:id', empresaController.getEmpresa)


module.exports = router;