describe('MovieAddController', function(){
	var controller, scope;

	var FirebaseServiceMock, RouteParamsMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('MyApp');

    	FirebaseServiceMock = (function(){
            var movies = [
                {
                    title: 'Titanic',
                    director: 'James',
                    year: '1997',
                    description: 'imelä'
                }

            ];            

			return {
				// Toteuta FirebaseServicen mockatut metodit tähän
                                getMovie: function(id, done){
                                    if(id == 'abc123'){
                                      done({
                                        title: 'Joku leffa',
                                        director: 'Kalle Ilves',
                                        release: 2015,
                                        description: 'Mahtava leffa!'
                                      });
                                    }else{
                                      done(null);
                                    }
                                },
                                
                                addMovie: function(movie){
                                    movies.push(movie);
                                },
                                
                                editMovie: function(movie){
                                    movies.save(movie);
                                },
                                
                                getMovies: function() {
                                    return movies;
                                }
			}
		})();

		RouteParamsMock = (function(){
			return {
				// Toteuta mockattu $routeParams-muuttuja tähän
                                id: 'abc123'
			}
		});

		// Lisää vakoilijat
	    // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
            spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();
            spyOn(FirebaseServiceMock, 'editMovie').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('MovieAddController', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock,
	        $routeParams: RouteParamsMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että muokkauslomakkeen tiedot täytetään muokattavan elokuvan tiedoilla.
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
  	*/
  	it('should fill the edit form with the current information about the movie', function(){
  		expect(true).toBe(false);
  	})

  	/* 
  	* Testaa, että käyttäjä pystyy muokkaamaan elokuvaa, jos tiedot ovat oikeat
	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should be able to edit a movie by its name, director, release date and description', function(){
//            scope.newTitle = 'Titanic';
//            scope.newDirector = 'Hans';
//            scope.newPublicationYear = 2003;
//            scope.newDescription = 'paska';
//            
//            scope.addMovie();
//            
            expect(scope.movies[0].title).toBe('Titanic');
            scope.editTitle = 'Titanic 2';
            scope.editDirector = 'Jesse';
            scope.editYear = 2007;
            scope.editDescription = 'parempi';
          
            scope.editMovie();
            
		expect(scope.movies[1].title).toBe('Titanic 2');
                expect(scope.movies[1].director).toBe('Jesse');
                expect(scope.movies[1].year).toBe(2007);
                expect(scope.movies[1].description).toBe('parempi');
                
            expect(FirebaseServiceMock.editMovie).toHaveBeenCalled();
	});

	/*
	* Testaa, ettei käyttäjä pysty muokkaaman elokuvaa, jos tiedot eivät ole oikeat
	* Testaa myös, että Firebasea käyttävästä palvelusta ei kutsuta muokkaus-funktiota,
  	* käyttämällä not.toBeCalled-oletusta.
	*/
	it('should not be able to edit a movie if its name, director, release date or description is empty', function(){
		expect(true).toBe(false);
	});
});