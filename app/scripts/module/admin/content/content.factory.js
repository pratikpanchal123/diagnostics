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
            if(keyword == '' || keyword.trim() == ''){
                getDoctorUrl = constantData.SERVER_ADDRESS + apiUrl.doctors.DOCTORSBYLOCATION;
            } else {
                getDoctorUrl = constantData.SERVER_ADDRESS + apiUrl.doctors.DOCTORSBYPARAMS;
            }
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

        // Get doctors list
        function getDoctorsBySpeciality(categoryId) {
            var getDoctorUrl;
            apiUrl.doctors.speciality = categoryId;
            getDoctorUrl = constantData.SERVER_ADDRESS + apiUrl.doctors.DOCTORSBYSPECIALITY;
            return serverApi.getData(getDoctorUrl,true);
        }

        function getDoctorsById(doctorId){
            var getDoctorUrl;
            apiUrl.doctors.doctorId = doctorId;
            getDoctorUrl = constantData.SERVER_ADDRESS + apiUrl.doctors.DOCTORSBYID;
            return serverApi.getData(getDoctorUrl,true);
        }

        // Get doctors list by keyword
        function getDoctorsByKeyword(keyword) {
            var getDoctorUrl;
            apiUrl.doctors.keyword = keyword;
            getDoctorUrl = constantData.SERVER_ADDRESS + apiUrl.doctors.DOCTORSBYKEYWORD;
            return serverApi.getData(getDoctorUrl,true);
        }

        // Get labs list by keyword
        function getLabsByKeyword(keyword) {
            var getLabsUrl;
            apiUrl.labs.keyword = keyword;
            getLabsUrl = constantData.SERVER_ADDRESS + apiUrl.labs.LABSBYKEYWORD;
            return serverApi.getData(getLabsUrl,true);
        }

        // Get users
        function getUsers() {
            var getUsersUrl;
            getUsersUrl = constantData.SERVER_ADDRESS + apiUrl.users.USERS;
            return serverApi.getData(getUsersUrl,true);
        }

        return {
			getDoctors:getDoctors,
			getLabs:getLabs,
            getDoctorsCategories:getDoctorsCategories,
            getLabsCategories:getLabsCategories,
            getDoctorsByParams:getDoctorsByParams,
            getLabsByParams:getLabsByParams,
            getDoctorsBySpeciality:getDoctorsBySpeciality,
            getDoctorsById:getDoctorsById,
            getDoctorsByKeyword:getDoctorsByKeyword,
            getLabsByKeyword:getLabsByKeyword,
            getUsers:getUsers,
		};

	}

	homeFactory.$inject = [
		'serverApi',
		'constantData',
		'apiUrl'];

	angular.module('app.pLabs.content.admin').factory('content.factory', homeFactory);

})();
