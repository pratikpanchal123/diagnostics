(function() {
    'use strict';

    function loginFactory(serverApi,$location,constantData,apiUrl,$http,$localStorage){


        function changeUser(user) {
            angular.extend(currentUser, user);
        }

        function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output);
        }

        function getUserFromToken() {
            var token = $localStorage.token;
            var user = {};
            if (typeof token !== 'undefined' && token!=="") {
                var encoded = token.split('.')[1];
                user = JSON.parse(urlBase64Decode(encoded));
            }
            return user;
        }

        var currentUser = getUserFromToken();

        var url;

        return {
            oauth: function(data, success, error) {
                $http.post(baseUrl + '/oauth', data).success(success).error(error)
            },
            save: function(data) {
                url = constantData.SERVER_ADDRESS + apiUrl.users.SIGNUP;
                serverApi.postData(url, data);
            },
            signin: function(data) {
                url = constantData.SERVER_ADDRESS + apiUrl.users.SIGNIN;
                serverApi.postData(url, data);
            },
            me: function(success, error) {
                $http.get(baseUrl + '/me/').success(success).error(error)
            },
            logout: function(success) {
                changeUser({});
                delete $localStorage.token;
                success();
            }
        };

    }

    loginFactory.$inject = [
        'serverApi',
        '$location',
        'constantData',
        'apiUrl',
        '$http',
        '$localStorage'
    ];

    angular.module('app.pLabs').factory('login.factory', loginFactory);

    })();

