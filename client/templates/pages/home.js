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
        event.preventDefault();
        console.log(e.target.id)

    }
});
