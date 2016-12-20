(function() {
	'use strict';

	function homeController (contentFactory) {
		var _this = this;
		function init() {
			contentFactory.getDoctors().then(function (response) {
				console.log(response);
			},function (error) {
				console.log(error);
			});
			contentFactory.getLabs().then(function (response) {
				console.log(response);
			},function (error) {
				console.log(error);
			})

		}
		init();
	}

	homeController.$inject = ['content.factory'];
	angular.module('app.pLabs.content',[]).controller('home.content.controller',homeController);
})();

