angular.module('listController', [])
  .controller('mainController', function($scope, $http, Tasks) {
    $scope.formData = {}; // Reset the form

    // On page load, get all tasks and load them into the page
    Tasks.get()
      .success(function(data) {
        $scope.tasks = data; // Store the tasks in the scope after the call
        console.log(data);
      })
      .error(function(data) {
        console.log("Error: " + data);
      });

    $scope.createTask = function() {
      if (!$.isEmptyObject($scope.formData)) {
        Tasks.create($scope.formData)
          .success(function(data){
            $scope.formData = {};
            $scope.tasks = data;
          });
      }
    };

    // delete a todo after checking it
    $scope.deleteTask = function(id) {
      Tasks.delete(id)
        .success(function(data) {
          $scope.tasks = data;
        });
    };
  });