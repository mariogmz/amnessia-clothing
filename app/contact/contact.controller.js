ContactController.$inject = [];

function ContactController() {
  var vm = this;
  activate();

  function activate() {
    vm.socialButtons = [
      {
        linkTo: '#',
        icon: '#',
        alt: ''
      },
      {
        linkTo: '#',
        icon: '#',
        alt: ''
      },
      {
        linkTo: '#',
        icon: '#',
        alt: ''
      },
      {
        linkTo: '#',
        icon: '#',
        alt: ''
      },
    ];
  }
}

module.exports = ContactController;
