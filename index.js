// Importa o módulo 'express' para o aplicativo Node.js
var express = require('express')

// Importa o módulo 'ejs' para lidar com templates EJS
var ejs = require('ejs')

// Inicializa o aplicativo express
var app = express();

// Define o diretório 'public' para servir arquivos estáticos como imagens, CSS e JavaScript
app.use(express.static('public'));

// Define o mecanismo de visualização como EJS
app.set('view engine','ejs');

// Inicia o servidor na porta 8080
app.listen(8080);

// Define uma rota para a raiz ('/') do aplicativo
app.get('/',function(req,res){

    // Renderiza o arquivo 'index.ejs' localizado na pasta 'pages' 
    res.render('pages/index');

});