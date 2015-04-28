'use strict';

angular.module('nucleusApp')
.controller('GroupListCtrl', [
  '$scope',
  'GroupService',
  function($scope, GroupService) {
    $scope.service = GroupService;

    $scope.onGroupsLoaded = function(res) {
      $scope.groups = res;
    };

    $scope.edit = function(index) {
      $scope.groups[index].edit = !$scope.groups[index].edit;
    };
  }
]);
