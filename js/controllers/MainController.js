app.controller('MainController', ['$scope', 'employees', function($scope, employees) {
  employees.success(function(data){
    $scope.employeeList = data;
  });

}]);
