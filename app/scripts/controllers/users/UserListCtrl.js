'use strict';

angular.module('nucleusApp')
.controller('UserListCtrl', [
  '$scope',
  'UserService',
  '$location',
  function($scope, UserService, $location) {
    $scope.service = UserService;
    $scope.onUsersLoaded = function(res) {
      $scope.users = res;
    };

    $scope.editUser = function(userId) {
      $location.path('/users/edit/' + userId);
    };
  }
]);
