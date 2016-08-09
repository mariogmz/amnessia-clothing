'use strict';

AcHeader.$inject = [];

function AcHeader() {
  var directive = {
    bindToController: true,
    controller: HeaderController,
    controllerAs: 'headerVM',
    template: require('./acHeader.html'),
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
      {label: 'inicio', link: '/#home'},
      {label: 'catálogo', link: '/catalogo'},
      {label: 'marca', link: '/#brand'},
      {label: 'ubicación', link: '/#location'},
      {label: 'contacto', link: '/#contact'},
    ];
  }

}

module.exports = AcHeader;
