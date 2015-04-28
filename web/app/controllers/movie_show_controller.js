MyApp.controller('MovieShowController', function($scope, FirebaseService, $routeParams){
    $scope.movies = FirebaseService.getMovies();
    
    FirebaseService.getMovie($routeParams.id, function(movie){
        $scope.movie = movie;
    });
});


