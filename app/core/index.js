'use strict';

require('angular-ui-router');
require('angular-local-storage');
require('../blocks');

var amnessia = require('angular').module('amnessia.core', [
  'ui.router',
  'LocalStorageModule'
]);

amnessia.config( require('./config') );
