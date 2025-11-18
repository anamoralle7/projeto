const express = require("express");

// Criando uma variável pra gerenciar as rotas de usuário
const roteador = express.Router();

// Importando tudo que tem no arquivo de controller do usuário
const produtocontroller = require("../controllers/produtocontroller");

// CRUD
//C = CRIAR NOVO USUÁRIO
//Rota pra solicitar a página de cadastro
roteador.get("/cadastrar", produtocontroller.formproduto);
//Rota pra enviar dados de cadastro
roteador.post("/cadastrar", produtocontroller.salvar);

//R = OBTER INFORMAÇÕES DE USUÁRIOS
// Retorna as informações de todos os usuarios
roteador.get("/", produtocontroller.listaproduto);
// Retorna as informações de um usuário apenas
roteador.get("/:id", produtocontroller.buscarproduto);

// U = ATUALIZAR UM USUÁRIO
roteador.post("/:id", produtocontroller.atualizarproduto);

//D = DELETAR UM USUÁRIO
roteador.get("/:id", produtocontroller.deletarProduto);

// Criando a exportação desse arquivo
module.exports = roteador;
