'use strict';

configRoute.$inject = ['$stateProvider'];

function configRoute($stateProvider) {
  $stateProvider
    .state('catalog', {
      url: '/catalogo',
      template: require('./catalog.html'),
      controller: 'CatalogController',
      controllerAs: 'catalogVM'
    });
}

module.exports = configRoute;
