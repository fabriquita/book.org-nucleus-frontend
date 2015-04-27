'use strict';

angular.module('nucleusApp')
.directive('userEdit', [
  'UserService',
  'GroupService',
  'RoleService',
  '$location',
  function(UserService, GroupService, RoleService, $location) {
    UserService.get();
    return {
      restrict: 'E',
      scope: {
        model: '=model',
        action: '=?action'
      },
      templateUrl: 'views/directives/userEdit.html',
      controller: function($scope, $element, $attrs) {
        GroupService.getAll().then(function(res) {
          $scope.groups = res.data;
        });
        RoleService.getAll().then(function(res) {
          $scope.roles = res.data;
        });
        $scope.id = '0';
        $scope.name = '';
        $scope.lastName = '';
        $scope.userName = '';
        $scope.password = '';
        $scope.email = '';
        $scope.archived = false;


        var action = $attrs.action || 'edit';

        $scope.cancel = function() {
          if (action === 'edit') {
            //$scope.model.edit = false;
            $location.url('/users');
          } else {
            $location.url('/users');
          }
        };

        $scope.save = function() {
          var data = {
            name: $scope.name,
            lastName: $scope.lastName,
            userName: $scope.userName,
            password: $scope.password,
            group_id: $scope.group,
            role_id: $scope.role,
            email: $scope.email,
            archived: $scope.archived
          };

          if (action === 'edit') {
            UserService.update($scope.id, data)
            .then(function(res){
              updateOriginalModel();
              // Finish edit
              $scope.model.edit = false;
            }, function(err) {
              console.log(err);
            });
          } else if (action === 'create') {
            UserService.create(data)
            .then(function(res) {
              console.log('user created');
              updateOriginalModel();
              $location.url('/users');
            }, function(err) {
              console.log('error creating user');
            });
          }
        };

        function updateOriginalModel() {
          /*$scope.model.name = '';
          $scope.model.password = $scope.description;
          $scope.group = '0';
          $scope.role = '0';*/
        }
      }
    };
  }
]);
