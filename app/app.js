'use strict';

var amnessia = require('angular').module('amnessia', [
  'amnessia.core',
  'amnessia.header',
  'amnessia.layout',
  'amnessia.home'
]);

require('./core');
require('./header');
require('./layout');
require('./home');
