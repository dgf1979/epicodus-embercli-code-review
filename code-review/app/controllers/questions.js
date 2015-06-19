import Ember from 'ember';

export default Ember.ArrayController.extend({
  askingQuestion: false,
  actions: {
    askQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question'),
        author: this.get('author'),
        description: this.get('description'),
        date: (new Date())
      });
      newQuestion.save();

      this.setProperties({
        question: '',
        author: '',
        description: ''
      });

      this.set('askingQuestion', false);
    },
    showQuestionForm: function() {
      this.set('askingQuestion', true);
    }
  }
});
