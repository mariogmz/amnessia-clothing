CatalogController.$inject = ['$scope'];

function CatalogController($scope) {
  var vm = this;
  activate();

  function activate() {
    vm.gallery = require('../data/gallery.json');
    $(document).ready(initializeMasonry);
  }

  function initializeMasonry() {
    var imagesLoaded = require('imagesloaded');
    var gallery = document.querySelector('.catalog__gallery');
    new imagesLoaded(gallery, function(instance) {
      var Masonry = require('masonry-layout');
      var masonry = new Masonry(instance.elements[0], {
        itemSelector: '.catalog__gallery--item'
      });
    }).on('always', always);

    function always(instance) {
      var Masonry = require('masonry-layout');
      var masonry = new Masonry(instance.elements[0], {
        itemSelector: '.catalog__gallery--item'
      });
      $(instance.elements[0]).lightGallery({
        selector: '.catalog__gallery--item'
      });
    }

  }

}

module.exports = CatalogController;
