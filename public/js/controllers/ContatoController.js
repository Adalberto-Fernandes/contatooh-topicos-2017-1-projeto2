angular.module('contatooh')
   .controller('ContatoController', 
      function($scope, $routeParams, $resource, Contato) {
         
         //var Contato = $resource('contatos/:id');

         $scope.mensagem = {};

         if($routeParams.contatoId) {
            Contato.get({id: $routeParams.contatoId},
               function(contato) {
                  $scope.contato = contato;
               },
               function(erro) {
                  $scope.mensagem = {
                     texto: 'Não foi possível obter o contato',
                     class: 'danger'
                  };
                  console.log(erro);
               }
            );
         } else { // Novo contato
            $scope.contato = new Contato();
         }

         $scope.salva = function() {
            $scope.contato.$save().then(
               function() {
                  $scope.mensagem = {
                     texto: 'Contato salvo com sucesso',
                     class: 'info'
                  };
               },
               function(erro) {
                  $scope.mensagem = {
                     texto: 'Não foi possível salvar o contato',
                     class: 'danger'
                  };
                  console.log(erro);
               }
            );      
         };

			// Preenchimento de um vetor com todos os contatos
			// anteriormente cadastrados
			Contato.query(function(contatos) {
				$scope.contatos = contatos;
			}); 

      });