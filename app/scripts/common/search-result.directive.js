'use strict';
angular.module('customersApp').directive('mySearchResults', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        isSearching: '=',
        searchResults: '=',
        searchText: '='
      },
      controller:function($scope){
		$scope.isSearching = false;
      },
      replace: true,
      template:
        '<div ng-hide="isSearching">' +
          '<h4 ng-show="searchResults">Found {{searchResults.length}} Search Results For "{{searchText}}":</h4>' +
          '<ul ng-show="searchResults">' +
            '<li ng-repeat="searchResult in searchResults">' +
              '{{searchResult}}' +
            '</li>' +
          '</ul>' +
        '</div>'
    };
  });