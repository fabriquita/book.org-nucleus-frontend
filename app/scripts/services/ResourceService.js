'use strict';

angular.module('nucleusApp')
.factory('ResourceService', [
  '$http',
  '$window',
  function($http, $window) {
    var domain = document.domain;
    var url = 'http://' + domain + ':8080/resource/';

    return {
      create: function(data) {
        return $http.put(url, data);
      },
      update: function(id, data) {
        return $http.post(url + id, data);
      },
      delete: function(id) {
        return $http.delete(url + id);
      },
      getAll: function(page, size) {
        return $http.get(url + '?page=' + (page || 0) + '&size=' + (size || 10), {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      get: function(id) {
        return $http.get(url + id);
      }
    };
  }
]);
