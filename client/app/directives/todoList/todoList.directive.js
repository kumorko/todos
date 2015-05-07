(function() {
    'use strict';

    function TodoList(taskService) {
        return {
            templateUrl: 'app/directives/todoList/todoList.html',
            restrict: 'A',
            scope: {
                filter: '='
            },
            link: function(scope, element, attrs) {
                scope.tasks = taskService.tasks;
            }
        };
    }

    angular.module('todosApp')
        .directive('tTodoList', ['taskService', TodoList]);
}());