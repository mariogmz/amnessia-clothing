'use strict';

Slick.$inject = ['$timeout'];

function Slick($timeout) {
  var directive = {
    scope: {
      settings: '='
    },
    restrict: 'E',
    template: require('./slick.html'),
    link: link
  }

  function link(scope, element, attrs) {
    $timeout(initializeSlick, 0);
    function initializeSlick() {
      $(element).slick(scope.settings);
    }
  }

  return directive;
}

module.exports = Slick;
