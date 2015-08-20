(function() {
    'use strict';

    angular
        .module('app')
        .controller('profileCtrl', profileCtrl);

   //Controller.$inject = ['dependencies'];

    /* @ngInject */
    function profileCtrl(){
        var vm = this;
        vm.title = 'Profile Controller';
        
    }
})();