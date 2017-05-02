angular.module('contatooh').controller('AjudaController',
    function($scope, $resource, Ajuda) {
       
       $scope.mensagem = {};
       ajuda = function() {
          Ajuda.query(
             function(ajudas) {
                $scope.ajuda = ajudas;
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