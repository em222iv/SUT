describe("Rooms", function() {

    beforeEach(function() {
        this.name = "chat Room 1"
        this.room = new Room(this.name);
        spyOn(Rooms, "insert");
        fixtures();
    });

    it("should exist a Rooms collection", function() {
        expect(Rooms);
    });

    it("should take name via constructor", function() {
        expect(this.room.name).toEqual(this.name);
    });

    it("initializes the database with rooms", function() {
        expect(Rooms.insert).toHaveBeenCalledWith({name: "chatRoom1"});
        expect(Rooms.insert).toHaveBeenCalledWith({name: "chatRoom2"});
    });

});

function fixtures() {
    if(Rooms.find().count() !== 0) return;

    var rooms = ["chatRoom1", "chatRoom2"];

    rooms.forEach(function(rooms) { new Room(rooms).save(); });
}

