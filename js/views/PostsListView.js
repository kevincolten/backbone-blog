var Backbone = require('backbone');
var _ = require('underscore');

var PostsListView = Backbone.View.extend({
    el: '<ul></ul>',
    template: _.template(
        '<% this.collection.each(function (post) { %>\
            <li><a href="#posts/<%= post.get("id") %>"><%= post.get("title") %></a></li>\
        <% }) %>'
    ),

    render: function() {
        this.$el.html( this.template({ collection: this.collection }) );
    }
});

module.exports = PostsListView;