var ajuda = [
   {
      descricao: 'A aplicação possibilita o cadastro, consulta, edição e exclusão de contatos.'
   },
   {
      descricao: 'A tela inicial da aplicação apresenta os contatos já cadastrados no sistema, assim como o link para visualizar os contatos individualmente.'
   },
   {
      descricao: 'O botão "Novo contato" exibe o formulário para o cadastro do novo contato.'
   },
   {
      descricao: 'O campo de texto existente na primeira tela possibilita o filtro dos contatos em todas as colunas exixtentes na tabela que os exibe.'
   },
   {
      descricao: 'Para o cadastro do novo contato todos os campos são de preenchimento obrigatório.'
   }
];

module.exports = function() {
   var controller = {};
   
   controller.listaAjuda = function(req, res) {
      res.json(ajuda);
   };

   
   return controller;
};