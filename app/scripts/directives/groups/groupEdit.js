'use strict';

angular.module('nucleusApp')
.directive('groupEdit', [
  'GroupService',
  '$location',
  function(GroupService, $location)  {
    GroupService.get();
    return {
      restrict: 'E',
      scope: {
        model: '=model',
        action: '=?action'
      },
      templateUrl: 'views/directives/groupEdit.html',
      controller: function($scope, $element, $attrs) {
        // Preload groups
        GroupService.getAll().then(function(res) {
          $scope.groups = res.data.content;
        });
        var action = $attrs.action || 'edit';
        $scope.action = action;
        
        $scope.id = $scope.model.id;
        $scope.name = $scope.model.name;
        $scope.parent = ($scope.model.parent != undefined) ? $scope.model.parent.id: null;
        $scope.description = $scope.model.description;
        // Don't send active when action is create
        if (action == 'edit') {
          $scope.active = $scope.model.active;
        }

        $scope.cancel = function() {
          if (action === 'edit') {
            $scope.model.edit = false;
          } else {
            $location.url('/groups');
          }
        };

        $scope.save = function() {
          var data = {
            name: $scope.name,
            description: $scope.description,
            parent_id: $scope.parent,
            active: ($scope.active != undefined)? $scope.active: null
          };

          if (action === 'edit') {
            GroupService.update($scope.id, data)
            .then(function(res){
              updateOriginalModel();
              // Finish edit
              $scope.model.edit = false;
            }, function(err) {
              console.log(err);
            });
          } else if (action === 'create') {
            GroupService.create(data)
            .then(function(res) {
              updateOriginalModel();
              $location.url('/groups');
            }, function(err) {
              console.log(err);
            });
          }
        };

        function updateOriginalModel() {
          $scope.model.name = $scope.name;
          $scope.model.description = $scope.description;
          $scope.model.active = $scope.active;
        }
      }
    };
  }
]);
