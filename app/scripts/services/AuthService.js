'use strict';

angular.module('nucleusApp')
.factory('AuthService', [
  '$http',
  '$rootScope',
  '$window',
  function($http, $rootScope, $window) {
    var domain = document.domain, url = 'http://' + domain + ':8080';
    return {
      login: function(data) {
        return $http.post(url + '/auth/login', data);
      },
      logout: function(callback) {
        return $http.post(url + '/auth/logout', {}).then(function(res) {
          console.log('user logged out');
          //TODO: review this
          delete $window.sessionStorage.credentials;
          delete $window.sessionStorage.principal;
          $rootScope.$broadcast('userLoggedOut');
          callback.call(this);
        }, function(err) {
          console.log('error when loggin out');
        });
      },
      isLoggedIn: function() {
        //TODO: review this
        return $window.sessionStorage.principal != undefined;
      },
      setLoggedIn: function(data) {
        //TODO: review this
        $window.sessionStorage.credentials = data.credentials;
        $window.sessionStorage.principal = data.principal;
        if ($window.sessionStorage.principal) {
          $rootScope.$broadcast('userLoggedIn');
        }
      }
    };
  }
]);
