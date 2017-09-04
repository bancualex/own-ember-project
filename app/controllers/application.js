import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  cart: Ember.inject.service('cart-service'),
  cartLength: Ember.computed('cart.items', function() {
    console.log("Compute cart count", "items", this.get('cart').items);
    return this.get('cart').getItemsLength();
  }),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});