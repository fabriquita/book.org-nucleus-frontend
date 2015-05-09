'use strict';

angular.module('nucleusApp')
.controller('PermissionsCreateCtrl', [
  '$scope',
  'PermissionsService',
  function($scope, PermissionsService) {
    $scope.model = {
      id: 0, name: '', description: ''
    };

  }
]);