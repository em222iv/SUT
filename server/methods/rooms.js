Meteor.methods({
    insertRoom: function (name) {
        // Insert a room into the collection
        Rooms.insert({
            name: name
        });
    },
    updateRoom:function(id,name) {
        return Rooms.update({_id: id}, {$set: {name: name}});
    },
    removeRoom:function(id) {
        Rooms.remove(id);
    }
});
