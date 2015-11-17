Rooms = new Mongo.Collection("rooms");

// A Tutorial class that takes a document in its constructor
Room = function (name) {
    this._name = name;
};
Room.prototype = {
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },
    save: function() {
        Meteor.call('insertRoom',this._name);
    },
    update: function(room) {
        Meteor.call('updateRoom',room);
    }
};

Schema = {};
Schema.Rooms = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        optional: false
    }
});

Rooms.attachSchema(Schema.Rooms);
