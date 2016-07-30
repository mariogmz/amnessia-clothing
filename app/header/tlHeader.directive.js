'use strict';

TlHeader.$inject = [];

function TlHeader() {
  var directive = {
    bindToController: true,
    controller: HeaderController,
    controllerAs: 'headerVM',
    template: require('./tlHeader.html'),
    restrict: 'A',
  }

  return directive;
}

HeaderController.$inject = [];

function HeaderController() {
  var vm = this;
  activate();

  function activate() {
    vm.navItems = [
      {label: 'inicio', state: 'home'},
      {label: 'catálogo', state: 'gallery'},
      {label: 'marca', state: 'brand'},
      {label: 'ubicación', state: 'location'},
      {label: 'contacto', state: 'contact'},
    ];
  }

}

module.exports = TlHeader;
