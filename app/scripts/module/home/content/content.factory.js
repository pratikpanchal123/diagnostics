(function() {
	'use strict';
	// Home factory
	function homeFactory(serverApi,constantData,apiUrl) {

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

        // Get doctors list
        function getDoctorsByParams(location, keyword) {
            var getDoctorUrl;
            apiUrl.doctors.location = location;
            apiUrl.doctors.keyword = keyword;
            getDoctorUrl = constantData.SERVER_ADDRESS + apiUrl.doctors.DOCTORSBYPARAMS;
            return serverApi.getData(getDoctorUrl,true);
        }

        // Get labs list
        function getLabsByParams(location, keyword) {
            var getLabsUrl;
            apiUrl.labs.location = location;
            apiUrl.labs.keyword = keyword;
            getLabsUrl = constantData.SERVER_ADDRESS + apiUrl.labs.LABSBYPARAMS;
            return serverApi.getData(getLabsUrl,true);
        }

        return {
			getDoctors:getDoctors,
			getLabs:getLabs,
            getDoctorsCategories:getDoctorsCategories,
            getLabsCategories:getLabsCategories,
            getDoctorsByParams:getDoctorsByParams,
            getLabsByParams:getLabsByParams,
		};

	}

	homeFactory.$inject = [
		'serverApi',
		'constantData',
		'apiUrl'];

	angular.module('app.pLabs.content').factory('content.factory', homeFactory);

})();
