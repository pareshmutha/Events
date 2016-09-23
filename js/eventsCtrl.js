angular.module('app')
.controller('eventsCtrl',function ($scope, $stateParams,eventsFactory,$ionicTabsDelegate) {
	
	$scope.loadEvents=function(){
		eventsFactory.getEvents().then(function(response){
		$scope.events=response;
		});
	}
	$scope.event={};
	$scope.loadEvents();
	$scope.addEvent=function(){
		eventsFactory.addEvent($scope.event);
		$scope.event={};
		$scope.loadEvents();
		alert("Event Added Sucessfully..")
		$ionicTabsDelegate.select(0);
	}
});