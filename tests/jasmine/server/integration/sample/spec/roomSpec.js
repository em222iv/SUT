describe("Rooms", function() {

    beforeEach(function() {
        this.name = "chat Room 1"
        this.room = new Room(this.name);
        spyOn(Rooms, "insert");
        this.room.save();
    });

    it("should exist a Rooms collection", function() {
        expect(Rooms);
    });

    it("should take name via constructor", function() {
        expect(this.room.name).toEqual(this.name);
    });

    it("should insert new Room to db", function() {
        expect(Rooms.insert).toHaveBeenCalled();
    });

});

describe("roomFixtures", function() {

    beforeEach(function() {
        spyOn(Rooms, "insert");
        spyOn(Rooms, "find").and.returnValue({count: function() { return 0; }})

        fixtures();
    });

    it("initializes the database with rooms", function() {
        expect(Rooms.insert).toHaveBeenCalledWith({name: "chatRoom1"});
        expect(Rooms.insert).toHaveBeenCalledWith({name: "chatRoom2"});
    });

});
