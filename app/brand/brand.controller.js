BrandController.$inject = [];

function BrandController() {
  var vm = this;
  activate();

  function activate() {
    vm.slickConfig = {
      enabled: true,
      autoplay: true,
      draggable: false,
      autoplaySpeed: 3000,
      method: {},
      event: {
          beforeChange: function (event, slick, currentSlide, nextSlide) {},
          afterChange: function (event, slick, currentSlide, nextSlide) {}
      }
    };
  }
}

module.exports = BrandController;
