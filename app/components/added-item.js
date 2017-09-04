import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        buttonClicked (item){
            console.log("Click", item);
            this.sendAction("actionName", item);
        }
    }
});
