// todos.js

TodoManager.Collections.Todos = Backbone.Collection.extend({
  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
    this.comparator = 'id';
  },
  model: TodoManager.Models.Todo,
  url: 'http://localhost:3000/todo'
});
