var ajuda = [
   {
      _id: 1,
      comentario: 'Senso de Utilização: ',
      scopo: 'Separar o que é útil do que não é. Melhorar o uso do que é útil.'      
   },

   {
      _id: 2,
      comentario: 'Senso de Ordenação: ',
      scopo: 'Um lugar para cada coisa. Cada coisa no seu lugar.'      
   },

   {
      _id: 3,
      comentario: 'Senso de Limpeza:',
      scopo: 'Limpar e evitar sujar.'      
   },

   {
      _id: 4,
      comentario: 'Senso de Saúde:',
      scopo: 'Padronizar as práticas saudáveis.'      
   },

   {
      _id: 5,
      comentario: 'Senso de Autodisciplina:',
      scopo: 'Assumir a responsabilidade de seguir os padrões saudáveis.'      
   }
];

      module.exports = function() {
      var controller = {};
      controller.mostraAjuda = function(req, res) {
            res.json(ajuda);
      };
      return controller;
};