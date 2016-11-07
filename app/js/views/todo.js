TodoManager.Views.Todo = Backbone.View.extend({
  tagName: 'li',
  className: 'media no-bullet column',
  template: _.template($('#tpl-todo').html()),
  initialize: function() {
    if (this.model) {
      console.log("Binding model to view for events")
      this.listenTo(this.model, 'remove', this.remove);
      this.model.bind('change', this.render);
      this.listenTo(this.model, 'add', this.remove);
    }
    _.bindAll(this, "render");

  },
  render: function() {
    if (this.model) {
      var html = this.template(this.model.toJSON());
      this.$el.append(html);
    }
    return this;
  },
  events: {
  'click .delete-contract': 'onClickDelete',
  'change': 'onChangeRender'
},

/* ... */

onClickDelete: function(e) {
  e.preventDefault();
  this.model.collection.remove(this.model);

  this.model.destroy();

},
onChangeRender: function(e) {
  //this.$el.html
  //render();
  console.log("Change triggered.");
}
});
