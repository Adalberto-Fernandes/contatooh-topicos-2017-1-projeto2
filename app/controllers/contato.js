var contatos = [
   {
      _id: 1,
      nome: 'Contato Exemplo 1',
      email: 'cont1@empresa.com.br'
   },
   {
      _id: 2,
      nome: 'Contato Exemplo 2',
      email: 'cont2@empresa.com.br'
   },
   {
      _id: 3,
      nome: 'Contato Exemplo 3',
      email: 'cont3@empresa.com.br'
   }
];

module.exports = function() {
   var controller = {};
   
   controller.listaContatos = function(req, res) {
      res.json(contatos);
   };

   controller.obtemContato = function(req, res) {
      //console.log(req.params.id);

      var idContato = req.params.id;
      
      var filtrados = contatos.filter(function(contato) {
         return contato._id == idContato;
      });

      // O método filter sempre retorna um vetor,
      // mesmo que haja um só resultado. Por isso,
      // se houver encontrado alguém, pegamos a primeira
      // posição (0) do vetor
      if(filtrados.length > 0) { // Encontrou algo
         var contato = filtrados[0];
         res.json(contato);
      }
      else {
         res.status(404).send('Contato ' + idContato +
            ' não encontrado.');
      }
   }

   controller.removeContato = function(req, res) {
      // O vetor contatos é filtrado e sobrescrito, 
      // de modo a deixar de fora o contato cujo 
      // id foi excluído
      contatos = contatos.filter(function (contato) {
         return contato._id != req.params.id;
      });
      // HTTP 204: OK, mas não há conteúdo na resposta
      res.status(204).end();
   }

   var ID_CONTATO_INC = 3; // Já existem três contatos

   controller.salvaContato = function(req, res) {
      
      var contato = req.body;

      contato = contato._id ? atualiza(contato) : adiciona(contato);

      res.json(contato);

   }

   function adiciona(novo) {
      novo._id = ++ID_CONTATO_INC;
      contatos.push(novo);
      return novo;
   }

   function atualiza(existente) {

      contatos = contatos.map(function(contato){
         if(contato._id == existente._id) {
            contato = existente;
         }
         return contato;
      });
      
      return existente;
      
   }

   return controller;
};