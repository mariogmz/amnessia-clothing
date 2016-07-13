'use strict';

configRoute.$inject = ['$stateProvider'];

function configRoute($stateProvider) {
  $stateProvider
    .state('location', {
      url: '/ubicacion',
      template: require('./location.html'),
      controller: 'LocationController',
      controllerAs: 'locationVM'
    });
}

module.exports = configRoute;
