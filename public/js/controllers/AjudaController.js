angular.module('contatooh')
   .controller('AjudaController', 
      function($scope, $http) {
         
      $http.get('/ajuda')
         .then(function(res) {
            $scope.response = res;
            $scope.ajuda = res.data;
         },
         function(statusText) {
            console.log('Não foi possível obter a ajuda');
            console.log(statusText);
         });
      });