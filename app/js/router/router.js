TodoManager.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'todos': 'showTodos',
    'todos/new': 'newTodo',
    'todos/edit/:id': 'editTodo'
  }
});
