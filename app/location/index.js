'use strict';

var amnessia = require('angular').module('amnessia.location', []);

amnessia.config( require('./routes') );
amnessia.controller('LocationController', require('./location.controller'));
