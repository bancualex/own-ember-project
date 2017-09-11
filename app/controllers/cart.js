import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    cart: Ember.inject.service('cart-service'),
    cartItems: Ember.computed('cart.items', function(){
        return this.get('cart').items.length > 0 ? this.get('cart').items : JSON.parse(localStorage.cartItems);
        // return this.store.peekAll('added-item');
    }),
    actions: {
        removeFromCart(item) {
            item = JSON.parse(JSON.stringify(item));
            var cartItems = JSON.parse(localStorage.getItem('cartItems'));
            var index;
            cartItems.forEach((itm, i) => {
                if (JSON.stringify(itm) === JSON.stringify(item)) {
                    index = i;
                }
            });
            if (index > -1) {
                cartItems.splice(index, 1);
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            this.get('cart').replaceItems(cartItems);
        },
    }
});