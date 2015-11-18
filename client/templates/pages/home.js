Template.home.helpers({
    rooms: function(){
        return  Rooms.find({});
    }
});

Template.home.events({
    'click #addRoomButton': function () {

        event.preventDefault();
        var name = $('#addRoomInput').val();
        if(name == ""){
           return;
        }
        Meteor.call('insertRoom',name);
    },
    'blur .updateRoomName': function (e) {
        if(e == undefined){
            return;
        }
        event.preventDefault();
        new Room(e.target.value).update(e.target.id)
    },
    'click .removeRoom': function () {
        new Room().delete(this._id)
    }
});
