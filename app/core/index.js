'use strict';

require('lodash');
require('angular-ui-router');
require('angular-local-storage');
require('angular-simple-logger');
require('angular-google-maps');
require('angular-scroll');
require('../blocks');

var amnessia = require('angular').module('amnessia.core', [
  'ui.router',
  'LocalStorageModule',
  'uiGmapgoogle-maps',
  'duScroll'
]);

amnessia.config( require('./config') );
