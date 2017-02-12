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
                    controller: 'home.content.controller',
                    controllerAs:'home'
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
		'app.pLabs.common'
    ])
        .config(routeProvider)
        .run(['$rootScope', '$location','$window', function ($rootScope, $location,$window) {
        }]);

})();




