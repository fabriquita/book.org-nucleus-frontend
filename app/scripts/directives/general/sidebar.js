'use strict';

angular.module('nucleusApp')
.directive('nucleusSidebar', [
  'AuthService',
  '$location',
  function(AuthService, $location)  {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/sidebar.html',
      controller: function($scope, $element, $attrs) {
        if (!AuthService.isLoggedIn()) {
          $($element).hide();
        } else {
          $($element).show();
        }

        $scope.$on('userLoggedIn', function() {
          $($element).show();
        });
        $scope.$on('userLoggedOut', function() {
          $($element).hide();
        });

        $scope.getClass = function(path) {
          if ($location.path() === path) {
            return 'active';
          } else {
            return '';
          }
        };
      }
    };
  }
]);
