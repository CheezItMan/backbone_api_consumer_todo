// contact.js

TodoManager.Models.Todo = Backbone.Model.extend({

  initialize: function() {

  },
  url: function() {
    if (this.has ("id"))
      return 'http://localhost:3000/todo/' + this.get("id");
    else {
      return 'http://localhost:3000/todo/';
      }
  }

});
