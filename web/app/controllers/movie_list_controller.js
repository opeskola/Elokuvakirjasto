MyApp.controller('MovieListController', function($scope, FirebaseService){
    $scope.movies = FirebaseService.getMovies();
    
   

});


