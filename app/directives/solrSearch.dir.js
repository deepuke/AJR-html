(function() {
	'use strict';
	angular.module("solrApp").directive("solrSearch", solrSearch);
	function solrSearch($location) {
		return {
			/*scope : {
				search : '&'
			},*/
			restrict : "AE",
			templateUrl : "app/view/solr_search.html",
			/*controller : 'solrSearchCtrl',
			controllerAs : 'ctrl',
			bindToController : true,*/
			link : function(scope, element, attrs) {
				
			}
		};
	}

})();
