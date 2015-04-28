'use strict';

angular.module('nucleusApp')
.controller('UserListCtrl', [
  '$scope',
  'UserService',
  function($scope, UserService) {
    var loadUserList = function() {
      UserService.getAll().then(function(res) {
        $scope.users = res.data.content;
      }, function(err) {
        console.log(err);
      });
    };

    loadUserList();
  }
]);
