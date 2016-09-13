'use strict';

// specific header directive which inclues header menus 
angular.module('yapp')
.directive('header', ['$location','$window',function($location,$window) {
   var HeaderDirFunction = function (scope, element, attrs) {
		scope.logout = function(){
			localStorage.clear();
    		$location.path('/login');	
		}
   } ;

  return {
  	restrict: 'E',
    templateUrl: 'views/header.html',
    link : HeaderDirFunction,
  };
}]);