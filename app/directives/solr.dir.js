(function() {
	'use strict';
	angular.module("solrApp").directive("solr", solr);

	function solr() {
		return {
			scope : {
				solrUrl : '=',
				docs : '=',
				numFound : '=',
				queryTime : '=',
				highlights : '=',
				highlightdocs : '=',
			},
			restrict : 'E',
			controller : 'solrCtrl',
			controllerAs : 'ctrl',
			bindToController : true
		};
	}

})();