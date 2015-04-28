MyApp.controller('MovieAddController', function($scope, FirebaseService, $routeParams, $location){
    
    FirebaseService.getMovie($routeParams.id, function(movie){
        $scope.movie = movie;
    }); 
    
    
    $scope.movies = FirebaseService.getMovies();
    $scope.newTitle = '';
    $scope.newDirector = '';
    $scope.newPublicationYear = '';
    $scope.newDescription = '';  
    
    $scope.editTitle = '';
    $scope.editDirector = '';
    $scope.editPublicationYear = '';
    $scope.editDescription = ''; 
    
    
    $scope.addMovie = function(){
        if(($scope.newTitle != '') && ($scope.newDirector != '') &&
                ($scope.newPublicationYear != '') && ($scope.newDescription != '')) {
            FirebaseService.addMovie({
                title: $scope.newTitle,
                director: $scope.newDirector,
                year: $scope.newPublicationYear,
                description: $scope.newDescription
                
            });
            
            $scope.newTitle = '';
            $scope.newDirector = '';
            $scope.newPublicationYear = '';
            $scope.newDescription = '';   
            
            $location.path("/movies");
        }        
    }
    
    $scope.editMovie = function(movie){
        if(($scope.editTitle != '') && ($scope.editDirector != '') && 
                ($scope.editPublicationYear != '') && ($scope.editDescription != '')){

            movie.title = $scope.editTitle;
            movie.director = $scope.editDirector;
            movie.year = $scope.editPublicationYear;
            movie.description = $scope.editDescription;
            
            FirebaseService.editMovie(movie);
    
            $scope.editTitle = '';
            $scope.editDirector = '';
            $scope.editPublicationYear = '';
            $scope.editDescription = ''; 
            
            $location.path("/");
            
        }
    }
});



