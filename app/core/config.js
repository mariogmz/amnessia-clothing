'use strict';

config.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider'];

function config($urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $urlMatcherFactoryProvider.strictMode(false);

  if (window.history && window.history.pushState) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

  // // Google Maps SDK Async Loader
  // uiGmapGoogleMapApiProvider.configure({
  //   key: 'AIzaSyCM3IAwVE95rvyPNLNZWzTMUAfRuq1k9ts',
  //   v: '3.20',
  //   libraries: 'weather,geometry,visualization'
  // });
};

module.exports = config;
