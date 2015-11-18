Meteor.methods({
    insertRoom: function (name) {
        // Insert a room into the collection
        Rooms.insert({
            name: name
        });
    },
    updateRoom:function(id,name) {
        console.log(id, name);
        Rooms.update({_id: id}, {$set: {name: name}});
    }
});
