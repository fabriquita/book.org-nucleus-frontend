'use strict';

angular.module('nucleusApp')
.directive('roleEdit', [
  'RoleService',
  'GroupService',
  '$location',
  function(RoleService, GroupService, $location)  {
    RoleService.get();
    return {
      restrict: 'E',
      scope: {
        model: '=model',
        action: '=?action'
      },
      templateUrl: 'views/directives/roleEdit.html',
      controller: function($scope, $element, $attrs) {
        // Preload groups
        GroupService.getAll().then(function(res) {
          $scope.groups = res.data.content;
        });
        var action = $attrs.action || 'edit';
        $scope.action = action;
        
        $scope.id = $scope.model.id;
        $scope.name = $scope.model.name;
        $scope.description = $scope.model.description;
        if (action === 'edit') {
          $scope.group = $scope.model.group.id;
        }

        $scope.cancel = function() {
          if (action === 'edit') {
            $scope.model.edit = false;
          } else {
            $location.url('/roles');
          }
        };

        $scope.save = function() {
          var data = {
            name: $scope.name,
            description: $scope.description,
            group_id: $scope.group
          };

          if (action === 'edit') {
            RoleService.update($scope.id, data)
            .then(function(res){
              updateOriginalModel();
              // Finish edit
              $scope.model.edit = false;
            }, function(err) {
              console.log(err);
            });
          } else if (action === 'create') {
            RoleService.create(data)
            .then(function(res) {
              updateOriginalModel();
              $location.url('/roles');
            }, function(err) {
              console.log(err);
            });
          }
        };

        function updateOriginalModel() {
          $scope.model.name = $scope.name;
          $scope.model.description = $scope.description;
          GroupService.get($scope.group).then(function(res) {
            $scope.model.group = res.data;
          }, function(err) {
            console.log(err);
          });
        }
      }
    };
  }
]);
