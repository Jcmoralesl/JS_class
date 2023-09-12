const express = require ('express');
const router = express.Router();

const { habilidadesController } = require('./../controllers');

// obtenemos todas las habilidades
router.get('/', habilidadesController.getHabilidades);

// insertamos una habilidad
router.post('/', clientController.insertHabilidad)


// obtener una sola habilidad
router.get('/:id', clientController.getHabilidad)




module.exports = router;