'use strict';

angular.module('nucleusApp')
.controller('BookEditCtrl', [
  '$scope',
  'BookService',
  '$routeParams',
  function($scope, BookService, $routeParams) {
    $scope.book = BookService.get($routeParams.id);
  }
]);
