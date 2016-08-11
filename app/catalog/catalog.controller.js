CatalogController.$inject = [];

function CatalogController() {
  var vm = this;
  activate();

  function activate() {
    vm.gallery = require('../data/gallery.json');
    jQuery(window).on('load', function($){
      initializeMasonry();
    });
  }

  function initializeMasonry() {
    var Masonry = require('masonry-layout');
    var masonry = new Masonry('.catalog__gallery', {
      itemSelector: '.catalog__gallery--item'
    });
  }
}

module.exports = CatalogController;
