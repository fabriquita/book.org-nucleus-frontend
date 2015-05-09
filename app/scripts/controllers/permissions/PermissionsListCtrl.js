'use strict';

angular.module('nucleusApp')
.controller('PermissionsListCtrl', [
  '$scope',
  'PermissionsService',
  '$location',
  function($scope, PermissionsService, $location) {
    $scope.service = PermissionsService;

    $scope.onPermissionsLoaded = function(res) {
      $scope.permissions = res;
    };

    $scope.edit = function(index) {
      $scope.permissions[index].edit = !$scope.permissions[index].edit;
    };
  }
]);
