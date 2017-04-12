module.exports = function(app) {
   
   var controller = app.controllers.ajuda;
   
   //app.get('/contatos', controller.listaContatos);
   app.route('/ajuda')
      .get(controller.listaContatos)
      .post(controller.salvaContato);
   
   //app.get('/contatos/:id', controller.obtemContato);
   //app.delete('/contatos/:id', controller.removeContato);

   app.route('/ajuda')
      .get(controller.obtemContato)
      .delete(controller.removeContato);
};