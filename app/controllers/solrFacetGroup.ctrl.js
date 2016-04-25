(function() {
	'use strict';
	angular.module('solrApp').controller('facetGroupController', facetGroupController);
	facetGroupController.$inject = ['$scope'];
	function facetGroupController($scope) {
		$scope.facets = {};
		this.getFacets = function() {
			return $scope.facets;
		};
		this.registerFacet = function(facet) {
			$scope.facets[facet.field] = facet;
		};
		$scope.listFields = function() {
			var fields = [];
			for (var k in $scope.facets) {
				fields.push($scope.facets[k].field);
			}
			return fields;
		};
		this.setFacetResult = function(facet_key, facet_results) {
			for (var k in $scope.facets) {
				if ($scope.facets[k].field === facet_key) {
					$scope.facets[k].results = facet_results;
				}
			}
		};
	}

})();

