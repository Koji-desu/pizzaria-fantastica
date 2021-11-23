const pizzas = require('../database/Pizzas.json')
const controller = {
    listar: (req, res)=>{
        res.send(pizzas)
    },
    getPizza: (req, res)=>{
     //   res.send("tentando carregar UMA PIZZA")

     //capturar o id requisitado (req.params)
     const id = req.params.id

     //capturar do array a pizza com o id requisitado (pizzas.find)
     const pizza = pizzas.find(p=> p.id == id)

     //retornar a pizza encontrada para o client (req.send())
     res.render('pizza', {pizza})
    },
}


module.exports = controller;