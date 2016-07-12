'use strict';

configRoute.$inject = ['$stateProvider'];

function configRoute($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'homeVM'
    });
}

module.exports = configRoute;
