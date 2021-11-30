// importar o express
const express = require('express')

//importar o controller
const PizzasController = require('../controllers/PizzasController')

//criar roteador
const router = express.Router();

//definir rotas às quais ele responde
router.get('/', PizzasController.listar);
router.get('/busca', PizzasController.busca)
router.get('/pizzas', PizzasController.listar);
router.get('/pizzas/:id', PizzasController.getPizza);

// exportar o roteador
module.exports = router