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

        this.filterShown = false;
        this.counter = taskService.counter;
        this.tasks = taskService.get();
        this.filter = {
            text: '',
            state: ''
        };
    }

    angular.module('todosApp')
        .controller('MainCtrl', ['$scope', 'taskService', MainCtrl]);

}());