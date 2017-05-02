angular.module('contatooh').factory('Ajuda',
    function($resource) {
      return $resource('ajuda/');
    }
);

