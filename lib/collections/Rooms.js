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
};
