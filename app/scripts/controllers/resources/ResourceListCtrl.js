'use strict';

angular.module('nucleusApp')
.controller('ResourceListCtrl', [
  '$scope',
  'ResourceService',
  function($scope, ResourceService) {
    var loadResourceList = function() {
      ResourceService.getAll().then(function(res) {
        $scope.resources = res.data;
      }, function(err) {
        console.log(err);
      });
    };

    loadResourceList();
  }
]);
