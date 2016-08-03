'use strict';

LocationController.$inject = [];

function LocationController() {
  var vm = this;

  activate();

  /////////////////////////

  function activate() {
    setMapSettings();
    setLocationData();
  }

  function setMapSettings() {
    vm.map = {center: {latitude: 21.6777415, longitude: -102.5852379 }, zoom: 15 };
    vm.options = {scrollwheel: false};
    vm.marker = {idKey: 'amnessia', coords: {latitude: 21.67914, longitude: -102.58425}, options: {
      label: 'Amnessia Clothing',
      title: 'Amnessia Clothing'
    }};
  }

  function setLocationData() {
    vm.locationData = require('../data/location.json');
  }
}

module.exports = LocationController;
