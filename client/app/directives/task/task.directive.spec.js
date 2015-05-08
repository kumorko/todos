(function() {
    'use strict';

    describe('Directive: task', function() {

        // load the directive's module and view
        beforeEach(module('todosApp'));
        beforeEach(module('app/directives/task/task.html'));

        var element, scope;

        beforeEach(inject(function($rootScope) {
            scope = $rootScope.$new();
        }));

        it('should display task static text', inject(function($compile) {
            var taskText = 'i am task';
            scope.task = {
                text: taskText,
                state: 'todo'
            };
            element = angular.element('<div data-t-task></div>');
            element = $compile(element)(scope);
            scope.$apply();
            expect(element.find('.js-text-static').text()).toBe(taskText);
        }));
    });
}());