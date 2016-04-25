(function() {
	'use strict';
	angular.module("solrApp").controller("solrCtrl", solrCtrl);

	solrCtrl.$inject = ['$scope', '$http', '$q', '$location'];

	function solrCtrl($scope, $http, $q, $location) {
		var _self = this;
		_self.facet_fields = {};
		_self.selected_facets = [];
		_self.getQuery = function() {
			return $location.search().q || "*";
		};
		_self.getRows = function() {
			return $location.search().rows || "10";
		};

		_self.buildSearchParams = function() {
			var params = {
				'q' : _self.getQuery(),
				'facet' : "on",
				'facet.mincount' : "1",
				'wt' : 'json',
				'json.nl' : "map",
				'json.wrf' : 'JSON_CALLBACK',
				'rows' : _self.getRows()
			};

			var selectedFacets = _self.selected_facets;
			if (selectedFacets) {
				params["fq"] = selectedFacets;
			}
			if ($scope.facet_group) {
				params["facet.field"] = $scope.facet_group.listFields();
			}
			return params;
		};
		
		
		

		_self.search = function(query, rows) {			
			var deferred = $q.defer();	
			$http.jsonp(_self.solrUrl, {
				params : _self.buildSearchParams(),
				cache : true
			}).success(function(data) {
				_self.facet_fields = data.facet_counts.facet_fields;
				$scope.docs = data.response.docs;
				$scope.numFound = data.response.numFound;
				$scope.queryTime = data.responseHeader.QTime;
				$scope.highlights = data.highlighting;
				$scope.highlightdocs = _self.getHighlightList();
				_self.selected_facets = _self.getSelectedFacets();
				_self.selected_facets_obj = _self.getSelectedFacetsObjects();
			});
		};

		_self.getHighlightList = function() {
			var arr1 = [];

			console.log("highlighttest ", $scope.highlights);
			for (var n in $scope.highlights) {
				var contentString = "";
				for (var c in $scope.highlights[n].content) {
					contentString = contentString.concat($scope.highlights[n].content[c].trim());
				}
				contentString = replaceAll(contentString, "<b>", "<b><font color=\"green\">");
				contentString = replaceAll(contentString, "</b>", "</font></b>");

				var url = "";
				var resourcename = "";
				for (var doc in $scope.docs) {
					if ($scope.docs[doc].id == n) {
						url = $scope.docs[doc].url;
						resourcename = $scope.docs[doc].resourcename;
						break;
					}
				}

				arr1.push({
					key : n,
					url : url,
					resourcename : resourcename,
					content : contentString
				});
			}
			console.log("array ", arr1);
			return arr1;
		};

		$scope.search = _self.search;

		function replaceAll(string, find, replace) {
			return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
		}

		function escapeRegExp(string) {
			return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
		}


		_self.setFacetGroup = function(newGroup) {
			$scope.facet_group = newGroup;
		};

		_self.getSelectedFacetsObjects = function() {
			var retValue = [];
			_self.selected_facets.forEach(function(value, key) {
				var split_val = value.split(":");
				retValue.push({
					field : split_val[0],
					value : split_val[1].replace(/"/g, "")

				});
			});
			return retValue;
		};

		_self.getSelectedFacets = function() {
			var selected = $location.search().selected_facets;
			var selectedFacets = [];
			if (angular.isArray(selected)) {
				selectedFacets = selected;
			} else {
				if (selected) {
					selectedFacets.push(selected);
				}
			}
			return selectedFacets;

		};

		_self.selected_facets = _self.getSelectedFacets();
		_self.selected_facets_obj = _self.getSelectedFacetsObjects();

		$scope.$watch(function() {
			return $location.search();
		}, function(newVal, oldVal) {
			if (newVal !== oldVal) {
				_self.search();
			}
		}, true);
	}

})();
