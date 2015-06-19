import Ember from 'ember';

export default Ember.ObjectController.extend({
  answeringQuestion: false,
  actions: {
    answerQuestion: function() {
      var newAnswer = this.store.createRecord('answer', {
        answer: this.get('answer'),
        author: this.get('answerAuthor'),
        date: (new Date()).toLocaleTimeString("en-us") + " on " + (new Date()).toLocaleDateString("en-us")
      });
      newAnswer.save();

      var question = this.model;
      question.get('answers').pushObject(newAnswer);
      question.save();

      this.set('answeringQuestion', false);
    },
    showAnswerForm: function() {
      this.set('answeringQuestion', true);
    },
    deleteAnswer: function(answer) {
      if(confirm('Are you sure?')) {
        answer.destroyRecord();
        var question = this.model;
        question.save();
      };
    }
  }
});
