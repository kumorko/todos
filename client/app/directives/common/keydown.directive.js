(function() {
    'use strict';

    function Keydown() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var keyCode = +attrs.tKey || 27;
                element.bind('keydown', function(event) {
                    if (event.keyCode === keyCode) { //default is escape
                        scope.$apply(attrs.tKeydown);
                    }
                });

                scope.$on('$destroy', function() {
                    element.unbind('keydown');
                });
            }
        };
    }

    angular.module('todosApp')
        .directive('tKeydown', Keydown);
}());