SlickLink.$inject = ['scope', 'element', 'attr'];

function SlickLink(scope, element, attr) {
  $(element).slick(scope.settings);
}

module.exports = SlickLink;
