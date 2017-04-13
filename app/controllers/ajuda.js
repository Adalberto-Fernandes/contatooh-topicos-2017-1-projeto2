var ajuda = [
   {       
      texto: "Este espaço foi criado para ajudá-lo"
   },
   {
      texto: "Aqui você pode tirar todas as suas duvidas"
   },
   {
      texto: "Procure por duvidas frequentes para agilizar seu problema"
   },
   {
      texto: "Se preferir, abra um chat com um atendente especializado"
   },
   {
      texto: "Deixe aqui seu comentário sobre o sistema"
   }
];

module.exports = function() {
   var controller = {};
   
   controller.listaAjuda = function(req, res) {
      res.json(ajuda);
   };

   

   return controller;
};