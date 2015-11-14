var Backbone = require('backbone');
var _ = require('underscore');
var marked = require('marked');

var PostModel = Backbone.Model.extend({
    urlRoot: 'http://localhost:8080/api/',
    idAttribute: 'id',

    parse: function(response) {

        var obj = {
            id: response['id'],
            title: response['description'].replace('#post ', ''),
            created_at: response['created_at']
        }

        if ( _.has(response['files']['post.md'], 'content') ) {
            obj['content'] = marked(response['files']['post.md']['content']);
        }

        return obj;
    }
});

module.exports = PostModel;