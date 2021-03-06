const usuarios = require('../database/Usuarios.json')
const { check, validationResult, body} = require('express-validator')
const res = require('express/lib/response')

const controller = {
    showLogin: (req, res)=> {
       return res.render('login')
    },
    login: (req, res)=>{
        // Capturar o email e a senha inseridos pelo usuário
         const {email, senha} = req.body

        // Buscar o usuário no array pelo email digitado
         const usuario = usuarios.find(u => u.email == email && u.senha == senha)

        // Caso usuário não exista, retornar erro (fim)
        if(usuario === undefined){
            return res.send("email ou senha incorreto, tente novamente")
        }

        // Se chegou até aqui, escreva a session do usuario
        
            req.session.usuario = usuario;

            // redirecionar o usuario para uma pagina interna

            return res.redirect('/adm/pizzas/create')
    },
    logout: (req,res)=>{
        req.session.usuario = undefined
        return res.redirect('/adm/login')
    },

    showCadastro: (req,res)=>{
        res.render('criarConta')
    },

    cadastro: (req,res)=>{    
        
        

        cadastro: (req, res) =>{
        let erros = validationResult(req)

        if (erros.isEmpty()){
           return res.redirect('/adm/login')
        } else {
            res.render('criarConta', {erros: erros.mapped(), old: req.body})
        }
     }
    
    }
    
}

module.exports = controller