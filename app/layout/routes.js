'use strict';

configRoute.$inject = ['$stateProvider'];

function configRoute($stateProvider) {
  $stateProvider
    .state('layout', {
      url: '/',
      template: require('./layout.html')
    });
}

module.exports = configRoute;
