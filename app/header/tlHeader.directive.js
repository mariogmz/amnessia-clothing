'use strict';

TlHeader.$inject = [];

function TlHeader() {
  var directive = {
    bindToController: true,
    controller: HeaderController,
    template: require('./tlHeader.html'),
    restrict: 'A',
  }

  return directive;
}

HeaderController.$inject = [];

function HeaderController() {
  var vm = this;
  activate();

  function activate() {}

}

module.exports = TlHeader;
