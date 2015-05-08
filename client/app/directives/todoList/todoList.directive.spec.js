'use strict';

describe('Directive: task', function() {

    // load the directive's module and view
    beforeEach(module('todosApp'));
    beforeEach(module('app/directives/todoList/todoList.html'));
    beforeEach(module('app/directives/task/task.html'));

    var element, scope;

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should display ul', inject(function($compile) {
        scope.tasks = [{
          text: 'i am task',
          state: 'todo'
        }];
        element = angular.element('<div data-t-todo-list data-tasks=\'tasks\'></div>');
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.find('ul').length).toBe(1);
        expect(element.find('p').length).toBe(0);
    }));

    it('should display empty message', inject(function($compile) {
        element = angular.element('<div data-t-todo-list></div>');
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.find('ul').length).toBe(0);
        expect(element.find('p').text()).toBe('Hooray, nothing to do !!! :-)');
    }));
});