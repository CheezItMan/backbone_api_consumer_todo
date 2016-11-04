// todos.js

TodoManager.Collections.Todos = Backbone.Collection.extend({
  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
  },
  model: TodoManager.Models.Todo,
  url: 'http://localhost:3000/todo'
});
