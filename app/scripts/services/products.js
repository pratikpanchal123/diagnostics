'use strict';

/**
 * @ngdoc function
 * @name yapp.factory:productService
 * @description
 * # productService
 * Service of yapp
 */
angular.module("yapp").
	factory("productService", ["$http", function($http){
	
	var responseData = {};
	
	var getProducts = function(callback){
		$http.get("/api/products")
			.success(function(response){
				if(response.status == 'ok') {
					responseData = {success:true, message: "data found", data: response.data};
				} else {
					responseData = {success:false, message:"data not found"};
				}
				callback(responseData);
			})
			.error(function(error){
				responseData = {success:false, message:"prolem connecting server :("};
				callback(responseData);
			});
	};
	
	var getProduct = function(productId, callback){
		$http.get("/api/products/"+productId)
			.success(function(response){
				if(response.status == 'ok') {
					responseData = {success:true, message: "data found", data: response.data};
				} else {
					responseData = {success:false, message:"data not found"};
				}
				callback(responseData);
			})
			.error(function(error){
				responseData = {success:false, message:"prolem connecting server :("};
				callback(responseData);
			});
	};
	
	var authenticateUser = function(email, password, callback){
		$http.get("/api/users")
			.success(function(response){
				if(response.status == 'ok') {
					var users = angular.fromJson(response.data);
					angular.forEach(users, function(user){
						if(user.email === email && user.password === password) {
							rememberCredential(email, password);
							responseData = {success:true, message:"logged in"};
							callback(responseData);
						}
					});
				}
				responseData = {success:false, message:"invalid credentials"};
				callback(responseData);
			})
			.error(function(error){
				responseData = {success:false, message:"prolem connecting server :("};
				callback(responseData);
			});
	};

	var rememberCredential = function(email, password) {
		var credentials = {};
		credentials.currentuser = { email:email, password: password };
		$window.localStorage.setItem('credentials', credentials);
	};

	var isAuthenticated = function() {
		if($window.localStorage.getItem('credentials') ===  undefined){
			return false;
		} else {
			return true;
		}
	};

	var logOut = function() {
		$window.localStorage.clear();		
	};

	return {
		"getProducts": getProducts,
		"getProduct": getProduct
	}

}]);