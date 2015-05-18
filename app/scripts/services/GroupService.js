'use strict';

angular.module('nucleusApp')
.factory('GroupService', [
  '$http',
  '$rootScope',
  '$window',
  function($http, $rootScope, $window) {
    return {
      create: function(data) {
        return $http.put($rootScope.getBackendUrl() + 'group/', data, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      update: function(id, data) {
        return $http.post($rootScope.getBackendUrl() + 'group/' + id, data,{
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      delete: function(id) {
        return $http.delete($rootScope.getBackendUrl() + 'group/' + id);
      },
      getAll: function(page, size) {
        return $http.get($rootScope.getBackendUrl() + 'group/' + '?page=' + (page || 0) + '&size=' + (size || 10), {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      get: function(id) {
        return $http.get($rootScope.getBackendUrl() + 'group/' + id, {
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
