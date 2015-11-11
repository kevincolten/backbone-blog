'use strict';

var Backbone = require('backbone');
var $ = require('jquery');

var PostModel = Backbone.Model.extend({});

var PostsCollection = Backbone.Collection.extend({
    url: 'http://localhost:8080/api/gists.json',

    model: PostModel
});

var posts = new PostsCollection();

posts.fetch({
    success: function() {
        var postsListView = new PostsListView({ collection: posts });
        postsListView.render();
        $('#content').html(postsListView.el);
    }
});

var PostsListView = Backbone.View.extend({
    el: '<ul></ul>',

    render: function() {
        var that = this;
        this.collection.each(function (post) {
           that.$el.append('<li>' + post.get('description') + '</li>');
        });
    }
});