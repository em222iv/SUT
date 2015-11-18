Rooms = new Mongo.Collection("rooms");

// A Tutorial class that takes a document in its constructor
Room = function (name) {
    this._name = name;
    this._id = this._id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 18);
};
Room.prototype = {
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },
    get id() {
        return this._id;
    },
    set id(value) {
        this._id = this._id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 18);
    },
    save: function() {
        Meteor.call('insertRoom',this._name);
    },
    update: function(id) {
        console.log(id, this._name);
        Meteor.call('updateRoom',id, this._name);
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
