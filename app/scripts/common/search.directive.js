'use strict';

/*
 search directive which can be reusable for search functionaltiy.
 used in order custroller
*/
angular.module('customersApp').directive('mySearchBox', function() {
    return {
      restrict: 'E',
      transclude: false,
      scope: {
        searchText: '=',
        isSearching: '='
      },
      controller: function($scope,$state) {
        $scope.localSearchText = '';
        $scope.clearSearch = function() {
          $scope.searchText = "";
          $scope.localSearchText = "";
          $state.reload();
        };
        $scope.doSearch = function() {
          $scope.searchText = $scope.localSearchText;
        };
      },
      replace: true,
      template:
      '<form><div  class="form-group"> ' +
        '<div>' +
          '<input class= "form-control" ng-model="localSearchText" type="text" />' +
        '</div>' +
        '<div>' +
          '<button ng-click="clearSearch()" class="btn btn-info">Clear</button>&nbsp;' +
          '<button ng-click="doSearch()"    class="btn btn-primary">Search</button>' +
        '</div> ' +
        '<div ng-show="isSearching">' +
          '<img ng-show="isSearching" src="images/loader.gif" /> ' +
          'Searching...' +
        '</div>' +
      '</div></form>'
    };
  });
