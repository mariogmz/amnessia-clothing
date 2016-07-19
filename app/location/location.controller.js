'use strict';

LocationController.$inject = [];

function LocationController() {
  var vm = this;

  activate();

  /////////////////////////

  function activate() {
    vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }
}

module.exports = LocationController;
