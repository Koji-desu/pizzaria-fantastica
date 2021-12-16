const express = require('express')
const router = express.Router()
const PizzaController = require('../controllers/PizzasController')
const validarFormPizza = require('../middlewares/ValidadorDeForm')
const AdmController = require('../controllers/AdmController')

const multer = require('multer')
const usuarioLogado = require('../middlewares/usuarioLogado')
const usuarioConectado = require('../middlewares/usuarioConectado')
const storage = multer.diskStorage(
    {   
        destination: (req, file, cb) => {cb(null, __dirname + '/../public/img')},
        filename: (req, file, cb) => {cb(null, Date.now() + '-' + file.originalname)}
        
    }
);

const upload = multer({storage})

router.get('/pizzas/create', usuarioLogado,PizzaController.create)
router.post('/pizzas/create', upload.single('img'), validarFormPizza, PizzaController.store)
router.get('/login', usuarioConectado, AdmController.showLogin)
router.post('/login', AdmController.login)
router.get('/logout', AdmController.logout)

module.exports = router