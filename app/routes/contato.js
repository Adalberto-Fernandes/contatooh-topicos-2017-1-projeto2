module.exports = function(app){
	var controller = app.controllers.contato;

	app.route('/contatos')
	.get(controller.listaContatos)
	.post(controller.salvaContato);
	
	app.route('/contatos/:id')
	.get(controller.obtemContato)
	.delete(controller.removeContato);	

	app.route('/ajuda');

	/*app.get('/contatos', controller.listaContatos)
	.get('/contatos/:id', controller.obtemContato)
	.delete('/contatos/:id', controller.removeContato);	*/
};