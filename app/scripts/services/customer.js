angular.module("yapp")
    .service("customerService", ["$http","$q","$window", function($http,$q, $window){
        this.getCustomers = function () {
            var deferred = $q.defer();
            $http.get('/api/customers')
                .success(function(response){
                    deferred.resolve(response);
                })
                .error(function(err){
                    deferred.resolve(err);
                });
            return deferred.promise;
        };
		this.getCustomersDetail = function(id){
			 var deferred = $q.defer();
            $http.get('/api/customers/'+id)
                .success(function(response){
                    deferred.resolve(response);
                })
                .error(function(err){
                    deferred.resolve(err);
                });
            return deferred.promise;
		};
    }])