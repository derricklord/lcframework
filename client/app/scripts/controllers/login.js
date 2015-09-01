angular
    .module('homer')
    .controller('loginCtrl', loginCtrl);

function loginCtrl($scope, $state, sweetAlert, notify, $auth, Account, $location) {
    
    var vm = this;

    vm.login = function() {
      $auth.login({ email: vm.email, password: vm.password })
        .then(function() {
          
        })
        .catch(function(response) {
            notify({
                message: response,
                classes: 'alert-danger'
            }); 
        });
    };
    
    vm.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {  
          $location.path('/dashboard');
        })
        .catch(function(response) {
            notify({
                message: response,
                classes: 'alert-danger'
            }); 
        });
    };
};