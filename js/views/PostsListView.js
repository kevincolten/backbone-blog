var Backbone = require('backbone');

var PostsListView = Backbone.View.extend({
  el: '<ul></ul>',

  render: function(){
    var that = this;
    this.collection.each(function(post) {
      that.$el.append('<li>'+post.get('description')+'</li>');
    });
  }
});

module.exports=PostsListView;
