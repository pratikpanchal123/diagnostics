(function() {
	'use strict';

	function homeController (contentFactory) {
		var _this = this;
		function init() {

			_this.doctorsCat = ["Dentist","Gynecologist","Orthopedist","Pediatrician","Ophthalmologist","Dermatologist","Physiotherapist","Infertility","Psychiatrist","Cardiologist","Urologist","Dietitian","Neurologist","Pulmonologist","Gastroenterologist","Neurosurgeon","Bariatric","Rheumatologist"];

			_this.labsCat = ["Widal test","Erythrocyte sedimentation rate(esr)","Vitamin b12","Vdrl","Mantoux test","Pregnancy test","urine",  "Hepatitis profile","Ct scan"];

            contentFactory.getDoctorsCategories().then(function (response) {
				if(response.data.length > 0){
                    _this.doctorsCat = response.data;
				}
            },function (error) {
            });

            contentFactory.getLabsCategories().then(function (response) {
                if(response.data.length > 0) {
                    _this.labsCat = response.data;
                }
            },function (error) {
                console.log(error);
            });
		}

		function search(){
			if(_this.location && _this.location.address_components && _this.location.address_components[0].long_name){
				var city = _this.location.address_components[0].long_name;
                contentFactory.getDoctors().then(function (response) {
                    console.log(response);
                },function (error) {
                    console.log(error);
                });

                contentFactory.getLabs().then(function (response) {
                    console.log(response);
                },function (error) {
                    console.log(error);
                });
            } else {
                _this.isValidLocation = false;
            }
		}

		init();

		_this.search = search;
	}

	homeController.$inject = ['content.factory'];
	angular.module('app.pLabs.content',[]).controller('home.content.controller',homeController);
})();

