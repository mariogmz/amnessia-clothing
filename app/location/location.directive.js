'use strict';

Location.$inject = [];

function Location() {
  var directive = {
    bindToController: true,
    controller: require('./location.controller'),
    controllerAs: 'locationVM',
    template: require('./location.html'),
    restrict: 'E'
  }

  return directive;
}

module.exports = Location;
