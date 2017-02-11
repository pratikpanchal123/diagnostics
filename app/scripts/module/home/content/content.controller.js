(function() {
	'use strict';

	function homeController (contentFactory, $loadingOverlay, constantData) {
		var _this = this;
        _this.view = 'list';

        function init() {

            _this.searchInitiated = false;

            _this.doctorsCat = ["Dentist","Gynecologist","Orthopedist","Pediatrician","Ophthalmologist","Dermatologist","Physiotherapist","Infertility","Psychiatrist","Cardiologist","Urologist","Dietitian","Neurologist","Pulmonologist","Gastroenterologist","Neurosurgeon","Bariatric","Rheumatologist"];

			_this.labsCat = ["Widal test","Erythrocyte sedimentation rate(esr)","Vitamin b12","Vdrl","Mantoux test","Pregnancy test","urine",  "Hepatitis profile","Ct scan"];

            $loadingOverlay.show(constantData.loading);
            contentFactory.getDoctorsCategories().then(function (response) {
				if(response.data.length > 0){
                    _this.doctorsCat = response.data;
                    $loadingOverlay.hide();
				}
            },function (error) {
            });

            $loadingOverlay.show(constantData.loading);
            contentFactory.getLabsCategories().then(function (response) {
                if(response.data.length > 0) {
                    _this.labsCat = response.data;
                    $loadingOverlay.hide();
                }
            },function (error) {
                console.log(error);
            });
		}

        init();

		function search(){
			if(_this.location && _this.location.address_components && _this.location.address_components[0].long_name){
                _this.searchInitiated = true;

                var city = "";
				angular.forEach(_this.location.address_components, function(data){
					if(data.types[0] == 'locality'){
						city = data.long_name;
					}
				});

                $loadingOverlay.show(constantData.loading);
				contentFactory.getDoctors().then(function (response) {
					console.log(response);
                    $loadingOverlay.hide();
                },function (error) {
					console.log(error);
				});

                $loadingOverlay.show(constantData.loading);
				contentFactory.getLabs().then(function (response) {
					console.log(response);
                    $loadingOverlay.hide();
				},function (error) {
					console.log(error);
				});

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
	}

	homeController.$inject = ['content.factory', '$loadingOverlay', 'constantData'];
	angular.module('app.pLabs.content',[]).controller('home.content.controller',homeController);
})();

