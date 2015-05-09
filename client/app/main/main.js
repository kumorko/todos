(function() {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'mainCtrl'
            });
    }

    angular.module('todosApp')
        .config(['$routeProvider', config]);
}());