// Toteuta moduulisi tänne
var MyApp = angular.module('MyApp', ['firebase', 'ngRoute']);

MyApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'MovieListController',
      templateUrl: 'app/views/movie_list.html'
    })
    .when('/movies', {
      controller: 'MovieListController',
      templateUrl: 'app/views/movie_list.html'
    })
    .when('/movies/new', {
      controller: 'MovieAddController',
      templateUrl: 'app/views/add_movie.html'  
    })
    .when('/movies/:id', {
        controller: 'MovieListController',
        templateUrl: 'app/views/show_movie.html'
     })
    .when('/movies/:id/edit', {
        controller: 'MovieAddController',
        templateUrl: 'app/views/edit_movie.html'
     })
 });
 
 MyApp.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);