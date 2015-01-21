'use strict';

/**
 * @ngdoc function
 * @name nucleusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nucleusApp
 */
angular.module('nucleusApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
