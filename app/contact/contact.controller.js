ContactController.$inject = [];

function ContactController() {
  var vm = this;
  activate();

  function activate() {
    vm.socialButtons = require('../data/social_media').data;
  }
}

module.exports = ContactController;
