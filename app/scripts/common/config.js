(function() {
	'use strict';
	// String Constant for application
	angular.module('app.pLabs.constant',[]).constant('constantData',
		{
			api:'api',
			get SERVER_ADDRESS(){
				//return  'http://localhost:5000/'+this.api;
				return 'https://diagnostics123.herokuapp.com/'+this.api;
			},
			loading: "<div class='loader'></div>"
		}).constant('apiUrl',{
		doctors:{
			location: null,
			keyword:null,
			get DOCTORS(){
				return '/doctors';
			},
            get DOCTORSBYPARAMS(){
                return '/doctors/location/'+this.location+'/keyword/'+this.keyword;
            },
		},
		labs:{
            location: null,
            keyword:null,
			get LABS(){
				return '/labs'
			},
            get LABSBYPARAMS(){
                return '/labs/location/'+this.location+'/keyword/'+this.keyword;
            }
		},
        categories:{
            get CATEGORIES(){
                return '/categories'
            }
        }
	});
})();

