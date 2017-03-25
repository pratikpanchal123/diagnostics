(function() {
	'use strict';

	function homeController (contentFactory, $loadingOverlay, constantData, localContentFactory) {
		var _this = this;
        _this.keyword = "";
        _this.city = "";
        _this.doctors = [];
        _this.labs = [];
        _this.categories = [];
        _this.doctorsListBeforePriceRange = [];
        _this.dayFilter = undefined;

            function init() {

                localContentFactory.setCategories();

            _this.slider = {
                minValue: 0,
                maxValue: 1000,
                options: {
                    floor: 0,
                    ceil: 1000,
                    showSelectionBar: true,
                    hideLimitLabels:true,
                    translate: function(value) {
                        return 'Rs.' + value;
                    },
                    getSelectionBarColor: function(value) {
                        if (value <= 300)
                            return 'red';
                        if (value <= 600)
                            return 'orange';
                        if (value <= 1000)
                            return 'yellow';
                        return '#2AE02A';
                    },
                    onStart: function(id) {
                        //console.log('on change ' + _this.price + '-' + _this.slider.maxValue); // logs 'on change slider-id'
                    },
                    onChange: function(id) {
                        filterByPrice();
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
                if(_this.keyword!=''){
                    $loadingOverlay.show(constantData.loading);
                    contentFactory.getDoctorsByKeyword(_this.keyword).then(function (response) {
                        _this.doctors = response.data;
                        $loadingOverlay.hide();
                    },function (error) {
                        console.log(error);
                    });

                    $loadingOverlay.show(constantData.loading);
                    contentFactory.getLabsByKeyword(_this.keyword).then(function (response) {
                        _this.labs = response.data;
                        $loadingOverlay.hide();
                    },function (error) {
                        console.log(error);
                    });
                } else {
                    _this.isValidLocation = false;
                    _this.isValidKeyword = false;
                }
			}
		}

        function searchByCity(city){

            _this.city = _this.location = city;

            _this.categories = localContentFactory.getCategories();

                _this.defaultInitiated = false;
                _this.searchInitiated = true;
                _this.detailInitiated = false;

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

        function filterByPrice(){
            if(_this.doctorsListBeforePriceRange.length == 0) {
                _this.doctorsListBeforePriceRange = _this.doctors;
            } else {
                _this.doctors = _this.doctorsListBeforePriceRange;
            }
            var output = [];
            angular.forEach(_this.doctors, function (item) {
                if(item.fees >= _this.slider.minValue && item.fees <= _this.slider.maxValue){
                    output.push(item);
                }
            });
            _this.doctors = output;
        }

        function filterByAvailibity(){
            if(_this.doctorsListBeforePriceRange.length == 0) {
                _this.doctorsListBeforePriceRange = _this.doctors;
            } else {
                _this.doctors = _this.doctorsListBeforePriceRange;
            }

            if(_this.dayFilter == "" || _this.dayFilter == undefined) {
                return _this.doctors;
            } else {
                var output = [];
                var dayFilter = _this.dayFilter;
                angular.forEach(_this.doctors, function (item) {
                    if(item.availibity.indexOf(dayFilter) != -1){
                        //console.log(item.availibity);
                        output.push(item);
                    }
                });
                _this.doctors = output;
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

        function getDay(d){
            var days = [];
            days[0] = "Sunday";
            days[1] = "Monday";
            days[2] = "Tuesday";
            days[3] = "Wednesday";
            days[4] = "Thursday";
            days[5] = "Friday";
            days[6] = "Saturday";
            return days[d];
        }

		_this.search = search;
		_this.searchBySpeciality = searchBySpeciality;
		_this.searchByCity = searchByCity;
		_this.getDoctorDetail = getDoctorDetail;
		_this.filterByAvailibity = filterByAvailibity;
		_this.filterByPrice = filterByPrice;
		_this.getDay = getDay;
		_this.filterByPrice = filterByPrice;
	}

	homeController.$inject = ['content.factory', '$loadingOverlay', 'constantData', 'localContent.factory'];
	angular.module('app.pLabs.content',[]).controller('home.content.controller',homeController);
})();

