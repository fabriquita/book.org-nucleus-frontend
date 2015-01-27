'use strict';

angular.module('nucleusApp')
.controller('UserListCtrl', [
  '$scope',
  'UserService',
  function($scope, UserService) {
    var loadUserList = function() {
      UserService.getByPage($scope.page, $scope.limit).then(function(res) {
        $scope.users = res.data;
      }, function(err) {
        console.log(err);
      });
    };

    $scope.page = 1;
    $scope.limit = 10;
    loadUserList();
  }
]);
