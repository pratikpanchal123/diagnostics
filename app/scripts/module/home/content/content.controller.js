(function() {
	'use strict';

	function homeController (contentFactory, $loadingOverlay, constantData, localContentFactory) {
		var _this = this;
        _this.keyword = "";
        _this.city = "";
        _this.doctors = [];
        _this.labs = [];
        _this.categories = [];

            function init() {

                localContentFactory.setCategories();

            _this.slider = {
                minValue: 0,
                maxValue: 10000,
                options: {
                    floor: 0,
                    ceil: 10000,
                    showSelectionBar: true,
                    getSelectionBarColor: function(value) {
                        if (value <= 3000)
                            return 'red';
                        if (value <= 6000)
                            return 'orange';
                        if (value <= 10000)
                            return 'yellow';
                        return '#2AE02A';
                    },
                    onStart: function(id) {
                        //console.log('on change ' + _this.price + '-' + _this.slider.maxValue); // logs 'on change slider-id'
                    },
                    onChange: function(id) {
                        //console.log('on change ' + _this.price + '-' + _this.slider.maxValue); // logs 'on change slider-id'
                    },
                    onEnd: function(id) {
                    	//search should start here
                        //console.log('on change ' + _this.price + '-' + _this.slider.maxValue); // logs 'on change slider-id'
                    }
                }
            };

            _this.defaultInitiated = true;

            _this.searchInitiated = false;

            _this.detailInitiated = false;

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

            _this.categories = localContentFactory.getCategories();

            if(_this.location && _this.location.address_components && _this.location.address_components[0].long_name){
                _this.defaultInitiated = false;
                _this.searchInitiated = true;
                _this.detailInitiated = false;

				angular.forEach(_this.location.address_components, function(data){
					if(data.types[0] == 'locality'){
                        _this.city = data.long_name;
					}
				});

                $loadingOverlay.show(constantData.loading);
				contentFactory.getDoctorsByParams(_this.city, _this.keyword).then(function (response) {
					_this.doctors = response.data;
                    $loadingOverlay.hide();
                },function (error) {
					console.log(error);
				});

                $loadingOverlay.show(constantData.loading);
				contentFactory.getLabsByParams(_this.city, _this.keyword).then(function (response) {
                    _this.labs = response.data;
                    $loadingOverlay.hide();
				},function (error) {
					console.log(error);
				});

			} else {
				_this.isValidLocation = false;
			}
		}

        function searchBySpeciality(categoryId){

            _this.categories = localContentFactory.getCategories();

		    if(_this.categories[categoryId].name){
                _this.keyword = _this.categories[categoryId].name;
            } else if(_this.doctorsCat[categoryId]){
                _this.keyword = _this.doctorsCat[categoryId];
            }

            if(categoryId){

                _this.defaultInitiated = false;
                _this.searchInitiated = true;
                _this.detailInitiated = false;

                $loadingOverlay.show(constantData.loading);
                contentFactory.getDoctorsBySpeciality(categoryId).then(function (response) {
                    _this.doctors = response.data;
                    $loadingOverlay.hide();
                },function (error) {
                    console.log(error);
                });

                /*
                $loadingOverlay.show(constantData.loading);
                contentFactory.getLabsByParams(_this.city, _this.keyword).then(function (response) {
                    _this.labs = response.data;
                    $loadingOverlay.hide();
                },function (error) {
                    console.log(error);
                });
                */

            }
        }


        function getDoctorDetail(doctorId){

            _this.categories = localContentFactory.getCategories();

            if(doctorId){

                _this.defaultInitiated = false;
                _this.searchInitiated = false;
                _this.detailInitiated = true;

                $loadingOverlay.show(constantData.loading);
                contentFactory.getDoctorsById(doctorId).then(function (response) {
                    _this.doctors = response.data;
                    $loadingOverlay.hide();
                },function (error) {
                    console.log(error);
                });
            }
        }

		_this.search = search;
		_this.searchBySpeciality = searchBySpeciality;
		_this.getDoctorDetail = getDoctorDetail;
	}

	homeController.$inject = ['content.factory', '$loadingOverlay', 'constantData', 'localContent.factory'];
	angular.module('app.pLabs.content',[]).controller('home.content.controller',homeController);
})();

