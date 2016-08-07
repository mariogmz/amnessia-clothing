'use strict';

var amnessia = require('angular').module('amnessia', [
  'amnessia.core',
  'amnessia.header',
  'amnessia.layout',
  'amnessia.home',
  'amnessia.brand',
  'amnessia.location',
  'amnessia.contact'
]);

require('./core');
require('./header');
require('./layout');
require('./home');
require('./brand');
require('./location');
require('./contact');
