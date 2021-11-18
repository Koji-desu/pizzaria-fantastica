// importar o express
const express = require('express')

//importar o controller
const PizzasController = require('../controllers/PizzasController')

//criar roteador
const router = express.Router();

//definir rotas às quais ele responde
router.get('/pizzas', PizzasController.listar)

// exportar o roteador
module.exports = router