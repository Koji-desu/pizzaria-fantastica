const express = require('express')
const router = express.Router()
const PizzaController = require('../controllers/PizzasController')

router.get('/pizzas/create', PizzaController.create)
router.post('/pizzas/create', PizzaController.store)

module.exports = router