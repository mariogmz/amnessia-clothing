'use strict';

LocationController.$inject = [];

function LocationController() {
  var vm = this;

  activate();

  /////////////////////////

  function activate() {
    vm.map = {center: {latitude: 21.67914, longitude: -102.58425 }, zoom: 28 };
    vm.options = {scrollwheel: false};
  }
}

module.exports = LocationController;
