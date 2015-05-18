'use strict';

angular.module('nucleusApp')
.factory('RoleService', [
  '$http',
  '$rootScope',
  '$window',
  function($http, $rootScope, $window) {
    return {
      create: function(data) {
        return $http.put($rootScope.getBackendUrl() + 'role/', data, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      update: function(id, data) {
        return $http.post($rootScope.getBackendUrl() + 'role/' + id, data, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      delete: function(id) {
        return $http.delete($rootScope.getBackendUrl() + 'role/' + id);
      },
      getAll: function(page, size) {
        return $http.get($rootScope.getBackendUrl() + 'role/' + '?page=' + (page || 0) + '&size=' + (size || 10), {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      get: function(id) {
        return $http.get($rootScope.getBackendUrl() + 'role/' + id, {
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
