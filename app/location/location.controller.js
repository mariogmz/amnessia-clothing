'use strict';

LocationController.$inject = [];

function LocationController() {
  var vm = this;

  activate();

  /////////////////////////

  function activate() {
    vm.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
    vm.options = {scrollwheel: false};
  }
}

module.exports = LocationController;
