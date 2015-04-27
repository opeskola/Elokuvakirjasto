MyApp.controller('MovieShowController', function($scope, $routeParams, FirebaseService){
    FirebaseService.getMovie($routeParams.key, function(data){
        $scope.data = data;
    });
});


