(function() {
    'use strict';

    function MainCtrl($scope, taskService) {

        this.createTask = function() {
            var self = this;
            taskService
                .create(this.text)
                .then(function() {
                    self.text = '';
                }, function() {
                    //TODO error handling
                });
        };

        this.counter = taskService.counter;
        this.filter = {
            text: '',
            done: ''
        };
    }

    angular.module('todosApp')
        .controller('MainCtrl', ['$scope', 'taskService', MainCtrl]);

}());