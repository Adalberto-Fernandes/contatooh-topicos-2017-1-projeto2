angular.module('contatooh')
   .controller('AjudaController', 
      function($scope, $routeParams, $resource, Ajuda) {
         
         $scope.mensagem = {};
         $scope.texto = [];

         getAjuda = function() {
            $scope.texto = [{
               item : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in rhoncus felis. Vivamus fringilla ligula sit amet volutpat ullamcorper. Pellentesque pellentesque, dolor sodales dapibus hendrerit, justo urna lacinia odio, quis egestas libero ipsum posuere massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sed nunc faucibus, viverra dui eget, consectetur orci. Nunc justo lacus, molestie et massa at, lacinia semper leo. Morbi venenatis scelerisque felis at pretium. Nullam fringilla sed velit vel luctus. Integer lacus risus, lobortis id tincidunt sit amet, scelerisque vitae neque. Quisque ac purus malesuada, congue ligula eget, vulputate nunc. Quisque quam ante, elementum at maximus ac, luctus non elit."               
            },
            {
               item : "Vestibulum hendrerit felis vel ante accumsan, ac sollicitudin risus ultricies. Cras pulvinar aliquam orci, sit amet porta tortor. Ut suscipit sem sapien, ullamcorper ultricies leo laoreet quis. Curabitur non egestas tortor. Sed vel vulputate nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis quam velit, aliquam sit amet nibh in, pulvinar varius nibh. Vestibulum dignissim orci ut pharetra volutpat. Sed lobortis ligula ac metus vulputate gravida. Pellentesque eget rutrum neque, at lacinia diam. Vivamus est metus, pulvinar at felis a, blandit faucibus ante."
            },
            {
               item : "Suspendisse porta erat et turpis condimentum dignissim id at diam. Integer non sem pulvinar, tincidunt diam vel, placerat risus. Phasellus porttitor metus egestas, maximus urna nec, commodo enim. Quisque aliquam diam vitae diam placerat, at fringilla ex vestibulum. Fusce porta dictum neque id suscipit. Proin non lobortis neque. Curabitur ut sapien auctor, malesuada arcu laoreet, tempus neque. Maecenas blandit finibus congue. Proin nunc enim, sollicitudin at euismod sit amet, aliquam vitae turpis. In bibendum nunc eget urna gravida, vitae sollicitudin diam condimentum. Nulla facilisi. Duis et lacinia ligula. Aliquam ipsum risus, viverra ac metus non, varius vestibulum nisi. Nulla vitae erat nunc."
            }];

            /*Ajuda.query(
               function(result) {
                  $scope.texto = result;                  
               },
               function(erro) {
                  $scope.mensagem = {
                        class: 'danger',
                        texto: 'Não foi possível obter o texto de ajuda'
                     };
               }
            );*/
         }

         getAjuda();

      });