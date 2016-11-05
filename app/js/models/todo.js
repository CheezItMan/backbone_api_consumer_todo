// contact.js

TodoManager.Models.Todo = Backbone.Model.extend({

  initialize: function() {

  },
  url: function() {
      return 'http://localhost:3000/todo/' + this.get("id");
  }
  
});
