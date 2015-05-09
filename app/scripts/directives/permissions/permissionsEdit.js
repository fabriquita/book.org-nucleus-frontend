'use strict';

angular.module('nucleusApp')
.directive('permissionsEdit', [
  'PermissionsService',
  'RoleService',
  'ResourceService',
  '$location',
  function(PermissionsService, RoleService, ResourceService, $location)  {
    return {
      restrict: 'E',
      scope: {
        model: '=model',
        action: '=?action'
      },
      templateUrl: 'views/directives/permissionsEdit.html',
      controller: function($scope, $element, $attrs) {
        // Preload roles
        RoleService.getAll().then(function(res) {
          $scope.roles = res.data.content;
        });
        // Preload resources
        ResourceService.getAll().then(function(res) {
          $scope.resources = res.data.content;
        });
        var action = $attrs.action || 'edit';
        $scope.action = action;
        
        if (action == 'edit') {
          $scope.id = $scope.model.id;
          $scope.role = $scope.model.role.id;
          $scope.resource = $scope.model.resource.id;
          $scope.read = $scope.model.read;
          $scope.create = $scope.model.create;
          $scope.update = $scope.model.update;
          $scope.delete = $scope.model.delete;
          $scope.execute = $scope.model.execute;
        }

        $scope.cancel = function() {
          if (action === 'edit') {
            $scope.model.edit = false;
          } else {
            $location.url('/permissions');
          }
        };

        $scope.save = function() {
          var data = {
            role_id: $scope.role,
            resource_id: $scope.resource,
            permissions: getPermissions()
          };

          if (action === 'edit') {
            PermissionsService.update($scope.id, data)
            .then(function(res){
              updateOriginalModel();
              // Finish edit
              $scope.model.edit = false;
            }, function(err) {
              console.log(err);
            });
          } else if (action === 'create') {
            PermissionsService.create(data)
            .then(function(res) {
              updateOriginalModel();
              $location.url('/permissions');
            }, function(err) {
              console.log(err);
            });
          }
        };

        function updateOriginalModel() {
          /*$scope.model.name = $scope.name;
          $scope.model.description = $scope.description;
          GroupService.get($scope.group).then(function(res) {
            $scope.model.group = res.data;
          }, function(err) {
            console.log(err);
          });*/
        }

        function getPermissions() {
          var permissions = "";
          if ($scope.read) {permissions += 'r'};
          if ($scope.create) {permissions += 'c'};
          if ($scope.update) {permissions += 'u'};
          if ($scope.delete) {permissions += 'd'};
          if ($scope.execute) {permissions += 'x'};
          console.log(permissions);
          return permissions;
        }
      }
    };
  }
]);
