module.exports = function(app) {
   
   var controller = app.controllers.ajuda;
   
   //app.get('/contatos', controller.listaContatos);
   app.route('/ajuda')
      .get(controller.listaAjuda);
   
};