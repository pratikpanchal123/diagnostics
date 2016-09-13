'use strict';
/**
 * @ngdoc function
 * @name yapp.factory:userService
 * @description
 * # userService
 * Service of yapp
 */
angular.module("yapp").
	factory("userService", ["$http", "$q", "$window", function($http, $q, $window){
	
	var response = {};
	
	this.getCustomers = function () {
            var deferred = $q.defer();
            $http.get('/api/users')
                .success(function(response){
                    deferred.resolve(response);
                })
                .error(function(err){
                    deferred.resolve(err);
                });
            return deferred.promise;
	};
}]);