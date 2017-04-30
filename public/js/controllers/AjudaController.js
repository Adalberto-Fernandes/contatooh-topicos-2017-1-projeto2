angular.module('contatooh').controller('AjudaController',
   function($scope, $resource, Ajuda) {
      
      $scope.mensagem = {};
      

      ajuda = function() {
         Ajuda.query(
            function(ajuda) {
               $scope.ajuda = ajuda;
            },
            function(erro) {
               $scope.mensagem = {
                     class: 'danger',
                     texto: 'Não foi possível obter a lista de ajudas'
                  };
            }
         );
      }

      ajuda();
      
   }
);