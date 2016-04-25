(function() {
	'use strict';
	angular.module('solrApp').filter("sanitize", function($sce) {
		return function(htmlCode) {
			return $sce.trustAsHtml(htmlCode);
		};
	}).filter('highlight', function($sce) {
	    return function(text, phrase) {
	      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
	        '<span class="highlighted">$1</span>')

	      return $sce.trustAsHtml(text)
	    }
	}).filter('actualLabel', function($sce) {
	    return function(text) {
	      if(text === 'facid'){
	      	return Facility;
	      }	      
	    }
	});
})();



