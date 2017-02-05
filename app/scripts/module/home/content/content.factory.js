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

        // Get categories list
        function getDoctorsCategories() {
            var getCategoriesUrl;
            getCategoriesUrl = constantData.SERVER_ADDRESS + apiUrl.categories.CATEGORIES + '/doc';
            return serverApi.getData(getCategoriesUrl,true);
        }

        // Get Labs categories list
        function getLabsCategories() {
            var getLabsCategoriesUrl;
            getLabsCategoriesUrl = constantData.SERVER_ADDRESS + apiUrl.categories.CATEGORIES + '/lab';
            return serverApi.getData(getLabsCategoriesUrl,true);
        }

        return {
			getDoctors:getDoctors,
			getLabs:getLabs,
            getDoctorsCategories:getDoctorsCategories,
            getLabsCategories:getLabsCategories
		};

	}

	homeFactory.$inject = [
		'serverApi',
		'$location',
		'constantData',
		'apiUrl'];

	angular.module('app.pLabs.content').factory('content.factory', homeFactory);

})();
