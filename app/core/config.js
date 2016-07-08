'use strict';

config.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider'];

function config($urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $urlMatcherFactoryProvider.strictMode(false);

  if (window.history && window.history.pushState) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
};

module.exports = config;
