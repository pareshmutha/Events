angular.module('app.routes', [])
.constant('eventsConstant', {
		BASE_URL: "http://139.59.29.134:8080/Messenger/webapi/" 
	} )
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
$ionicConfigProvider.navBar.alignTitle('center');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })
   

  .state('events', {
    url: '/events',
	abstract: true,
    templateUrl: 'templates/menu.html',
	controller: 'menuCtrl'
  })
  .state('events.home', {
    url: '/events',
	views: {
		  'menuContent': {
			templateUrl: 'templates/home.html',
			controller: 'menuCtrl'
		  }
		}
    
  })

  
/*.state('app.dashboard', {
		url: '/dashboard',
		views: {
		  'menuContent': {
			templateUrl: 'templates/dashboard.html',
			controller: 'menuCtrl'
		  }
		}
		
		
	  })*/

 

$urlRouterProvider.otherwise('/login');

  

});