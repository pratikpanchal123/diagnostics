'use strict';

/**
 * @ngdoc function
 * @name yapp.factory:loginService
 * @description
 * # loginService
 * Service of yapp
 */
angular.module("yapp").
	factory("loginService", ["$http", "$window", function($http, $window){
	
	var responseData = {};

	var authenticateUser = function(email, password, callback){
		$http.get("/api/users")
			.success(function(response){
				if(response.status == 'ok') {
					var users = angular.fromJson(response.data);
					angular.forEach(users, function(user){
						if(user.email === email && user.password === password) {
							rememberCredential(email, password);
							responseData = {success:true, message:"logged in"};
						}
					});
				}else{
						responseData = {success:false, message:"invalid credentials"};
				}
				callback(responseData);
			})
			.error(function(error){
				responseData = {success:false, message:"prolem connecting server :("};
				callback(responseData);
			});
	};

	var rememberCredential = function(email, password) {
		$window.localStorage.setItem("username", email);
		$window.localStorage.setItem("password", password);
	};

	var isAuthenticated = function() {
		var username = $window.localStorage.getItem("username");
		var password = $window.localStorage.getItem("password");
		if(username ===  undefined || password === undefined || username ===  null || password === null ){
			return false;
		} else {
			return true;
		}
	};

	var logOut = function() {
		$window.localStorage.clear();		
	};

	return {
		"authenticateUser": authenticateUser,
		"logOut": logOut,
		"isAuthenticated": isAuthenticated
	}

}]);