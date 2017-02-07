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


		_this.view = 'list';

		function search(){
			if(_this.location && _this.location.address_components && _this.location.address_components[0].long_name){
				var city = "";
				angular.forEach(_this.location.address_components, function(data){
					if(data.types[0] == 'locality'){
						city = data.long_name;
					}
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
				});

				$state.go('index.home.search');

			} else {
				_this.isValidLocation = false;
			}
		}

		function listview(){
			_this.view = 'list';
		}

		function gridview(){
			_this.view = 'grid';
		}


		_this.search = search;
		_this.listview = listview;
		_this.gridview = gridview;


		init();

	}

	homeController.$inject = ['content.factory'];
	angular.module('app.pLabs.content',[]).controller('home.content.controller',homeController);
})();

