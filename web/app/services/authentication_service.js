MyApp.service('AuthenticationService', function($firebase, $firebaseAuth){
  var firebaseRef = new Firebase('blistering-inferno-2684.firebaseIO.com');
  var firebaseAuth = $firebaseAuth(firebaseRef); 

  this.logUserIn = function(email, password){
    return firebaseAuth.$authWithPassword({
      email: email,
      password: password
    });
  };

  this.createUser = function(email, password){
    return firebaseAuth.$createUser({
      email: email,
      password: password
    });
  };
  
  this.checkLoggedIn = function(){
    return firebaseAuth.$waitForAuth();
  };
  
  this.logUserOut = function(){
    firebaseAuth.$unauth();
  };

  this.getUserLoggedIn = function(){
    return firebaseAuth.$getAuth();
  }  
});

