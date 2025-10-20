// Importa o módulo de path pra saber as pastas e arquivos do projeto
const path = require("path");

// Importa tudo que tem no model
const produtomodel = require("../models/produtomodel");

module.exports = {
 

  // CRUD
  // C
  // Responde a requisição mostrando a visualização da tela de cadastro
formproduto: (req, res) => {
    res.render("produtos/cadastroproduto", { titulo: "Cadastro"});
  },

  // Função para levar os dados preenchidos para o model realizar o cadastro
  salvar: (req, res) => {
    const { descrição,categoria, preço, quantidade, nome, imagem} = req.body;
    produtoNovo = produtomodel.salvar({ descrição,categoria, preço, quantidade, nome, imagem });
    res.render("produtos/confirmacaoproduto", {
      tipo: "cadastro",
      titulo: "Cadastro  de produtos confirmado",
      produtoNovo
    });
  },

  // R
  // Função para mostrar todos os usuarios
 listaproduto: (req, res) => {
    const produtos = produtomodel.listaTodos();
    res.render("produtos/listaproduto", {
    titulo: " cadastro produto", produtos
  
  }
)
 },
  // Função para mostrar apenas um usuario
  buscarproduto: (req, res) => {
    // Busca o id vindo da url como parametro
    const id = req.params.id;
    // Guarda o usuário retornado, depois de buscar pelo model
    const produto = produtomodel.buscarPorId(id);
    // Se não achar, avisa que deu erro
    if (!produto) {
      return res.status(404).json({ mensagem: "produto não encontrado" });
    }
    // se achar, devolve as informações via json
    res.json(produto);
  },
  // Função para atualizar informações de um usuário
  atualizarproduto: (req, res) => {
    // Busca o id vindo da url como parametro
    const id = req.params.id;
    // Busca as novas informações para atualizar
    const { descrição,categoria, preço, quantidade, nome, imagem} = req.body;
    //Guarda o usuário atualizado em uma variável
    const produtoAtualizado = produtomodel.atualizar(id, {
     descrição,
     categoria,
    preço,
     quantidade,
     nome,
     imagem
    });

    // Se não achar, avisa que deu erro
    if (!produtoAtualizado) {
      return res.status(404).json({
        produtoAtualizado: produtoAtualizado,
        mensagem: "produto não encontrado",
      });
    }
    // se atualizar, manda uma mensagem dizendo que deu certo
    res.json({ mensagem: "produto foi atualizado" });
  },
  // Função para deletar um usuário
  deletarProduto: (req, res) => {
    // Busca o id vindo da url como parametro
    const id = req.params.id;
    //Guarda o usuário deletado em uma variável
    const deletado = produtomodel.deletar(id);

    // Se não achar, avisa que deu erro
    if (!deletado) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    // se atualizar, manda uma mensagem dizendo que deu certo
    res.json({ deletado: deletado, mensagem: "Usuário foi deletado" });
  },
};