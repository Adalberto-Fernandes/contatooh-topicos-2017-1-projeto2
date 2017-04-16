angular.module('contatooh')
       .controller('ContatosController',
       function ($scope, /* $http */ $resource, Contato) {
            $scope.mensagem = {};

//var Contato = $resource('contatos/:id');
      
      buscaContatos = function () {
                  Contato.query(
                         function (contatos) {
                               $scope.contatos = contatos;
                               //$scope.mensagem = {};
                         },
                         function (erro) {
                               $scope.mensagem = {
                                     class: 'danger',
                                     texto: 'Não foi possível obter a lista de contatos'
                               };
                         }
                   );
              }
      
      buscaContatos();

      $scope.remove = function (contato) {
                   Contato.delete({ id: contato._id },
                         function () {
                               buscaContatos();
                               $scope.mensagem = {
                                     class: "info",
                                     texto: "Contato excluído com sucesso"
                               };
                         },
                         function (erro) {
                               $scope.mensagem = {
                                     class: 'danger',
                                     texto: 'Não foi possível excluir o contato'
                              };
                         }
                   )
             };

      //$http({method: 'GET', url: '/contatos'});
             /*'
             $http.get('/contatos')
                .then(function(res) {
                   $scope.response = res;
                   $scope.contatos = res.data;
                },
                function(statusText) {
                   console.log('Não foi possível obter a lista de contatos');
                   console.log(statusText);
                });
             */
  
/*
             $scope.total = 0;
   $scope.incrementa = function() {
                $scope.total++;
             }
       
             $scope.contatos = [
                {
                   '_id': 1,
                   'nome': 'Contato Angular 1',
                   'email': 'cont1@empresa.com.br'
                },
                {
                   '_id': 2,
                   'nome': 'Contato Angular 2',
                   'email': 'cont2@empresa.com.br'
                },
                {
                   '_id': 3,
                   'nome': 'Contato Angular 3',
                   'email': 'cont3@empresa.com.br'
                }
             ];
             */
 
             $scope.filtro = '';
 
      }
       ); 