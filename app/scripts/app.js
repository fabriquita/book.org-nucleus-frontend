'use strict';

/**
 * @ngdoc overview
 * @name nucleusApp
 * @description
 * # nucleusApp
 *
 * Main module of the application.
 */
angular
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
      .when('/users', {
        templateUrl: 'views/users/list.html',
        controller: 'UserListCtrl'
      })
      .when('/users/create', {
        templateUrl: 'views/users/create.html',
        controller: 'UserCreateCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
