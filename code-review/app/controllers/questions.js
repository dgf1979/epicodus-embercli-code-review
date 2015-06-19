import Ember from 'ember';

export default Ember.ArrayController.extend({
  askingQuestion: false,
  actions: {
    askQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question'),
        author: this.get('author'),
        description: this.get('description'),
        date: (new Date()).toLocaleTimeString("en-us") + " on " + (new Date()).toLocaleDateString("en-us")
      });
      newQuestion.save();
      this.set('askingQuestion', false);
    },
    showQuestionForm: function() {
      this.set('askingQuestion', true);
    }
  }
});
