(function() {
    'use strict';

    function loginController ($rootScope, $scope, $location, $localStorage, loginService, $state) {

        var _this = this;

        function signin () {
            var formData = {
                email: _this.username,
                password: _this.password
            };

            loginService.signin(formData, function(res) {
                console.log(res);
                if(res.status !== 'fail') {
                    $('#login-modal').modal('toggle');
                    $localStorage.token = res.object.data.token;
                    $location.path('/dashboard');
                } else {
                    $location.path('/signin');
                }
            }, function() {
                $rootScope.error = 'Failed to signin';
            })
        };

        function signup () {
            var formData = {
                email: _this.email,
                password: _this.password
            }

            loginService.save(formData, function(res) {
                $localStorage.token = res.object.data.token;
                $location.path('/me');
            }, function() {
                $rootScope.error = 'Failed to signup';
            })
        };

        function me () {
            loginService.me(function(res) {
                _this.myDetails = res;
            }, function() {
                $rootScope.error = 'Failed to fetch details';
            })
        };

        function logout () {
            loginService.logout(function() {
                $location.path('/');
            }, function() {
                $rootScope.error = 'Failed to logout';
            });
        }

        function reload(){
            $state.reload();
        }

        _this.signin = signin;
        _this.signup = signup;
        _this.me = me;
        _this.logout = logout;
        _this.reload = reload;
    }

    loginController.$inject = ['$rootScope', '$scope', '$location', '$localStorage', 'login.factory','$state'];
    angular.module('app.pLabs').controller('home.login.controller',loginController);
})();

