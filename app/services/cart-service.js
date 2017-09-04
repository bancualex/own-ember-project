import Ember from 'ember';

export default Ember.Service.extend({
    items: null,

    init() {
        this._super(...arguments);
        this.set('items', localStorage.cartItems ? JSON.parse(localStorage.getItem('cartItems')) : []);
    },

    add(item) {
        this.get('items').pushObject(item);
    },

    remove(item) {
        this.get('items').removeObject(item);
    },

    empty() {
        this.get('items').setObjects([]);
    },

    replaceItems(items) {
        this.set('items', items);
    },

    getItemsLength(){
        return this.get('items').length;
    }
});
