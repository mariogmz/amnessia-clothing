'use strict';

Home.$inject = [];

function Home() {
  var directive = {
    bindToController: true,
    controller: require('./home.controller'),
    controllerAs: 'homeVM',
    template: require('./home.html'),
    restrict: 'E'
  }

  return directive;
}

module.exports = Home;
