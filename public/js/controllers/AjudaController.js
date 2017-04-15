angular.module('contatooh').controller('AjudaController',
   function($scope,$http ) {
      
       $http.get('/ajuda')
         .then(function(res) {
            $scope.response = res;
            $scope.ajuda = res.data;
         },
         function(status) {
            console.log('Ajuda não encontrada');
            console.log(status);
         });
});
      