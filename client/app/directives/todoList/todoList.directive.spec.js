'use strict';

describe('Directive: task', function () {

  // load the directive's module and view
  beforeEach(module('todosApp'));
  beforeEach(module('app/main/task/task.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<task></task>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the task directive');
  }));
});