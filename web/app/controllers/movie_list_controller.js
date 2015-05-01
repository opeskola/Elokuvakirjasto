
// HUOM! Lisaa APIService kontrolleriin, jos kaytat sita
// HUOM! Lisaa currentAuth kontrolleriin, jos kaytat sita

MyApp.controller('MovieListController', function($scope, FirebaseService, $routeParams){
//    if(!currentAuth){
//        $location.path('/login');
//    }   
    
    
    $scope.movies = FirebaseService.getMovies();

    FirebaseService.getMovie($routeParams.id, function(movie){
        $scope.movie = movie;
    }); 
//    
//    APIService.findMovie('lord').success(function(movies){
//        $scope.movies = movies;
//    });
    
    $scope.removeMovie = function(index, movie){
        FirebaseService.removeMovie(movie);
        $scope.movies.splice(index, 1);	
    }
    
    
    
    
    

});


