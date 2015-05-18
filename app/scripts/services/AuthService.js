'use strict';

angular.module('nucleusApp')
.factory('AuthService', [
  '$http',
  '$rootScope',
  '$window',
  function($http, $rootScope, $window) {
    return {
      login: function(data) {
        return $http.post($rootScope.getBackendUrl() + '/auth/login', data); 
      },
      logout: function(callback) {
        return $http.post($rootScope.getBackendUrl() + '/auth/logout', {}).then(function(res) {
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
