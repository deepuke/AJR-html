(function() {
	'use strict';
	angular.module('solrApp').controller('trackingCtrl', trackingCtrl);

	trackingCtrl.$inject=['$q', 'resultRestFactory'];

	function trackingCtrl($q, resultRestFactory){
		var _self = this;

		_self.tableItems = [];


		resultRestFactory.getTrackingData().then(function(response) {		
			//debugger;
			console.log(response.data);
			_self.tableItems = response.data.values;
			
		})
		.catch(function(error) {
			console.log(error);
		});
	}
})();


