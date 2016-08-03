ContactController.$inject = [];

function ContactController() {
  var vm = this;
  activate();

  function activate() {
    vm.socialButtons = [
      {
        linkTo: '#',
        icon: '/images/facebook.png',
        alt: 'Página oficial de Amnessia en Facebook'
      },
      {
        linkTo: '#',
        icon: '/images/instagram.png',
        alt: 'Cuenta oficial de Amnessia en Instagram'
      },
      {
        linkTo: '#',
        icon: '/images/pinterest.png',
        alt: 'Cuenta oficial de Amnessia en Pinteres'
      },
      {
        linkTo: '#',
        icon: '/images/twitter.png',
        alt: 'Cuenta oficial de Amnessia en Twitter'
      },
    ];
  }
}

module.exports = ContactController;
