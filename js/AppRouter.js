var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({

  routes: {
    'posts': 'showPosts'
  },

  showPosts: function() {
    console.log("Showing Posts");
  }

});

module.exports = AppRouter;
