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
            speciality:null,
            doctorId:null,
			get DOCTORS(){
				return '/doctors';
			},
            get DOCTORSBYPARAMS(){
                return '/doctors/location/'+this.location+'/keyword/'+this.keyword;
            },
            get DOCTORSBYLOCATION(){
                return '/doctors/location/'+this.location;
            },
            get DOCTORSBYSPECIALITY(){
                return '/doctors/speciality/'+this.speciality;
            },
            get DOCTORSBYID(){
                return '/doctors/'+this.doctorId;
			},
            get DOCTORSBYKEYWORD(){
                return '/doctors/keyword/'+this.keyword;
            }
		},
		labs:{
            location: null,
            keyword:null,
			get LABS(){
				return '/labs'
			},
            get LABSBYPARAMS(){
                return '/labs/location/'+this.location+'/keyword/'+this.keyword;
            },
            get LABSBYKEYWORD(){
                return '/labs/keyword/'+this.keyword;
            }
		},
        categories:{
            get CATEGORIES(){
                return '/categories'
            }
        },
        users:{
            get SIGNIN(){
                return '/users/signin'
            },
            get SIGNUP(){
                return '/users/singup'
            }
        }
	});
})();

