Meteor.methods({
    insertRoom: function (name) {
        // Insert a room into the collection
        Rooms.insert({
            name: name
        });
    }
});
