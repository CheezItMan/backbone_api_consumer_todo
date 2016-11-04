TodoManager.Views.Todo = Backbone.View.extend({
  tagName: 'li',
  className: 'media no-bullet column',
  template: _.template($('#tpl-todo').html()),
  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
  },
  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },
  events: {
  'click .delete-contract': 'onClickDelete'
},

/* ... */

onClickDelete: function(e) {
  e.preventDefault();
  console.log('Delete');
  this.model.collection.remove(this.model);
}
});
