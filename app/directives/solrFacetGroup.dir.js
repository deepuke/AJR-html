(function() {
	'use strict';
	angular.module("solrApp").directive("solrFacetGroup", solrFacetGroup);
	function solrFacetGroup() {
		return {
			restrict : "E",
			scope : {},
			controller : 'facetGroupController',
			//transclude : true,
			templateUrl : "app/view/solr_facet_group.html",
			link : function(scope, element, attrs, ctrls) {
				var solrCtrl = ctrls[0];
				var facetGroupCtrl = ctrls[1];

				solrCtrl.setFacetGroup(scope);
				scope.$watch(function() {
					return solrCtrl.facet_fields;
				}, function(newVal, oldVal) {
					debugger;
					if (newVal !== oldVal) {
						for (var k in facetGroupCtrl.getFacets()) {
							facetGroupCtrl.setFacetResult(k, solrCtrl.facet_fields[k]);
						}
					}
				});
			}
		};
	}

})();
