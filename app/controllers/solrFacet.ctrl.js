(function() {
	'use strict';
	angular.module("solrApp").controller("solrFacetCtrl", solrFacetCtrl);

	solrFacetCtrl.$inject = [];

	function solrFacetCtrl() {
		var _self = this;

		//console.log(_self.field);
		_self.displayName = function(){
			if(_self.field === 'filetype'){
				return 'File Type';
			} else if(_self.field === 'doctype'){
				return 'Document Type';
			} else if(_self.field === 'facid'){
				return 'Facility';
			}
		}		
	}

})();

