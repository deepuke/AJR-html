(function() {
	'use strict';
	angular.module('solrApp').directive("solrFacetResult", solrFacetResult);
	function solrFacetResult($location) {
		return {
			restrict : "E",
			scope : {
				field : "=",
				key : "@",
				count : "@",
				remove : "@"
			},
			templateUrl : "app/view/solr_facet_result.html",
			controller : 'solrFacetResultCtrl',
			controllerAs : 'ctrl',
			bindToController : true,
			link : function(scope, element, attrs) {
			}
		};
	}

})();
