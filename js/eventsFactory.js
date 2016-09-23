angular.module('app').factory("eventsFactory",function ($http,eventsConstant) {
  function getEvents() {
    return $http.get(eventsConstant.BASE_URL + 'events').then(function (response) {
      return response.data;
    });
  }
  function addEvent(event){
	  var req = {
			 method: 'POST',
			 url: eventsConstant.BASE_URL + 'events',
			 data: event
			}
			$http(req).then(function(res){
				
			}, function(res){
				alert("error="+res);
			});
  }
  return {
    getEvents: getEvents,
	addEvent:addEvent
  };
});