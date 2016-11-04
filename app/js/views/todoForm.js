TodoManager.Views.TodoForm = Backbone.View.extend({
template: _.template($('#tpl-new-todo').html()),
events: {
  'submit .contract-form': 'onFormSubmit'
},

/* ... */

onFormSubmit: function(e) {
  e.preventDefault();

  this.trigger('form:submitted', {
    name: this.$('.todo-name-input').val(),
    description: this.$('.todo-tel-input').val(),
    completed: this.$('.todo-email-input').val()
  });
},

render: function() {
      var html = this.template(_.extend(this.model.toJSON(), {
        isNew: this.model.isNew()
      }));  this.$el.append(html);
  return this;
}
});
