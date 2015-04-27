describe('MovieAddController', function(){
	var controller, scope;

	var FirebaseServiceMock;

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
                            addMovie: function(movie){
                                movies.push(movie);
                            },
                            
                            getMovies: function(){
                                return movies;
                            }                       
                            
                            
                            
			}
		})();

		// Lisää vakoilijat
	    // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
            spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('MovieAddController', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
  	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
  	* on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
  	* toBeCalled-oletusta.
	*/
	it('should be able to add a movie by its name, director, release date and description', function(){
            scope.newTitle = 'Matin seikkailut';
            scope.newDirector = 'Pekka';
            scope.newPublicationYear = '2003';
            scope.newDescription = 'ihan jees';
            scope.addMovie();
            expect(scope.movies.length).toBe(2);
            expect(FirebaseServiceMock.addMovie).toHaveBeenCalled();

	});

	/*	
	* Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
	* EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
	* not.toBeCalled-oletusta (muista not-negaatio!).
	*/
	it('should not be able to add a movie if its name, director, release date or description is empty', function(){
            scope.newTitle = '';
            scope.newDirector = 'Pekka';
            scope.newPublicationYear = '2003';
            scope.newDescription = 'ihan jees';
            scope.addMovie();
            expect(scope.movies.length).toBe(1);
 
            scope.newTitle = 'Jeejee';
            scope.newDirector = '';
            scope.newPublicationYear = '2003';
            scope.newDescription = 'ihan jees';
            scope.addMovie();
            expect(scope.movies.length).toBe(1);

            scope.newTitle = 'jddjdj';
            scope.newDirector = 'Pekka';
            scope.newPublicationYear = '';
            scope.newDescription = 'ihan jees';
            scope.addMovie();
            expect(scope.movies.length).toBe(1);   
            
            scope.newTitle = 'kjkljlkjlk';
            scope.newDirector = 'Pekka';
            scope.newPublicationYear = '2003';
            scope.newDescription = '';
            scope.addMovie();
            expect(scope.movies.length).toBe(1);
            
            scope.newTitle = '';
            scope.newDirector = '';
            scope.newPublicationYear = '';
            scope.newDescription = '';
            scope.addMovie();
            expect(scope.movies.length).toBe(1);            
            
            
		
	});
});