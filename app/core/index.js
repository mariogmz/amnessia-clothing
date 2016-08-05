'use strict';

require('../blocks');
require('angular-ui-router');
require('angular-local-storage');
require('angular-simple-logger');
require('angular-google-maps');
require('angular-scroll');
require('angular-slick-carousel');

var amnessia = require('angular').module('amnessia.core', [
  'ui.router',
  'LocalStorageModule',
  'uiGmapgoogle-maps',
  'duScroll',
  'slickCarousel'
]).value('duScrollOffset', 162);

amnessia.config( require('./config') );
