describe("Rooms", function() {

    beforeEach(function() {
        this.name = "chat Room 1";
        this.room = new Room(this.name);
        spyOn(Rooms, "insert");
        resetDatabase();
        loadDefaultFixtures();
    });

    it("should exist a Rooms collection", function() {
        expect(Rooms);
    });

    it("should take name via constructor", function() {
        expect(this.room.name).toEqual(this.name);
    });

    it("initializes the database with rooms", function() {
        expect(Rooms.insert).toHaveBeenCalledWith({name: "testRoom1"});
        expect(Rooms.insert).toHaveBeenCalledWith({name: "testRoom2"});
    });

    it("should call server update-method", function() {
        expect(Rooms.update).toHaveBeenCalledWith({name: this.name});
    });

});
