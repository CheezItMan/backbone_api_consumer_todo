// contact.js

TodoManager.Models.Todo = Backbone.Model.extend({
  defaults: {
     id: null,
     name: "Unnamed Todo",
     description: "This is an unamed Todo task",
     completed: false
  },
  initialize: function() {

  }
});
