TodoManager.Views.Todos = Backbone.View.extend({
  template: _.template($('#tpl-todos').html()),
  initialize: function() {
    //this.collection = new TodoManager.Collections.Todos();
    this.collection.on('change', this.listening, this);

  },

  renderOne: function(todo) {
    var itemView = new TodoManager.Views.Todo({model: todo});
    this.$('.todo-container').append(itemView.render().$el);
  },

  render: function() {

    var html = this.template();
    var that = this;

    this.$el.html('<h2 class="page-header text-center">List of Todo Items</h2> \
      <p class="text-center"> \
        <a href="#todos/new" class="btn btn-lg btn-outline">Add Todo Item</a> \
      </p>  \
      <ul class="media-list media-list row small-up-1 medium-up-2 large-up-4 todos-container "></ul>');

    myFetch = this.collection.fetch();

    myFetch.done( function() {
      console.log("Finished Fetching");
      _.each(that.collection.models, function(item) {
          todoView = new TodoManager.Views.Todo ({ model: item });
          that.$el.append(todoView.render().el);
      });
    });

    return this;
  },

  listening: function(e) {
    console.log(e);
    this.render();
  }
});
