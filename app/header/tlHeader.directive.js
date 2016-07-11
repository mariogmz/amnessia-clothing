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
      {label: 'inicio', link: '/'},
      {label: 'catálogo', link: '/catalogo'},
      {label: 'marca', link: '/marca'},
      {label: 'ubicación', link: '/ubicacion'},
      {label: 'contacto', link: '/contacto'},
    ];
  }

}

module.exports = TlHeader;
