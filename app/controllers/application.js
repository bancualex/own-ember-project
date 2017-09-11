import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  cart: Ember.inject.service('cart-service'),
  cartLength: Ember.computed('cart.items', function() {
    return this.get('cart').getItemsLength();
  }),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});