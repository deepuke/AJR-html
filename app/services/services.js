(function() {
	'use strict';

	angular.module('solrApp').factory('resultRestFactory', resultRestFactory);

	resultRestFactory.$inject = ['$q', '$http'];

	function resultRestFactory($q, $http) {

		return {
			getImageBinary : getImageBinary,
			getTrackingData : getTrackingData
		};

	/*	function getDocumentResult() {
			var deferred = $q.defer();
			$http({
				method : 'GET',
				url : 'hpf/' + key + '/img:img'
			}).then(function(response) {
				deferred.resolve(response);
			}, function(error) {
				deferred.reject(error);
			});

			return deferred.promise;
		} */

		function getImageBinary(key) {
			var deferred = $q.defer();
			$http({
				method : 'GET',
				url : 'hpf/' + key + '/img:img',
				headers : {'Accept' : 'application/json'}
			}).then(function(response) {
				deferred.resolve(response);
			}, function(error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}


		function getTrackingData() {
			var deferred = $q.defer();
			$http({
				method : 'GET',
				url : 'dm/hpftrk/',
				headers : {'Accept' : 'application/json'}
			}).then(function(response) {
				deferred.resolve(response);
			}, function(error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}

	}

})();

