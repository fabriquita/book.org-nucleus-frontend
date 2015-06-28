'use strict';

angular.module('nucleusApp')
.directive('bookEdit', [
  'BookService',
  '$location',
  function(BookService, $location)  {
    // BookService.get();
    return {
      restrict: 'E',
      scope: {
        model: '=model',
        action: '=?action'
      },
      templateUrl: 'views/directives/bookEdit.html',
      controller: function($scope, $element, $attrs) {
        var action = $attrs.action || 'edit';

        if (action === 'edit') {
          $scope.model.then(function(res) {
            $scope.id = res.data.id;
            $scope.title = res.data.title;
            $scope.collection = res.data.collection;
            $scope.author = res.data.author;
            $scope.content = res.data.content;
          }, function(err) {
            console.log(err);
          });
        } else if (action === 'create') {
          $scope.action = action;
          $scope.id = $scope.model.id;
          $scope.title = $scope.model.title;
          $scope.collection = $scope.model.collection;
          $scope.author = $scope.model.author;
          $scope.content = $scope.model.content;
        }

        $scope.cancel = function() {
          if (action === 'edit') {
            $scope.model.edit = false;
          } else {
            $location.url('/books');
          }
        };

        $scope.save = function() {
          var data = {
            title: $scope.title,
            author: $scope.author,
            collection: $scope.collection,
            content: $scope.content
          };

          if (action === 'edit') {
            BookService.update($scope.id, data)
            .then(function(res){
              updateOriginalModel();
              // Finish edit
              $scope.model.edit = false;
            }, function(err) {
              console.log(err);
            });
          } else if (action === 'create') {
            BookService.create(data)
            .then(function(res) {
              updateOriginalModel();
              $location.url('/books');
            }, function(err) {
              console.log(err);
            });
          }
        };

        function updateOriginalModel() {
          $scope.model.title = $scope.title;
          $scope.model.author = $scope.author;
          $scope.model.collection = $scope.collection;
          $scope.model.content = $scope.content;
        }
      }
    };
  }
]);
