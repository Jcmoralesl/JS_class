const express = require ('express');
const router = express.Router();


const { personasController } = require('./../controllers');

// obtenemos todas las personas
router.get('/', personasController.getPersonas);

// insertamos una empresa
router.post('/', personasController.insertPersona)


// obtener una empresa
router.get('/:id', personasController.getPersona)


module.exports = router;