import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    cart: Ember.inject.service('cart-service'),
    actions: {
        addToCart(item) {
            var cartItems = JSON.parse(localStorage.getItem('cartItems'));
            if (!cartItems)
                cartItems = [];
            cartItems.push(item);
            console.log("addToCart", item)
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            this.get('cart').replaceItems(cartItems);
            //Add to store
            // console.log("cartItems1", this.store.peekAll('added-item'));
            // var storeItem = {
            //     title: item.get('title'),
            //     description: item.get('description'),
            //     price: item.get('title')
            // };

            // this.get('store').push({
            //     data: [{
            //         type: 'added-item',
            //         attributes: storeItem,
            //         id: '4',
            //     }]
            // });
            // console.log("cartItems2", this.store.peekAll('added-item'));
        },
    }
});