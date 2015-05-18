'use strict';

angular.module('nucleusApp')
.factory('ResourceService', [
  '$http',
  '$rootScope',
  '$window',
  function($http, $rootScope, $window) {
    return {
      create: function(data) {
        return $http.put($rootScope.getBackendUrl() + 'resource/', data);
      },
      update: function(id, data) {
        return $http.post($rootScope.getBackendUrl() + 'resource/' + id, data);
      },
      delete: function(id) {
        return $http.delete($rootScope.getBackendUrl() + 'resource/' + id);
      },
      getAll: function(page, size) {
        return $http.get($rootScope.getBackendUrl() + 'resource/' + '?page=' + (page || 0) + '&size=' + (size || 10), {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      get: function(id) {
        return $http.get($rootScope.getBackendUrl() + 'resource/' + id);
      }
    };
  }
]);
