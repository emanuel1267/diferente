const express = require("express"); 
const app = express(); 

// nova rota inicial como /produtos
app.get("/produtos", function(req, res) {
    res.send("<h1>Lista de Produtos!</h1>");
})

// rota de cadastro de produtos agora está na raiz "/"
app.get("/", function(req, res) {
    res.send("<h1>Cadastro de Produtos!</h1>");
})

// rota com parâmetro
app.get("/consulta/:parametro", function(req, res) {
    res.send("retorno consulta: " + req.params.parametro);
})

// rota com parâmetro opcional
app.get("/cadastro/:nome", function(req, res) {
    var nome = req.params.nome;
    if (nome) {
        res.send("<h1>produto " + nome + " criado!</h1>");
    } else {
        res.send("produto criado!");
    }
})

app.listen(process.env.PORT ?? 3000, function(erro) {
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
})
