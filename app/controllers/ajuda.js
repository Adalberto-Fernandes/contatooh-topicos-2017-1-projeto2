var textoAjuda = [
   {
      _id: 1,
      texto: 'O Contatooh é um sistema que possui o objeto de gerenciar uma lista de contatos.'
   },
   {
      _id: 2,
      texto: 'Na sua tela principal são exibidos todos os contatos salvos, e temos um menu de opções.'
   },
   {
      _id: 3,
      texto: 'O botão Novo Contato nos redireciona para uma tela de cadastro onde é possível registrar um novo contato.'
   },
   {
      _id: 4,
      texto: 'O campo de busca permite a busca por um contato através do nome, e-mail ou telefone.'
   },
   {
      _id: 5,
      texto: 'E na listagem de contatos há um botão à direita que permite que o contato seja excluído, e a esquerda há um link no nome da pessoa, para que contato possa ser editado.'
   }
];

module.exports = function() {
   var controller = {};
   
   controller.listaAjuda = function(req, res) {
      res.json(textoAjuda);
   };

   return controller;
};