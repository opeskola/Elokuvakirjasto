MyApp.controller('MovieAddController', function($scope, FirebaseService, $location){
    
    $scope.movies = FirebaseService.getMovies();
    $scope.newTitle = '';
    $scope.newDirector = '';
    $scope.newPublicationYear = '';
    $scope.newDescription = '';    
    
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
});



