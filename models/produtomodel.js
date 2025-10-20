// Importar o json para servir como banco de dados
const db = require("../data/db.json");

// Variável pra armazenar os usuários vindos do db
let listaproduto = db.produtos;

module.exports = {


  //CRUD
  // Função para cadastrar um novo usuario
  salvar: ({ nome, descricao, preco,quantidade,categoria }) => {
    const novoprodutos = {
      id: listaproduto.length + 1,
      nome,
      descricao,
      preco,
      quantidade,
      categoria,

    };
    listaproduto.push(novoprodutos);
    console.log("Novo produto salvo:", novoprodutos);
    return novoProdutos;
  },
  // Busca todos os usuários do banco
  listaTodos: () => {
    return listaproduto;
  },
  // Busca um usuário específico do banco
  buscarPorId: (id) => {
    return listaproduto.find((user) => user.id == id || null);
  },

  atualizar: (id, { nome, descricao, preco, quantidade, categoria, url}) => {
    // Busca na lista de usuários, um usuário com aquele id específico, se achar, pega o index dele e guarda na variávl index
    const index = listaproduto.findIndex((user) => user.id == id);
    // Se não achar, significa que um usuário com aquele index não existe
    if (index === -1) return null;
    // Se achar um usuário, substitui as informações que estavam nele, pelas novas enviadas
    listaproduto[index] = {
      ...listaproduto[index],
      listaproduto: nome|| listaproduto[index].nome,
      listaproduto: descricao|| listaproduto[index].descricao,
      listaproduto: preco || listaproduto[index].preco,
        listaproduto: quantidade||listaproduto[index].quantidade,
           listaproduto: categoria|| listaproduto[index].categoria,
           listaproduto: url|| listaproduto[index].url,
    };
    // Retorna o usuário atualizado
    return listaproduto[index];
  },
  deletar: (id) => {
    // Busca na lista de usuários, um usuário com aquele id específico, se achar, pega o index dele e guarda na variávl index
    const index = listaproduto.findIndex((user) => user.id == id);
    // Se não achar, significa que um usuário com aquele index não existe
    if (index === -1) return false;
    // Atualiza o array com os usuários, agora com o usuário já retirado
    const produtosRemovido =listaproduto.splice(index, 1);
    return produtosRemovido;
  },
};
