'use strict';

angular.module('nucleusApp')
.controller('UserCreateCtrl', [
  '$scope',
  function ($scope) {
    $scope.model = {
      id: 0,
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      repeatedPassword: '',
      email:''
    };
  }
]);
