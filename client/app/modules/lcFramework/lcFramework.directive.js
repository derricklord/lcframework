(function () {
    'use strict';

    angular
        .module('lcFramework')
        .directive('lcFramework', lcFramework);

    //lcFramework.$inject = [''];

    /* @ngInject */
    function  lcFramework() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            transclude: true,
            bindToController: true,
            controller: lcFrameworkController,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            templateUrl: 'app/modules/lcFramework/lcFramework.template.html'
        };
        return directive;

        function link(scope, element, attrs, controller) {
            
        }
    }

    //lcFrameworkController.$inject = [''];

    /* @ngInject */
    function lcFrameworkController() {
        
    }
})();