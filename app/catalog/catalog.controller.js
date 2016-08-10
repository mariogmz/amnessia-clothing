CatalogController.$inject = [];

function CatalogController() {
  var vm = this;
  activate();

  function activate() {
    vm.gallery = require('../data/gallery.json');
  }
}

module.exports = CatalogController;
