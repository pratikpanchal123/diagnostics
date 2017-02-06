(function() {
	'use strict';

	function homeHeaderController (contentFactory, $state) {

		var _this = this;

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



    }

	homeHeaderController.$inject = ['content.factory','$state'];
	angular.module('app.pLabs.header',[]).controller('home.header.controller',homeHeaderController);
})();

