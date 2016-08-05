'use strict';

Slick.$inject = [];

function Slick() {
  var directive = {
    scope: {
      settings: '='
    },
    restrict: 'E',
    link: require('./slick.link')
  }

  return directive;
}

module.exports = Slick;
