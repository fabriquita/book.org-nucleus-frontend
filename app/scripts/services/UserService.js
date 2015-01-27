'use strict';

angular.module('nucleusApp')
.factory('UserService', [
  '$http',
  function($http) {
    return {
      getByPage: function(page, limit) {
        var queryString = '?page=' + page + '&limit=' + limit;
        return $http.get('/json/users.json' + queryString) ;
      },
      // get: function(userId) {
      //   return $http.get('/users/'+templateId);
      // }
    };
  }
]);
