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
        action: '=action'
      },
      templateUrl: 'views/directives/userEdit.html',
      controller: function($scope, $element, $attrs) {
        GroupService.getAll().then(function(res) {
          $scope.groups = res.data.content;
        });
        RoleService.getAll().then(function(res) {
          $scope.roles = res.data.content;
        });

        var action = $attrs.action;

        if (action == 'edit') {
          $scope.model.then(function(res) {
            $scope.id = res.data.id;
            $scope.name = res.data.name;
            $scope.lastName = res.data.lastName;
            $scope.userName = res.data.userName;
            $scope.password = res.data.password;
            $scope.email = res.data.email;
            $scope.group = res.data.group.id;
            $scope.role = res.data.role.id;
          }, function(err) {
            console.log(err);
          });
        } else {
          $scope.id = $scope.model.id;
          $scope.name = $scope.model.name;
          $scope.lastName = $scope.model.lastName;
          $scope.userName = $scope.model.userName;
          $scope.password = $scope.model.password;
          $scope.email = $scope.model.email;
        }

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
            email: $scope.email
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
