(function() {
    'use strict';

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }

    angular.module('todosApp', [
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ui.bootstrap',
        'ui.bootstrap.showErrors'
    ])
        .config(config);
})();