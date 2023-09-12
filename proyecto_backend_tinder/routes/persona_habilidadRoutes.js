const express = require ('express');
const router = express.Router();


const { persona_habilidadController } = require('./../controllers');

// obtener una persona_habilidad
router.get('/:id', persona_habilidadController.getPersonaHabilidad)


module.exports = router;