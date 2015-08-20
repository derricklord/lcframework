(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

   //Controller.$inject = ['dependencies'];

    /* @ngInject */
    function homeCtrl(){
        var vm = this;
        vm.title = 'Home';
        
    }
})();