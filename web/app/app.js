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
      templateUrl: 'app/views/movie_list.html',
//      resolve: {
//        currentAuth: function(AuthenticationService) {
//            return AuthenticationService.checkLoggedIn();
//        }
//      }
    })
    .when('/movies/new', {
      controller: 'MovieAddController',
      templateUrl: 'app/views/add_movie.html',
//      resolve: {
//        currentAuth: function(AuthenticationService) {
//            return AuthenticationService.checkLoggedIn();
//        }
//      }
    })
    .when('/movies/:id', {
        controller: 'MovieListController',
        templateUrl: 'app/views/show_movie.html'
     })
    .when('/movies/:id/edit', {
        controller: 'MovieAddController',
        templateUrl: 'app/views/edit_movie.html',
//        resolve: {
//            currentAuth: function(AuthenticationService) {
//                return AuthenticationService.checkLoggedIn();
//            }
//        }
     })
     .when('/login', {
        controller: 'UserController',
        templateUrl: 'app/views/login.html'
    })
 });
 
// MyApp.config(['$httpProvider', function($httpProvider) {
//  delete $httpProvider.defaults.headers.common["X-Requested-With"]
//}]);

//MyApp.run(function(AuthenticationService, $rootScope){
//  $rootScope.logOut = function(){
//    AuthenticationService.logUserOut();
//  };
//
//  $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
//});