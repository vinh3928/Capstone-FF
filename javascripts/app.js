
var app = angular.module("myApp", ["ngRoute", "firebase"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html",
      controller: "HomeController"
    });
}]);
