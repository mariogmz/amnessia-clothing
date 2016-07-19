'use strict';

config.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider'];

function config($urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
  $urlRouterProvider.otherwise('/');
  $urlMatcherFactoryProvider.strictMode(false);

  if (window.history && window.history.pushState) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

  // // Google Maps SDK Async Loader
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyAAAgCAkcqjF9KDHSgahv82Ozre5opLBSw',
    v: '3.20',
    libraries: 'weather,geometry,visualization'
  });
};

module.exports = config;
