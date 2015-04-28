'use strict';

angular.module('nucleusApp')
.controller('AuthCtrl', [
  '$scope',
  '$location',
  'AuthService',
  function($scope, $location, AuthService) {
    $scope.logIn = function() {
      var data = {
        user: $scope.username,
        password: $scope.password
      };

      AuthService.login(data).then(function(res){
        console.log('logged in successfully');
        AuthService.setLoggedIn(res.data);
        $location.url('/users');
      }, function(err) {
        AuthService.setLoggedIn(false);
        alert('Invalid credentials');
      });
    };
  }
]);
