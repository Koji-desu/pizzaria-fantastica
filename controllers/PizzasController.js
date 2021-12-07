const fs = require('fs')
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
        const string = req.query.q.trim();
        // Filtrar do array de pizzas somente as pizzas que satisfazerem a busca
        const pizzasFiltras = pizzas.filter(
            p => p.nome.toUpperCase().includes(string.toUpperCase())
        );
        
        // Renderizar a view index passando para ela as pizzas filtradas
        res.render('index', {pizzas:pizzasFiltras, busca:string})
    },
    create: (req, res)=>{
        res.render('crud-pizzas/create')
    },
    store: (req,res)=>{
        const nome = req.body.nome;
        const ingredientes = req.body.ingredientes.split(',').map(a=> a.trim());
        const preco = Number(req.body.preco)
        const img = req.file.filename
        const pizza = {nome, ingredientes, preco, img: '/img/' + img}


        // Adicionar o id à pizza recém criada
        pizza.id = pizzas[pizzas.length -1].id +1;

        // Adicionar a pizza ao array de pizzas
        pizzas.push(pizza)

        // Salvar o json do array de pizzas no arquivo pizzas.json
        fs.writeFileSync(__dirname + '/../database/Pizzas.json', JSON.stringify(pizzas,null,4), {flag:'w'})

        //Direcionar o usuarioo a pagina que exibe a lista de pizzas
        res.redirect('/')
        
    }
}


module.exports = controller;