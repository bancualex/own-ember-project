import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        butItem(item) {
            console.log("Item", item);
        }
    }
});
