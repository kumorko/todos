(function() {
    'use strict';

    function MainCtrl($scope, taskService) {

        this.createTask = function() {
            if (!this.text) {
                $scope.$broadcast('show-errors-check-validity');
                return;
            }

            var self = this;
            taskService
                .create(this.text)
                .then(function() {
                    self.text = '';
                    self.resetValidation();
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


        this.resetValidation = function() {
            $scope.$broadcast('show-errors-reset');
        };
    }

    angular.module('todosApp')
        .controller('MainCtrl', ['$scope', 'taskService', MainCtrl]);

}());