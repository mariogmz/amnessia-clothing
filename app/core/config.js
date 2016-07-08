'use strict';

config.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider'];

function config($urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $urlMatcherFactoryProvider.stricMode(false);

  if (window.history && windo.history.pushState) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
};

module.exports = config;
