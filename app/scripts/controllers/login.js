'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', ["$scope", "$location", "loginService", function($scope, $location, loginService) {

    $scope.submit = function() {
		loginService.authenticateUser($scope.email, $scope.password, function(response){
			if(response.success == true) {
				$location.path("/dashboard");
			} else {
				$scope.error = response.message;
			}
		});
    }
  }]);