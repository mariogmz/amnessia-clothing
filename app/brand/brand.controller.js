BrandController.$inject = [];

function BrandController() {
  var vm = this;
  activate();

  function activate() {
    vm.slickSettings = {
      infinite: true,
      prevArrow: '.brand-slick-left-control',
      nextArrow: '.brand-slick-right-control'
    };
    initializeSlides();
  }

  function initializeSlides() {
    vm.slides = require('../data/slides');
  }
}

module.exports = BrandController;
