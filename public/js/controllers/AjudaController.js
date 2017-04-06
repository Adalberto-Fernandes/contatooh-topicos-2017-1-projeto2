angular.module('contatooh')
   .controller('AjudaController', 
      function($scope, $routeParams, $resource, Ajuda) {
         
         $scope.mensagem = {};
         $scope.texto = [];

         getAjuda = function() {            
            Ajuda.query(
               function(result) {
                  $scope.texto = result;                  
               },
               function(erro) {
                  $scope.mensagem = {
                        class: 'danger',
                        texto: 'Não foi possível obter o texto de ajuda'
                     };
               }
            );
         }

         getAjuda();

      });