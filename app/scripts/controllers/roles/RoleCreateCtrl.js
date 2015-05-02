'use strict';

angular.module('nucleusApp')
.controller('RoleCreateCtrl', [
  '$scope',
  'RoleService',
  function($scope, RoleService) {
    $scope.model = {
      id: 0, name: '', description: ''
    };

  }
]);