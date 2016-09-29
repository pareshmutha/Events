angular.module('app')
.controller('menuCtrl',function ($scope, $stateParams,$state) {
	
	$scope.loadEvents=function(){
		eventsFactory.getEvents().then(function(response){
		$scope.events=response;
		});
	}
	$scope.signUp=function(){
		$state.go("signup");
	}
	$scope.login=function(){
		$state.go("events.home");
		
	}
});