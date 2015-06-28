'use strict';

angular.module('nucleusApp')
.controller('BookDetailCtrl', [
  '$scope',
  'BookService',
  '$routeParams',
  function($scope, BookService, $routeParams) {
    $scope.book = BookService.get($routeParams.id);
  }
]);
