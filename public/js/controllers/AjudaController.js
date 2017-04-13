angular.module('contatooh').controller('AjudaController',
   function($scope, /* $http */ $resource, Ajuda) {
      
      $scope.mensagem = {};
      
      //var Contato = $resource('contatos/:id');

      buscaAjuda = function() {
         Ajuda.query(
            function(ajuda) {
               $scope.ajuda = ajuda;
               //$scope.mensagem = {};
            },
            function(erro) {
               $scope.mensagem = {
                     class: 'danger',
                     texto: 'Não foi possível obter a lista de contatos'
                  };
            }
         );
      }

      buscaAjuda();     
      
   }
);