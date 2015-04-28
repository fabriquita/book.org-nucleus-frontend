'use strict';

angular.module('nucleusApp')
.controller('UserListCtrl', [
  '$scope',
  'UserService',
  '$location',
  function($scope, UserService, $location) {
    var loadUserList = function() {
      UserService.getAll().then(function(res) {
        $scope.users = res.data.content;
      }, function(err) {
        console.log(err);
      });
    };

    $scope.editUser = function(userId) {
      $location.path('/users/edit/' + userId);
    };

    loadUserList();
  }
]);
