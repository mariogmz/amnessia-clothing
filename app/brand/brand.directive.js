'use strict';

Brand.$inject = [];

function Brand() {
  var directive = {
    bindToController: true,
    controller: require('./brand.controller'),
    controllerAs: 'brandVM',
    template: require('./brand.html'),
    restrict: 'E'
  }

  return directive;
}

module.exports = Brand;
