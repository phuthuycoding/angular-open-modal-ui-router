'use strict';

/**
 * @ngdoc overview
 * @name queenBApp
 * @description
 * # queenBApp
 *
 * Main module of the application.
 */
angular
  .module('queenBApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.modal'
  ]).config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }).run(function($uibModal){
    console.log($uibModal);
  });
