(function() {
	'use strict';

	function homeHeaderController ($state) {

		var _this = this;

		function reload(){
			$state.reload();
		}

		_this.reload = reload;
	}

	homeHeaderController.$inject = ['$state'];
	angular.module('app.pLabs.header',[]).controller('home.header.controller',homeHeaderController);
})();

