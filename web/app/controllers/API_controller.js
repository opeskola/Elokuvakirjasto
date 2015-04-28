MyApp.controller('APIController', function($scope, APIService){
  APIService.findMovie('lord').success(function(movies){
    $scope.movies = movies;
  });
});


