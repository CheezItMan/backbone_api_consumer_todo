TodoManager.Views.Todos = Backbone.View.extend({
  template: _.template($('#tpl-todos').html()),
  initialize: function() {
    //this.collection = new TodoManager.Collections.Todos();
  },

  renderOne: function(todo) {
    var itemView = new TodoManager.Views.Todo({model: todo});
    this.$('.todo-container').append(itemView.render().$el);
  },

  render: function() {
    console.log("Rendering Collection");

    var html = this.template();
    var that = this;

    this.$el.html(html);

    myFetch = this.collection.fetch();

    myFetch.done( function() {
      console.log("Finished Fetching");
      _.each(that.collection.models, function(item) {
          todoView = new TodoManager.Views.Todo ({ model: item });
          that.$el.append(todoView.render().el);
          console.log("Item ID = " + item.get("id"));
      });
      console.log("Collection size = " + that.collection.size());

    });

    console.log("Finished Rendering");
    return this;
  }
});
