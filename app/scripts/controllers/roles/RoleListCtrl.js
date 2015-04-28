'use strict';

angular.module('nucleusApp')
.controller('RoleListCtrl', [
  '$scope',
  'RoleService',
  function($scope, RoleService) {
    var loadRoleList = function() {
      RoleService.getAll().then(function(res) {
        $scope.roles = res.data.content;
      }, function(err) {
        console.log(err);
      });
    };

    loadRoleList();
  }
]);
