const pizzas = require('../database/Pizzas.json')
const controller = {
    listar: (req, res)=>{
      return  res.render('index', {pizzas, busca:""});
    },
    getPizza: (req, res)=>{
     //   res.send("tentando carregar UMA PIZZA")

     //capturar o id requisitado (req.params)
     const id = req.params.id

     //capturar do array a pizza com o id requisitado (pizzas.find)
     const pizza = pizzas.find(
      p=> p.id == id
      );

     //retornar a pizza encontrada para o client (req.send())
     res.render('pizza', {pizza})
    },
    
    busca: (req, res)=>{
        // Capturar a string digitada pelo visitante

        // Filtrar do array de pizzas somente as pizzas que satisfazerem a busca
        
        // Renderizar a view index passando para ela as pizzas filtradas
    }
}


module.exports = controller;