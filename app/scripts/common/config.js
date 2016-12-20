(function() {
	'use strict';
	// String Constant for application
	angular.module('app.pLabs.constant',[]).constant('constantData',
		{
			api:'api',
			get SERVER_ADDRESS(){
				return  'http://localhost:5000/'+this.api;
				//return 'https://diagnostics123.herokuapp.com/'+this.api;
			},
		}).constant('apiUrl',{
		doctors:{
			get DOCTORS(){
				return '/doctors';
			}
		},
		labs:{
			get LABS(){
				return '/labs'
			}
		}
	});
})();

