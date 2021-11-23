//importando express   
const express = require('express')

//importando os roteadores
const PizzasRouter = require('./routers/PizzasRouter')

//criar o servidor
const app = express()

//configurando template engine EJS
app.set("view engine","ejs");
app.set('views', './views')

//criar a rota respondendo a requisição
app.use('/', PizzasRouter)

//levantar o servidor
app.listen(3000, ()=>{console.log("Servidor rodando na porta 3000...")});