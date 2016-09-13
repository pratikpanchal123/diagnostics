angular.module('yapp')
    .controller('CustomerCtrl', ["$location","$scope", "$state", "customerService",'$stateParams', function($location,$scope, $state,customerService, $stateParams) {

        $scope.$state = $state;
		
        var initializeCustomerData = function() {
			console.log($stateParams);
		 if($stateParams.customerID!= undefined){
			      var promise =customerService.getCustomersDetail($stateParams.customerID);
				promise.then(function(customerResponse){
				if(customerResponse.statuscode == 200){
                    $scope.customer = customerResponse.data;
                }
            });
        }
		 else{
			var promise =customerService.getCustomers();
            promise.then(function(customerResponse){
				if(customerResponse.statuscode == 200){
                    $scope.customers = customerResponse.data;
                }
            });
		 }
		}
		 $scope.greaterThan = function(rating) {
        return function(item) {
            if ( item['rating'] > rating) {                
                return true;
            } else {                
                return false;
            }
        }
    };
	 $scope.equalToCheck = function(sentiment) {
        return function(item) {
			
			if(sentiment == ""){
				return true;
			}else if ( item['sentiment'] == sentiment) {                
                return true;
            } else {                
                return false;
            }
        }
    };
    
	    //Loading product when we load dashboard
        initializeCustomerData();
    }]);