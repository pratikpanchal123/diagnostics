(function() {
	'use strict';

	function homeController (contentFactory) {
		var _this = this;
		function init() {
			_this.doctorsCat = ["Dentist","Gynecologist","Orthopedist","Pediatrician","Ophthalmologist","Dermatologist","Physiotherapist","Infertility","Specialist","Psychiatrist","Cardiologist","Urologist","Dietitian","Neurologist","Pulmonologist","Gastroenterologist","Neurosurgeon","Bariatric","Surgeon","Rheumatologist"];

			_this.labsCat = ["Widal test","Erythrocyte sedimentation rate(esr)","Vitamin b12","Vdrl","Mantoux test","Pregnancy test","urine",  "Hepatitis profile","Ct scan"];
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

