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

});