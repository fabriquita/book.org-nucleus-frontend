'use strict';

angular.module('nucleusApp')
.controller('GroupCreateCtrl', [
  '$scope',
  'GroupService',
  function($scope, GroupService) {
    $scope.model = {
      id: 0, name: '', description: '', active: true
    };

  }
]);
