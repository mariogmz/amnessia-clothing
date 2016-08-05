SlickLink.$inject = ['scope', 'element', 'attr'];

function SlickLink(scope, element, attr) {
  $(element).slick();
}

module.exports = SlickLink;
