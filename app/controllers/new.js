import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
    addNew: function () {
      var uj = this.store.createRecord('recipe', {
        name: this.ujReceptNev
      });
      var _this = this;
      uj.save().then(function () {
	_this.transitionTo('index');
      });
    }
  }
});
