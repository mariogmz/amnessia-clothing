BrandController.$inject = [];

function BrandController() {
  var vm = this;
  activate();

  function activate() {
    vm.slickSettings = {
      prevArrow: '.brand__content--left-control',
      nextArrow: '.brand__content--right-control'
    };
  }

  function initializeSlides() {
    vm.slides = require('../data/slides');
  }
}

module.exports = BrandController;
