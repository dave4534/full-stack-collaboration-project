app.controller('controller', function($scope, taskService){
$scope.tasks = taskService.tasks;

 $scope.addTask = function(){
  // alert('Hello');
  $scope.tasks.push($scope.input);
  console.log($scope.todo);
};


});