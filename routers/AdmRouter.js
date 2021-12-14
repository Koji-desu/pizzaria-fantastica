const express = require('express')
const router = express.Router()
const PizzaController = require('../controllers/PizzasController')
const validarFormPizza = require('../middlewares/ValidadorDeForm')

const multer = require('multer')
const storage = multer.diskStorage(
    {   
        destination: (req, fille, cb) => {cb(null, __dirname + '/../public/img')},
        filename: (req, file, cb) => {cb(null, Date.now() + '-' + file.originalname)}
        
    }
);

const upload = multer({storage})

router.get('/pizzas/create', PizzaController.create)
router.post('/pizzas/create', upload.single('img'), validarFormPizza, PizzaController.store)

module.exports = router