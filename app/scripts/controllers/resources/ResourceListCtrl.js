'use strict';

angular.module('nucleusApp')
.controller('ResourceListCtrl', [
  '$scope',
  'ResourceService',
  function($scope, ResourceService) {
    $scope.service = ResourceService;

    $scope.onResourcesLoaded = function(res) {
      $scope.resources = res;
    };
  }
]);
