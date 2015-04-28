MyApp.controller('MovieListController', function($scope, FirebaseService, $routeParams){
    $scope.movies = FirebaseService.getMovies();

    FirebaseService.getMovie($routeParams.id, function(movie){
        $scope.movie = movie;
    });    
    
    $scope.removeMovie = function(movie){
        FirebaseService.removeMovie(movie);
    }
    
    
    
    
    

});


