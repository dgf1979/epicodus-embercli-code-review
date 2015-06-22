import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update: function() {
      var question = this.model;
      question.save();
      debugger;
      this.transitionToRoute('question', this.model);
    },
    delete: function() {
      if(confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
