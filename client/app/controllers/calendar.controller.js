(function() {
    'use strict';

    angular
        .module('app')
        .controller('calendarCtrl', calendarCtrl);

   //Controller.$inject = ['dependencies'];

    /* @ngInject */
    function calendarCtrl(){
        var vm = this;
    };
})();