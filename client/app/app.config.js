(function(){
    'use strict';
    
    angular
        .module('app')
        .config(configuration);

    configuration.$inject = ['$provide', '$stateProvider', '$urlRouterProvider', '$locationProvider'];

    /* @ngInject */
    function configuration ($provide, $stateProvider, $urlRouterProvider, $locationProvider) {
       $urlRouterProvider.otherwise("/");
       $locationProvider.html5Mode(true) 
       $stateProvider
        .state('home', {
          url: "/",
          controller: 'homeCtrl as vm',
          templateUrl: "app/partials/home.html"
        })
        .state('login', {
          url: "/login",
          controller: 'loginCtrl as vm',
          templateUrl: "app/partials/login.html"
        })     
        .state('profile', {
           url: "/profile",
           controller: 'profileCtrl as vm',
           templateUrl: "app/partials/profile.html"
        });
        
        
        $provide.decorator("$exceptionHandler", ['$delegate', function($delegate){
            return function(exception, cause){
                alert(exception.message);
            };
        }]);
    }
})();