'use strict';

var amnessia = require('angular').module('amnessia', [
  'amnessia.core',
  'amnessia.header',
  'amnessia.home',
  'amnessia.location'
]);

require('./core');
require('./header');
require('./home');
require('./location');
