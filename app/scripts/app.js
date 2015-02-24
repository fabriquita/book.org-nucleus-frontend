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
