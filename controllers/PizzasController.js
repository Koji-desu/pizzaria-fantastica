const pizzas = require('../database/Pizzas.json')
const controller = {
    listar: (req, res)=>{
        res.send(pizzas)
    },
}


module.exports = controller;