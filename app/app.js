'use strict';

var amnessia = require('angular').module('amnessia', [
  'amnessia.core',
  'amnessia.header',
  'amnessia.home'
]);

require('./core');
require('./header');
require('./home');
