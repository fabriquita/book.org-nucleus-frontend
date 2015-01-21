'use strict';

/**
 * @ngdoc function
 * @name nucleusApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nucleusApp
 */
angular.module('nucleusApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
