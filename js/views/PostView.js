var Backbone = require('backbone');
var _ = require('underscore');

var PostView = Backbone.View.extend({
    el:'<div></div>',

    template: _.template(
        '<h1><%= this.model.get("title") %></h1>\
         <p><%= this.model.get("content") %></p>'
    ),

    render: function() {
        this.$el.html( this.template({ model: this.model }) );
    }
});

module.exports = PostView;