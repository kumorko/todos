(function() {
    'use strict';

    function Task($timeout, taskService) {
        return {
            templateUrl: 'app/directives/task/task.html',
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.tmp = {
                    text: scope.task.text
                };

                scope.edit = function(value) {
                    scope.editMode = value;
                    $timeout(function() { //hack to wait to another cycle when DOM is updated
                        var selector = '.js-text-' + (value ? 'input' : 'static');
                        element.find(selector).focus();
                    }, 0);
                };

                //move to controller
                scope.remove = function() {
                    taskService
                        .remove(scope.task)
                        .then(angular.noop, function() {
                            //TODO error handling
                        });
                };

                scope.updateState = function(toggle) {
                    if(toggle){
                        scope.task.state = scope.task.state === 'todo' ? 'done' : 'todo';
                    }
                    taskService
                        .update(scope.task)
                        .then(angular.noop, function() {
                            //TODO error handling
                        });
                };

                scope.updateText = function() {
                    if (scope.tmp.text) {
                        scope.task.text = scope.tmp.text;
                        taskService
                            .update(scope.task)
                            .then(function() {
                                scope.edit(false);
                            }, function() {
                                //TODO error handling
                            });
                    }
                };
            }
        };
    }

    angular.module('todosApp')
        .directive('tTask', ['$timeout', 'taskService', Task]);
}());