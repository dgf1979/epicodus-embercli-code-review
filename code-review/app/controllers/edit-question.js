import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    update: function() {
      var question = this.model;
      question.save();
      this.transitionToRoute('question', this);
    },
    delete: function() {
      if(confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      };
    }
  }
});
