(function () {
    'use strict';

    angular
        .module('lcDashboard')
        .directive('lcDashboard', lcDashboard);

    //lcFramework.$inject = [''];

    /* @ngInject */
    function  lcDashboard() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            transclude: true,
            bindToController: true,
            controller: lcDashboardController,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            templateUrl: 'app/modules/lcDashboard/lcDashboard.template.html'
        };
        return directive;

        function link(scope, element, attrs, controller) {
            
        }
    }

    //lcFrameworkController.$inject = [''];

    /* @ngInject */
    function lcDashboardController() {
        var vm = this;
        vm.data = [
            {
                name: 'Derrick',
                title: 'IT Manager'
            },
            {
                name: 'Marga',
                title: 'System Manager'
            }
        ];
    }
})();