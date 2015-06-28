'use strict';

angular.module('nucleusApp')
.controller('BookListCtrl', [
  '$scope',
  'BookService',
  '$location',
  function($scope, BookService, $location) {
    $scope.service = BookService;
    $scope.onBooksLoaded = function(res) {
      $scope.books = res;
    };

    $scope.editBook = function(bookId) {
      $location.path('/books/edit/' + bookId);
    };
  }
]);
