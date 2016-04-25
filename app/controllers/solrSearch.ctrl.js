(function() {
	'use strict';
	angular.module("solrApp").controller("solrSearchCtrl", solrSearchCtrl);

	solrSearchCtrl.$inject = [];

	function solrSearchCtrl() {
		var _self = this;

		_self.selected = _self.items[0];

		_self.items = [{
			id:null,
			label:'All'
		},{
			id : 1,
			label : 'Facility'
			/*subItem : {
				name : 'aSubItem'
			}*/
		}, {
			id : 2,
			label : 'Patient Id'
		},{
			id : 3,
			label : 'Doc Type'
		}];

		_self.showItem = function(){
			console.log(_self.selected);
		};

	}

})();

