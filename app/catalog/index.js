'use strict';

var amnessia = require('angular').module('amnessia.catalog', []);
amnessia.config(require('./routes'));
amnessia.controller('CatalogController', require('./catalog.controller'));
