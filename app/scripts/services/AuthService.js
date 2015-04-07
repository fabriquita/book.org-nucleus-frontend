'use strict';

angular.module('nucleusApp')
.factory('AuthService', [
  '$http',
  '$rootScope',
  function($http, $rootScope) {
    var domain = document.domain, url = 'http://' + domain + ':8080';
    return {
      login: function(data) {
        return $http.post(url + '/login', data);
      },
      logout: function(callback) {
        return $http.post(url + '/logout/', {}).then(function(res) {
          console.log('user logged out');
          localStorage.setItem('hasSession', false);
          $rootScope.$broadcast('userLoggedOut');
          callback.call(this);
        }, function(err) {
          console.log('error when loggin out');
        });
      },
      isLoggedIn: function() {
        var value = localStorage.getItem('hasSession');
        return value === 'true';
      },
      setLoggedIn: function(value) {
        localStorage.setItem('hasSession', value);
        if (value === true) {
          $rootScope.$broadcast('userLoggedIn');
        }
      }
    };
  }
]);
