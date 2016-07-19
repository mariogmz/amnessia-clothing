'use strict';

require('angular-ui-router');
require('angular-local-storage');
require('angular-google-maps');
require('../blocks');

var amnessia = require('angular').module('amnessia.core', [
  'ui.router',
  'LocalStorageModule',
  'uiGmapgoogle-maps'
]);

amnessia.config( require('./config') );
