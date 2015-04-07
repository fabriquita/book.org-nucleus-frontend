'use strict';

angular.module('nucleusApp')
.directive('nucleusNavbar', [
  'AuthService',
  '$location',
  function(AuthService, $location) {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/navbar.html',
      controller: function($scope, $element, $attrs) {
        if (!AuthService.isLoggedIn()) {
          $($element).hide();
        } else {
          $($element).show();
        }

        $scope.logout = function() {
          AuthService.logout(function() {
            $location.url('/login');
          });
        };

        $scope.$on('userLoggedIn', function() {
          $($element).show();
        });

        $scope.$on('userLoggedOut', function() {
          $($element).hide();
        });
      }
    };
  }
]);
