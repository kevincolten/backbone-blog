'use strict';

var $ = require('jquery');
var AppRouter = require('./AppRouter.js');
var Backbone = require('backbone');

$(function() {
    new AppRouter();
    Backbone.history.start();
});
