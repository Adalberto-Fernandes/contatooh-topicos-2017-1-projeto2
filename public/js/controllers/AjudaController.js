angular.module('contatooh')
   .controller('AjudaController', 
      function($scope, $routeParams, $resource, Contato) {
         
         

      /*   $scope.mensagem = {};

         if($routeParams.ajudaId) {
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
*/
      });