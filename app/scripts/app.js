'use strict';

/**
 * @ngdoc overview
 * @name nucleusApp
 * @description
 * # nucleusApp
 *
 * Main module of the application.
 */
var app = angular
  .module('nucleusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'textAngular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/auth/login.html',
        controller: 'AuthCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books/list.html',
        controller: 'BookListCtrl'
      })
      .when('/books/create', {
        templateUrl: 'views/books/create.html',
        controller: 'BookCreateCtrl'
      })
      .when('/books/edit/:id', {
        templateUrl: 'views/books/edit.html',
        controller: 'BookEditCtrl'
      })
      .when('/books/:id', {
        templateUrl: 'views/books/detail.html',
        controller: 'BookDetailCtrl'
      })
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      // .when('/users', {
      //   templateUrl: 'views/users/list.html',
      //   controller: 'UserListCtrl'
      // })
      // .when('/users', {
      //   templateUrl: 'views/users/list.html',
      //   controller: 'UserListCtrl'
      // })
      // .when('/users/create', {
      //   templateUrl: 'views/users/create.html',
      //   controller: 'UserCreateCtrl'
      // })
      // .when('/users/edit/:id', {
      //   templateUrl: 'views/users/edit.html',
      //   controller: 'UserEditCtrl'
      // })
      // .when('/groups', {
      //   templateUrl: 'views/groups/list.html',
      //   controller: 'GroupListCtrl'
      // })
      // .when('/groups/create', {
      //   templateUrl: 'views/groups/create.html',
      //   controller: 'GroupCreateCtrl'
      // })
      // .when('/roles', {
      //   templateUrl: 'views/roles/list.html',
      //   controller: 'RoleListCtrl'
      // })
      // .when('/roles/create/', {
      //   templateUrl: 'views/roles/create.html',
      //   controller: 'RoleCreateCtrl'
      // })
      // .when('/resources', {
      //   templateUrl: 'views/resources/list.html',
      //   controller: 'ResourceListCtrl'
      // })
      // .when('/roleresources', {
      //   templateUrl: 'views/permissions/list.html',
      //   controller: 'PermissionsListCtrl'
      // })
      // .when('/roleresources/create/', {
      //   templateUrl: 'views/permissions/create.html',
      //   controller: 'PermissionsCreateCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
/**
 * It filters routes, and checks whether the user is logged in or not
 */
app.run(['$rootScope', '$location', 'AuthService', function ($rootScope, $location, AuthService) {
  
  $rootScope.getBackendUrl = function() {
    return 'http://' + $location.host() + ':8080/nucleus-backend/';
  };

  $rootScope.$on('$locationChangeStart', function (event) {
    if (AuthService.isLoggedIn()) {
      console.log('user logged');
      if ($location.path() === '/login') {
        $location.url('/');
      }
    } else {
      console.log('user no logged');
      $location.path('/login');
      return;
    }
  });
}]);
