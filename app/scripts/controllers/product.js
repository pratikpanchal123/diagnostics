'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('ProductCtrl', ["$scope", "$state", "productService", "$stateParams", function($scope, $state, productService, $stateParams) {
	
    $scope.$state = $state;
		
	var getProductData = function() {
		if($stateParams.productId != undefined) {
			productService.getProduct($stateParams.productId, function(response){
				if(response.success === true) {
					$scope.products = response.data;
				}
			});
		} else {
			productService.getProducts(function(response){
				if(response.success === true) {
					$scope.products = response.data;
				}
			});
		}
	};
	
	//get product when we load customer page
	getProductData();
}]);