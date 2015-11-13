var Backbone = require('backbone');
var _ = require('underscore');
var PostModel = require('../models/PostModel.js');

var PostsCollection = Backbone.Collection.extend({
    url: 'http://localhost:8080/api/gists.json',

    model: PostModel,

    parse: function(response) {
        var posts = _.filter(response, function (gist) {
            return gist['description'].indexOf('#post') > -1;
        });

        return posts;
    }
});

module.exports = PostsCollection;