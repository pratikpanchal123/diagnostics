(function() {
    'use strict';
    // Route for Header module
    function routeProvider ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('index',{
            abstract: true,
            url: ''
        }).state('index.home',{
            url:"/home",
            views:{
                'main@':{
                    templateUrl: 'scripts/module/home/home.template.html'
                },
                'header@index.home':{
                    templateUrl:'scripts/module/home/header/header.template.html',
                    controller: 'home.login.controller',
                    controllerAs:'login'
                },
                'content@index.home':{
                    templateUrl:'scripts/module/home/content/content.template.html',
                    controller: 'home.content.controller',
                    controllerAs:'home'
                },
                'footer@index.home':{
                    templateUrl:'scripts/module/home/footer/footer.template.html',
                    controller: 'home.footer.controller',
                    controllerAs:'home'
                },
                'defaultView@index.home':{
                    templateUrl:'scripts/module/home/content/default.template.html'
                },
                'searchView@index.home':{
                    templateUrl:'scripts/module/home/search/search.template.html'
                },
                'search@index.home':{
                    templateUrl:'scripts/module/home/content/find.widget.template.html'
                },
                'detailView@index.home':{
                    templateUrl:'scripts/module/home/search/detail.template.html'
                }
            }
        }).state('index.admin',{
            url:"/admin",
            views:{
                'main@':{
                    templateUrl: 'scripts/module/admin/admin-home.template.html',
                    controller: 'admin.content.controller',
                    controllerAs:'home'
                },
                'header@index.admin':{
                    templateUrl:'scripts/module/admin/header/header.template.html',
                    controller: 'home.login.controller',
                    controllerAs:'login'
                },
                'content@index.admin':{
                    templateUrl:'scripts/module/admin/content/content.template.html'
                },
                'footer@index.admin':{
                    templateUrl:'scripts/module/admin/footer/footer.template.html',
                    controller: 'admin.footer.controller',
                    controllerAs:'home'
                },
                'defaultView@index.admin':{
                    templateUrl:'scripts/module/admin/content/default.template.html'
                },
                'uploadView@index.admin':{
                    templateUrl:'scripts/module/admin/content/upload.template.html'
                },
                /*,
                'defaultView@index.admin':{
                    templateUrl:'scripts/module/admin/content/default.template.html'
                },
                'searchView@index.admin':{
                    templateUrl:'scripts/module/admin/search/search.template.html'
                },
                'search@index.admin':{
                    templateUrl:'scripts/module/admin/content/find.widget.template.html'
                },
                'detailView@index.admin':{
                    templateUrl:'scripts/module/admin/search/detail.template.html'
                }*/
            }
        });
    }

    routeProvider.$inject = ['$stateProvider','$urlRouterProvider'];

    angular.module('app.pLabs',[
        'app.pLabs.content',
        'app.pLabs.search',
        'app.pLabs.header',
        'app.pLabs.footer',
        'ui.router',
        'app.pLabs.server',
        'app.pLabs.constant',
		'google.places',
		'ngLoadingOverlay',
		'rzModule',
		'app.pLabs.common',
		'ngStorage',
        'app.pLabs.content.admin',
        'app.pLabs.header.admin',
        'app.pLabs.footer.admin',
        'ngFileUpload'
    ])
        .config(routeProvider)
        .run(['$rootScope', '$location','$window', function ($rootScope, $location,$window) {
        }]);

})();




