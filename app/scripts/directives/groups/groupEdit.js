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
        $scope.id = $scope.model.id;
        $scope.name = $scope.model.name;
        $scope.description = $scope.model.description;
        $scope.archived = $scope.model.archived === true ? false : true;

        var action = $attrs.action || 'edit';

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
            description: $scope.description
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
        }
      }
    };
  }
]);
