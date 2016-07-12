'use strict';

var amnessia = require('angular').module('amnessia.home', []);

amnessia.config( require('./routes') );
amnessia.controller('HomeController', require('./home.controller'));
