'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of yapp
 */
angular.module('yapp')
    .controller('UserCtrl', ["$scope", "$state", "userService", function($scope, $state, userService) {

        $scope.$state = $state;

        var initializeUserData = function() {
            var promise = userService.getUsers();
            promise.then(function(userResponse){
                if(userResponse.code == 200){
                    $scope.users = userResponse.data;
                }
            });
        };
		
        //Loading user data when we load dashboard
        initializeUserData();
    }]);