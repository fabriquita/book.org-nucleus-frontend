'use strict';

angular.module('nucleusApp')
.controller('BookCreateCtrl', [
  '$scope',
  'BookService',
  '$location',
  function($scope, BookService, $location) {

    $scope.model = {
      id: 0,
      title: '',
      author: '',
      collection: '',
      content: ''
    };
    
  }
]);
