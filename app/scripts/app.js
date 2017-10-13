'use strict';

/**
 * @ngdoc overview
 * @name routingQuizApp
 * @description
 * # routingQuizApp
 *
 * Main module of the application.
 */
angular
  .module('routingQuizApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      'url': '/',
      'templateUrl': 'views/instructions.html' //,
      //i guess no controller needed as no external data is needed
      //'controller': ''
    });

    $stateProvider.state('redBrick', {
      'url': '/bricks/red',
      'templateUrl': 'views/bricks.html',
      'controller': 'RedBricksCtrl as brick'
    });

    $stateProvider.state('greenBrick', {
      'url': '/bricks/green',
      'templateUrl': 'views/bricks.html',
      'controller': 'GreenBricksCtrl as brick'
    });

    $stateProvider.state('blueBrick', {
      'url': '/bricks/blue',
      'templateUrl': 'views/bricks.html',
      'controller': 'BlueBricksCtrl as brick'
    });

    $stateProvider.state('cart', {
      'url': '/cart',
      'templateUrl': 'views/cart.html',
      'controller': 'CartCtrl as cart'
    });

    $stateProvider.state('redBrick.cart', {
      'url': '/cart',
      'templateUrl': 'views/cart.html',
      'controller': 'CartCtrl as cart'
    });

  }]);
