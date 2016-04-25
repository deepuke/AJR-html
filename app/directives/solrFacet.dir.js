(function() {
	'use strict';
	angular.module("solrApp").directive("solrFacet", solrFacet);

	function solrFacet() {
		return {
			restrict : "E",
			scope : {
				
				field : '=',
				values : '='
			},			
			controller : 'solrFacetCtrl',
			controllerAs : 'ctrl',
			bindToController : true,
			templateUrl : "app/view/solr_facet.html",
			link : function(scope, element, attrs, ctrl) {				

				var es5getprops = Object.getOwnPropertyNames;

				scope.class = 'show-short-view';
				scope.isEmpty = function() {
					return !scope.results || (es5getprops(scope.results).length === 0);
					// return (es5getprops(scope.results).length === 0);
				};

				scope.showAll = function() {

				};

				scope.changeClass = function() {
					if (scope.class === "show-short-view") {
						scope.class = "show-large-view";
					} else {
						scope.class = "show-short-view";
					}
				};
			}
		}; 
	}
})(); 