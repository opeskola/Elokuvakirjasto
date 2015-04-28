MyApp.controller('MovieEditController', function($scope, FirebaseService, $routeParams, $location){


    $scope.movies = FirebaseService.getMovies();
    $scope.editTitle = '';
    $scope.editDirector = '';
    $scope.editPublicationYear = '';
    $scope.editDescription = '';  

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
            
            $location.path("/movies");
            
        }
    }

});
