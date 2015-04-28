'use strict';

angular.module('nucleusApp')
.controller('RoleListCtrl', [
  '$scope',
  'RoleService',
  function($scope, RoleService) {
    $scope.service = RoleService;

    $scope.onRolesLoaded = function(res) {
      $scope.roles = res;
    };
  }
]);
