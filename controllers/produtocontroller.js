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
    const { descricao,categoria, preco, quantidade, nome, url} = req.body;
    produtoNovo = produtomodel.salvar({ descricao,categoria, preco, quantidade, nome, url });
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
      return res.status(404).render("produtos/erroproduto",{
        titulo: "erro",
        mensagem: "produto nao encontrado"
      })
    }
    // se achar, devolve as informações via json
    res.render("produtos/editarproduto", {
    titulo: "editar",
    produto
    })
  },
  // Função para atualizar informações de um usuário
  atualizarproduto: (req, res) => {
    // Busca o id vindo da url como parametro
    const id = req.params.id;
    // Busca as novas informações para atualizar
    const { descricao,categoria, preco, quantidade, nome, url} = req.body;
    //Guarda o usuário atualizado em uma variável
    const produtoAtualizado = produtomodel.atualizar(id, {
     descricao,
     categoria,
    preco,
     quantidade,
     nome,
     url
    });

    // Se não achar, avisa que deu erro
    if (!produtoAtualizado) {
      return res.status(404).render("produtos/erroproduto",{
        titulo: "erro",
        mensagem: "não foi possivel atualizar"
      })
    }
    // se atualizar, manda uma mensagem dizendo que deu certo
    res.render("produtos/confirmacaoproduto", {
    titulo: "edicao confirmada",
    tipo: "edicao",
    produtoAtualizado

    })
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