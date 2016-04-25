	(function() {
	'use strict';
	angular.module('solrApp').directive('resultDocument', resultDocument);
	

	function resultDocument() {
		return {
			restrict : 'E',
			scope : {
				doc : '=record',
				searchText : '='
			},
			controller : 'resultDocumentCtrl',
			controllerAs : 'ctrl',
			bindToController : true,
			templateUrl : 'app/view/result_document.html',
			link : function(scope, element, attrs) {
			}
		};
	}

})();
