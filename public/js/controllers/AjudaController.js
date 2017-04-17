angular.module('contatooh').controller('AjudaController',
    function($scope, $resource, Ajuda) {

        $scope.mensagem = {};

        buscaAjuda = function() {
            Ajuda.query(
                function(ajuda) {
                    $scope.ajuda = ajuda;
                },
                function(erro) {
                    $scope.mensagem = {
                        class: 'danger',
                        texto: 'Não foi possível obter a lista de instruções'
                    };
                }
                );
        }

        buscaAjuda();
    }
);

