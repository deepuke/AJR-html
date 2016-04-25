( function() {
  'use strict';
		angular.module('solrApp').constant('constantService', {
			APP_TITLE : 'Book Logger',
			APP_DESCRIPTION : 'Track which books you read',
			APP_VERSION : '1.0',
      APP_URL : 'http://192.168.1.61:8983/solr/hpfcollection/browse'
		});

}());
