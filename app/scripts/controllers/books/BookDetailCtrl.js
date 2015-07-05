'use strict';

angular.module('nucleusApp')
.controller('BookDetailCtrl', [
  '$scope',
  'BookService',
  '$routeParams',
  function($scope, BookService, $routeParams) {

    $scope.loadBook = function() {
      BookService.get($routeParams.id).then(
        function(res) {
          $scope.book = res.data;
          console.log($scope.book);
        },
        function(error) {
          console.log('error', error);
        }
      );
    };

    $scope.loadBook();

  }
]);
