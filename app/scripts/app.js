'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
 angular
 .module('yapp', [
    'ui.router',
    'snap',
    'ngAnimate'
    ])
 .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
    })
    .state('login', {
      url: '/login',
      parent: 'base',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
  })
    .state('dashboard', {
      url: '/dashboard',
      parent: 'base',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
  })
    .state('overview', {
        url: '/overview',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/overview.html'
    })
    .state('reports', {
        url: '/reports',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/reports.html'
    })
	.state('products', {
        url: '/products',
        parent: 'dashboard',
		templateUrl: 'views/dashboard/products.html',
		controller: 'ProductCtrl'
    })
	.state('customers', {
        url: '/customers',
        parent: 'dashboard',
		templateUrl: 'views/dashboard/customers.html',
		controller: 'CustomerCtrl'
    })
	.state('customerdetail',
            {
                url: "/customerdetail/{customerID}",
				 parent: 'dashboard',
                controller: 'CustomerCtrl',
                templateUrl: 'views/dashboard/customers-detail.html'
            })
	.state('product-detail',
	{
		url: "/product-detail/{productId}",
		 parent: 'dashboard',
		controller: 'ProductCtrl',
		templateUrl: 'views/dashboard/products-detail.html'
	});

}]).run(["$rootScope", "$location", "loginService", "snapRemote", function($rootScope, $location, loginService, snapRemote){
		$rootScope.$on("$stateChangeStart", function(){
			if(loginService.isAuthenticated() === false) {
				$location.path("/login");
			} else {
				if($location.$$path === "/" || $location.$$path === "/login") {
					$location.path("/dashboard");
				} else {
					$location.path($location.$$path);
				}
			}
		});
		$rootScope.$on("$locationChangeSuccess", function(){
			snapRemote.open("left");
		});
	}]);
