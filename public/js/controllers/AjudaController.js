angular.module('contatooh')
    .controller('AjudaController', 
    function($scope, $resource, $http) {        
         $http.get('/ajuda')
         .then(function(res) {
            $scope.topicos = res.data;
         });       
    }
);