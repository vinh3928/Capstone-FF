app.controller("HomeController", ["$scope", "$route", "$firebaseArray","$http", function($scope, $route, $firebaseArray, $http) {
  var req = {
    method: "GET",
    url: "https://nfl-data.herokuapp.com/api/nfl/allplayers/2012",
  };
  var databaseRef = new Firebase("https://dazzling-inferno-3947.firebaseio.com/nfl/players")
  $scope.nflData = $firebaseArray(databaseRef);
  $http(req).then(function(data) {
    console.log(data);
    $scope.nflData.$add(data);
  });


}]);
