'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', ["$location","$scope", "$state", "productService",'loginService', "customerService", function($location,$scope, $state, productService,loginService, customerService) {

    $scope.$state = $state;
	
	var initializeProductData = function() {
		productService.getProducts(function(response){
			if(response.success === true) {
				$scope.products = response.data;
			}
		});
	};
	
	 var initializeCustomerData = function() {
            var promise = customerService.getCustomers();
            promise.then(function(customerResponse){
                if(customerResponse.statuscode == 200){
                    $scope.customers = customerResponse.data;
                }
            });
        };
	//Loading product when we load dashboard
	initializeCustomerData();

	//Loading product when we load dashboard
	initializeProductData();
	
	$scope.logout = function(){
		loginService.logOut();
		$location.path("/login");
	}
	
}]);