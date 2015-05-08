(function() {
    'use strict';

    function TodoList() {
        return {
            templateUrl: 'app/directives/todoList/todoList.html',
            restrict: 'A',
            scope: {
                filter: '=',
                tasks: '='
            }
        };
    }

    angular.module('todosApp')
        .directive('tTodoList', TodoList);
}());