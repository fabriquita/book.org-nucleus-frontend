'use strict';

angular.module('nucleusApp')
.directive('paginator', [
  'AuthService',
  '$location',
  function(AuthService, $location) {
    return {
      restrict: 'E',
      scope: {
        service: '=service',
        callback: '=?callback',
        action: '=?action',
        page: '=?page',
        size: '=?size'
      },
      templateUrl: 'views/directives/paginator.html',
      controller: function($scope, $element, $attrs) {
        var callback = $scope.callback;
        $scope.currentPage = $scope.page;

        function onDataLoaded(res) {
          var totalPages = res.data.totalPages;
          var currentPage = res.data.number;
          createPages($element, totalPages, currentPage);

          if (callback) {
            callback(res.data.content);
          }
        }

        function getData() {
          $scope.service.getAll($scope.currentPage||0, $scope.size||10).then(onDataLoaded, function(err){});
        }

        function createPages(el, totalPages, currentPage) {
          var list = el.find('#paginator');
          list.html('');
          list.append('<li class="disabled"><a href="javascript:(0)"><span aria-hidden="true">«</span><span class="sr-only">Previous</span></a></li>');
          for (var i = 0; i < totalPages; ++i) {
            var tpl = '<li>';
            if (i === currentPage) {
              tpl = '<li class="active">';
            }
            tpl+= '<a href="javascript:(0)" data-page="'+i+'">' + (i+1) +'</a></li>';

            list.append(tpl);
          }
          list.append('<li><a href="javascript:(0)"><span aria-hidden="true">»</span><span class="sr-only">Next</span></a></li>');
        }

        $element.find('#paginator').on('click', 'a', function(e) {
          var page = e.currentTarget.dataset.page;
          if (!page) { return; }

          $scope.currentPage = page;
          getData();
        });
        getData();
      }
    };
  }
]);

