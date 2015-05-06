(function() {
    'use strict';

    function MainCtrl($http) {
        this.awesomeThings = [];

        var self = this;
        $http.get('/api/things').success(function(awesomeThings) {
            self.awesomeThings = awesomeThings;
        });

    }

    angular.module('todosApp')
        .controller('MainCtrl', ['$http', MainCtrl]);

}());