Meteor.methods({
    insertRoom: function (name) {
        if(Rooms.findOne({name:name})) {
            return;
            //throw new Meteor.Error(1337, "Already Exists");
        }
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
