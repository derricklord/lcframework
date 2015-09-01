angular.module('homer')
  .factory('Student', function($http) {
    return {
      getStudents: function() {
        return $http.get('/student');
      },
      updateStudent: function(studentData) {
        return $http.put('/student/' + studentData._id, studentData);
      },
      postStudent: function(studentData){
        return $http.post('/student', studentData);
      },
      deleteStudent: function(id){
        return $http.delete('/student/'+id);
      },
    };
  });