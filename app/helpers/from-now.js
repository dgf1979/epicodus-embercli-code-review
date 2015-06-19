import Ember from 'ember';

export default Ember.HTMLBars.makeBoundHelper(function(date) {
  // console.log(date);
  var tempDate = new Date(date);
  // return moment(tempDate).format('LLL');
  return moment(tempDate).startOf('minute').fromNow();
});
