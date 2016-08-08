'use strict';

require('../blocks');
require('angular-ui-router');
require('angular-local-storage');
require('angular-simple-logger');
require('angular-google-maps');
require('angular-scroll');

var amnessia = require('angular').module('amnessia.core', [
  'ui.router',
  'LocalStorageModule',
  'uiGmapgoogle-maps',
  'duScroll',
  'blocks'
]).value('duScrollOffset', 72);

amnessia.config( require('./config') );
