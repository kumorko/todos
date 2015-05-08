(function() {
    'use strict';

    describe('Controller: MainCtrl', function() {

        // load the controller's module
        beforeEach(module('todosApp'));

        var MainCtrl,
            scope,
            $httpBackend;

        // Initialize the controller and a mock scope
        beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('api/tasks')
                .respond([{
                    text: 'i am task',
                    state: 'todo'
                }]);

            scope = $rootScope.$new();
            MainCtrl = $controller('MainCtrl', {
                $scope: scope
            });
        }));

        it('should attach initial properties and list of tasks', function() {
            $httpBackend.flush();
            expect(MainCtrl.filterShown).toBe(false);
            expect(MainCtrl.filter.text).toBe('');
            expect(MainCtrl.filter.state).toBe('');
            expect(MainCtrl.tasks.length).toBe(1);
        });
    });
}());