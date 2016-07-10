'use strict';

HomeController.$inject = [];

function HomeController() {
  var vm = this;

  activate();

  /////////////////////////

  function activate() {
    vm.title = 'Hello world';
  }
}

module.exports = HomeController;
