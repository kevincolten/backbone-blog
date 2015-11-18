var Backbone = require('backbone');
var _ = require('underscore');

var PostsListView = Backbone.View.extend({
    el: '<div class="list-group"></div>',
    template: _.template(
        '<% this.collection.each(function (post) { %>\
            <a class="list-group-item" href="#posts/<%= post.get("id") %>"><%= post.get("title") %></a>\
        <% }) %>'
    ),

    render: function() {
        this.$el.html( this.template({ collection: this.collection }) );
    }
});

module.exports = PostsListView;