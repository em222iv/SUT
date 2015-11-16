Session.setDefault('counter', 0);

Template.home.helpers({
    rooms: function(){
        return Rooms.find({});
    },
    counter: function(){
        return Session.get('counter');
    }
});

Template.home.events({
    'click #addRoomButton': function () {
        Session.set('counter', Session.get('counter') + 1);
    }
});
