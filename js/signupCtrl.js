angular.module('app')
.controller('signupCtrl',function ($scope, $stateParams,$state) {
	
	$scope.loadEvents=function(){
		eventsFactory.getEvents().then(function(response){
		$scope.events=response;
		});
	}
	$scope.login=function(){
		$state.go("login");
	}
});