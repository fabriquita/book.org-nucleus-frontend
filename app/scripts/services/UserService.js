'use strict';

angular.module('nucleusApp')
.factory('UserService', [
  '$http',
  '$rootScope',
  '$window',
  function($http, $rootScope, $window) {
    return {
      create: function(data) {
        console.log(data);
        return $http.put($rootScope.getBackendUrl() + 'user', data, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      update: function(id, data) {
        return $http.post($rootScope.getBackendUrl() + 'user/' + id, data, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      delete: function(id) {
        return $http.delete($rootScope.getBackendUrl() + 'user/' + id);
      },
      getAll: function(page, size) {
        return $http.get($rootScope.getBackendUrl() + 'user/' + '?page=' + (page || 0) + '&size=' + (size || 10), {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      get: function(id) {
        return $http.get($rootScope.getBackendUrl() + 'user/' + id, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      }
    };
  }
]);
