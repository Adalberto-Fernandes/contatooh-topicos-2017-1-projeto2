(function () {
    'use strict';

    angular
        .module('contatooh')
        .directive('uiPhone', uiPhone);

    function uiPhone() {
        var directive = {
            require: 'ngModel',
            controller: 'ContatoController',
            link: function (scope, element, attrs, ctrl) {

                element.bind('keyup', function () {
                    ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
                    ctrl.$render();
                });

                function _formatPhone (phone) {
                    phone = phone.replace(/[^0-9]+/g, '');

                    if (phone.length > 2) {
                        phone = phone.substring(0, 0) + '(' + phone.substring(0);
                    }
                    if (phone.length > 3) {
                        phone = phone.substring(0, 3) + ') ' + phone.substring(3);
                    }
                    if (phone.length > 9) {
                        phone = phone.substring(0, 10) + '-' + phone.substring(10, 14);
                    }
                    return phone;
                }
            }
        };
        return directive;
    }
})();

