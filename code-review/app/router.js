import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'question/:question_id'});
  this.resource('edit-question', {path: 'edit-question/:question_id'});
});

export default Router;
