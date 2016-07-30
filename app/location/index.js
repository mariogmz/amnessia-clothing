'use strict';

var amnessia = require('angular').module('amnessia.location', ['uiGmapgoogle-maps']);

amnessia.config( require('./routes') );
amnessia.controller('LocationController', require('./location.controller'));
