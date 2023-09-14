const express = require ('express');
const router = express.Router();

const { habilidadesController } = require('./../controllers');

// obtenemos todas las habilidades
router.get('/', habilidadesController.getHabilidades);

// insertamos una habilidad
router.post('/', habilidadesController.insertHabilidad)


// obtener una sola habilidad
router.get('/:id', habilidadesController.getHabilidad)




module.exports = router;