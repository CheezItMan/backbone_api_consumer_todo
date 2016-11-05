TodoManager.Views.Todos = Backbone.View.extend({
  template: _.template($('#tpl-todos').html()),
  initialize: function() {
    //this.collection = new TodoManager.Collections.Todos();
    //this.collection.on('change reset add remove', this.listening, this);
  },

  renderOne: function(todo) {
    var itemView = new TodoManager.Views.Todo({model: todo});
    this.$('.todo-container').append(itemView.render().$el);
  },

  render: function() {

    var html = this.template();
    var that = this;

    this.$el.html(html);

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
