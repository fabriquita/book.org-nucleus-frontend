'use strict';

angular.module('nucleusApp')
.factory('UserService', [
  '$http',
  function($http) {
    var domain = document.domain;
    var url = 'http://' + domain + ':8080/user';

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
      getAll: function() {
        return $http.get(url + '/');
      },
      get: function(id) {
        return $http.get(url + id);
      }
    };
  }
]);
