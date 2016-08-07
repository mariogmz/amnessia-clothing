'use strict';

Contact.$inject = [];

function Contact() {
  var directive = {
    bindToController: true,
    controller: require('./contact.controller'),
    controllerAs: 'contactVM',
    template: require('./contact.html'),
    restrict: 'E'
  }

  return directive;
}

module.exports = Contact;
