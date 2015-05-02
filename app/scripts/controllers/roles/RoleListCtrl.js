'use strict';

angular.module('nucleusApp')
.controller('RoleListCtrl', [
  '$scope',
  'RoleService',
  '$location',
  function($scope, RoleService, $location) {
    $scope.service = RoleService;

    $scope.onRolesLoaded = function(res) {
      $scope.roles = res;
    };
    
    $scope.edit = function(index) {
      $scope.roles[index].edit = !$scope.roles[index].edit;
    };
  }
]);
