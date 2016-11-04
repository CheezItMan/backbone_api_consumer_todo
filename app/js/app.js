window.TodoManager = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var todos = new TodoManager.Collections.Todos(data.todos),
        router = new TodoManager.Router();
    

    router.on('route:home', function() {
      router.navigate('todos', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showTodos', function() {
      var todosView = new TodoManager.Views.Todos({
        collection: todos
      });

      $('.main-container').html(todosView.render().$el);
    });

    router.on('route:newTodo', function() {
      var newTodoForm = new TodoManager.Views.TodoForm({
        model: new TodoManager.Models.Todo()
      });

      newTodoForm.on('form:submitted', function(attrs) {
        attrs.id = todos.isEmpty() ? 1 : (_.max(todos.pluck('id')) + 1);
        todos.add(attrs);
        router.navigate('todos', true);
      });

      $('.main-container').html(newTodoForm.render().$el);
    });

    router.on('route:editTodo', function(id) {

      var todo = todos.get(id),
      editTodoForm;

      todos.each(function(model) {
        console.log("Model #:" + model.get("id"));
      });

      console.log("Collection size = " + todos.size());

      console.log("Got todo: " + todo);
      console.log("ID: " + id);

      if (todo) {
        editTodoForm = new TodoManager.Views.TodoForm({
            model: todo
        });

        editTodoForm.on('form:submitted', function(attrs) {
          todo.set(attrs);
          router.navigate('todos', true);
        });

        $('.main-container').html(editTodoForm.render().$el);
      } else {
        router.navigate('todos', true);
      }
    });
    Backbone.history.start();
  }
};

$(function() {
  TodoManager.start({
    todos: [    ]
  });
});