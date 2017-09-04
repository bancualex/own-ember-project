import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    actions: {
    removeFromCart(item) {
      var cartItems = this.get('session').get('data.cartItems');
      var index = cartItems.indexOf(item);
      console.log("Remove", index)
      if (index > -1) {
        cartItems.splice(index, 1);
      this.get('session').set('data.cartItems', cartItems);
}
    },
    addToCart(item) {
            var cartItems = this.get('session').get('data.cartItems');
            if(!cartItems)
                cartItems = [];
            // Verify if the same item is already in the cart
            // let sameItems = cartItems.filter((obj) => {return JSON.stringify(obj) === JSON.stringify(item)})
            // console.log("Same items", sameItems);
            cartItems.push(item);
            this.get('session').set('data.cartItems', cartItems);
        }
  }
});
