const express = require ('express');
const router = express.Router();
//const clientController = require ('./../controllers/clientController')

const { clientController } = require('./../controllers');

router.get('/', clientController.getClients);


module.exports = router;

