var contatos = [
	{
		_id: 1,
		nome: 'Contato 1',
		email: 'contato1@asdf.com',
		tel: '(11) 11111-11111'
	},
	{
		_id: 2,
		nome: 'Contato 2',
		email: 'contato2@asdf.com'	,
		tel: '(22) 22222-2222'
	},
	{
		_id: 3,
		nome: 'Contato 3',
		email: 'contato3@asdf.com',
		tel: '(33) 33333-3333'
	}
];

module.exports = function(){
	var controller = {};

	controller.listaContatos = function(req, res){
		res.json(contatos);
	}

	controller.obtemContato = function(req, res){
		var idContato = req.params.id
		var filtrados = contatos.filter(function(contato){
			return contato._id == idContato;
		});

		if(filtrados.length > 0){
			var contato = filtrados[0];
			res.json(contato);
		}else{
			res.status(404).send('Contato '+ idContato+ ' não encontrado');
		}
	}

	controller.removeContato = function(req, res){
		contatos = contatos.filter(function(contato){
			return contato._id != req.params.id;
		});

		res.status(204).end();
	}

	var ID_CONTATO_INC = 3; // Já existem 3 contatos

	controller.salvaContato = function(req, res){
		var contato = req.body;
		contato = contato._id ? atualizar(contato) : adiciona(contato);
		res.json(contato);
	}

	function adicionar(novo){
		novo._id = ++ID_CONTATO_INC;
		contatos.push(novo);
		return novo;
	}

	function atualizar(existente){
		contatos = contatos.map(function(contato){
			if(contato._id == existente._id){
				contato = existente;
			}
			return contato;
		});
		return existente;
	}

	return controller;
};