Template.home.helpers({
    rooms: function(){
        return  Rooms.find({});
    }
});

Template.home.events({
    'click #addRoomButton': function () {
        event.preventDefault();
        var name = $('#addRoomInput').val();
        new Room(name).save();
    },
    'blur .updateRoomName': function (e) {
        if(e == undefined){
            return;
        }
        event.preventDefault();
        console.log(e)
        new Room(e.target.value).update(e.target.id)
    },
    'click .removeRoom': function (e) {
        console.log(e);
        //Meteor.call("removeRoom", e);
    }
});
