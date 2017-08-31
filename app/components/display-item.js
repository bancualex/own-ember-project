import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        buttonClicked (item){
            console.log("Click", item.get('title'));
            this.sendAction("actionName", item);
        }
    }
});
