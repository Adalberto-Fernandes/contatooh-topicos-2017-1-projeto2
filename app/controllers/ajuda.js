var ajuda = [
   {
      _id: 1,
      paragrafo: 'Parágrafo Exemplo 1',
      texto: 'texto exemplo 1'   
   },
   {
      _id: 2,
      paragrafo: 'Parágrafo Exemplo 2',
      texto: 'texto exemplo 2'
   },
   {
     _id: 3,
      paragrafo: 'Parágrafo Exemplo 3',
      texto: 'texto exemplo 3'
   },
   {
      _id: 4,
      paragrafo: 'Parágrafo Exemplo 4',
      texto: 'texto exemplo 4'
   },
   {
      _id: 5,
      paragrafo: 'Parágrafo Exemplo 5',
      texto: 'texto exemplo 5'
   }
];

module.exports = function() {
   
   var controller = {};
   
   controller.listaAjuda = function(req, res) {
      res.json(ajuda);
   };

   return controller;
};