(function() {
	'use strict';
	// Home factory
	function homeFactory(serverApi,$location,constantData,apiUrl) {

		// Get doctors list
		function getDoctors() {
			var getDoctorUrl;
			getDoctorUrl = constantData.SERVER_ADDRESS + apiUrl.doctors.DOCTORS;
			return serverApi.getData(getDoctorUrl,true);
		}

		// Get labs list
		function getLabs() {
			var getLabsUrl;
			getLabsUrl = constantData.SERVER_ADDRESS + apiUrl.labs.LABS;
			return serverApi.getData(getLabsUrl,true);
		}


		return {
			getDoctors:getDoctors,
			getLabs:getLabs
		};

	}

	homeFactory.$inject = [
		'serverApi',
		'$location',
		'constantData',
		'apiUrl'];

	angular.module('app.pLabs.content').factory('content.factory', homeFactory);

})();
