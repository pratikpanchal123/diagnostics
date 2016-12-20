(function() {
	'use strict';
	// Server Communication Module
	function serverApiFn($http,$q,constantData,$location,apiUrl,$rootScope) {

		// Get Data from the API
		function getData(url) {
			var config,deferred,result,getUrl = url;
			deferred = $q.defer();
			$http.get(getUrl).success(function(data,status) {
				deferred.notify(status);
				deferred.resolve(data,status);
			}).error(function(data,status) {
					deferred.notify(status);
					deferred.reject(data,status);
			});
			return deferred.promise;
		}

		// POST data to API
		function postData(url, data,isPut) {
			var postUrl = url,config,deferred;
			deferred = $q.defer();
			if(isPut){
				$http.put(postUrl, JSON.stringify(data)).success(function(data,status) {
					deferred.notify(status);
					deferred.resolve(data,status);
				}).error(function(data,status) {
					deferred.reject(data,status);
				});
			} else {
				$http.post(postUrl, JSON.stringify(data)).success(function(data) {
					deferred.resolve(data);
				}).error(function(data,status) {
					deferred.reject(data,status);
				});
			}

			return deferred.promise;
		}

		function deleteData(url){
			var config,deferred,header;
			deferred = $q.defer();
			$http.delete(url).success(function(data,status) {
				deferred.resolve(data,status);
			}).error(function(data,status) {
				deferred.reject(data,status);
			});
			return deferred.promise;
		}
		return {
			getData: getData,
			postData:postData,
			deleteData:deleteData
		};
	}

	serverApiFn.$inject = [
		'$http',
		'$q',
		'constantData',
		'$location',
		'apiUrl',
		'$rootScope'];
	angular.module('app.pLabs.server',[]).factory('serverApi', serverApiFn);


})();
