import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    cart: Ember.inject.service('cart-service'),
    actions: {
        addToCart(item) {
            var cartItems = JSON.parse(localStorage.getItem('cartItems'));
            if(!cartItems)
                cartItems = [];
            cartItems.push(item);
            localStorage.setItem('cartItems', JSON.stringify(cartItems)) 
            this.get('cart').replaceItems(cartItems);
        },
    }
});
