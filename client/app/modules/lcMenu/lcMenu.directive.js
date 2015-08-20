(function () {
    'use strict';

    angular
        .module('lcMenu')
        .directive('lcMenu', lcMenu);

    //lcFramework.$inject = [''];

    /* @ngInject */
    function  lcMenu() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            transclude: true,
            bindToController: true,
            controller: lcMenuController,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            templateUrl: 'app/modules/lcMenu/lcMenu.template.html'
        };
        return directive;

        function link(scope, element, attrs, controller) {
            
        }
    }

    //lcFrameworkController.$inject = [''];

    /* @ngInject */
    function lcMenuController() {
        var vm = this;

    }
})();