//importando express   
const express = require('express')

//importando os roteadores
const PizzasRouter = require('./routers/PizzasRouter')
const AdmRouter = require('./routers/AdmRouter')

//criar o servidor
const app = express()

//configurando template engine EJS
app.set("view engine","ejs");
app.set('views', './views')

//configurar a pasta public
app.use(express.static(__dirname + '/public'))

//criar a rota respondendo a requisição
app.use('/', PizzasRouter)
app.use('/adm', AdmRouter)

//levantar o servidor
app.listen(3000, ()=>{console.log("Servidor rodando na porta 3000...")});