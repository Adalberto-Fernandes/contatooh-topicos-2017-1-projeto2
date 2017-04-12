var ajuda = [
   {
      _id: 1,
      paragrafo: 'Parágrafo 1: ',
      texto: 'Lorem ipsum dolor sit amet, id dicam noster mollis vel. At mea inani adipisci, mea accusam pericula ei. Te eum ferri doming corpora, eros maluisset repudiare et sea. Meliore ceteros molestiae cu sit. Ne usu verear dolorum gloriatur, lobortis volutpat sit in.'      
   },

   {
      _id: 2,
      paragrafo: 'Paragráfo 2: ',
      texto: 'Ad pro perpetua conceptam omittantur. An exerci corrumpit repudiare ius. Quo nonumy denique nostrum te, id eos rebum torquatos. Sit intellegat philosophia eu, eu ludus fastidii conceptam eum. Sonet reprehendunt mei at, duo eu nobis voluptatibus. Eu per vidit rebum legimus.'      
   },

   {
      _id: 3,
      paragrafo: 'Parágrafo 3:',
      texto: 'Nullam splendide consetetur no pro, eu nam purto nonumes forensibus. Nisl antiopam repudiare eum ea, admodum voluptaria neglegentur eu nam, pri cu nobis sententiae. Has stet semper tincidunt in. Et pri noster gloriatur. Ea quem natum aeterno vim.'      
   },

   {
      _id: 4,
      paragrafo: 'Parágrafo 4:',
      texto: 'Erat labore nominavi est ex, per insolens theophrastus id. Consul tamquam euismod id pro. Vel saepe decore cu, ad solum vitae disputando pri. Cu nemore corpora his, ad eum accumsan definiebas, ius dignissim scribentur ne. In his unum omnis constituto, his in error essent alienum, usu no graeco eleifend adversarium. Quo duis admodum voluptaria cu.'      
   },

   {
      _id: 5,
      paragrafo: 'Parágrafo 5:',
      texto: 'Mel ne reque quando theophrastus, vix fierent molestie voluptatibus ei. At dolores constituto vituperata mel, quem tritani definitionem pri ea. Vel at salutandi democritum. Mei in quas melius invenire, sea debet cetero eloquentiam in, te vix appetere scribentur. Ne duo placerat reformidans. Eam inani nulla te.'      
   }
];

module.exports = function() {
   var controller = {};
   
   controller.mostraAjuda = function(req, res) {
      res.json(ajuda);
   };

   return controller;
};