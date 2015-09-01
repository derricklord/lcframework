angular
    .module('homer')
    .controller('logoutCtrl', logoutCtrl);

function logoutCtrl($scope, notify, $auth, $state) {
    if (!$auth.isAuthenticated()) {
        return;
    };
    
    $auth.logout()
      .then(function() {
        var message = 'You have been logged out!';
        $state.go('landing');
        notify({
            message: message,
            classes: 'alert-success'
        }); 

      });
    
};
