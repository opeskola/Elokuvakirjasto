MyApp.service('FirebaseService', function($firebase){
    
    var firebaseRef = new Firebase('blistering-inferno-2684.firebaseIO.com/movies');
    var sync = $firebase(firebaseRef);
    var movies = sync.$asArray();

    this.getMovies = function(){
        return movies;
    }
    
    this.addMovie = function(movie){
        movies.$add(movie);
    }
});


