(function() {
	'use strict';

	function homeController (contentFactory) {
		var _this = this;
		function init() {

			_this.doctorsCat = ["Dentist","Gynecologist","Orthopedist","Pediatrician","Ophthalmologist","Dermatologist","Physiotherapist","Infertility","Psychiatrist","Cardiologist","Urologist","Dietitian","Neurologist","Pulmonologist","Gastroenterologist","Neurosurgeon","Bariatric","Rheumatologist"];

			_this.labsCat = ["Widal test","Erythrocyte sedimentation rate(esr)","Vitamin b12","Vdrl","Mantoux test","Pregnancy test","urine",  "Hepatitis profile","Ct scan"];

            contentFactory.getDoctorsCategories().then(function (response) {
                _this.doctorsCat = response.data;
                console.log(_this.doctorsCat);
            },function (error) {
            });

            contentFactory.getLabsCategories().then(function (response) {
                _this.labsCat  = response.data;
                console.log(_this.labsCat);
            },function (error) {
                console.log(error);
            });

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

		function search(){
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
		}

		init();

		_this.search = search;
	}

	homeController.$inject = ['content.factory'];
	angular.module('app.pLabs.content',[]).controller('home.content.controller',homeController);
})();

