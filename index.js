const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<p> Professor, bem vindo ao site na rota padrao");
})

//rota do cadastro de produtos
app.get("/trabalhopasso1", function(req,res){
    res.send("<h2>Voce esta vendo o primeiro passo do trabalho</h2>");
})

//rota com parametro 
app.get("/bemvindopersonalizado/:nomeprofessor", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("Bem vindo professor " + req.params.nomeprofessor);
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})

