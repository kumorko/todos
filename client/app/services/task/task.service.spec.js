(function() {
    'use strict';

    describe('Service: task', function() {

        // load the service's module
        beforeEach(module('todosApp'));

        // instantiate service
        var taskService,
            $httpBackend;
        beforeEach(inject(function(_$httpBackend_, _taskService_) {
            taskService = _taskService_;
            $httpBackend = _$httpBackend_;
        }));

        it('should have counter with initial values', function() {
            expect(taskService.counter.todo).toBe(0);
            expect(taskService.counter.done).toBe(0);
        });

        it('should update counter after fetch tasks', function() {
            $httpBackend.expectGET('api/tasks')
                .respond([{
                    text: 'i am done task',
                    state: 'done'
                }, {
                    text: 'i am todo task',
                    state: 'todo'
                }]);
            expect(taskService.counter.todo).toBe(0);
            expect(taskService.counter.done).toBe(0);
            taskService.get();
            $httpBackend.flush();
            expect(taskService.counter.todo).toBe(1);
            expect(taskService.counter.done).toBe(1); 
        });

    });
}());