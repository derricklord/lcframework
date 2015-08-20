(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginCtrl', loginCtrl);

   loginCtrl.$inject = ['$state'];

    /* @ngInject */
    function loginCtrl($state){
        var vm = this;
        vm.title = 'Login';
        
        vm.gotoHome = function(){
            $state.go('home');
        };
        
    }
})();