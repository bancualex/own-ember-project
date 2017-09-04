import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),

    actions: {
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
