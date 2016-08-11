CatalogController.$inject = ['$scope'];

function CatalogController($scope) {
  var vm = this;
  activate();

  function activate() {
    vm.gallery = require('../data/gallery.json');
    bindEvents();
  }

  function bindEvents() {
    $scope.$on('$stateChangeSuccess', function (event, toState) {
      if(toState.name == 'catalog'){
        waitForImagesToLoad();
      }
    });
  }

  function waitForImagesToLoad() {
    var imagesLoaded = require('imagesloaded');
    imagesLoaded('.catalog__gallery', initializeMasonry);
  }

  function initializeMasonry(instance) {
    var Masonry = require('masonry-layout');
    var masonry = new Masonry('.catalog__gallery', {
      itemSelector: '.catalog__gallery--item'
    });
  }

}

module.exports = CatalogController;
