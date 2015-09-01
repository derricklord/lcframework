(function() {
    'use strict';

    angular
        .module('homer')
        .controller('dashboardCtrl', dashboardCtrl);

    dashboardCtrl.$inject = ['Account', '$auth', 'notify', '$modal', 'Student'];

    /* @ngInject */
    function dashboardCtrl(Account, $auth, notify, $modal, Student){
        var vm = this;
        vm.isLoggedIn = false;
        vm.user = {};
        vm.students = [];
        vm.getData = getData;
        vm.delete = deleteStudent;
        vm.init = init;
        vm.open = open;
        
        
        function getData(){
            Account.getProfile()
                .success(function(data){
                    vm.user = data;
                })
                .error(function(error){
                    notify({
                        message: error,
                        classes: 'alert-danger'
                    }); 
                });
            
            
            Student.getStudents()
                .success(function(data){
                    vm.students = data.students
                })
                .error(function(error){
                     notify({
                        message: error,
                        classes: 'alert-danger'
                    });                    
                });
        };      
       
        function deleteStudent(id, $index){
            Student.deleteStudent(id)
                .success(function(message){
                    vm.students.splice($index, 1);
                    notify({
                        message: message,
                        classes: 'alert-succes'
                    });
                })
                .error(function(error){
                     notify({
                        message: error,
                        classes: 'alert-danger'
                    });                 
                });
        };
        
        function init(){
            vm.isLoggedIn = $auth.isAuthenticated();
            if(vm.isLoggedIn){
                vm.getData();
            }
        };    

        function open(){
            var modalInstance = $modal.open({
                templateUrl: 'views/modal/modal_student.html',
                controller: modalCtrl
            });
        };
        
        function modalCtrl($scope, $modalInstance){
            $scope.name = '';
            $scope.grade = 0;
            $scope.age = 0;
            
            $scope.ok = function(){
                
                Student.postStudent({
                        name:$scope.name,
                        grade: $scope.grade,
                        age: $scope.age
                    })
                    .success(function(data){
                        vm.students.push(data.student);
                    })
                    .error(function(err){
                        notify()
                    });

                $modalInstance.close();
            };
            
            $scope.cancel = function(){
                $modalInstance.dismiss('cancel');
            };
            
        };
        
        vm.init();
    };
    
})();