Meteor.methods({
    insertRoom: function (name) {
        // Insert a room into the collection
        Rooms.insert({
            name: name
        });
    },
    updateRoom:function(room) {
        console.log(room);
        Rooms.update({_id: room.id}, {$set: {name: room.name}});
    }
});
