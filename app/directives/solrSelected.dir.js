(function() {
	'use strict';
	angular.module("solrApp").directive("solrSelected", solrSelected);
	function solrSelected() {
		return {
			restrict : "E",
			scope : {
				selectedItemsArray : '=' 
			},
			controller : function($scope) {	
				var _self = this;
				_self.changeKeyToLabel = function(key){
					switch (key) {
						case 'facid' : return 'Facility'; break; 
						case 'doctype' : return 'Doc Type'; break; 
						case 'filetype' : return 'File Type'; break; 
					};
				}	

				_self.showSlectedItemCSV = function(arr){
					return arr.join(", ");
				}			
			},
			controllerAs : 'ctrl',
			bindToController : true,
			templateUrl : "app/view/solr_selected.html",
			link : function(scope, element, attrs, ctrl) {
				
			}
		};
	}

})();
