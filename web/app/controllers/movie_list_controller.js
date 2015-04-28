MyApp.controller('MovieListController', function($scope, FirebaseService, $routeParams, APIService){
    $scope.movies = FirebaseService.getMovies();

    FirebaseService.getMovie($routeParams.id, function(movie){
        $scope.movie = movie;
    }); 
    
    APIService.findMovie('lord').success(function(movies){
        $scope.movies = movies;
    });
    
    $scope.removeMovie = function(movie){
        FirebaseService.removeMovie(movie);
    }
    
    
    
    
    

});


