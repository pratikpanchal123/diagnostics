(function() {
    'use strict';
    // Route for Header module
    function routeProvider ($stateProvider) {
        $stateProvider.state('index', {
            abstract: true,
            url: ''
        })
        .state('index.home',{
            url:"/home",
            views:{
                'main@':{
                    templateUrl: 'scripts/module/home/home.template.html'
                },
                'header@index.home':{
                    templateUrl:'scripts/module/home/header/header.template.html',
                    controller: 'home.header.controller',
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
                }
            }
        });

    }

    routeProvider.$inject = ['$stateProvider'];

    angular.module('app.pLabs',['app.pLabs.content','app.pLabs.header','app.pLabs.footer','ui.router']).config(routeProvider)
        .run(['$rootScope', '$location','$window', function ($rootScope, $location,$window) {

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

               console.log(toState);
            });
            $rootScope.$on('$stateNotFound', function (event, toState, toParams, fromState, fromParams, options) {

                console.log(toState);
            });
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {

                console.log(toState);
            });
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, options) {

                console.log(toState);
            });



        }]);

})();




