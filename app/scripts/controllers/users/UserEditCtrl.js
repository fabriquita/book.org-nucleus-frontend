'use strict';

angular.module('nucleusApp')
.controller('UserEditCtrl', [
  '$scope',
  '$routeParams',
  'UserService',
  function ($scope, $routeParams, UserService) {
    $scope.user = UserService.get($routeParams.id);
  }
]);
