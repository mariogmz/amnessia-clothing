'use strict';

require('lodash');
require('jquery');
require('slick-carousel');
require('./slick');
require('lightGallery');

var amnessia = require('angular').module('blocks', [
  'blocks.slick'
]);
