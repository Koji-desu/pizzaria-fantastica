const express = require('express')
const router = express.Router()
const PizzaController = require('../controllers/PizzasController')

router.get('/pizzas/create', PizzaController.create)

module.exports = router