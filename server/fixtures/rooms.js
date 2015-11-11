if (Rooms.find().count() === 0) {

    Rooms.insert({
        name: "Chat Room 1"
    });

    Rooms.insert({
        name: "Chat Room 2"
    });

    Rooms.insert({
        name: "Chat Room 3"
    });
};