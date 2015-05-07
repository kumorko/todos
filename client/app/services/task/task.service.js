(function() {
    'use strict';

    function taskFactory($resource) {
        var Task = $resource('api/tasks/:id', {
                id: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            }),
            tasks = Task.query(),
            counter = {
                done: 0,
                todo: 0
            };

        function updateCounter() {
            var done = 0,
                todo = 0;
            angular.forEach(tasks, function(task){
                if(task.state === 'done') {
                    done += 1;
                } else {
                    todo += 1;
                }
            });

            counter.done = done;
            counter.todo = todo;
        }

        //update counter on tasks load    
        tasks.$promise.then(updateCounter);

        return {
            tasks: tasks,
            counter: counter,
            create: function(text) {
                var newTask = new Task({
                    text: text
                });
                return newTask
                    .$save()
                    .then(function() {
                        tasks.push(newTask);
                        updateCounter();
                    });
            },
            update: function(task) {
                return task
                    .$update()
                    .then(function(){
                        updateCounter();
                    });
            },
            remove: function(task) {
                return task
                    .$remove()
                    .then(function() {
                        tasks.splice(tasks.indexOf(task), 1);
                        updateCounter();
                    });
            }
        };
    }

    angular.module('todosApp')
        .factory('taskService', ['$resource', taskFactory]);
}());