CatalogController.$inject = [];

function CatalogController() {
  var vm = this;
  activate();

  function activate() {
    vm.gallery = require('../data/gallery.json');
    bindEvents();
  }

  function bindEvents() {
    jQuery(window).on('load', function($){
      initializeMasonry();
    });
    // vm.showInfo = showInfo;
    // vm.hideInfo = hideInfo;
    // vm.hideInfoImage = hideInfoImage;
  }

  function initializeMasonry() {
    var Masonry = require('masonry-layout');
    var masonry = new Masonry('.catalog__gallery', {
      itemSelector: '.catalog__gallery--item'
    });
  }

}

module.exports = CatalogController;
