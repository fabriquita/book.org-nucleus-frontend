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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/auth/login.html',
        controller: 'AuthCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users/list.html',
        controller: 'UserListCtrl'
      })
      .when('/userss', {
        templateUrl: 'views/users/list.html',
        controller: 'UserListCtrl'
      })
      .when('/users/create', {
        templateUrl: 'views/users/create.html',
        controller: 'UserCreateCtrl'
      })
      .when('/groups', {
        templateUrl: 'views/groups/list.html',
        controller: 'GroupListCtrl'
      })
      .when('/groups/create', {
        templateUrl: 'views/groups/create.html',
        controller: 'GroupCreateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
/**
 * It filters routes, and checks whether the user is logged in or not
 */
app.run(['$rootScope', '$location', 'AuthService', function ($rootScope, $location, AuthService) {
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
