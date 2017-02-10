import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('scenery');
  },

  actions: {

    saveScenery(newScenery) {
      newScenery.save().then(() => this.transitionTo('scenes'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
