'use strict';

HomeController.$inject = [];

function HomeController() {
  var vm = this;

  activate();

  /////////////////////////

  function activate() {
    vm.title = 'Home';
  }
}

module.exports = HomeController;
