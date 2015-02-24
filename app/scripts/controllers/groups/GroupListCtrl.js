'use strict';

angular.module('nucleusApp')
.controller('GroupListCtrl', [
  '$scope',
  'GroupService',
  function($scope, GroupService) {
    var loadUserList = function() {
      GroupService.getAll().then(function(res) {
        $scope.groups = res.data;
      }, function(err) {
        console.log(err);
      });
    };

    $scope.edit = function(index) {
      $scope.groups[index].edit = !$scope.groups[index].edit;
    };

    loadUserList();
  }
]);
