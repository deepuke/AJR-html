(function(){
	'use strict';
	angular.module("solrApp").controller("solrFacetResultCtrl", solrFacetResultCtrl);

	solrFacetResultCtrl.$inject = ['$scope'];

	function solrFacetResultCtrl($scope){
		var _self = this;		

		_self.checkboxModel = {
			label : _self.key,
			value : false,
			count : _self.count
		};

		function facetString(){ 
			return _self.field+':"'+_self.key+'"';
		};

		_self.change = function() {
			if (_self.checkboxModel.value) {				
				$scope.$emit('addFacet', { item : facetString(), key:_self.field, value:_self.key });
			} else {
				$scope.$emit('removeFacet', { item : facetString(), key:_self.field, value:_self.key });
			}
		};
		
	}
})();

