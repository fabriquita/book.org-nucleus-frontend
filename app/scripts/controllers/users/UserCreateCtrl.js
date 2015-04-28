'use strict';

angular.module('nucleusApp')
.controller('UserCreateCtrl', [
  '$scope',
  function ($scope) {
    $scope.model = {
      id: 0,
      name: '',
      lastName: '',
      userName: '',
      password: '',
      email:'',
      archived: false
    };
  }
]);
